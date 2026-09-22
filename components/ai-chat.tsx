'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Bot, Mic, Send, Volume2 } from 'lucide-react';
import { aiSuggestions } from '@/lib/mock-data';

type Message = { role: 'assistant' | 'user'; text: string };

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'I can summarize current network posture, explain suspicious behavior, and correlate incidents using the live demo feed.' },
  ]);
  const [input, setInput] = useState('');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const answerFromPrompt = useMemo(() => {
    return (prompt: string) => {
      const lower = prompt.toLowerCase();
      if (lower.includes('threat') || lower.includes('today')) return 'The current demo feed shows 27 detections today, including 4 critical alerts and one coordinated scanning incident.';
      if (lower.includes('device') || lower.includes('suspicious')) return 'The most suspicious device is the Identity Server at 10.10.20.7, due to repeated authentication anomalies and elevated outbound traffic.';
      if (lower.includes('incident') || lower.includes('severity')) return 'The highest-severity open incident is INC-2041, with a critical DDoS signal and multiple related port-scanning artifacts.';
      if (lower.includes('change') || lower.includes('behavior')) return 'The most significant behavior change is a 2.7x increase in SYN traffic to the edge gateway over the last 15 minutes.';
      if (lower.includes('alert') || lower.includes('explain')) return 'The alert indicates a high-confidence pattern of repetitive SYN requests against a single target, consistent with a possible DDoS.';
      if (lower.includes('investigate')) return 'Start with the edge gateway and identity server. Review packet captures, validate the source IP, and confirm whether the authentication and scanning events are linked.';
      if (lower.includes('summarize')) return 'Today\'s activity includes elevated SYN traffic, a coordinated scanning sequence, and several anomalous authentication events. No confirmed intrusion is being asserted.';
      return 'I can answer using the current demo data. If the query is outside the available telemetry, I will say so clearly.';
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
  }, []);

  const submit = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setMessages((current) => [...current, { role: 'user', text: userMessage }]);
    setMessages((current) => [...current, { role: 'assistant', text: answerFromPrompt(userMessage) }]);
    setInput('');
  };

  const startVoiceInput = () => {
    if (!recognitionRef.current) return;
    setListening(true);
    recognitionRef.current.start();
  };

  const speak = () => {
    if (typeof window === 'undefined') return;
    if (!messages.length) return;
    const latest = messages[messages.length - 1]?.text;
    if (!latest) return;
    const utterance = new SpeechSynthesisUtterance(latest);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-[#07141d]/80 p-5 shadow-panel">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">AI assistant</div>
          <div className="text-xl font-semibold text-white">Security copilot</div>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200">
          <Bot className="h-3.5 w-3.5" />
          context-aware
        </div>
      </div>

      <div className="mb-4 space-y-3">
        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} className={`max-w-[85%] rounded-2xl border px-3 py-2 text-sm ${message.role === 'assistant' ? 'border-cyan-500/20 bg-cyan-500/5 text-slate-100' : 'ml-auto border-white/10 bg-slate-900 text-slate-100'}`}>
            {message.text}
          </div>
        ))}
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {aiSuggestions.map((question) => (
          <button key={question} onClick={() => setInput(question)} className="rounded-full border border-white/10 bg-slate-950/50 px-2.5 py-1.5 text-[11px] text-slate-300 hover:border-cyan-500/30 hover:text-cyan-100">
            {question}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0a1622] px-2 py-2">
        <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about threats, incidents, devices, or behavior..." className="flex-1 bg-transparent px-2 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none" />
        <button onClick={startVoiceInput} className={`rounded-xl border p-2 ${listening ? 'border-red-500/30 bg-red-500/10 text-red-200' : 'border-white/10 bg-slate-900 text-slate-200'}`}>
          <Mic className="h-4 w-4" />
        </button>
        <button onClick={speak} className="rounded-xl border border-white/10 bg-slate-900 p-2 text-slate-200">
          <Volume2 className="h-4 w-4" />
        </button>
        <button onClick={submit} className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-2 text-cyan-100">
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
