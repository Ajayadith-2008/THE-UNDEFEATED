'use client';

import { AreaChart, Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import { trafficData } from '@/lib/mock-data';

export function TrafficChart() {
  return (
    <div className="h-[280px] w-full rounded-3xl border border-white/10 bg-[#07141d]/80 p-4 shadow-panel">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Live network telemetry</div>
          <div className="mt-1 text-xl font-semibold text-white">Network traffic</div>
        </div>
        <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-200">DEMO DATA</div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={trafficData} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="incoming" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#5ac8fa" stopOpacity={0.45} />
              <stop offset="95%" stopColor="#5ac8fa" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="suspicious" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
          <XAxis dataKey="time" stroke="#64748b" tickLine={false} axisLine={false} />
          <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              background: '#081b29',
              border: '1px solid rgba(148,163,184,0.2)',
              borderRadius: '12px',
              color: '#e2e8f0',
            }}
          />
          <Legend />
          <Area type="monotone" dataKey="incoming" stroke="#5ac8fa" fill="url(#incoming)" strokeWidth={2.5} name="Incoming" />
          <Area type="monotone" dataKey="outgoing" stroke="#22d3ee" fill="transparent" strokeWidth={2} name="Outgoing" />
          <Area type="monotone" dataKey="suspicious" stroke="#8b5cf6" fill="url(#suspicious)" strokeWidth={2.2} name="Suspicious" />
          <Area type="monotone" dataKey="anomaly" stroke="#f87171" fill="transparent" strokeWidth={2} name="Anomaly spikes" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
