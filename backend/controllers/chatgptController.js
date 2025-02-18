const axios = require("axios");

exports.handleChatGPTRequest = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt,
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    res
      .status(200)
      .json({ success: true, response: response.data.choices[0].text });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error handling ChatGPT request" });
  }
};
