import { notFound } from 'next/navigation';
import { DashboardShell } from '@/components/dashboard-shell';
import { incidents } from '@/lib/mock-data';

export default function IncidentDetailPage({ params }: { params: { id: string } }) {
  const incident = incidents.find((item) => item.id === params.id);
  if (!incident) notFound();

  return (
    <DashboardShell title={incident.id} subtitle="Incident timeline, evidence, and analyst notes.">
      <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
        <div className="mb-4 text-3xl font-semibold text-white">{incident.title}</div>
        <p className="text-sm text-slate-400">{incident.summary}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Timeline</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {incident.timeline.map((step) => <li key={step}>• {step}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Affected devices</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {incident.devices.map((device) => <li key={device}>• {device}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-sm text-slate-300">
          <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-200">AI summary</div>
          <p className="mt-2">{incident.aiSummary}</p>
        </div>
      </div>
    </DashboardShell>
  );
}
