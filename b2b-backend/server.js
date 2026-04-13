// server.js

import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import { ENV } from "./src/config/env.js";
import { startOrderCleanupJob } from "./src/jobs/orderCleanup.job.js"; // ✅ added

async function startServer() {
  try {
    // ✅ Try DB but don’t crash if it fails
    try {
      await connectDB();
    } catch (err) {
      console.warn("⚠️ DB not connected. Running without database.");
    }

    // ✅ Start background jobs (optional)
    try {
      startOrderCleanupJob();
    } catch (err) {
      console.warn("⚠️ Background jobs disabled.");
    }

    // ✅ Start server ALWAYS
    app.listen(ENV.PORT, () => {
      console.log(`🚀 Server running on port ${ENV.PORT}`);
    });

  } catch (error) {
    console.error("❌ Error starting server:", error.message);
    process.exit(1);
  }
}

startServer();