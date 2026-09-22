import { Activity, ArrowUpRight, Globe } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { SecurityCard } from '@/components/security-card';
import { TrafficChart } from '@/components/traffic-chart';

export default function LiveNetworkPage() {
  return (
    <DashboardShell title="Live Network" subtitle="Observed traffic, flow behavior, and active anomalies across core and edge telemetry.">
      <div className="grid gap-4 md:grid-cols-3">
        <SecurityCard title="Ingress traffic" value="4.72 Tb" detail="Current network throughput" tone="cyan" icon={<Globe className="h-4 w-4" />} />
        <SecurityCard title="Suspicious flows" value="312" detail="4.8% of observed traffic" tone="amber" icon={<Activity className="h-4 w-4" />} />
        <SecurityCard title="Anomaly score" value="0.92" detail="Baseline deviation is elevated" tone="red" icon={<ArrowUpRight className="h-4 w-4" />} />
      </div>
      <div className="mt-6">
        <TrafficChart />
      </div>
    </DashboardShell>
  );
}
