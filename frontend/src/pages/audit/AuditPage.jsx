import { useState } from 'react';
import { ShieldCheck, TimerReset, Eye, X } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { mockAuditLogs, auditFilters, auditSummary } from '../../data/mockAuditLogs';

const categoryTone = { 'User Activity': 'info', 'Agent Activity': 'success', 'Document Access': 'neutral', Security: 'warning', Error: 'danger' };

const AuditPage = () => {
  const [filter, setFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filtered = mockAuditLogs.filter((log) => filter === 'All' || log.category === filter);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-50">Audit & Security Logs</h2>
        <p className="mt-1 text-sm text-slate-400">Trace user, agent and data activity across the system.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-5">
        <Card className="text-center">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Total Events</div>
          <div className="mt-2 text-2xl font-semibold text-slate-50">{auditSummary.total.toLocaleString()}</div>
        </Card>
        <Card className="text-center">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">User Actions</div>
          <div className="mt-2 text-2xl font-semibold text-slate-50">{auditSummary.userActions}</div>
        </Card>
        <Card className="text-center">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Agent Actions</div>
          <div className="mt-2 text-2xl font-semibold text-slate-50">{auditSummary.agentActions}</div>
        </Card>
        <Card className="text-center">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Security Events</div>
          <div className="mt-2 text-2xl font-semibold text-slate-50">{auditSummary.securityEvents}</div>
        </Card>
        <Card className="text-center">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Errors</div>
          <div className="mt-2 text-2xl font-semibold text-rose-300">{auditSummary.errors}</div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card title="Audit Trail" subtitle="Operational traceability">
          <div className="mb-4 flex flex-wrap gap-2">
            {auditFilters.map((f) => (
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
          <div className="space-y-3">
            {filtered.map((log) => (
              <div
                key={log.id}
                onClick={() => setSelectedEvent(log)}
                className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/65 p-3 transition hover:border-slate-700"
              >
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-300">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-sm font-medium text-slate-100">{log.actor}</div>
                    <div className="flex items-center gap-2">
                      <Badge tone={categoryTone[log.category] || 'neutral'}>{log.category}</Badge>
                      <span className={`rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.14em] ${log.status === 'Success' ? 'bg-emerald-500/10 text-emerald-300' : log.status === 'Blocked' ? 'bg-rose-500/10 text-rose-300' : 'bg-slate-800 text-slate-300'}`}>
                        {log.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-1 text-sm text-slate-300">{log.action}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-slate-400">
                    <TimerReset className="h-3 w-3" />
                    {log.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Security Status" subtitle="Demo environment status">
          <div className="space-y-3">
            {[
              { label: 'Local Processing', value: 'Enabled', active: true },
              { label: 'External API Access', value: 'Blocked (demo)', active: false },
              { label: 'Audit Logging', value: 'Enabled', active: true },
              { label: 'Workspace Isolation', value: 'Enabled', active: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5">
                <span className="text-sm text-slate-200">{item.label}</span>
                <span className={`rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.14em] ${item.active ? 'bg-emerald-500/10 text-emerald-300' : 'bg-slate-800 text-slate-300'}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3">
            <div className="text-xs text-amber-200">Security values shown are from demo mock data. Verify with backend before treating as production security guarantees.</div>
          </div>
        </Card>
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm">
          <Card title={`Event ${selectedEvent.id}`} subtitle={selectedEvent.action} className="w-full max-w-lg">
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Actor</div>
                  <div className="mt-1 text-sm text-slate-200">{selectedEvent.actor}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Resource</div>
                  <div className="mt-1 text-sm text-slate-200">{selectedEvent.resource}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Workspace</div>
                  <div className="mt-1 text-sm text-slate-200">{selectedEvent.workspace}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Timestamp</div>
                  <div className="mt-1 text-sm text-slate-200">{selectedEvent.timestamp}</div>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Status</div>
                <Badge tone={selectedEvent.status === 'Success' ? 'success' : selectedEvent.status === 'Blocked' ? 'danger' : 'neutral'} className="mt-1">{selectedEvent.status}</Badge>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Button variant="secondary" onClick={() => setSelectedEvent(null)}>Close</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AuditPage;
