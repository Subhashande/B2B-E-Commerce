import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // ✅ Connect DB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DB connected");

    // ✅ Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Error starting server:", error.message);
    process.exit(1);
  }
}

startServer();