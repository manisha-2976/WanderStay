require("dotenv").config();

const getFiltersFromAI = async (message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4.1-nano",
            messages: [
                {
                    role: "system",
                    content: `You are an AI that extracts filters from user queries. Return ONLY valid JSON. No explanation.
                    Format:
                    {
                    "location": "",
                    "guests": 0,
                    "minPrice": 0,
                    "maxPrice": 0,
                    "amenities": [],
                    "keywords": [],
                    "propertyType": "",
                    "roomType": ""
                    } `
                },
                {
                    role: "user",
                    content: message
                }
            ],
            temperature: 0
        })
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);

        const data = await response.json();
        let text = data.choices[0].message.content;
        console.log("AI Response:", text);

        //Clean response
        text = text.trim();
        // Remove ```json ``` if present
        if (text.startsWith("```")) {
            text = text.replace(/```json|```/g, "").trim();
        }
        return JSON.parse(text);

    } catch (err) {
        console.log("AI Filter Error:", err);
        return {};
    }
};

module.exports = getFiltersFromAI;

