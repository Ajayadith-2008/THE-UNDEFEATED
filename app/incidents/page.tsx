import { AlertTriangle } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { ThreatBadge } from '@/components/threat-badge';
import { incidents } from '@/lib/mock-data';

export default function IncidentsPage() {
  return (
    <DashboardShell title="Incidents" subtitle="Grouped alerts and correlated evidence mapped into analyst-ready security cases.">
      <div className="grid gap-4">
        {incidents.map((incident) => (
          <div key={incident.id} className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{incident.id}</div>
                <div className="mt-2 text-2xl font-semibold text-white">{incident.title}</div>
                <div className="mt-2 text-sm text-slate-400">{incident.summary}</div>
              </div>
              <div className="flex items-center gap-2">
                <ThreatBadge value={incident.severity} severity={incident.severity as any} />
                <span className="rounded-full border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">{incident.status}</span>
              </div>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {incident.devices.map((device) => (
                <div key={device} className="rounded-2xl border border-white/10 bg-slate-950/30 p-3 text-sm text-slate-200">{device}</div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-sm text-slate-300">
              <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-200">AI summary</div>
              <p className="mt-2">{incident.aiSummary}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
