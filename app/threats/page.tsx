import { ShieldAlert } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { ThreatBadge } from '@/components/threat-badge';
import { alerts } from '@/lib/mock-data';

export default function ThreatsPage() {
  return (
    <DashboardShell title="Threat Detection" subtitle="AI classification of suspicious network behavior and confidence-scored detections.">
      <div className="grid gap-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{alert.id}</div>
                  <ThreatBadge value={alert.severity} severity={alert.severity as any} />
                </div>
                <div className="mt-3 text-2xl font-semibold text-white">{alert.threat}</div>
                <div className="mt-2 text-sm text-slate-400">{alert.source} → {alert.destination}</div>
              </div>
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 text-right">
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Confidence</div>
                <div className="text-lg font-semibold text-cyan-100">{alert.confidence}%</div>
              </div>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-4 text-sm text-slate-300">
              <div><span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500">Protocol</span>{alert.protocol}</div>
              <div><span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500">Time</span>{alert.time}</div>
              <div><span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500">Status</span>{alert.status}</div>
              <div><span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500">Evidence</span>{alert.evidence[0]}</div>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
