import { Router } from "express";
import { db } from "../db";
import { projects } from "../db/schema";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Simulated AI Code Generation Result
    const generatedCode = `// Generated for: ${prompt}\nexport default function App() {\n  return (\n    <div className="p-8 bg-slate-900 text-white min-h-screen">\n      <h1 className="text-3xl font-bold mb-4">${prompt}</h1>\n      <p className="text-slate-400">Live preview operational.</p>\n    </div>\n  );\n}`;
    const title = prompt.slice(0, 30) + (prompt.length > 30 ? "..." : "");

    const [newProject] = await db.insert(projects).values({
      title,
      prompt,
      code: generatedCode,
    }).returning();

    res.json({
      success: true,
      code: generatedCode,
      projectId: newProject.id,
    });
  } catch (error) {
    console.error("Generation error:", error);
    res.status(500).json({ error: "Failed to generate project" });
  }
});

export default router;
