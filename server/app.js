require("dotenv").config();
require("express-async-errors");

const connectDB = require("./db/connect");
const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./routes/user");

app.use(express.json());

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
}));

app.get("/health", (req, res) => {
  res.status(200).json({ service: "nexusntu-api", status: "ok" });
});

app.use("/api/v1", mainRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is required. Copy .env.example to .env.");
    }

    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`NexusNTU API listening on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to start NexusNTU API:", error.message);
    process.exitCode = 1;
  }
};

start();
