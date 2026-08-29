import { motion } from 'framer-motion';
import { Bot, Database, Lock, ShieldCheck } from 'lucide-react';

const icons = {
  shield: ShieldCheck,
  bot: Bot,
  database: Database,
  lock: Lock,
};

const StatusCard = ({ item }) => {
  const Icon = icons[item.icon] || ShieldCheck;
  const isOperational = item.status !== '—';

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.18 }}
      className="glass-panel flex h-full min-h-[170px] flex-col justify-between p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="card-title">{item.title}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-300">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div>
        <div className="mt-4 text-2xl font-semibold text-slate-50">{item.status}</div>
        <div className="mt-1 text-sm text-slate-300">{item.metric}</div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3 text-xs text-slate-400">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {isOperational ? 'Operational' : 'Idle'}
        </span>
        <span>{item.meta}</span>
      </div>
    </motion.div>
  );
};

export default StatusCard;
