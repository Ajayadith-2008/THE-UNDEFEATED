import { DashboardShell } from '@/components/dashboard-shell';
import { AIChat } from '@/components/ai-chat';

export default function AIAssistantPage() {
  return (
    <DashboardShell title="AI Assistant" subtitle="Global ask-and-answer security assistant built on the available telemetry and analyst intent.">
      <AIChat />
    </DashboardShell>
  );
}
