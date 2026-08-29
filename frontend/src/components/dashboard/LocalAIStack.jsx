import { Activity, Cpu, Database, HardDrive, Sparkles } from 'lucide-react';
import Card from '../common/Card';
import { dashboardData } from '../../data/mockDashboardData';

const iconMap = {
  sparkles: Sparkles,
  camera: Activity,
  database: Database,
  radar: HardDrive,
  cpu: Cpu,
};

const MetricBar = ({ label, value, color }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-slate-400">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

const LocalAIStack = () => {
  return (
    <Card title="Local AI Infrastructure" subtitle="Runtime and system resources" className="h-full">
      <div className="space-y-3">
        {dashboardData.infrastructure.runtime.map((item) => {
          const Icon = iconMap[item.icon] || Sparkles;
          return (
            <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-100">{item.name}</div>
                  <div className="text-xs text-slate-400">{item.detail}</div>
                </div>
              </div>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-emerald-300">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-5 space-y-4">
        <MetricBar label="CPU Usage" value={dashboardData.infrastructure.metrics.cpu} color="bg-sky-400" />
        <MetricBar label="RAM Usage" value={dashboardData.infrastructure.metrics.ram} color="bg-violet-400" />
        <MetricBar label="GPU Usage" value={dashboardData.infrastructure.metrics.gpu} color="bg-emerald-400" />
      </div>
    </Card>
  );
};

export default LocalAIStack;
