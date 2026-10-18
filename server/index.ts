import express from "express";
import cors from "cors";
import projectsRouter from "./routes/projects";
import generateRouter from "./routes/generate";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/projects", projectsRouter);
app.use("/api/generate", generateRouter);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
