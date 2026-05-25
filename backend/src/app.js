const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const admissionRoutes = require("./routes/admissionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", contactRoutes);
app.use("/api", admissionRoutes);

app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "School Website backend API is working"
  });
});

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to School Website API"
  });
});

module.exports = app;
