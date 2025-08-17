import axios from "axios";

export const searchWithChatGPT = async (query) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: query }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 429) {
        return "Rate limit exceeded: Please wait and try again later.";
      }
      return (
        error.response.data.error?.message ||
        "Error fetching response from OpenAI"
      );
    }
    return "Error fetching response from OpenAI";
  }
};

