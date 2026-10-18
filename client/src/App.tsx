import React, { useState, useEffect } from "react";
import { generateProject, fetchProjects } from "./lib/api";
import { Project } from "../../shared/types";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentCode, setCurrentCode] = useState("// Enter a prompt to generate code");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects().then(setProjects).catch(console.error);
  }, []);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const res = await generateProject(prompt);
      if (res.success) {
        setCurrentCode(res.code);
        const updated = await fetchProjects();
        setProjects(updated);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Sidebar */}
      <aside className="w-80 border-r border-slate-800 p-4 flex flex-col">
        <h1 className="text-xl font-bold tracking-tight mb-4">Buildspace AI</h1>
        <form onSubmit={handleGenerate} className="space-y-3 mb-6">
          <textarea
            className="w-full h-28 bg-slate-900 border border-slate-800 rounded-lg p-3 text-sm focus:outline-none focus:border-indigo-500"
            placeholder="What would you like to build?"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 font-medium py-2 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Project"}
          </button>
        </form>

        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Projects</h2>
        <div className="flex-1 overflow-y-auto space-y-1">
          {projects.map((p) => (
            <div key={p.id} className="p-2 rounded bg-slate-900 text-sm truncate text-slate-300">
              {p.title}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col">
        <header className="h-14 border-b border-slate-800 flex items-center px-6 text-sm font-medium text-slate-400">
          Live Workspace & Code Editor
        </header>
        <div className="flex-1 grid grid-cols-2">
          <div className="p-4 border-r border-slate-800 bg-slate-900 font-mono text-xs overflow-auto">
            <pre>{currentCode}</pre>
          </div>
          <div className="p-4 bg-slate-950 flex items-center justify-center">
            <div className="text-slate-500 text-sm">Preview Sandbox Ready</div>
          </div>
        </div>
      </main>
    </div>
  );
    }
