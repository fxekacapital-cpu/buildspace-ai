import React from "react";

interface CodeEditorProps {
  code: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ code }) => {
  return (
    <div className="h-full flex flex-col bg-slate-900 border-r border-slate-800">
      <div className="h-10 border-b border-slate-800 flex items-center px-4 text-xs font-mono text-slate-400 bg-slate-950">
        App.tsx (Generated Source)
      </div>
      <div className="flex-1 p-4 font-mono text-xs overflow-auto text-slate-300">
        <pre>{code}</pre>
      </div>
    </div>
  );
};
