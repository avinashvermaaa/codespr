const express = require("express");
const router = express.Router();
const { handleChatGPTRequest } = require("../controllers/chatgptController");

router.post("/", handleChatGPTRequest);

module.exports = router;
