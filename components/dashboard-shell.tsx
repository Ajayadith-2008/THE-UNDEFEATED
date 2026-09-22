'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Bell, Bot, ChevronDown, Globe, Menu, Search, ShieldCheck, Sparkles, Wifi, Zap } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { GlobalSearch } from './global-search';

export function DashboardShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050d16] text-slate-100">
      <div className="flex min-h-screen">
        <aside className={cn('fixed inset-y-0 left-0 z-40 w-72 border-r border-white/10 bg-[#07141d]/95 p-5 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0', sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0')}>
          <div className="flex items-center justify-between gap-3 pb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-200">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">AI SOC</div>
                <div className="text-lg font-semibold text-white">SentinelAI</div>
              </div>
            </div>
            <button className="rounded-lg border border-white/10 p-2 lg:hidden" onClick={() => setSidebarOpen(false)}>
              <Menu className="h-4 w-4" />
            </button>
          </div>

          <nav className="space-y-1">
            {navItems.map(({ label, href, icon: Icon }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={label}
                  href={href}
                  className={cn(
                    'flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition-all',
                    active ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-100 shadow-panel' : 'border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4">
            <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-violet-200/80">
              <span>Live signal</span>
              <span className="inline-flex items-center gap-1 text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Online</span>
            </div>
            <div className="mt-3 text-2xl font-semibold text-white">99.97%</div>
            <div className="mt-1 text-xs text-slate-400">Monitoring nodes healthy</div>
          </div>
        </aside>

        <div className="flex-1 lg:ml-72">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07141d]/80 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
              <div className="flex items-center gap-3">
                <button className="rounded-xl border border-white/10 p-2 lg:hidden" onClick={() => setSidebarOpen(true)}>
                  <Menu className="h-4 w-4" />
                </button>
                <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-200">
                  Demo mode
                </div>
              </div>

              <div className="hidden flex-1 justify-center md:flex">
                <GlobalSearch />
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-300 md:flex">
                  <Wifi className="h-3.5 w-3.5 text-emerald-400" />
                  Network status
                </div>
                <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-300 md:flex">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  Real-time
                </div>
                <button className="rounded-xl border border-white/10 bg-slate-900/80 p-2 text-slate-200">
                  <Bell className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-100">
                  <Sparkles className="h-4 w-4" />
                  AI Assistant
                </button>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-2 py-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-xs font-semibold text-slate-950">SA</div>
                  <div className="hidden text-left md:block">
                    <div className="text-xs text-slate-300">Security Analyst</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">SOC-07</div>
                  </div>
                  <ChevronDown className="hidden h-4 w-4 text-slate-400 md:block" />
                </div>
              </div>
            </div>
          </header>

          <main className="px-4 py-5 md:px-6 lg:py-8">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200">
                  <Bot className="h-3.5 w-3.5" />
                  AI-powered network security intelligence
                </div>
                <h1 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h1>
                <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-200">
                <Zap className="h-3.5 w-3.5" />
                Analysis feed active
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
