import { useState } from 'react';
import { FileText, Filter, Search, UploadCloud, Download, Trash2, Eye, X, CheckCircle2, Clock3, XCircle, ChevronRight } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { mockDocuments, documentFilters, processingPipeline } from '../../data/mockDocuments';

const statusTone = { Uploading: 'info', Processing: 'warning', Indexing: 'info', Indexed: 'success', Failed: 'danger' };

const DocumentsPage = () => {
  const [filter, setFilter] = useState('All');
  const [showUpload, setShowUpload] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = mockDocuments.filter((doc) => {
    const matchesFilter = filter === 'All' || doc.type === filter || (filter === 'Images' && ['PNG', 'JPG'].includes(doc.type));
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-50">Document Management</h2>
          <p className="mt-1 text-sm text-slate-400">Upload and manage confidential organizational documents.</p>
        </div>
        <Button variant="primary" className="gap-2" onClick={() => setShowUpload(true)}>
          <UploadCloud className="h-4 w-4" />
          Upload Document
        </Button>
      </div>

      <Card title="All Documents" subtitle={`${filtered.length} files in workspace`}>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documents..."
              className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {documentFilters.map((f) => (
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
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Size</th>
                <th className="pb-3 font-medium">Uploaded</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filtered.map((doc) => (
                <tr key={doc.id} className="group">
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/20 bg-sky-500/10 text-sky-300">
                        <FileText className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-slate-100">{doc.name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-slate-300">{doc.type}</td>
                  <td className="py-3 text-slate-300">{doc.size}</td>
                  <td className="py-3 text-slate-300">{doc.uploaded}</td>
                  <td className="py-3">
                    <Badge tone={statusTone[doc.status] || 'neutral'}>{doc.status}</Badge>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center justify-end gap-1 opacity-0 transition group-hover:opacity-100">
                      <button type="button" className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-slate-100" aria-label="View">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button type="button" className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-slate-100" aria-label="Download">
                        <Download className="h-4 w-4" />
                      </button>
                      <button type="button" className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-slate-100" aria-label="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {showUpload && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm">
          <Card title="Upload Document" subtitle="Add a new confidential document" className="w-full max-w-lg">
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-300">
                  <UploadCloud className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-200">Drag and drop files here</p>
                  <p className="mt-1 text-xs text-slate-400">PDF, DOCX, TXT, PNG, JPG, CSV up to 50MB</p>
                </div>
                <Button variant="secondary">Browse Files</Button>
              </div>
              <div>
                <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">Processing Pipeline</div>
                <div className="flex items-center gap-2">
                  {processingPipeline.map((step, idx) => (
                    <div key={step.step} className="flex items-center gap-2">
                      <div className="rounded-lg border border-slate-800 bg-slate-950/60 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">
                        {step.step}
                      </div>
                      {idx < processingPipeline.length - 1 && <ChevronRight className="h-3 w-3 text-slate-500" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setShowUpload(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setShowUpload(false)}>Upload</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DocumentsPage;
