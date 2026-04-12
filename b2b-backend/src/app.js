// src/app.js

import express from "express";
import path from "path";

import routes from "./routes/index.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { notFound } from "./middleware/notFound.middleware.js";
import { setupSwagger } from "./docs/swagger.js"; // ✅ added

const app = express();

app.use(express.json());

// ✅ serve uploaded files
app.use("/uploads", express.static(path.join("src/uploads")));

// test route (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// routes
app.use("/api/v1", routes);

// ✅ swagger docs
setupSwagger(app);

// not found
app.use(notFound);

// error handler
app.use(errorHandler);

export default app;