const express = require("express");
const cors = require("cors");
const compileRoutes = require("./routes/compile");

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

// API routes
app.use("/api/compile", compileRoutes);

// Default route for testing
app.get("/", (req, res) => {
  res.send("CodeSpr Backend Running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
