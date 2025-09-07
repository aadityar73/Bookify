import mongoose from 'mongoose';

const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`MongoDB Connection failed: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
