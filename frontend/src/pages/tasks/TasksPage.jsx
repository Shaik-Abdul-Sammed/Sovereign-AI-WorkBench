import { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock3, XCircle, ChevronRight, Eye } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { mockTasks, taskFilters } from '../../data/mockTasks';

const statusTone = { Running: 'info', Completed: 'success', Failed: 'danger', Queued: 'neutral' };

const TasksPage = () => {
  const [filter, setFilter] = useState('All');
  const [selectedTask, setSelectedTask] = useState(null);

  const filtered = mockTasks.filter((task) => filter === 'All' || task.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-50">Tasks & Executions</h2>
          <p className="mt-1 text-sm text-slate-400">Track AI workflows and agent executions.</p>
        </div>
        <Button variant="primary" className="gap-2">
          <ArrowRight className="h-4 w-4" />
          View All Tasks
        </Button>
      </div>

      <Card title="Recent Tasks" subtitle="Operational intelligence queue">
        <div className="mb-4 flex flex-wrap gap-2">
          {taskFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                filter === f ? 'border-sky-500/30 bg-sky-500/10 text-sky-200' : 'border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                <th className="pb-3 font-medium">Task ID</th>
                <th className="pb-3 font-medium">Task</th>
                <th className="pb-3 font-medium">Agent</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Started</th>
                <th className="pb-3 font-medium">Duration</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filtered.map((task) => (
                <tr key={task.id} className="group">
                  <td className="py-3 text-slate-300">#{task.id}</td>
                  <td className="py-3 font-medium text-slate-100">{task.title}</td>
                  <td className="py-3 text-slate-300">{task.agent}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] ${statusTone[task.status] === 'success' ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' : statusTone[task.status] === 'danger' ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20' : statusTone[task.status] === 'info' ? 'bg-sky-500/10 text-sky-300 border border-sky-500/20' : 'bg-slate-800 text-slate-300 border border-slate-700'}`}>
                      {task.status === 'Completed' && <CheckCircle2 className="h-3 w-3" />}
                      {task.status === 'Running' && <Clock3 className="h-3 w-3 animate-pulse" />}
                      {task.status === 'Failed' && <XCircle className="h-3 w-3" />}
                      {task.status}
                    </span>
                  </td>
                  <td className="py-3 text-slate-300">{task.started}</td>
                  <td className="py-3 text-slate-300">{task.duration}</td>
                  <td className="py-3">
                    <div className="flex justify-end">
                      <Button variant="ghost" className="gap-1 text-xs" onClick={() => setSelectedTask(task)}>
                        <Eye className="h-3.5 w-3.5" />
                        Details
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {selectedTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm">
          <Card title={`Task #${selectedTask.id}`} subtitle={selectedTask.title} className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="space-y-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">User Request</div>
                <div className="mt-1 text-sm text-slate-200">{selectedTask.prompt}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Status</div>
                  <Badge tone={statusTone[selectedTask.status] || 'neutral'} className="mt-1">{selectedTask.status}</Badge>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Confidence</div>
                  <div className="mt-1 text-sm font-medium text-slate-200">{selectedTask.confidence ? `${selectedTask.confidence}%` : '—'}</div>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Agents Executed</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedTask.agentsExecuted.map((agent) => (
                    <Badge key={agent} tone="info">{agent}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Documents Accessed</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedTask.documentsAccessed.map((doc) => (
                    <Badge key={doc} tone="neutral">{doc}</Badge>
                  ))}
                </div>
              </div>
              {selectedTask.result && (
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Result</div>
                  <div className="mt-1 rounded-xl border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-sm text-amber-100">{selectedTask.result}</div>
                </div>
              )}
              {selectedTask.sources.length > 0 && (
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Sources</div>
                  <ul className="mt-2 space-y-1 text-sm text-slate-300">
                    {selectedTask.sources.map((s) => (
                      <li key={s}>• {s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="mt-6 flex justify-end">
              <Button variant="secondary" onClick={() => setSelectedTask(null)}>Close</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TasksPage;
