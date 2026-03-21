import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const askAI = async (prompt) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/ask-ai`, { prompt });
    return res.data;
  } catch (err) {
    // Extracting backend message
    const message = err.response?.data?.error || "Something went wrong";
    throw new Error(message);
  }
};

export const savePrompt = async (data) => {
  const res = await axios.post(`${BASE_URL}/api/save`, data);
  return res.data;
};

export const getData = async (data) => {
  const res = await axios.post(`${BASE_URL}/api/data`, data);
  return res.data;
};