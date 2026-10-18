import React from "react";
import { Project } from "../../../shared/types";
import { FileCode, Clock } from "lucide-react";

interface ProjectListProps {
  projects: Project[];
  onSelectProject?: (project: Project) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="space-y-2">
      {projects.length === 0 ? (
        <p className="text-xs text-slate-500 py-2">No projects created yet.</p>
      ) : (
        projects.map((p) => (
          <div
            key={p.id}
            className="p-3 rounded-lg bg-slate-900 border border-slate-800/60 hover:border-slate-700 transition-colors flex items-start gap-3 cursor-pointer"
          >
            <FileCode className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-medium text-slate-200 truncate">{p.title}</h4>
              <p className="text-xs text-slate-400 truncate mt-0.5">{p.prompt}</p>
              <div className="flex items-center gap-1 text-[10px] text-slate-500 mt-2">
                <Clock className="w-3 h-3" />
                {new Date(p.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
