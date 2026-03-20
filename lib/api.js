import axios from "axios";

export const askAI = async (prompt) => {
  const res = await axios.post("/api/ask-ai", { prompt });
  return res.data;
};

export const savePrompt = async (data) => {
  const res = await axios.post("/api/save", data);
  return res.data;
};