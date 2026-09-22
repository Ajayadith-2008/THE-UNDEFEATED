import { DashboardShell } from '@/components/dashboard-shell';
import { AttackMapVisual } from '@/components/attack-map-visual';
import { SecurityCard } from '@/components/security-card';
import { Radar, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function AttackMapPage() {
  return (
    <DashboardShell title="Attack Relationship Map" subtitle="Correlated suspicious flows and probable escalation chains across the network.">
      <div className="grid gap-4 md:grid-cols-3">
        <SecurityCard title="Connected alerts" value="14" detail="Related suspicious events" tone="cyan" icon={<ShieldAlert className="h-4 w-4" />} />
        <SecurityCard title="Affected services" value="6" detail="High-risk targets" tone="amber" icon={<Radar className="h-4 w-4" />} />
        <SecurityCard title="Containment readiness" value="73%" detail="Analyst review pending" tone="emerald" icon={<ShieldCheck className="h-4 w-4" />} />
      </div>
      <div className="mt-6">
        <AttackMapVisual />
      </div>
    </DashboardShell>
  );
}
