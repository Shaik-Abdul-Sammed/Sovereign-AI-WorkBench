import { motion } from 'framer-motion';
import { Plus, UploadCloud } from 'lucide-react';
import Button from '../common/Button';
import { dashboardData } from '../../data/mockDashboardData';

const WelcomeHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mb-6 flex flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-soft md:flex-row md:items-center md:justify-between"
    >
      <div>
        <p className="text-2xl font-semibold text-slate-50">{dashboardData.app.greeting}</p>
        <p className="mt-1 text-sm text-slate-400">{dashboardData.app.welcomeSubtitle}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary" className="gap-2">
          <Plus className="h-4 w-4" />
          New Analysis
        </Button>
        <Button variant="secondary" className="gap-2">
          <UploadCloud className="h-4 w-4" />
          Upload Documents
        </Button>
      </div>
    </motion.div>
  );
};

export default WelcomeHeader;
