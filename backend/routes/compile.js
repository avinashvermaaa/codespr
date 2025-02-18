const express = require("express");
const router = express.Router();
const compileController = require("../controllers/compileController");

// POST endpoint to compile code
router.post("/", compileController.compileCode);

module.exports = router;
