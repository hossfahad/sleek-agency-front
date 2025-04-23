import React, { useState, useMemo } from "react";
import Vapi from "@vapi-ai/web";
import { Card } from "@/components/ui/card";

interface VoiceDemoCardProps { 
  assistantId?: string; 
  title?: string; 
  description?: string 
}

export default function VoiceDemoCard({ 
  assistantId = "68682619-14e2-4ec1-b4c1-b0b5e667b3a7", 
  title = "Try Our AI Receptionist for Ground Transportation", 
  description = "Experience how your calls can be answered, trips qualified, and dispatches sent — all by AI that integrate into your backend Reservation Management System." 
}: VoiceDemoCardProps) {
  // Initialize Vapi client; replace with your Public Key or JWT
  const vapi = useMemo(() => new Vapi("4a0b1278-fa3a-41af-a9d2-e87151de2da4"), []);
  const [call, setCall] = useState<any>(null);
  const [active, setActive] = useState(false);
  const [justSpeak, setJustSpeak] = useState(false);

  // Animation for audio bars
  const bars = [1, 2, 3, 4, 5];

  const handleClick = async () => {
    // Toggle call: start if none, stop if active
    if (!call) {
      setActive(true);
      try {
        const newCall = await vapi.start(assistantId);
        setCall(newCall);
        setJustSpeak(true);
        setTimeout(() => setJustSpeak(false), 1800);
      } catch (err) {
        console.error("Failed to start call", err);
        setActive(false);
      }
    } else {
      try {
        await call.stop();
      } catch (err) {
        console.error("Failed to stop call", err);
      }
      setCall(null);
      setActive(false);
    }
  };

  return (
    <Card className="max-w-xl mx-auto rounded-2xl p-8 bg-white/80 shadow-xl border border-gray-200 text-center font-sans">
      <div className="flex flex-col items-center gap-4">
        <div className="mb-2">
          {/* Headphones Icon */}
          <svg width="44" height="44" fill="none" viewBox="0 0 24 24" aria-hidden="true" className="mx-auto text-viridian">
            <path stroke="currentColor" strokeWidth="1.6" d="M3 17v-3a9 9 0 1 1 18 0v3" />
            <rect width="3.5" height="7" x="3" y="14" rx="1.75" fill="#e6f4f1" stroke="#0f3d3e" strokeWidth="1.2" />
            <rect width="3.5" height="7" x="17.5" y="14" rx="1.75" fill="#e6f4f1" stroke="#0f3d3e" strokeWidth="1.2" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-viridian mb-2">{title}</h2>
        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-lg mx-auto">{description}</p>
        <button
          className={`w-full max-w-xs flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold shadow-md text-white transition bg-viridian hover:bg-cambridge-blue focus:outline-none focus:ring-2 focus:ring-viridian/30 ${active ? 'ring-2 ring-viridian/60' : ''}`}
          onClick={handleClick}
          aria-pressed={active}
        >
          <span className="inline-flex items-center">
            <svg className="mr-2" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3v18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              <path d="M6 6v12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              <path d="M18 6v12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
            {active ? 'Stop Demo' : 'Try the Live Voice Demo'}
          </span>
        </button>
        {/* Audio animation & Just Speak */}
        {active && (
          <div className="flex flex-col items-center mt-4 w-full">
            <div className="flex items-end gap-1 h-7" aria-label="Audio animation">
              {bars.map((bar, i) => (
                <div
                  key={bar}
                  className={`w-1.5 rounded bg-viridian animate-audio-bar${i+1}`}
                  style={{ height: `${10 + Math.random() * 18}px`, animationPlayState: active ? 'running' : 'paused' }}
                />
              ))}
            </div>
            {justSpeak && (
              <span className="mt-2 text-viridian text-base font-medium animate-fade-in">Just speak…</span>
            )}
            {/* Vapi engine runs in background, no iframe needed */}
          </div>
        )}
        <div className="mt-8 text-xs tracking-widest text-gray-500 font-semibold">ENHANCED POINTS</div>
      </div>
      {/* Audio bar keyframes */}
      <style>
{`
        @keyframes audio-bar1 { 0%, 100% { height: 10px; } 50% { height: 28px; } }
        @keyframes audio-bar2 { 0%, 100% { height: 22px; } 50% { height: 12px; } }
        @keyframes audio-bar3 { 0%, 100% { height: 18px; } 50% { height: 32px; } }
        @keyframes audio-bar4 { 0%, 100% { height: 12px; } 50% { height: 26px; } }
        @keyframes audio-bar5 { 0%, 100% { height: 24px; } 50% { height: 14px; } }
        .animate-audio-bar1 { animation: audio-bar1 1s infinite linear; }
        .animate-audio-bar2 { animation: audio-bar2 1.1s infinite linear; }
        .animate-audio-bar3 { animation: audio-bar3 0.9s infinite linear; }
        .animate-audio-bar4 { animation: audio-bar4 1.2s infinite linear; }
        .animate-audio-bar5 { animation: audio-bar5 1.05s infinite linear; }
        .animate-fade-in { animation: fadeIn 0.5s linear; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}
      </style>
    </Card>
  );
}
