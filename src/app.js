import express from "express";
import mediaRoutes from "./routes/media.routes.js";

const app = express();

app.use("/api/media", mediaRoutes);

export default app;