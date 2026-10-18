import React, { useState } from "react";
import { PromptWorkspace } from "../components/PromptWorkspace";
import { CodeEditor } from "../components/CodeEditor";
import { LivePreview } from "../components/LivePreview";
import { ProjectList } from "../components/ProjectList";
import { Project } from "../../../shared/types";

interface BuilderPageProps {
  projects: Project[];
  onGenerate: (prompt: string) => Promise<void>;
  loading: boolean;
  currentCode: string;
}

export const BuilderPage: React.FC<BuilderPageProps> = ({ projects, onGenerate, loading, currentCode }) => {
  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left Control Panel */}
      <div className="w-80 border-r border-slate-800 flex flex-col bg-slate-950 p-4 overflow-y-auto">
        <PromptWorkspace onGenerate={onGenerate} loading={loading} />
        <div className="mt-6 pt-6 border-t border-slate-800">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Recent Projects</h3>
          <ProjectList projects={projects} />
        </div>
      </div>

      {/* Split Workspace: Code & Preview */}
      <div className="flex-1 grid grid-cols-2">
        <CodeEditor code={currentCode} />
        <LivePreview code={currentCode} />
      </div>
    </div>
  );
};
