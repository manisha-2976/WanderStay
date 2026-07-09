const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const Listing = require("../models/listings.js");
const Booking = require("../models/bookings.js");
const { getOptimizedImageUrl } = require("../utils/imageUrl");
// const getFiltersFromAI = require("../utils/openai.js");

const EMBEDDING_DIMENSIONS = 512;
const RESULT_LIMIT = 32;

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
  const normalizedQuery = query?.trim();
  if (!normalizedQuery) return null;

  const cacheKey = normalizedQuery.toLowerCase();
  if (embeddingCache.has(cacheKey)) {
    return embeddingCache.get(cacheKey);
  }

  try {
    const res = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: normalizedQuery,
      dimensions: EMBEDDING_DIMENSIONS,
    });

    const emb = res.data[0].embedding;
    embeddingCache.set(cacheKey, emb);
    if (embeddingCache.size > 500) embeddingCache.clear();

    return emb;
  } catch (err) {
    console.log("Embedding error:", err.message);
    return null;
  }
};

// cosine similarity
const cosineSimilarity = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length === 0 || b.length === 0) {
    return 0;
  }

  const length = Math.min(a.length, b.length);
  let dot = 0, normA = 0, normB = 0;

  for (let i = 0; i < length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  if (!normA || !normB) return 0;

  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
};

const getListingSearchText = (listing) => (
  [
    listing.title,
    listing.description,
    listing.city,
    listing.country,
    listing.propertyType,
    listing.roomType,
    ...(listing.amenities || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
);

const lexicalScore = (listing, query) => {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return 0;

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const text = getListingSearchText(listing);
  let score = text.includes(normalizedQuery) ? 3 : 0;

  for (const term of terms) {
    if (text.includes(term)) score += 1;
  }

  if (listing.city?.toLowerCase().includes(normalizedQuery)) score += 4;
  if (listing.title?.toLowerCase().includes(normalizedQuery)) score += 2;

  return score;
};


router.post("/ai-search", async (req, res) => {
  try {
    const { query = "", startDate, endDate, guests } = req.body;
    const trimmedQuery = query.trim();
    const guestCount = Number(guests) || 0;

    // GET EMBEDDING + FETCH LISTINGS 
    const [queryEmbedding, listings] = await Promise.all([
      getEmbedding(query),

      Listing.find({})
        .select("title description price images guest city country propertyType roomType amenities embedding")
        .limit(160)
        .lean()
    ]);

    if (!listings.length) {
      return res.json({ listings: [] });
    }

    // SEMANTIC RANKING
    let scored = listings.map(l => {
      const textScore = lexicalScore(l, trimmedQuery);
      let semanticScore = 0;

      if (queryEmbedding && l.embedding) {
        semanticScore = cosineSimilarity(queryEmbedding, l.embedding);
      }

      return { listing: l, score: semanticScore + textScore, textScore };
    });

    scored.sort((a, b) => b.score - a.score);

    // APPLY FILTERS
    let filtered = scored;

    if (trimmedQuery && !queryEmbedding) {
      filtered = filtered.filter(i => i.textScore > 0);
    }

    // guests
    if (guestCount) {
      filtered = filtered.filter(i => i.listing.guest >= guestCount);
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
        i => !bookedIds.has(i.listing._id.toString())
      );
    }

    // RESPONSE
    const results = filtered.slice(0, RESULT_LIMIT).map(({ listing: l }) => ({
      _id: l._id,
      title: l.title,
      price: l.price,
      image: getOptimizedImageUrl(l.images?.[0]?.url, 500) || null,
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
