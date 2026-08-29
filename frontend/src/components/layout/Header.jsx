import { Bell, ChevronDown, ShieldCheck, Wifi, Menu } from 'lucide-react';
import { dashboardData } from '../../data/mockDashboardData';

const Header = ({ title, subtitle, onMenuToggle }) => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-slate-700 bg-slate-900/70 p-2.5 text-slate-200 transition hover:bg-slate-800 lg:hidden" onClick={onMenuToggle} aria-label="Toggle menu">
            <Menu className="h-4 w-4" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-slate-500">
              <span>Dashboard</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </div>
            <h1 className="mt-1 text-2xl font-semibold text-slate-50">{title || 'Command Center'}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 md:flex">
            <Wifi className="h-3.5 w-3.5" />
            <span>Local System Online</span>
          </div>
          <button className="rounded-xl border border-slate-700 bg-slate-900/70 p-2.5 text-slate-200 transition hover:bg-slate-800" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-2.5 py-1.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sm font-semibold text-sky-200">
              AD
            </div>
            <div className="hidden text-left sm:block">
              <div className="text-sm font-medium text-slate-100">Admin</div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Operations Lead</div>
            </div>
          </div>
        </div>
      </div>

      {subtitle && <div className="mt-3 text-sm text-slate-400">{subtitle}</div>}
    </header>
  );
};

export default Header;
