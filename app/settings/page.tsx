import { DashboardShell } from '@/components/dashboard-shell';
import { ShieldCheck } from 'lucide-react';

export default function SettingsPage() {
  return (
    <DashboardShell title="Settings" subtitle="Security controls, integrations, and operational guardrails for the AI security workflow.">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
          <div className="mb-4 flex items-center gap-2 text-xl font-semibold text-white"><ShieldCheck className="h-5 w-5 text-emerald-400" /> Detection controls</div>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/30 p-3"><span>DDoS detection</span><span>Enabled</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/30 p-3"><span>Port scan heuristics</span><span>Enabled</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/30 p-3"><span>AI correlation engine</span><span>Enabled</span></div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
          <div className="mb-4 text-xl font-semibold text-white">High-impact actions</div>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-3">Blocking an IP, isolating a device, or closing an incident requires explicit confirmation before execution.</div>
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-3">AI recommendations are advisory only and remain visible for analyst approval.</div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
