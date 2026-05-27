require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 5000;

const startServer = () => {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use. Stop the existing process or set a different PORT.`);
      process.exit(1);
    }

    console.error("Server error:", error);
    process.exit(1);
  });
};

connectDB()
  .then(() => {
    startServer();
  })
  .catch((error) => {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  });
