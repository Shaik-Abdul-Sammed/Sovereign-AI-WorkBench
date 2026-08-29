import { ArrowRight, CheckCircle2, Clock3, XCircle } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';
import { dashboardData } from '../../data/mockDashboardData';

const statusStyles = {
  Completed: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
  Running: 'bg-sky-500/10 text-sky-300 border border-sky-500/20',
  Failed: 'bg-rose-500/10 text-rose-300 border border-rose-500/20',
};

const RecentTasks = () => {
  return (
    <Card title="Recent Tasks" subtitle="Operational intelligence queue" className="h-full">
      <div className="mb-4 flex flex-wrap gap-2">
        {['All', 'Running', 'Completed', 'Failed'].map((filter) => (
          <button
            key={filter}
            type="button"
            className={`rounded-full border px-3 py-1.5 text-xs font-medium ${filter === 'All' ? 'border-sky-500/30 bg-sky-500/10 text-sky-200' : 'border-slate-700 bg-slate-900 text-slate-300'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {dashboardData.tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/65 p-3">
            <div>
              <div className="text-sm font-medium text-slate-100">{task.title}</div>
              <div className="mt-1 flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-slate-400">
                <span>Agent: {task.agent}</span>
                <span>{task.time}</span>
              </div>
            </div>
            <div className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] ${statusStyles[task.status]}`}>
              {task.status === 'Completed' && <CheckCircle2 className="h-3 w-3" />}
              {task.status === 'Running' && <Clock3 className="h-3 w-3 animate-pulse" />}
              {task.status === 'Failed' && <XCircle className="h-3 w-3" />}
              {task.status}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-end">
        <Button variant="secondary" className="gap-2">
          View All Tasks
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default RecentTasks;
