const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const Listing = require("../models/listings.js");
const getFiltersFromAI = require("../utils/openai.js");

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
        const { query } = req.body;
        const filters = await getFiltersFromAI(query);
        let mongoQuery = {};
        let listings = [];

        if (filters.location) {
            mongoQuery.$or = [
                { city: new RegExp(filters.location, "i") },
                { state: new RegExp(filters.location, "i") },
                { country: new RegExp(filters.location, "i") }
            ];
        }

        if (filters.guests > 0) {
            mongoQuery.guest = { $gte: filters.guests };
        }

        if (filters.minPrice || filters.maxPrice) {
            mongoQuery.price = {};
            if (filters.minPrice) mongoQuery.price.$gte = filters.minPrice;
            if (filters.maxPrice) mongoQuery.price.$lte = filters.maxPrice;
        }

        if (filters.amenities?.length) {
            mongoQuery.amenities = {
                $all: filters.amenities.map(a => new RegExp(a, "i"))
            };
        }

        if (filters.propertyType) {
            mongoQuery.propertyType = new RegExp(`^${filters.propertyType}$`, "i");
        }

        if (filters.roomType) {
            mongoQuery.roomType = new RegExp(`^${filters.roomType}$`, "i");
        }

        //CASE 1: LOCATION
        if (filters.location) {
            listings = await Listing.find(mongoQuery)
                .select("+embedding")
                .limit(30);

            //fallback - nearby
            if (listings.length === 0) {
                const cityListing = await Listing.findOne({
                    city: new RegExp(filters.location, "i")
                });

                if (cityListing) {
                    const [lng, lat] = cityListing.geometry.coordinates;

                    listings = await Listing.find({
                        geometry: {
                            $near: {
                                $geometry: {
                                    type: "Point",
                                    coordinates: [lng, lat]
                                },
                                $maxDistance: 50000 // 50km radius
                            }
                        }
                    }).select("+embedding").limit(30);
                } else {
                    listings = await Listing.find()
                        .select("+embedding")
                        .limit(30);
                }
            }
        }

        // CASE 2: NO LOCATION - SEMANTIC SEARCH
        else {
            listings = await Listing.find().select("+embedding").limit(50);
        }

        if (!listings.length) {
            return res.json({ filters, listings: [] });
        }

        //Query embedding
        const embeddingRes = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: query,
            dimensions: 384,
        });
        const queryEmbedding = embeddingRes.data[0].embedding;

        // Rank
        const scored = listings
            .filter(listing => listing.embedding && listing.embedding.length > 0)
            .map(listing => ({
                listing: listing,
                score: cosineSimilarity(queryEmbedding, listing.embedding)
            }));

        scored.sort((a, b) => b.score - a.score);
        const results = scored.slice(0, 10).map(i => i.listing);

        res.json({ filters, listings: results });

    } catch (err) {
        console.log("Hybrid error:", err);
        res.status(500).json({ error: "Search failed" });
    }
});

module.exports = router;