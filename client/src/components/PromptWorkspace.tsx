import React, { useState } from "react";
import { Send, Sparkles } from "lucide-react";

interface PromptWorkspaceProps {
  onGenerate: (prompt: string) => Promise<void>;
  loading: boolean;
}

export const PromptWorkspace: React.FC<PromptWorkspaceProps> = ({ onGenerate, loading }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || loading) return;
    await onGenerate(prompt);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
        AI Prompt Builder
      </div>
      <textarea
        className="w-full h-28 bg-slate-900 border border-slate-800 rounded-lg p-3 text-sm focus:outline-none focus:border-indigo-500 text-slate-100 placeholder-slate-500 resize-none"
        placeholder="Describe what web app you want to build..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        type="submit"
        disabled={loading || !prompt.trim()}
        className="w-full bg-indigo-600 hover:bg-indigo-500 font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 text-sm"
      >
        <Send className="w-4 h-4" />
        {loading ? "Generating Application..." : "Generate Project"}
      </button>
    </form>
  );
};
