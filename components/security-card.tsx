'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function SecurityCard({
  title,
  value,
  detail,
  tone = 'cyan',
  icon,
}: {
  title: string;
  value: string;
  detail: string;
  tone?: 'cyan' | 'amber' | 'red' | 'violet' | 'emerald' | 'slate';
  icon: ReactNode;
}) {
  const toneStyles = {
    cyan: 'border-cyan-500/30 bg-cyan-500/5 text-cyan-100',
    amber: 'border-amber-500/30 bg-amber-500/5 text-amber-100',
    red: 'border-red-500/30 bg-red-500/5 text-red-100',
    violet: 'border-violet-500/30 bg-violet-500/5 text-violet-100',
    emerald: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-100',
    slate: 'border-slate-500/30 bg-slate-500/5 text-slate-100',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn(
        'rounded-2xl border bg-slate-950/60 p-4 shadow-panel backdrop-blur-sm',
        toneStyles[tone]
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80">{icon}</span>
          {title}
        </div>
      </div>
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="mt-2 text-xs text-slate-300">{detail}</div>
    </motion.div>
  );
}
