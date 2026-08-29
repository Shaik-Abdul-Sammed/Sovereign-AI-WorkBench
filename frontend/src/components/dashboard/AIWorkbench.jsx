import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ImageIcon, UploadCloud, X, Play, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';
import { dashboardData } from '../../data/mockDashboardData';

const fileTypes = ['PDF', 'DOCX', 'TXT', 'PNG', 'JPG', 'CSV'];

const AIWorkbench = ({ prompt, setPrompt, files, setFiles, isRunning, onRunAnalysis, error }) => {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFiles = (incomingFiles) => {
    const next = Array.from(incomingFiles).map((file) => ({
      id: `${file.name}-${file.size}`,
      name: file.name,
      type: file.type || 'file',
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
    }));
    setFiles((prev) => [...prev, ...next]);
  };

  const removeFile = (fileId) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const onDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    if (event.dataTransfer.files?.length) handleFiles(event.dataTransfer.files);
  };

  return (
    <Card title="AI Workbench" subtitle="Run confidential industrial analysis using your local AI agents." className="p-0 overflow-hidden">
      <div className="p-5">
        <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Mission Request</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={6}
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500/50 focus:outline-none"
            placeholder="Ask your AI agents to analyze confidential industrial data..."
          />
        </div>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={onDrop}
          className={`mb-4 rounded-2xl border border-dashed p-4 transition ${dragActive ? 'border-sky-500 bg-sky-500/5' : 'border-slate-700 bg-slate-950/60'}`}
        >
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-200">
              <UploadCloud className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-200">Upload knowledge files for the analysis</p>
              <p className="mt-1 text-xs text-slate-400">{fileTypes.join(' • ')}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {fileTypes.map((type) => (
                <span key={type} className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">
                  {type}
                </span>
              ))}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
            <Button variant="secondary" type="button" onClick={() => fileInputRef.current?.click()}>
              Select Files
            </Button>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {files.map((file) => (
              <div key={file.id} className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-200">
                <div className="rounded-md bg-sky-500/10 p-1.5 text-sky-300">
                  {file.type.includes('image') ? <ImageIcon className="h-3.5 w-3.5" /> : <FileText className="h-3.5 w-3.5" />}
                </div>
                <span className="max-w-[180px] truncate">{file.name}</span>
                <button type="button" onClick={() => removeFile(file.id)} className="text-slate-400 transition hover:text-slate-100" aria-label={`Remove ${file.name}`}>
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
            <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-slate-400">Agent</label>
            <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 focus:border-sky-500/60 focus:outline-none">
              <option>Planner + Research</option>
              <option>Analysis Agent</option>
              <option>Vision + Analysis</option>
              <option>Full Stack</option>
            </select>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
            <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-slate-400">Workspace</label>
            <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 focus:border-sky-500/60 focus:outline-none">
              <option>Maintenance Ops</option>
              <option>Safety Engineering</option>
              <option>Production Monitoring</option>
            </select>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
            <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-slate-400">Model</label>
            <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 focus:border-sky-500/60 focus:outline-none">
              <option>Local Qwen 14B</option>
              <option>Llama 3.1</option>
              <option>Mistral</option>
            </select>
          </div>
        </div>

        {error && (
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
            <CheckCircle2 className="h-4 w-4" />
            {error}
          </div>
        )}

        <div className="mt-5 flex items-center justify-end">
          <Button
            type="button"
            variant="primary"
            className="gap-2 px-5 py-3"
            onClick={onRunAnalysis}
            disabled={isRunning}
          >
            <Play className="h-4 w-4" />
            {isRunning ? 'Running Analysis...' : 'Run Analysis'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AIWorkbench;
