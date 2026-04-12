import express from "express";
import routes from "./routes/index.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

// test route (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/v1", routes);

app.use(errorHandler);

export default app;