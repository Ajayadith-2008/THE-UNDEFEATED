import { timeline } from '@/lib/mock-data';
import { ThreatBadge } from './threat-badge';

export function ThreatTimeline() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Threat activity</div>
          <div className="text-xl font-semibold text-white">Timeline</div>
        </div>
        <div className="rounded-full border border-violet-500/20 bg-violet-500/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-violet-200">AI correlation</div>
      </div>

      <div className="space-y-4">
        {timeline.map((event) => (
          <div key={`${event.time}-${event.label}`} className="flex gap-4 rounded-2xl border border-white/5 bg-slate-950/30 p-3">
            <div className="flex flex-col items-center">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
              <span className="mt-2 h-full w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm font-medium text-white">{event.time}</div>
                <ThreatBadge value={event.severity} severity={event.severity} />
              </div>
              <div className="mt-1 text-base font-medium text-slate-100">{event.label}</div>
              <div className="mt-1 text-sm text-slate-400">{event.summary}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
