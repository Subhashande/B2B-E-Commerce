import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.warn("⚠️ No MongoDB URI. Running without DB.");
      return;
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("DB connection failed:", err.message);
  }
};