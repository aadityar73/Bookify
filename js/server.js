"use strict";

const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());
// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection URL
const mongoURI = "mongodb://localhost:27017";

// Create MongoDB client
const mongoClient = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to MongoDB
mongoClient
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });

// Define route to serve HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Define route to handle POST request to submit feedback
app.post("/submit-feedback", async (req, res) => {
  try {
    const { fullName, email, feedback } = req.body;

    const db = mongoClient.db("feedbackDB");
    const feedbacksCollection = db.collection("feedbacks");

    // Insert feedback data into MongoDB
    const result = await feedbacksCollection.insertOne({
      fullName,
      email,
      feedback,
      createdAt: new Date(),
    });

    res.status(201).json({
      message: "Feedback submitted successfully",
      feedbackId: result.insertedId,
    });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

// Graceful shutdown
process.on("SIGINT", async () => {
  try {
    console.log("Closing MongoDB connection...");
    await mongoClient.close();
    console.log("MongoDB connection closed");
    process.exit(0);
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
    process.exit(1);
  }
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
