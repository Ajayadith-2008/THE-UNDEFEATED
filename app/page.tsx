import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Cpu,
  Database,
  KeyRound,
  Lock,
  Search,
  ShieldCheck,
  ShieldX,
  Sparkles,
  Users,
  Wifi,
  Zap,
} from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { SecurityCard } from '@/components/security-card';
import { ThreatBadge } from '@/components/threat-badge';

const statusCards = [
  { title: 'Security Status', value: 'Healthy', detail: 'Risk posture stable', tone: 'emerald', icon: <ShieldCheck className="h-4 w-4" /> },
  { title: 'Employees', value: '128', detail: 'Across 7 departments', tone: 'cyan', icon: <Users className="h-4 w-4" /> },
  { title: 'Active Sessions', value: '43', detail: '2 flagged for review', tone: 'violet', icon: <Wifi className="h-4 w-4" /> },
  { title: 'High Risk Accounts', value: '4', detail: '2 require action', tone: 'amber', icon: <AlertTriangle className="h-4 w-4" /> },
  { title: 'Pending Requests', value: '7', detail: '3 need approval', tone: 'cyan', icon: <KeyRound className="h-4 w-4" /> },
  { title: 'Blocked Accounts', value: '3', detail: '2 suspended by policy', tone: 'red', icon: <ShieldX className="h-4 w-4" /> },
  { title: 'Security Alerts', value: '12', detail: '1 critical item', tone: 'red', icon: <Zap className="h-4 w-4" /> },
];

const employees = [
  { name: 'Sarah Williams', department: 'Engineering', role: 'Developer', access: 'Standard', sessions: '2 sessions', risk: 'Low', last: '2 min ago', status: 'Active' },
  { name: 'Rahul Kumar', department: 'Finance', role: 'Analyst', access: 'Restricted', sessions: '1 session', risk: 'Medium', last: '8 min ago', status: 'Active' },
  { name: 'John Smith', department: 'Engineering', role: 'Admin', access: 'Privileged', sessions: '3 sessions', risk: 'High', last: '1 min ago', status: 'Active' },
  { name: 'Emma Walker', department: 'People Ops', role: 'HR Manager', access: 'Standard', sessions: '1 session', risk: 'Low', last: '14 min ago', status: 'Active' },
  { name: 'Lucas Chen', department: 'Product', role: 'Designer', access: 'Standard', sessions: '2 sessions', risk: 'Low', last: '6 min ago', status: 'In Review' },
];

const alerts = [
  { title: 'Unusual login', detail: 'John Smith signed in from an untrusted device.', severity: 'High' },
  { title: 'Privilege escalation', detail: 'Admin rights changed on Finance API node.', severity: 'Critical' },
  { title: 'Multiple failed logins', detail: 'Three sequential failures against VPN gateway.', severity: 'Medium' },
  { title: 'New device', detail: 'Laptop-042 connected to engineering network.', severity: 'Low' },
];

const activity = [
  { time: '10:42', event: 'John Smith accessed Production Database', signal: 'critical' },
  { time: '10:41', event: 'Sarah logged into GitHub', signal: 'neutral' },
  { time: '10:39', event: 'New device connected', signal: 'warning' },
  { time: '10:36', event: 'Admin permission changed', signal: 'warning' },
  { time: '10:31', event: 'Failed login attempt', signal: 'critical' },
];

const accessRequests = [
  { name: 'Sarah Williams', request: 'Production Dashboard', reason: 'Need access for deployment monitoring.', ai: 'Access appears consistent with her role.', status: 'Review' },
  { name: 'Rahul Kumar', request: 'Vendor Portal', reason: 'Quarterly audit access required.', ai: 'Requires manager approval and 2FA.', status: 'Pending' },
  { name: 'Emma Walker', request: 'Payroll Export', reason: 'Monthly payroll verification.', ai: 'Role matches but data scope should be limited.', status: 'Review' },
];

const matrix = [
  { role: 'Developer', github: true, jira: true, database: '⚠', hr: false },
  { role: 'Designer', github: true, jira: true, database: false, hr: false },
  { role: 'Finance', github: false, jira: true, database: false, hr: true },
  { role: 'Admin', github: true, jira: true, database: true, hr: true },
];

const accessPill = (value: boolean | string) => {
  if (value === true) return <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-[10px] font-semibold text-emerald-300">✓</span>;
  if (value === false) return <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-[10px] font-semibold text-red-300">✕</span>;
  return <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/15 text-[10px] font-semibold text-amber-300">⚠</span>;
};

export default function Page() {
  return (
    <DashboardShell title="Security Command Center" subtitle="Monitor employee access, permissions and network activity.">
      <div className="space-y-6">
        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-5 shadow-panel">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" />
                AI security summary
              </div>

              <div className="text-3xl font-semibold text-white">
                Security Status
                <span className="ml-2 text-emerald-300">Healthy</span>
              </div>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                Your organization is currently in a healthy state. 3 access requests require review, 2 employees show unusual activity, and 1 privileged account changed permissions today.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-100">Review Now</button>
              <button className="rounded-xl border border-white/10 bg-slate-950/50 px-4 py-2.5 text-sm font-medium text-slate-100">Ask AI</button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          {statusCards.map((item) => (
            <SecurityCard key={item.title} title={item.title} value={item.value} detail={item.detail} tone={item.tone as 'emerald' | 'cyan' | 'violet' | 'amber' | 'red' | 'slate'} icon={item.icon} />
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.7fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Employee access</div>
                <div className="mt-1 text-xl font-semibold text-white">Access overview</div>
              </div>

              <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                <button className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1.5">All</button>
                <button className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1.5">Engineering</button>
                <button className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1.5">Finance</button>
                <button className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1.5">High Risk</button>
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full max-w-md">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <input placeholder="Search employee" className="w-full rounded-xl border border-white/10 bg-slate-950/60 py-2.5 pl-9 pr-3 text-sm text-slate-100 outline-none placeholder:text-slate-500" />
              </div>

              <div className="flex gap-2 text-xs text-slate-400">
                <button className="rounded-lg border border-white/10 bg-slate-950/60 px-2.5 py-1.5">Department</button>
                <button className="rounded-lg border border-white/10 bg-slate-950/60 px-2.5 py-1.5">Role</button>
                <button className="rounded-lg border border-white/10 bg-slate-950/60 px-2.5 py-1.5">Risk</button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    <th className="pb-3 pr-4 font-medium">Employee</th>
                    <th className="pb-3 pr-4 font-medium">Department</th>
                    <th className="pb-3 pr-4 font-medium">Role</th>
                    <th className="pb-3 pr-4 font-medium">Access</th>
                    <th className="pb-3 pr-4 font-medium">Sessions</th>
                    <th className="pb-3 pr-4 font-medium">Risk</th>
                    <th className="pb-3 pr-4 font-medium">Last Activity</th>
                    <th className="pb-3 pr-4 font-medium">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {employees.map((person) => (
                    <tr key={person.name} className="border-b border-white/5 text-slate-200">
                      <td className="py-3 pr-4">
                        <div className="font-medium text-white">{person.name}</div>
                      </td>
                      <td className="py-3 pr-4 text-slate-400">{person.department}</td>
                      <td className="py-3 pr-4">{person.role}</td>
                      <td className="py-3 pr-4">{person.access}</td>
                      <td className="py-3 pr-4">{person.sessions}</td>
                      <td className="py-3 pr-4"><ThreatBadge value={person.risk} severity={person.risk === 'High' ? 'High' : person.risk === 'Medium' ? 'Medium' : 'Low'} /></td>
                      <td className="py-3 pr-4 text-slate-400">{person.last}</td>
                      <td className="py-3 pr-4"><span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-emerald-300">{person.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">AI access insight</div>
                  <div className="mt-1 text-lg font-semibold text-white">Sarah has 4 rarely used applications</div>
                </div>
                <Sparkles className="h-5 w-5 text-cyan-300" />
              </div>

              <p className="text-sm leading-6 text-slate-300">
                Sarah currently has access to 4 applications that are rarely used for her role. These applications have not been accessed in 90 days and are outside the typical access pattern for this role.
              </p>

              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-sm text-slate-200">
                <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-500">Recommended</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between"><span>Remove Finance Portal</span><span className="text-red-300">Suggested</span></div>
                  <div className="flex items-center justify-between"><span>Remove HR Analytics</span><span className="text-red-300">Suggested</span></div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-100">Review Recommendation</button>
                <button className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-xs font-medium text-slate-100">Apply Changes</button>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-5 shadow-panel">
              <div className="mb-3 text-[10px] uppercase tracking-[0.22em] text-amber-200">Employee risk</div>
              <div className="text-xl font-semibold text-white">John Smith</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="text-3xl font-semibold text-white">72</div>
                <div className="text-sm text-slate-300">/ 100</div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/50 p-3">
                <div className="text-[10px] uppercase tracking-[0.18em] text-red-300">High attention</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>• Login from an unusual device</li>
                  <li>• Accessed a sensitive database</li>
                  <li>• Multiple failed authentication attempts</li>
                  <li>• Activity outside normal working pattern</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Security alerts</div>
                <div className="mt-1 text-xl font-semibold text-white">Priority actions</div>
              </div>
              <button className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200">Investigate</button>
            </div>

            <div className="space-y-3">
              {alerts.map((item) => (
                <div key={item.title} className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-3">
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-white">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-400">{item.detail}</div>
                  </div>
                  <ThreatBadge value={item.severity} severity={item.severity as 'Critical' | 'High' | 'Medium' | 'Low'} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Live activity</div>
                <div className="mt-1 text-xl font-semibold text-white">Real-time stream</div>
              </div>
              <Clock3 className="h-5 w-5 text-slate-400" />
            </div>

            <div className="space-y-3">
              {activity.map((item) => (
                <div key={`${item.time}-${item.event}`} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{item.time}</span>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-slate-400">{item.signal}</span>
                    </div>
                    <div className="mt-1 text-sm text-slate-200">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.25fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Access requests</div>
                <div className="mt-1 text-xl font-semibold text-white">Review queue</div>
              </div>
              <button className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200">Approve</button>
            </div>

            <div className="space-y-3">
              {accessRequests.map((request) => (
                <div key={request.name} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-base font-medium text-white">{request.name}</div>
                      <div className="mt-1 text-sm text-slate-400">Requested: {request.request}</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-emerald-200">Approve</button>
                      <button className="rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-red-200">Deny</button>
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-slate-300">
                    <span className="text-slate-500">Reason:</span> {request.reason}
                  </div>
                  <div className="mt-2 text-sm text-slate-300">
                    <span className="text-slate-500">AI Recommendation:</span> {request.ai}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Employee access matrix</div>
                <div className="mt-1 text-xl font-semibold text-white">Role permissions</div>
              </div>
              <Database className="h-5 w-5 text-cyan-300" />
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    <th className="pb-3 pr-4 font-medium">Role</th>
                    <th className="pb-3 pr-4 font-medium">GitHub</th>
                    <th className="pb-3 pr-4 font-medium">Jira</th>
                    <th className="pb-3 pr-4 font-medium">Database</th>
                    <th className="pb-3 pr-4 font-medium">HR</th>
                  </tr>
                </thead>
                <tbody>
                  {matrix.map((row) => (
                    <tr key={row.role} className="border-b border-white/5 text-slate-200">
                      <td className="py-3 pr-4 font-medium text-white">{row.role}</td>
                      <td className="py-3 pr-4">{accessPill(row.github)}</td>
                      <td className="py-3 pr-4">{accessPill(row.jira)}</td>
                      <td className="py-3 pr-4">{accessPill(row.database)}</td>
                      <td className="py-3 pr-4">{accessPill(row.hr)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Zero trust view</div>
                <div className="mt-1 text-xl font-semibold text-white">Access decision review</div>
              </div>
              <Lock className="h-5 w-5 text-cyan-300" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Identity</div>
                <div className="mt-2 text-lg font-medium text-white">Verified employee</div>
                <div className="mt-1 text-sm text-slate-400">Known device and user policy matched</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Device</div>
                <div className="mt-2 text-lg font-medium text-white">Laptop-042</div>
                <div className="mt-1 text-sm text-slate-400">Protected and recently seen</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Location</div>
                <div className="mt-2 text-lg font-medium text-white">Engineering network</div>
                <div className="mt-1 text-sm text-slate-400">Known office IP range</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Behavior</div>
                <div className="mt-2 text-lg font-medium text-white">Low anomaly</div>
                <div className="mt-1 text-sm text-slate-400">Usage pattern aligns with job role</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">AI assistant</div>
                <div className="mt-1 text-xl font-semibold text-white">Ask SentinelAI</div>
              </div>
              <Cpu className="h-5 w-5 text-cyan-300" />
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">Who has access to the production database?</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">Which employees have high risk?</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">Show pending access requests.</div>
            </div>

            <button className="mt-4 inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-100">
              Ask AI
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
