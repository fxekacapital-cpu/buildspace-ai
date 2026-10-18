import { Router } from "express";
import { db } from "../db";
import { projects } from "../db/schema";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allProjects = await db.select().from(projects).orderBy(projects.createdAt);
    res.json(allProjects);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const [project] = await db.select().from(projects).where(eq(projects.id, req.params.id));
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (error) {
    console.error("Failed to fetch project:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
