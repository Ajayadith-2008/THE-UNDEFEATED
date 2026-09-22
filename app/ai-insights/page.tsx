import { BrainCircuit } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { insights } from '@/lib/mock-data';

export default function AIInsightsPage() {
  return (
    <DashboardShell title="AI Insights" subtitle="Proactive recommendations and cross-event correlation built from observed telemetry and historical baseline data.">
      <div className="grid gap-4">
        {insights.map((insight) => (
          <div key={insight.title} className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
            <div className="flex items-center justify-between gap-3">
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{insight.title}</div>
              <button className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-cyan-200">{insight.action}</button>
            </div>
            <div className="mt-3 text-xl font-medium text-white">{insight.detail}</div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
