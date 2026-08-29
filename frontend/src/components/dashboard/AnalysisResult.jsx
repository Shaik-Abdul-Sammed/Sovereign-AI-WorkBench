import { motion } from 'framer-motion';
import { AlertTriangle, CheckCheck, FileText, Sparkles } from 'lucide-react';
import Button from '../common/Button';

const AnalysisResult = ({ result }) => {
  if (!result) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.26 }}
      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-soft"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Analysis Result</div>
          <h3 className="mt-1 text-xl font-semibold text-slate-50">{result.title}</h3>
        </div>
        <div className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-200">
          {result.confidence}% confidence
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-300">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Possible Failure</div>
                <div className="text-lg font-semibold text-slate-50">{result.value}</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">Evidence</div>
                <ul className="space-y-2">
                  {result.evidence.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                      <CheckCheck className="mt-0.5 h-4 w-4 text-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">Recommendation</div>
                <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 px-3 py-3 text-sm text-sky-100">“{result.recommendation}”</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">
              <FileText className="h-3.5 w-3.5" />
              Sources
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              {result.sources.map((source) => (
                <li key={source}>• {source}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">
              <Sparkles className="h-3.5 w-3.5" />
              AI Conclusion
            </div>
            <div className="text-sm text-slate-200">
              Bearing heat rise is the most likely failure mode based on internal maintenance records and temperature deviation analysis.
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="secondary">View Evidence</Button>
            <Button variant="secondary">Generate Report</Button>
            <Button variant="primary">Run Again</Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AnalysisResult;
