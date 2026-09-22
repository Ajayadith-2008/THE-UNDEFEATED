import Link from 'next/link';
import { Activity, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050d16] px-4">
      <div className="w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[#081821]/90 shadow-panel">
        <div className="grid md:grid-cols-2">
          <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-200">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-slate-500">AI SOC</div>
                <div className="text-2xl font-semibold text-white">SentinelAI</div>
              </div>
            </div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-violet-200">
              <Sparkles className="h-3.5 w-3.5" />
              DEMO MODE
            </div>

            <h1 className="text-4xl font-semibold text-white">Secure your network with AI-assisted monitoring.</h1>
            <p className="mt-4 max-w-md text-sm text-slate-400">
              Detect abnormal behavior, correlate suspicious events, and surface analyst-ready explanations before threats escalate.
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-3">
                <Activity className="h-5 w-5 text-cyan-300" />
                Real-time anomaly detection and baseline comparison
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-3">
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
                AI threat stories that explain model confidence and evidence
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-6 text-sm uppercase tracking-[0.25em] text-slate-500">Sign in</div>
            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Analyst email</span>
                <input defaultValue="analyst@sentinelai.local" className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Password</span>
                <input type="password" defaultValue="••••••••" className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none" />
              </label>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Use secured SSO</span>
                <span>Forgot password?</span>
              </div>
              <Link href="/dashboard" className="mt-2 flex items-center justify-center gap-2 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm font-medium text-cyan-100">
                Continue to dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
