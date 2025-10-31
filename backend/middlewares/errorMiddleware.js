const errorMiddleware = (err, req, res, next) => {
  console.error("Error: ", err.message);
  res.status(500).json({ error: err.message });
};

export { errorMiddleware };
