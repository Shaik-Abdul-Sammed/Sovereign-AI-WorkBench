import { Bell, Lock, Monitor, ShieldCheck, User, Zap, Globe } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const SettingsPage = () => {
  const settingsSections = [
    {
      title: 'Profile',
      icon: User,
      items: [
        { label: 'Name', value: 'Admin' },
        { label: 'Role', value: 'Operations Lead' },
        { label: 'Email', value: 'admin@sovereign-ai.local' },
      ],
    },
    {
      title: 'Workspace',
      icon: Monitor,
      items: [
        { label: 'Workspace Name', value: 'Maintenance Ops' },
        { label: 'Workspace ID', value: 'WS-1042-MAINT' },
        { label: 'Description', value: 'Factory floor maintenance operations' },
      ],
    },
    {
      title: 'AI Configuration',
      icon: Zap,
      items: [
        { label: 'Local LLM', value: 'Qwen 14B' },
        { label: 'Vision Model', value: 'Open Multimodal' },
        { label: 'Embedding Model', value: 'BGE Large' },
        { label: 'Vector Database', value: 'Local Chroma' },
      ],
    },
    {
      title: 'Security',
      icon: ShieldCheck,
      items: [
        { label: 'Authentication', value: 'Enabled' },
        { label: 'Audit Logging', value: 'Enabled' },
        { label: 'Workspace Isolation', value: 'Enabled' },
        { label: 'External API Policy', value: 'Blocked (demo)' },
      ],
    },
    {
      title: 'Interface',
      icon: Globe,
      items: [
        { label: 'Theme', value: 'Dark' },
        { label: 'Notifications', value: 'Enabled' },
        { label: 'Language', value: 'English' },
      ],
    },
    {
      title: 'System Information',
      icon: Monitor,
      items: [
        { label: 'Application Version', value: '1.0.0' },
        { label: 'Environment', value: 'Demo' },
        { label: 'Backend Status', value: 'Unavailable (mock)' },
        { label: 'AI Runtime Status', value: 'Demo' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-50">Settings</h2>
        <p className="mt-1 text-sm text-slate-400">System configuration and preferences.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {settingsSections.map((section) => (
          <Card key={section.title} title={section.title} subtitle={`${section.title.toLowerCase()} configuration`}>
            <div className="space-y-3">
              {section.items.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5">
                  <span className="text-sm text-slate-200">{item.label}</span>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-emerald-300">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="secondary">Edit</Button>
            </div>
          </Card>
        ))}
      </div>
      <Card title="Account" subtitle="User profile and authentication">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/15 text-lg font-semibold text-sky-200">AD</div>
          <div>
            <div className="text-sm font-medium text-slate-100">Admin</div>
            <div className="text-xs text-slate-400">admin@sovereign-ai.local</div>
            <div className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-emerald-300">
              <Lock className="h-3 w-3" />
              Verified Local Account
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SettingsPage;
