import { motion } from 'framer-motion';
import { Bot, Cpu, Gauge, Play, Settings2, ChevronRight } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { mockAgents, agentTimeline } from '../../data/mockAgents';

const colorMap = {
  sky: { border: 'border-sky-500/20', bg: 'bg-sky-500/10', text: 'text-sky-300', dot: 'bg-sky-400' },
  violet: { border: 'border-violet-500/20', bg: 'bg-violet-500/10', text: 'text-violet-300', dot: 'bg-violet-400' },
  amber: { border: 'border-amber-500/20', bg: 'bg-amber-500/10', text: 'text-amber-300', dot: 'bg-amber-400' },
  emerald: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/10', text: 'text-emerald-300', dot: 'bg-emerald-400' },
};

const statusTone = { ONLINE: 'success', IDLE: 'neutral', OFFLINE: 'danger' };

const AgentsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-50">Agent Operations</h2>
          <p className="mt-1 text-sm text-slate-400">Monitor and manage autonomous AI agents.</p>
        </div>
        <Button variant="primary" className="gap-2">
          <Play className="h-4 w-4" />
          Start All Agents
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {mockAgents.map((agent) => {
          const c = colorMap[agent.color] || colorMap.sky;
          return (
            <Card key={agent.id} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${c.border} ${c.bg} ${c.text}`}>
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-100">{agent.name}</div>
                    <div className="mt-1 text-xs text-slate-400">{agent.role}</div>
                  </div>
                </div>
                <Badge tone={statusTone[agent.status] || 'neutral'}>{agent.status}</Badge>
              </div>
              <p className="text-sm text-slate-300">{agent.description}</p>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Current Task</div>
                <div className="mt-1 text-sm text-slate-200">{agent.currentTask}</div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-center">
                  <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Completed</div>
                  <div className="mt-1 text-lg font-semibold text-slate-50">{agent.stats.tasksCompleted.toLocaleString()}</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-center">
                  <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Success</div>
                  <div className="mt-1 text-lg font-semibold text-slate-50">{agent.stats.successRate}%</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-center">
                  <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Avg Time</div>
                  <div className="mt-1 text-lg font-semibold text-slate-50">{agent.stats.avgExecution}</div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="secondary" className="gap-2">
                  View Details
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      <Card title="Agent Execution Timeline" subtitle="Recent autonomous agent activity">
        <div className="space-y-3">
          {agentTimeline.map((event) => (
            <div key={event.id} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/65 p-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-300">
                <Bot className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-medium text-slate-100">{event.agent}</div>
                  <Badge tone={event.status === 'Completed' ? 'success' : event.status === 'Failed' ? 'danger' : 'info'}>{event.status}</Badge>
                </div>
                <div className="mt-1 text-sm text-slate-300">{event.action}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-400">{event.time}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AgentsPage;
