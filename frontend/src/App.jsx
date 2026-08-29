import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';

const Dashboard = lazy(() => import('./components/dashboard/DashboardPage'));
const Workbench = lazy(() => import('./pages/workbench/WorkbenchPage'));
const Agents = lazy(() => import('./pages/agents/AgentsPage'));
const KnowledgeBase = lazy(() => import('./pages/knowledge/KnowledgePage'));
const Documents = lazy(() => import('./pages/documents/DocumentsPage'));
const Tasks = lazy(() => import('./pages/tasks/TasksPage'));
const AuditLogs = lazy(() => import('./pages/audit/AuditPage'));
const Settings = lazy(() => import('./pages/settings/SettingsPage'));

const PageSkeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-8 w-48 rounded bg-slate-800" />
    <div className="h-64 rounded-2xl bg-slate-800" />
  </div>
);

const NotFound = () => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center text-slate-400">
    <div className="text-6xl font-semibold text-slate-600">404</div>
    <div className="mt-2 text-sm">The requested page does not exist.</div>
    <div className="mt-6">
      <Navigate to="/dashboard" replace />
    </div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardLayout title="Command Center" subtitle="Secure local intelligence operations"><Dashboard /></DashboardLayout>} />
        <Route path="/workbench" element={<DashboardLayout title="AI Workbench" subtitle="Run confidential industrial analysis using your local AI agents."><Workbench /></DashboardLayout>} />
        <Route path="/agents" element={<DashboardLayout title="Agents" subtitle="Monitor and manage your sovereign AI agent fleet."><Agents /></DashboardLayout>} />
        <Route path="/knowledge" element={<DashboardLayout title="Knowledge Base" subtitle="Internal industrial knowledge and vector index."><KnowledgeBase /></DashboardLayout>} />
        <Route path="/documents" element={<DashboardLayout title="Documents" subtitle="Uploaded files and document management."><Documents /></DashboardLayout>} />
        <Route path="/tasks" element={<DashboardLayout title="Tasks" subtitle="Operational intelligence queue and history."><Tasks /></DashboardLayout>} />
        <Route path="/audit" element={<DashboardLayout title="Audit Logs" subtitle="Operational traceability and compliance records."><AuditLogs /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout title="Settings" subtitle="System configuration and preferences."><Settings /></DashboardLayout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
