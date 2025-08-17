import axios from "axios";

export const searchWithChatGPT = async (query) => {
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: query }],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`, // use env
      },
    }
  );

  return response.data.choices[0].message.content;
};
