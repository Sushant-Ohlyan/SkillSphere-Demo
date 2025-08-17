import axios from "axios";

export const searchWithChatGPT = async (query) => {
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: query}]
    },
    {
      headers: {
        Authorization: `Bearer YOUR_OPENAI_KEY`,
      },
    }
  );
  return response.data.choices[0].message.content;
};
