import axios from 'axios';
import { apiMockResponses } from '../data/mockDashboardData';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const mockRequest = (endpoint, fallback) =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ data: fallback }), 350);
  });

export const apiService = {
  chat: async (payload) => {
    try {
      const response = await api.post('/chat', payload);
      return response.data;
    } catch (error) {
      return apiMockResponses.chat;
    }
  },
  upload: async (payload) => {
    try {
      const response = await api.post('/upload', payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      return apiMockResponses.upload;
    }
  },
  runAgentAnalysis: async (payload) => {
    try {
      const response = await api.post('/agents/run', payload);
      return response.data;
    } catch (error) {
      return apiMockResponses.runAnalysis;
    }
  },
  getAgents: async () => {
    try {
      const response = await api.get('/agents');
      return response.data;
    } catch (error) {
      return { items: ['Planner', 'Research', 'Analysis', 'Vision'] };
    }
  },
  getTasks: async () => {
    try {
      const response = await api.get('/tasks');
      return response.data;
    } catch (error) {
      return { tasks: [] };
    }
  },
  getTaskById: async (taskId) => {
    try {
      const response = await api.get(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return { id: taskId, status: 'Completed' };
    }
  },
  getSystemStatus: async () => {
    try {
      const response = await api.get('/system/status');
      return response.data;
    } catch (error) {
      return apiMockResponses.systemStatus;
    }
  },
  getKnowledge: async () => {
    try {
      const response = await api.get('/knowledge');
      return response.data;
    } catch (error) {
      return { documents: 1284, chunks: 24560, embeddings: 24560 };
    }
  },
  getAudit: async () => {
    try {
      const response = await api.get('/audit');
      return response.data;
    } catch (error) {
      return { events: [] };
    }
  },
  mockRunAnalysis: async () => mockRequest('/agents/run', apiMockResponses.runAnalysis),
};

export default apiService;
