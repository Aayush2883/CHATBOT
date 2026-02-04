const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});


const generateResponse = async (chatHistory) => {
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: chatHistory,
    config: {
      systemInstruction: "Always give Direct and concise answers.",
    },
  });

  console.log(response.text);
  return response.text;
}

module.exports = { generateResponse };