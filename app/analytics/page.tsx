import { BarChart3 } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { SecurityCard } from '@/components/security-card';

export default function AnalyticsPage() {
  return (
    <DashboardShell title="Security Analytics" subtitle="Threat trends, protocol distribution, anomaly frequency, and historical comparison over time.">
      <div className="grid gap-4 md:grid-cols-3">
        <SecurityCard title="Threat trend" value="+18.4%" detail="Compared with last 7 days" tone="amber" icon={<BarChart3 className="h-4 w-4" />} />
        <SecurityCard title="Protocol mix" value="TCP 62%" detail="Dominant observed traffic" tone="cyan" icon={<BarChart3 className="h-4 w-4" />} />
        <SecurityCard title="Anomaly frequency" value="14 / hr" detail="Behavioral anomalies" tone="violet" icon={<BarChart3 className="h-4 w-4" />} />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
          <div className="text-xl font-semibold text-white">Threat categories</div>
          <div className="mt-4 space-y-4 text-sm text-slate-300">
            <div><div className="mb-1 flex justify-between"><span>DDoS</span><span>42%</span></div><div className="h-2 rounded-full bg-slate-800"><div className="h-full w-[42%] rounded-full bg-red-500" /></div></div>
            <div><div className="mb-1 flex justify-between"><span>Scanning</span><span>31%</span></div><div className="h-2 rounded-full bg-slate-800"><div className="h-full w-[31%] rounded-full bg-amber-500" /></div></div>
            <div><div className="mb-1 flex justify-between"><span>Auth anomalies</span><span>18%</span></div><div className="h-2 rounded-full bg-slate-800"><div className="h-full w-[18%] rounded-full bg-violet-500" /></div></div>
            <div><div className="mb-1 flex justify-between"><span>Exfiltration</span><span>9%</span></div><div className="h-2 rounded-full bg-slate-800"><div className="h-full w-[9%] rounded-full bg-cyan-500" /></div></div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
          <div className="text-xl font-semibold text-white">Detection accuracy metrics</div>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">Precision • 91.4%</div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">Recall • 87.9%</div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">False positive rate • 4.8%</div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">Analyst override rate • 12.1%</div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
