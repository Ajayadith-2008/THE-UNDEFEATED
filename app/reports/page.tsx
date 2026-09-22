import { DashboardShell } from '@/components/dashboard-shell';
import { SecurityCard } from '@/components/security-card';
import { BarChart3, FileText, ShieldAlert } from 'lucide-react';

export default function ReportsPage() {
  return (
    <DashboardShell title="Reports" subtitle="AI-summary generation for operational, network, and incident reporting use cases.">
      <div className="grid gap-4 md:grid-cols-3">
        <SecurityCard title="Daily summary" value="Ready" detail="Generated from current telemetry" tone="cyan" icon={<FileText className="h-4 w-4" />} />
        <SecurityCard title="Weekly trend" value="Draft" detail="Threat posture comparison" tone="amber" icon={<BarChart3 className="h-4 w-4" />} />
        <SecurityCard title="Incident report" value="Queued" detail="Requires analyst review" tone="red" icon={<ShieldAlert className="h-4 w-4" />} />
      </div>
      <div className="mt-6 rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
        <div className="text-xl font-semibold text-white">AI-generated summary</div>
        <p className="mt-3 text-sm text-slate-300">Today’s network telemetry shows elevated SYN flood activity against the edge gateway, a coordinated port scan against the identity server, and repeated authentication anomalies from a single internal source. The system has not confirmed compromise but the pattern warrants analyst verification and containment review.</p>
      </div>
    </DashboardShell>
  );
}
