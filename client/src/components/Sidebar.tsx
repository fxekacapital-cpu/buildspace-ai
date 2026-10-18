import React from "react";
import { LayoutDashboard, FolderKanban, Settings } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950 flex flex-col p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">
          B
        </div>
        <span className="font-bold text-lg tracking-tight">Buildspace AI</span>
      </div>

      <nav className="space-y-1 flex-1">
        <button
          onClick={() => setActiveTab("builder")}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "builder" ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          Builder Workspace
        </button>

        <button
          onClick={() => setActiveTab("projects")}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "projects" ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
          }`}
        >
          <FolderKanban className="w-4 h-4" />
          My Projects
        </button>

        <button
          onClick={() => setActiveTab("settings")}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "settings" ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
          }`}
        >
          <Settings className="w-4 h-4" />
          Settings
        </button>
      </nav>
    </aside>
  );
};
