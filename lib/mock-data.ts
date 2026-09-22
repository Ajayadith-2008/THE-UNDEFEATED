import { Activity, AlertTriangle, BarChart3, BellRing, BrainCircuit, Database, Globe, Radar, ShieldAlert, ShieldCheck, Shield, ServerCog, Sparkles, Network } from 'lucide-react';

export type Severity = 'Critical' | 'High' | 'Medium' | 'Low' | 'Informational';

export const navItems = [
  { label: 'Overview', href: '/', icon: Activity },
  { label: 'Live Network', href: '/live-network', icon: Network },
  { label: 'Threat Detection', href: '/threats', icon: ShieldAlert },
  { label: 'Attack Map', href: '/attack-map', icon: Radar },
  { label: 'AI Insights', href: '/ai-insights', icon: BrainCircuit },
  { label: 'Incidents', href: '/incidents', icon: BellRing },
  { label: 'Devices', href: '/devices', icon: ServerCog },
  { label: 'Analytics', href: '/analytics', icon: BarChart3 },
  { label: 'Reports', href: '/reports', icon: Database },
  { label: 'AI Assistant', href: '/ai-assistant', icon: Sparkles },
  { label: 'Settings', href: '/settings', icon: Shield },
];

export const stats = [
  { label: 'Network Security Status', value: 'Nominal', detail: 'Monitoring 2,148 devices', tone: 'emerald' },
  { label: 'Threats Detected', value: '27', detail: '+6 in last 30 min', tone: 'amber' },
  { label: 'Critical Incidents', value: '4', detail: '1 requires escalation', tone: 'red' },
  { label: 'Active Devices', value: '1,428', detail: '84 newly observed', tone: 'cyan' },
  { label: 'Traffic Volume', value: '4.72 Tb', detail: 'Across edge and core', tone: 'violet' },
  { label: 'Blocked Connections', value: '318', detail: 'Policy enforced', tone: 'slate' },
];

export const trafficData = [
  { time: '10:20', incoming: 820, outgoing: 680, suspicious: 90, anomaly: 42 },
  { time: '10:25', incoming: 910, outgoing: 720, suspicious: 120, anomaly: 64 },
  { time: '10:30', incoming: 1040, outgoing: 760, suspicious: 150, anomaly: 86 },
  { time: '10:35', incoming: 980, outgoing: 690, suspicious: 180, anomaly: 97 },
  { time: '10:40', incoming: 1220, outgoing: 840, suspicious: 260, anomaly: 110 },
  { time: '10:45', incoming: 1300, outgoing: 920, suspicious: 310, anomaly: 138 },
  { time: '10:50', incoming: 1180, outgoing: 870, suspicious: 290, anomaly: 126 },
  { time: '10:55', incoming: 1380, outgoing: 1010, suspicious: 340, anomaly: 158 },
];

export const timeline: Array<{ time: string; label: string; severity: Severity; summary: string }> = [
  { time: '10:42:18', label: 'Possible DDoS activity', severity: 'Critical', summary: 'Inbound SYN flood against edge gateway' },
  { time: '10:40:32', label: 'Port scanning detected', severity: 'High', summary: 'Rapid probing of service ports across target range' },
  { time: '10:37:11', label: 'Unusual authentication pattern', severity: 'Medium', summary: 'Repeated brute-force login attempts from internal subnet' },
  { time: '10:32:48', label: 'New device discovered', severity: 'Informational', summary: 'Unrecognized host joined management VLAN' },
];

export const alerts: Array<{
  id: string;
  severity: Severity;
  threat: string;
  source: string;
  destination: string;
  time: string;
  confidence: number;
  protocol: string;
  status: string;
  evidence: string[];
}> = [
  {
    id: 'ALT-1182',
    severity: 'Critical',
    threat: 'Possible DDoS',
    source: '192.168.1.45',
    destination: '10.10.20.7',
    time: '10:42:18',
    confidence: 94,
    protocol: 'TCP',
    status: 'Open',
    evidence: ['traffic spike from 2.1x baseline', 'high SYN rate', 'single target concentration'],
  },
  {
    id: 'ALT-1181',
    severity: 'High',
    threat: 'Port scan',
    source: '172.16.8.19',
    destination: '10.10.20.11',
    time: '10:40:32',
    confidence: 92,
    protocol: 'SYN',
    status: 'Investigating',
    evidence: ['multiple destination ports', 'targeted sweep', 'deviation from baseline'],
  },
  {
    id: 'ALT-1179',
    severity: 'Medium',
    threat: 'Suspicious authentication',
    source: '10.28.14.63',
    destination: 'VPN gateway',
    time: '10:37:11',
    confidence: 88,
    protocol: 'RDP',
    status: 'Investigating',
    evidence: ['rapid password retries', 'after-hours access pattern', 'new geolocation'],
  },
  {
    id: 'ALT-1174',
    severity: 'Low',
    threat: 'Unusual device communication',
    source: '10.10.17.12',
    destination: '203.0.113.18',
    time: '10:32:48',
    confidence: 71,
    protocol: 'HTTPS',
    status: 'Reviewed',
    evidence: ['unexpected outbound beaconing', 'rare protocol usage'],
  },
];

export const incidents = [
  {
    id: 'INC-2041',
    title: 'Possible coordinated scanning activity',
    summary: 'Multiple alerts point to one source probing core services and authentication paths.',
    status: 'In Progress',
    severity: 'High',
    devices: ['Core Gateway', 'Identity Server', 'Kubernetes Edge', 'VPN Concentrator'],
    timeline: ['10:35 VM beaconing', '10:38 credential retries', '10:41 port sweep'],
    aiSummary: 'Observed activity appears related to the same source IP, suggesting a coordinated reconnaissance sequence before potential exploitation.',
  },
  {
    id: 'INC-2038',
    title: 'Outbound data transfer anomaly',
    summary: 'Sensitive file transfers exceeded historical baseline on day shift.',
    status: 'Monitoring',
    severity: 'Medium',
    devices: ['Finance API Node', 'Data Warehouse'],
    timeline: ['09:42 burst transfer', '10:05 encryption check', '10:17 blocked by policy'],
    aiSummary: 'The transfer profile is unusual but not confirmed as exfiltration. Investigation should validate destination and user intent.',
  },
];

export const devices = [
  { name: 'Core Gateway', ip: '10.10.20.1', mac: '00:1A:2B:3C:4D:5E', status: 'Active', traffic: '1.4 GB/s', risk: 'High', threats: 5, lastActivity: '21s ago' },
  { name: 'Identity Server', ip: '10.10.20.7', mac: '00:5A:6B:7C:8D:9E', status: 'Active', traffic: '680 MB/s', risk: 'Critical', threats: 8, lastActivity: '14s ago' },
  { name: 'Finance API Node', ip: '10.10.20.11', mac: '00:9A:AB:BC:CD:EF', status: 'Restricted', traffic: '440 MB/s', risk: 'Medium', threats: 3, lastActivity: '49s ago' },
  { name: 'VPN Concentrator', ip: '10.10.20.19', mac: '00:11:22:33:44:55', status: 'Monitoring', traffic: '310 MB/s', risk: 'High', threats: 4, lastActivity: '1m ago' },
];

export const insights = [
  { title: 'AI Insight', detail: 'Network behavior changed significantly during the last 15 minutes.', action: 'Investigate', tone: 'cyan' },
  { title: 'Correlation', detail: 'Three alerts appear related to the same source.', action: 'View Correlation', tone: 'amber' },
  { title: 'Baseline drift', detail: 'Authentication traffic has deviated from historical norms.', action: 'Review Baseline', tone: 'violet' },
  { title: 'Service health', detail: 'A subset of edge services is experiencing higher than expected latency.', action: 'Open Service Map', tone: 'red' },
];

export const threatStories = [
  {
    title: 'Possible DDoS pattern',
    what: 'Traffic from 192.168.1.45 increased significantly within the last three minutes. The source generated an unusually high number of connections to a single destination.',
    why: 'This behavior differs from the device baseline and matches characteristics associated with a possible denial-of-service pattern.',
    changed: 'Persistent SYN traffic increased by 2.7x over the normal operating range.',
    devices: ['Edge Gateway 2', 'Target Service 04', '192.168.1.45'],
    severity: 'Critical',
    evidence: ['High connection volume', 'Single-target concentration', 'Historic baseline deviation'],
    action: 'Validate with packet capture and consider rate limiting the source if confirmed.',
  },
  {
    title: 'Reconnaissance sequence',
    what: 'The attacker probed multiple destination ports and authentication endpoints over a short interval.',
    why: 'The source IP is inconsistent with normal internal flows and the port distribution is unusually broad for the asset class.',
    changed: 'Port scan behavior increased from a typical 8 attempts per minute to 142 attempts in two minutes.',
    devices: ['VPN Concentrator', 'Core Gateway', 'Identity Server'],
    severity: 'High',
    evidence: ['Multiple destination ports', 'Deviation from baseline', 'Suspicious authentication requests'],
    action: 'Review logs and isolate the host if analyst verification confirms a hostile reconnaissance pattern.',
  },
];

export const searchIndex = [
  { type: 'IP', title: '192.168.1.45', detail: 'Source of high-volume SYN flood activity' },
  { type: 'Device', title: 'Core Gateway', detail: 'Gateway node experiencing resource pressure' },
  { type: 'Threat', title: 'Possible DDoS', detail: 'Critical detection | confidence 94%' },
  { type: 'Incident', title: 'INC-2041', detail: 'Possible coordinated scanning activity' },
  { type: 'Alert', title: 'ALT-1182', detail: 'DDoS pattern across 10.10.20.7' },
  { type: 'Protocol', title: 'TCP/SYN', detail: 'Observed in flood and probing sequences' },
];

export const aiSuggestions = [
  'What threats were detected today?',
  'Why is this device suspicious?',
  'Show me the highest severity incidents.',
  'What changed in network behavior?',
  'Explain this alert.',
  'What should I investigate first?',
  'Summarize today\'s security activity.',
];

export const attackNodes = [
  { id: 'attacker', label: 'Attacker', type: 'attacker', x: 90, y: 112 },
  { id: 'suspicious-ip', label: '192.168.1.45', type: 'suspect', x: 270, y: 112 },
  { id: 'gateway', label: 'Gateway', type: 'gateway', x: 450, y: 112 },
  { id: 'target-device', label: '10.10.20.7', type: 'device', x: 630, y: 112 },
  { id: 'service', label: 'Target Service', type: 'service', x: 820, y: 112 },
  { id: 'vpn', label: 'VPN Concentrator', type: 'device', x: 450, y: 260 },
];
