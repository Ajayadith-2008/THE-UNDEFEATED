import { attackNodes } from '@/lib/mock-data';

export function AttackMapVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Correlation layer</div>
          <div className="text-xl font-semibold text-white">Attack relationship map</div>
        </div>
        <div className="rounded-full border border-amber-500/20 bg-amber-500/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-200">Threat chain</div>
      </div>

      <div className="relative h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.12),transparent_50%)]">
        <svg viewBox="0 0 950 360" className="h-full w-full">
          <line x1="160" y1="110" x2="260" y2="110" stroke="rgba(103,232,249,0.7)" strokeWidth="2" strokeDasharray="8 8" />
          <line x1="340" y1="110" x2="430" y2="110" stroke="rgba(103,232,249,0.7)" strokeWidth="2" strokeDasharray="8 8" />
          <line x1="510" y1="110" x2="610" y2="110" stroke="rgba(103,232,249,0.7)" strokeWidth="2" strokeDasharray="8 8" />
          <line x1="690" y1="110" x2="790" y2="110" stroke="rgba(103,232,249,0.7)" strokeWidth="2" strokeDasharray="8 8" />
          <line x1="450" y1="150" x2="450" y2="220" stroke="rgba(168,85,247,0.7)" strokeWidth="2" strokeDasharray="8 8" />
          {attackNodes.map((node) => (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              <circle r={node.type === 'attacker' ? 30 : 26} fill={node.type === 'attacker' ? '#f87171' : node.type === 'suspect' ? '#f59e0b' : node.type === 'gateway' ? '#22d3ee' : '#8b5cf6'} opacity={0.9} />
              <circle r={node.type === 'attacker' ? 35 : 31} fill="transparent" stroke="rgba(255,255,255,0.25)" strokeDasharray="6 6" />
              <text x="0" y="45" textAnchor="middle" fill="#e2e8f0" fontSize="14">{node.label}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
