import { notFound } from 'next/navigation';
import { DashboardShell } from '@/components/dashboard-shell';
import { ThreatBadge } from '@/components/threat-badge';
import { alerts } from '@/lib/mock-data';

export default function ThreatDetailPage({ params }: { params: { id: string } }) {
  const alert = alerts.find((item) => item.id === params.id);

  if (!alert) notFound();

  return (
    <DashboardShell title={`Threat ${alert.id}`} subtitle="AI-generated threat narrative built from observed telemetry and model confidence.">
      <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">{alert.id}</div>
            <div className="mt-2 text-3xl font-semibold text-white">{alert.threat}</div>
          </div>
          <ThreatBadge value={alert.severity} severity={alert.severity as any} />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4"><div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Source</div><div className="mt-2 text-lg text-white">{alert.source}</div></div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4"><div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Destination</div><div className="mt-2 text-lg text-white">{alert.destination}</div></div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4"><div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Protocol</div><div className="mt-2 text-lg text-white">{alert.protocol}</div></div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4"><div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Confidence</div><div className="mt-2 text-lg text-white">{alert.confidence}%</div></div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Observed data</div>
            <p className="mt-3 text-sm text-slate-300">The system observed a sustained increase in connection density and a single-target concentration. This differs from the historical baseline of the associated device and service endpoint.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Model prediction</div>
            <p className="mt-3 text-sm text-slate-300">The predictive model classifies this pattern as probable {alert.threat.toLowerCase()} based on elevated connection frequency, repeated port targeting, and a strong deviation from expected behavior.</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Evidence</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {alert.evidence.map((item: string) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
      </div>
    </DashboardShell>
  );
}
