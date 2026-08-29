import { useState, useMemo } from 'react';
import { dashboardData } from '../data/mockDashboardData';

export const useAgentWorkflow = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [pipeline, setPipeline] = useState(dashboardData.agentPipeline);

  const workflows = useMemo(
    () => [
      'Planner Agent',
      'RAG Agent',
      'Vision Agent',
      'Analysis Agent',
      'Evidence',
      'Recommendation',
    ],
    []
  );

  const startWorkflow = async ({ prompt, files }) => {
    if (!prompt || !prompt.trim()) {
      setError('Please provide a task for the AI agents to analyze.');
      return;
    }

    setError('');
    setIsRunning(true);
    setResult(null);
    setPipeline([
      { name: 'User Request', status: 'COMPLETED', action: 'Prompt received and queued', time: '0.1s', tone: 'success' },
      { name: 'Planner Agent', status: 'RUNNING', action: 'Planning investigation steps', time: '0.4s', tone: 'running' },
      { name: 'Research / RAG Agent', status: 'WAITING', action: 'Retrieving internal knowledge', time: '—', tone: 'waiting' },
      { name: 'Vision Agent', status: 'WAITING', action: 'Reviewing uploaded assets', time: '—', tone: 'waiting' },
      { name: 'Analysis Agent', status: 'WAITING', action: 'Synthesizing evidence', time: '—', tone: 'waiting' },
      { name: 'Evidence', status: 'WAITING', action: 'Collecting supporting facts', time: '—', tone: 'waiting' },
      { name: 'Final Recommendation', status: 'WAITING', action: 'Drafting industrial guidance', time: '—', tone: 'waiting' },
    ]);

    const timer = setTimeout(() => {
      setPipeline([
        { name: 'User Request', status: 'COMPLETED', action: 'Prompt received and queued', time: '0.1s', tone: 'success' },
        { name: 'Planner Agent', status: 'COMPLETED', action: 'Task decomposed into 5 steps', time: '0.8s', tone: 'success' },
        { name: 'Research / RAG Agent', status: 'COMPLETED', action: '12 relevant knowledge chunks retrieved', time: '1.2s', tone: 'success' },
        { name: 'Vision Agent', status: 'COMPLETED', action: 'Analyzed uploaded machine image', time: '1.9s', tone: 'success' },
        { name: 'Analysis Agent', status: 'COMPLETED', action: 'Correlation complete across evidence', time: '2.6s', tone: 'success' },
        { name: 'Evidence', status: 'COMPLETED', action: '3 supporting facts compiled', time: '3.1s', tone: 'success' },
        { name: 'Final Recommendation', status: 'COMPLETED', action: 'Maintenance guidance generated', time: '3.6s', tone: 'success' },
      ]);

      setResult({
        title: 'Possible Failure',
        value: 'Bearing Overheating',
        confidence: 87,
        evidence: [
          'Temperature increased by 18%',
          'Similar incident found in internal records',
          'Previous maintenance report shows similar symptoms',
        ],
        sources: files && files.length ? files.map((file) => file.name) : ['Machine_Manual.pdf', 'Maintenance_Report.pdf', 'Previous_Incidents.pdf'],
        recommendation: 'Inspect bearing lubrication system and verify operating temperature.',
        prompt,
      });
      setIsRunning(false);
      clearTimeout(timer);
    }, 2200);
  };

  return { isRunning, result, error, pipeline, workflows, startWorkflow };
};
