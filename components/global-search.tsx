'use client';

import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { searchIndex } from '@/lib/mock-data';

export function GlobalSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex.filter((item) => `${item.title} ${item.detail}`.toLowerCase().includes(q)).slice(0, 5);
  }, [query]);

  return (
    <div className="relative w-full max-w-xl">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search IPs, devices, threats, incidents..."
        className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-2.5 pl-9 pr-3 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500"
      />
      {results.length > 0 && (
        <div className="absolute left-0 right-0 top-[calc(100%+10px)] rounded-2xl border border-white/10 bg-[#0d1d2a]/95 p-2 shadow-panel backdrop-blur-xl">
          {results.map((item) => (
            <div key={`${item.type}-${item.title}`} className="flex items-center justify-between rounded-xl px-3 py-2 hover:bg-white/5">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.type}</div>
                <div className="text-sm text-white">{item.title}</div>
              </div>
              <div className="max-w-[180px] text-right text-xs text-slate-400">{item.detail}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
