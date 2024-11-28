// lib/mongoose.ts
import mongoose from "mongoose";

const MONGODB_URI : string = 'mongodb+srv://Kushang:Kush%40ng3092@practice.qdpf8.mongodb.net/next-practice';

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
}

export default dbConnect;
