import { Activity, ServerCog } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { SecurityCard } from '@/components/security-card';
import { devices } from '@/lib/mock-data';

export default function DevicesPage() {
  return (
    <DashboardShell title="Devices" subtitle="Asset-level monitoring with risk changes and AI-generated explanations.">
      <div className="grid gap-4 md:grid-cols-3">
        <SecurityCard title="High risk" value="3" detail="Assets with elevated risk" tone="red" icon={<ServerCog className="h-4 w-4" />} />
        <SecurityCard title="Threats observed" value="20" detail="Across monitored endpoints" tone="amber" icon={<Activity className="h-4 w-4" />} />
        <SecurityCard title="Monitoring uptime" value="99.97%" detail="Service availability" tone="cyan" icon={<ServerCog className="h-4 w-4" />} />
      </div>

      <div className="mt-6 grid gap-4">
        {devices.map((device) => (
          <div key={device.name} className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-xl font-semibold text-white">{device.name}</div>
                <div className="mt-1 text-sm text-slate-400">{device.ip} • {device.mac}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-200">{device.status}</span>
                <span className="rounded-full border border-red-500/20 bg-red-500/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-red-200">{device.risk} risk</span>
              </div>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-4 text-sm text-slate-300">
              <div><span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500">Traffic</span>{device.traffic}</div>
              <div><span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500">Threats</span>{device.threats}</div>
              <div><span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500">Last activity</span>{device.lastActivity}</div>
              <div><span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500">Risk explanation</span>Risk increased because this device generated unusual outbound connections compared with its historical baseline.</div>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
