import React from "react";
import { Settings, User, Key, Sliders } from "lucide-react";

export const SettingsPage: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto bg-slate-950">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <Settings className="w-6 h-6 text-indigo-500" />
          <h1 className="text-2xl font-bold tracking-tight text-slate-100">Settings</h1>
        </div>

        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
            <User className="w-5 h-5 text-slate-400" />
            <div>
              <h3 className="text-sm font-medium text-slate-200">Account Configuration</h3>
              <p className="text-xs text-slate-400">Manage your developer profile preferences.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
            <Key className="w-5 h-5 text-slate-400" />
            <div>
              <h3 className="text-sm font-medium text-slate-200">API Credentials</h3>
              <p className="text-xs text-slate-400">Configure external model keys and environment variables.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Sliders className="w-5 h-5 text-slate-400" />
            <div>
              <h3 className="text-sm font-medium text-slate-200">Workspace Defaults</h3>
              <p className="text-xs text-slate-400">Set default templates and editor layouts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
