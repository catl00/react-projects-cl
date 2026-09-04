const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

    const result = await model.generateContent(message);
    const replyText = result.response.text();

    return res.status(200).json({ reply: replyText });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to get AI response" });
  }
};