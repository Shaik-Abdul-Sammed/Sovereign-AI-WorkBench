import { X, ShieldCheck, Bot, Database, FileText, Briefcase, ClipboardList, ScrollText, Settings, LogOut, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { dashboardData } from '../../data/mockDashboardData';
import { useToast } from '../common/Toast';

const icons = {
  'Command Center': ShieldCheck,
  'AI Workbench': Bot,
  'Agents': Bot,
  'Knowledge Base': Database,
  Documents: FileText,
  Tasks: Briefcase,
  'Audit Logs': ScrollText,
  Settings: Settings,
};

const Sidebar = ({ isOpen, onClose }) => {
  const { addToast } = useToast();

  const handleLogout = () => {
    addToast('Logout initiated.', 'warning');
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 flex-col border-r border-slate-800 bg-slate-950/95 p-5 backdrop-blur-xl transition-transform duration-200 lg:translate-x-0 lg:z-auto lg:flex ${
          isOpen ? 'translate-x-0 flex' : '-translate-x-full hidden lg:flex'
        }`}
      >
        <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-5 lg:justify-start">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/30">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-50">{dashboardData.app.title}</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{dashboardData.app.subtitle}</div>
            </div>
          </div>
          <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-slate-100 lg:hidden" onClick={onClose} aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-6 space-y-2">
          {dashboardData.navItems.map((item) => {
            const Icon = icons[item.label] || ShieldCheck;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-sky-500/10 text-sky-200 ring-1 ring-sky-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-slate-100'
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
            <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
              <span>System status</span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Demo
              </span>
            </div>
            <div className="text-sm text-slate-200">Secure local environment</div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sm font-semibold text-sky-200">AD</div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium text-slate-100">Admin</div>
              <div className="truncate text-xs text-slate-400">Operations Lead</div>
            </div>
            <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-slate-100" onClick={handleLogout} aria-label="Logout">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
