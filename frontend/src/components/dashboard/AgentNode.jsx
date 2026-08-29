import { motion } from 'framer-motion';
import { Check, CircleDashed, AlertTriangle } from 'lucide-react';

const toneStyles = {
  success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200',
  running: 'border-sky-500/30 bg-sky-500/10 text-sky-200',
  waiting: 'border-slate-700 bg-slate-900 text-slate-300',
  failed: 'border-rose-500/30 bg-rose-500/10 text-rose-200',
};

const AgentNode = ({ item, isLast = false }) => {
  const statusGlyph = {
    COMPLETED: <Check className="h-3.5 w-3.5" />,
    RUNNING: <CircleDashed className="h-3.5 w-3.5 animate-spin" />,
    WAITING: <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />,
    FAILED: <AlertTriangle className="h-3.5 w-3.5" />,
  };

  return (
    <div className="relative flex items-center gap-4 last:mb-0">
      <div className={`flex min-h-[118px] w-full items-start gap-3 rounded-2xl border p-3 ${toneStyles[item.tone] || toneStyles.waiting}`}>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-current/20 bg-slate-950/40">
          {statusGlyph[item.status] || statusGlyph.WAITING}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <div className="text-sm font-semibold text-slate-100">{item.name}</div>
            <span className="rounded-full border border-current/20 bg-slate-950/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.15em]">
              {item.status}
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-200">{item.action}</p>
          <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.12em] text-slate-400">
            <span>Latency</span>
            <span>{item.time}</span>
          </div>
        </div>
      </div>
      {!isLast && <div className="absolute left-6 top-full h-7 w-px bg-slate-700" />}
    </div>
  );
};

export default AgentNode;
