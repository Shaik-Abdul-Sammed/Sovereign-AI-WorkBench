export const mockKnowledge = {
  stats: { documents: 1284, chunks: 24560, embeddings: 24560, vectorStatus: 'ONLINE' },
  collections: [
    { id: 'maintenance', name: 'Machine Maintenance', description: 'Equipment manuals, maintenance schedules, and repair protocols.', documents: 342, chunks: 6840, lastUpdated: '2 days ago', status: 'Indexed' },
    { id: 'safety', name: 'Safety Guidelines', description: 'Industrial safety standards, compliance documents, and incident reports.', documents: 128, chunks: 2560, lastUpdated: '6 hours ago', status: 'Indexed' },
    { id: 'equipment', name: 'Equipment Manuals', description: 'Technical specifications, operating procedures, and parts catalogs.', documents: 567, chunks: 11340, lastUpdated: '1 day ago', status: 'Indexed' },
    { id: 'incidents', name: 'Previous Incidents', description: 'Historical incident reports, root cause analyses, and lessons learned.', documents: 247, chunks: 4940, lastUpdated: '2 hours ago', status: 'Indexed' },
  ],
  recentDocuments: [
    { name: 'Machine_Manual.pdf', type: 'PDF', time: '2 days ago', status: 'Indexed', collection: 'Machine Maintenance' },
    { name: 'Maintenance_Report.pdf', type: 'PDF', time: '1 day ago', status: 'Indexed', collection: 'Machine Maintenance' },
    { name: 'Safety_Guidelines.pdf', type: 'PDF', time: '6 hours ago', status: 'Indexed', collection: 'Safety Guidelines' },
    { name: 'Previous_Incidents.pdf', type: 'PDF', time: '2 hours ago', status: 'Indexed', collection: 'Previous Incidents' },
  ],
  searchResults: [
    { document: 'Machine_Manual.pdf', page: 42, excerpt: 'Regular bearing lubrication is required every 500 operating hours. Temperature should not exceed 80°C under full load.', relevance: 92 },
    { document: 'Maintenance_Report.pdf', page: 7, excerpt: 'Previous bearing overheating incident was caused by insufficient grease levels in the lubrication system.', relevance: 87 },
    { document: 'Previous_Incidents.pdf', page: 15, excerpt: 'Similar temperature deviation pattern observed in March 2025. Root cause: blocked lubrication line.', relevance: 78 },
  ],
};
