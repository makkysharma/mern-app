export const getAIResponse = async (prompt) => {
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3-8b-instruct",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await res.json();

    console.log("FULL API RESPONSE:", data);
    console.log("FULL RESPONSE:", data);

    if (data?.choices?.length > 0) {
      return data.choices[0].message?.content || "No content";
    }

    // Handling error from API
    if (data?.error) {
      return data.error.message;
    }

    return "No response from AI";
  } catch (error) {
    console.error("AI ERROR:", error);
    return "Something went wrong";
  }
};