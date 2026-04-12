// server.js

import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import { ENV } from "./src/config/env.js";
import { startOrderCleanupJob } from "./src/jobs/orderCleanup.job.js"; // ✅ added

async function startServer() {
  try {
    // ✅ Connect DB
    await connectDB();

    // ✅ Start background jobs
    startOrderCleanupJob();

    // ✅ Start server
    app.listen(ENV.PORT, () => {
      console.log(`🚀 Server running on port ${ENV.PORT}`);
    });

  } catch (error) {
    console.error("❌ Error starting server:", error.message);
    process.exit(1);
  }
}

startServer();