import { useState } from "react";
import { searchWithChatGPT } from "../api/chatgptApi";

export default function useChatGPTSearch() {
  const [result, setResult] = useState("");
  const search = async query => {
    const response = await searchWithChatGPT(query);
    setResult(response);
  };
  return [result, search];
}
