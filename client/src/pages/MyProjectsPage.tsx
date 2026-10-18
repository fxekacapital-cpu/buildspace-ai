import React from "react";
import { Project } from "../../../shared/types";
import { FolderKanban } from "lucide-react";

interface MyProjectsPageProps {
  projects: Project[];
}

export const MyProjectsPage: React.FC<MyProjectsPageProps> = ({ projects }) => {
  return (
    <div className="flex-1 p-8 overflow-y-auto bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FolderKanban className="w-6 h-6 text-indigo-500" />
          <h1 className="text-2xl font-bold tracking-tight text-slate-100">My Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-slate-100 mb-1">{project.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4">{project.prompt}</p>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-800/80">
                <span>ID: {project.id.slice(0, 8)}...</span>
                <span>{new Date(project.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
