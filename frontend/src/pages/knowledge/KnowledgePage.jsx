import { useState } from 'react';
import { Database, Search, UploadCloud, ChevronRight } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { mockKnowledge } from '../../data/mockKnowledge';

const KnowledgePage = () => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('collections');

  const filteredCollections = mockKnowledge.collections.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredResults = mockKnowledge.searchResults.filter((r) =>
    r.document.toLowerCase().includes(query.toLowerCase()) ||
    r.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-50">Knowledge Base</h2>
          <p className="mt-1 text-sm text-slate-400">Manage the private knowledge used by your AI agents.</p>
        </div>
        <Button variant="primary" className="gap-2">
          <UploadCloud className="h-4 w-4" />
          Open Source Document
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        <Card className="text-center">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Documents</div>
          <div className="mt-2 text-3xl font-semibold text-slate-50">{mockKnowledge.stats.documents.toLocaleString()}</div>
        </Card>
        <Card className="text-center">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Chunks</div>
          <div className="mt-2 text-3xl font-semibold text-slate-50">{mockKnowledge.stats.chunks.toLocaleString()}</div>
        </Card>
        <Card className="text-center">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Embeddings</div>
          <div className="mt-2 text-3xl font-semibold text-slate-50">{mockKnowledge.stats.embeddings.toLocaleString()}</div>
        </Card>
        <Card className="text-center">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Vector DB</div>
          <div className="mt-2 text-3xl font-semibold text-slate-50">{mockKnowledge.stats.vectorStatus}</div>
        </Card>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('collections')}
          className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
            activeTab === 'collections' ? 'border-sky-500/30 bg-sky-500/10 text-sky-200' : 'border-slate-700 bg-slate-900 text-slate-300'
          }`}
        >
          Collections
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('search')}
          className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
            activeTab === 'search' ? 'border-sky-500/30 bg-sky-500/10 text-sky-200' : 'border-slate-700 bg-slate-900 text-slate-300'
          }`}
        >
          Semantic Search
        </button>
      </div>

      {activeTab === 'collections' && (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredCollections.map((col) => (
            <Card key={col.id} className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-100">{col.name}</div>
                  <div className="mt-1 text-xs text-slate-400">{col.description}</div>
                </div>
                <Badge tone="success">{col.status}</Badge>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2 text-center">
                  <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Docs</div>
                  <div className="mt-1 text-sm font-semibold text-slate-50">{col.documents}</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2 text-center">
                  <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Chunks</div>
                  <div className="mt-1 text-sm font-semibold text-slate-50">{col.chunks.toLocaleString()}</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2 text-center">
                  <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Updated</div>
                  <div className="mt-1 text-xs font-medium text-slate-200">{col.lastUpdated}</div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="secondary" className="gap-2">
                  Browse Collection
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'search' && (
        <Card title="Semantic Search" subtitle="Search internal knowledge using natural language">
          <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search internal knowledge..."
              className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
            />
          </div>
          <div className="mt-4 space-y-3">
            {filteredResults.map((result, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950/65 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-sky-300" />
                    <span className="text-sm font-medium text-slate-100">{result.document}</span>
                    <span className="text-xs text-slate-400">Page {result.page}</span>
                  </div>
                  <Badge tone="info">Relevance: {result.relevance}%</Badge>
                </div>
                <p className="mt-2 text-sm text-slate-300">{result.excerpt}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default KnowledgePage;
