import { FileText, Database, Layers3, ArrowRight } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import { dashboardData } from '../../data/mockDashboardData';

const KnowledgeBase = () => {
  return (
    <Card title="Knowledge Base" subtitle="Internal industrial knowledge" className="h-full">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Documents</div>
          <div className="mt-2 text-2xl font-semibold text-slate-50">{dashboardData.knowledgeBase.documents.toLocaleString()}</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Chunks</div>
          <div className="mt-2 text-2xl font-semibold text-slate-50">{dashboardData.knowledgeBase.chunks.toLocaleString()}</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Embeddings</div>
          <div className="mt-2 text-2xl font-semibold text-slate-50">{dashboardData.knowledgeBase.embeddings.toLocaleString()}</div>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {dashboardData.knowledgeBase.recentDocuments.map((doc) => (
          <div key={doc.name} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/65 p-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-300">
                <FileText className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-medium text-slate-100">{doc.name}</div>
                <div className="mt-1 flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-slate-400">
                  <span>{doc.type}</span>
                  <span>{doc.time}</span>
                </div>
              </div>
            </div>
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-emerald-300">
              {doc.status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-end">
        <Button variant="secondary" className="gap-2">
          Manage Knowledge Base
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default KnowledgeBase;
