# Sovereign On-Premise Agentic AI Workbench

A secure, on-premise industrial AI platform where confidential company data is processed locally using open-weight multimodal LLMs, Agentic AI, RAG, vector search, and local tools without sending sensitive data to external cloud APIs.

## Tech Stack

### Backend
- FastAPI
- Python agents (Planner, Research, Vision, Analysis)
- RAG pipeline with chunking and retrieval
- Multimodal document and vision processing
- Vector store integration

### Frontend
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React icons
- Recharts

## Getting Started

### Prerequisites
- Node.js >= 18
- Python >= 3.10
- pip

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The dashboard will be available at `http://localhost:5173`.

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`.

### Environment Variables

Copy `.env.example` to `.env` in both the root and backend directories and configure your local settings.

## Dashboard Features

- **Command Center** — System overview with AI status, active agents, knowledge base metrics, and sovereignty indicators
- **AI Workbench** — Interactive analysis interface with file upload, agent selection, and live pipeline visualization
- **Agents** — Monitor and manage your sovereign AI agent fleet
- **Knowledge Base** — Browse and manage internal industrial documents and vector embeddings
- **Documents** — Uploaded file management with search and filtering
- **Tasks** — Operational intelligence queue and task history
- **Audit Logs** — Operational traceability and compliance records
- **Settings** — System configuration and preferences

## Architecture

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/       # Reusable UI primitives
│   │   └── dashboard/    # Dashboard-specific components
│   ├── pages/            # Route-level pages
│   ├── services/         # Axios API client with mock fallbacks
│   ├── data/             # Centralized mock dashboard data
│   ├── hooks/            # Custom React hooks (agent workflow)
│   └── styles/           # Global CSS and Tailwind config
```

## Security

This platform is designed for on-premise deployment. All sensitive data processing happens locally. External API calls to cloud services are blocked by design. Audit logging tracks all agent actions and data access.

## Demo Data

The frontend ships with realistic mock data so the dashboard is fully functional without a backend. When the FastAPI backend is running, the dashboard automatically connects to live endpoints.

## License

Proprietary — Sovereign AI Workbench
