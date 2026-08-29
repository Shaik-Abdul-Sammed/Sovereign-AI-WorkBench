import { ShieldCheck, TimerReset } from 'lucide-react';
import Card from '../common/Card';
import { dashboardData } from '../../data/mockDashboardData';

const AuditActivity = () => {
  return (
    <Card title="Audit Activity" subtitle="Operational traceability" className="h-full">
      <div className="space-y-3">
        {dashboardData.auditActivity.map((event, index) => (
          <div key={`${event.user}-${index}`} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/65 p-3">
            <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-300">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-medium text-slate-100">{event.user}</div>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-emerald-300">
                  {event.status}
                </span>
              </div>
              <div className="mt-1 text-sm text-slate-300">{event.action}</div>
              <div className="mt-1 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-slate-400">
                <TimerReset className="h-3 w-3" />
                {event.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AuditActivity;
