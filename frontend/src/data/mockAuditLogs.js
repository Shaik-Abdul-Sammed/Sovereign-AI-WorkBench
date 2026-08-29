export const mockAuditLogs = [
  { id: 'AUD-1042', timestamp: '2026-08-28 16:32:01', actor: 'Admin', action: 'Uploaded Inspection_Report.pdf', resource: 'Inspection_Report.pdf', workspace: 'Maintenance Ops', status: 'Success', category: 'User Activity' },
  { id: 'AUD-1041', timestamp: '2026-08-28 16:32:05', actor: 'Planner Agent', action: 'Created task #1042', resource: 'Task #1042', workspace: 'Maintenance Ops', status: 'Success', category: 'Agent Activity' },
  { id: 'AUD-1040', timestamp: '2026-08-28 16:32:08', actor: 'RAG Agent', action: 'Retrieved Machine_Manual.pdf from knowledge base', resource: 'Machine_Manual.pdf', workspace: 'Maintenance Ops', status: 'Success', category: 'Document Access' },
  { id: 'AUD-1039', timestamp: '2026-08-28 16:32:12', actor: 'Vision Agent', action: 'Analyzed Machine_Image.jpg', resource: 'Machine_Image.jpg', workspace: 'Maintenance Ops', status: 'Success', category: 'Agent Activity' },
  { id: 'AUD-1038', timestamp: '2026-08-28 16:32:18', actor: 'Analysis Agent', action: 'Generated bearing overheating report', resource: 'Report #1042', workspace: 'Maintenance Ops', status: 'Success', category: 'Agent Activity' },
  { id: 'AUD-1037', timestamp: '2026-08-28 16:28:44', actor: 'System', action: 'Blocked external API call to cloud service', resource: 'External API', workspace: 'Global', status: 'Blocked', category: 'Security' },
  { id: 'AUD-1036', timestamp: '2026-08-28 16:15:22', actor: 'Admin', action: 'Modified workspace isolation policy', resource: 'Workspace Policy', workspace: 'Global', status: 'Success', category: 'Security' },
  { id: 'AUD-1035', timestamp: '2026-08-28 15:58:11', actor: 'RAG Agent', action: 'Failed to retrieve Safety_Protocol_v2.pdf — still processing', resource: 'Safety_Protocol_v2.pdf', workspace: 'Safety Engineering', status: 'Failed', category: 'Error' },
  { id: 'AUD-1034', timestamp: '2026-08-28 15:42:09', actor: 'Admin', action: 'Downloaded Maintenance_Report.pdf', resource: 'Maintenance_Report.pdf', workspace: 'Maintenance Ops', status: 'Success', category: 'User Activity' },
  { id: 'AUD-1033', timestamp: '2026-08-28 15:30:00', actor: 'Vision Agent', action: 'Flagged corrosion in pump assembly image', resource: 'Pump_Image_003.png', workspace: 'Production Monitoring', status: 'Failed', category: 'Error' },
];

export const auditFilters = ['All', 'User Activity', 'Agent Activity', 'Document Access', 'Security', 'Errors'];

export const auditSummary = {
  total: 1247,
  userActions: 389,
  agentActions: 612,
  securityEvents: 156,
  errors: 90,
};
