import { useEffect, useState } from 'react';
import WelcomeHeader from '../dashboard/WelcomeHeader';
import SystemOverview from '../dashboard/SystemOverview';
import AIWorkbench from '../dashboard/AIWorkbench';
import AgentPipeline from '../dashboard/AgentPipeline';
import LocalAIStack from '../dashboard/LocalAIStack';
import SovereigntyPanel from '../dashboard/SovereigntyPanel';
import KnowledgeBase from '../dashboard/KnowledgeBase';
import RecentTasks from '../dashboard/RecentTasks';
import AuditActivity from '../dashboard/AuditActivity';
import AnalysisResult from '../dashboard/AnalysisResult';
import { dashboardData } from '../../data/mockDashboardData';
import { apiService } from '../../services/api';
import { useAgentWorkflow } from '../../hooks/useAgentWorkflow';

const DashboardPage = () => {
  const [prompt, setPrompt] = useState(dashboardData.app.defaultDemoPrompt);
  const [files, setFiles] = useState(dashboardData.uploadedFiles);
  const [systemStatus, setSystemStatus] = useState(null);
  const { isRunning, result, error, pipeline, startWorkflow } = useAgentWorkflow();

  useEffect(() => {
    const fetchStatus = async () => {
      const data = await apiService.getSystemStatus();
      setSystemStatus(data);
    };
    fetchStatus();
  }, []);

  const handleRunAnalysis = async () => {
    await startWorkflow({ prompt, files });
  };

  return (
    <>
      <WelcomeHeader />
      <SystemOverview />

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.55fr_0.95fr]">
        <AIWorkbench
          prompt={prompt}
          setPrompt={setPrompt}
          files={files}
          setFiles={setFiles}
          isRunning={isRunning}
          onRunAnalysis={handleRunAnalysis}
          error={error}
        />
        <div className="space-y-6">
          <AgentPipeline pipeline={pipeline} />
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <LocalAIStack />
        <SovereigntyPanel />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <KnowledgeBase />
        <RecentTasks />
      </div>

      <div className="mt-6">
        {result ? <AnalysisResult result={result} /> : null}
      </div>

      <div className="mt-6">
        <AuditActivity />
      </div>
    </>
  );
};

export default DashboardPage;
