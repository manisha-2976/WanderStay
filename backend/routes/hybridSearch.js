const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const Listing = require("../models/listings.js");
const Booking = require("../models/bookings.js");
// const getFiltersFromAI = require("../utils/openai.js");

const normalizeStart = (date) => {
  const d = new Date(date);
  d.setHours(12, 0, 0, 0);
  return d;
};

const normalizeEnd = (date) => {
  const d = new Date(date);
  d.setHours(11, 0, 0, 0);
  return d;
};

const embeddingCache = new Map();

const getEmbedding = async (query) => {
  if (!query) return null;
  if (embeddingCache.has(query)) {
    return embeddingCache.get(query);
  }
  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  });
  const emb = res.data[0].embedding;
  embeddingCache.set(query, emb);
  if (embeddingCache.size > 500) embeddingCache.clear();

  return emb;
};

// cosine similarity
const cosineSimilarity = (a, b) => {
  let dot = 0, normA = 0, normB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
};


router.post("/ai-search", async (req, res) => {
  try {
    const { query, startDate, endDate, guests } = req.body;

    // GET EMBEDDING + FETCH LISTINGS 
    const [queryEmbedding, listings] = await Promise.all([
      getEmbedding(query),

      Listing.find({ embedding: { $exists: true } })
        .select("title price images guest city embedding")
        .limit(120)
    ]);

    if (!listings.length) {
      return res.json({ listings: [] });
    }

    // SEMANTIC RANKING
    let scored = listings.map(l => {
      let score = 0;
      if (queryEmbedding && l.embedding) {
        score = cosineSimilarity(queryEmbedding, l.embedding);
      }
      return { listing: l, score };
    });

    scored.sort((a, b) => b.score - a.score);

    // APPLY FILTERS
    let filtered = scored.map(i => i.listing);

    // guests
    if (guests) {
      filtered = filtered.filter(l => l.guest >= guests);
    }

    // date filter
    if (startDate && endDate) {
      const start = normalizeStart(startDate);
      const end = normalizeEnd(endDate);

      const bookings = await Booking.find({
        checkIn: { $lt: end },
        checkOut: { $gt: start }
      }).select("listing");

      const bookedIds = new Set(
        bookings.map(b => b.listing.toString())
      );

      filtered = filtered.filter(
        l => !bookedIds.has(l._id.toString())
      );
    }

    // RESPONSE
    const results = filtered.slice(0, 30).map(l => ({
      _id: l._id,
      title: l.title,
      price: l.price,
      image: l.images?.[0]?.url || null,
      guest: l.guest,
      city: l.city
    }));

    res.json({ listings: results });

  } catch (err) {
    console.log("Search error:", err);
    res.status(500).json({ error: "Search failed" });
  }
});

module.exports = router;