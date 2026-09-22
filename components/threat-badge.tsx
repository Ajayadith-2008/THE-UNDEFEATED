import { cn } from '@/lib/utils';

export function ThreatBadge({ value, severity }: { value: string; severity: 'Critical' | 'High' | 'Medium' | 'Low' | 'Informational' }) {
  const palette = {
    Critical: 'bg-red-500/12 text-red-200 border-red-500/30',
    High: 'bg-amber-500/12 text-amber-200 border-amber-500/30',
    Medium: 'bg-violet-500/12 text-violet-200 border-violet-500/30',
    Low: 'bg-cyan-500/12 text-cyan-200 border-cyan-500/30',
    Informational: 'bg-slate-500/12 text-slate-200 border-slate-500/20',
  };

  return (
    <span className={cn('inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em]', palette[severity])}>
      {value}
    </span>
  );
}
