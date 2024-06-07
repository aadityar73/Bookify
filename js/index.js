"use strict";

const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the MongoDB server
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("feedbackDB"); // Return the database instance
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow the error to propagate it
  }
}

// Insert a feedback document into the 'feedbacks' collection
async function insertFeedback(db, feedback) {
  const collection = db.collection("feedbacks");
  try {
    const result = await collection.insertOne(feedback);
    console.log("Inserted feedback:", result.insertedId);
  } catch (error) {
    console.error("Error inserting feedback:", error);
    throw error; // Rethrow the error to propagate it
  }
}

// Find all documents in the 'feedbacks' collection and log them
async function findFeedbacks(db) {
  const collection = db.collection("feedbacks");
  try {
    const cursor = collection.find({});
    const feedbacks = await cursor.toArray(); // Convert cursor to array
    console.log("All feedbacks:", feedbacks);
  } catch (error) {
    console.error("Error finding feedbacks:", error);
    throw error; // Rethrow the error to propagate it
  }
}

// Close the MongoDB connection
async function closeMongoDBConnection() {
  try {
    await client.close();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
    throw error; // Rethrow the error to propagate it
  }
}

// Usage example
(async () => {
  let db;
  try {
    db = await connectToMongoDB();

    // Insert a feedback
    const feedback = { name: "John Doe", message: "Great service!" };
    await insertFeedback(db, feedback);

    // Find all feedbacks
    await findFeedbacks(db);
  } catch (error) {
    // Handle any errors
    console.error("An error occurred:", error);
  } finally {
    // Close the MongoDB connection
    if (db) {
      await closeMongoDBConnection();
    }
  }
})();
