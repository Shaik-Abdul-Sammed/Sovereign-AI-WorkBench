export const mockDocuments = [
  { id: 1, name: 'Inspection_Report.pdf', type: 'PDF', size: '2.1 MB', uploaded: '1 hour ago', status: 'Indexed', workspace: 'Maintenance Ops' },
  { id: 2, name: 'Machine_Image.jpg', type: 'JPG', size: '1.7 MB', uploaded: '1 hour ago', status: 'Indexed', workspace: 'Maintenance Ops' },
  { id: 3, name: 'Machine_Manual.pdf', type: 'PDF', size: '4.3 MB', uploaded: '2 days ago', status: 'Indexed', workspace: 'Factory Operations' },
  { id: 4, name: 'Maintenance_Report.pdf', type: 'PDF', size: '1.8 MB', uploaded: '1 day ago', status: 'Indexed', workspace: 'Maintenance Ops' },
  { id: 5, name: 'Safety_Guidelines.pdf', type: 'PDF', size: '3.2 MB', uploaded: '6 hours ago', status: 'Indexed', workspace: 'Safety Engineering' },
  { id: 6, name: 'Previous_Incidents.pdf', type: 'PDF', size: '2.7 MB', uploaded: '2 hours ago', status: 'Indexed', workspace: 'Maintenance Ops' },
  { id: 7, name: 'Safety_Protocol_v2.pdf', type: 'PDF', size: '1.5 MB', uploaded: '3 days ago', status: 'Processing', workspace: 'Safety Engineering' },
  { id: 8, name: 'Equipment_Manual_Section_B.pdf', type: 'PDF', size: '5.1 MB', uploaded: '1 week ago', status: 'Indexed', workspace: 'Factory Operations' },
  { id: 9, name: 'Sensor_Readings_August.csv', type: 'CSV', size: '890 KB', uploaded: '4 hours ago', status: 'Indexed', workspace: 'Production Monitoring' },
  { id: 10, name: 'Thermal_Scan_Zone3.png', type: 'PNG', size: '3.4 MB', uploaded: '30 min ago', status: 'Processing', workspace: 'Maintenance Ops' },
];

export const documentFilters = ['All', 'PDF', 'DOCX', 'TXT', 'Images', 'CSV'];

export const processingPipeline = [
  { step: 'Upload', description: 'File received and validated' },
  { step: 'Extract', description: 'Text and metadata extraction' },
  { step: 'Chunk', description: 'Semantic chunking for retrieval' },
  { step: 'Embed', description: 'Vector embedding generation' },
  { step: 'Index', description: 'Stored in local vector database' },
];
