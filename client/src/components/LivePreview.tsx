import React from "react";

interface LivePreviewProps {
  code: string;
}

export const LivePreview: React.FC<LivePreviewProps> = ({ code }) => {
  return (
    <div className="h-full flex flex-col bg-slate-950">
      <div className="h-10 border-b border-slate-800 flex items-center px-4 text-xs font-mono text-slate-400 bg-slate-950">
        Live Sandbox Preview
      </div>
      <div className="flex-1 p-6 flex items-center justify-center overflow-auto">
        <div className="w-full max-w-xl p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl">
          <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">Simulated Output</div>
          <div className="text-slate-200 text-sm whitespace-pre-wrap font-sans">
            {code.includes("return") ? "Component rendered successfully from AI generation stream." : "Waiting for project generation..."}
          </div>
        </div>
      </div>
    </div>
  );
};
