import { ShieldCheck, Lock, EyeOff, Database, FileCheck2, CircleCheck } from 'lucide-react';
import Card from '../common/Card';
import { dashboardData } from '../../data/mockDashboardData';

const SovereigntyPanel = () => {
  return (
    <Card title="Sovereignty Status" subtitle="Demo / mock status" className="h-full border border-emerald-500/20 bg-emerald-500/5">
      <div className="space-y-4">
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Status</div>
            <div className="text-sm font-semibold text-emerald-300">{dashboardData.sovereignty.statusText}</div>
          </div>
        </div>

        <p className="text-sm text-slate-200">{dashboardData.sovereignty.summary}</p>

        <div className="grid gap-2 sm:grid-cols-2">
          {dashboardData.sovereignty.checks.map((check) => (
            <div key={check.label} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm">
              <span className="text-slate-200">{check.label}</span>
              <span className={`rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.14em] ${check.active ? 'bg-emerald-500/10 text-emerald-300' : 'bg-slate-800 text-slate-300'}`}>
                {check.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default SovereigntyPanel;
