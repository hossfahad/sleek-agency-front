import { useState, useMemo } from 'react';
import Vapi from '@vapi-ai/web';

export function useVoiceDemo(publicKey: string, assistantId: string) {
  const vapi = useMemo(() => new Vapi(publicKey), [publicKey]);
  const [call, setCall] = useState<any>(null);

  const start = async () => {
    if (!call) {
      try {
        const newCall = await vapi.start(assistantId);
        setCall(newCall);
      } catch (err) {
        console.error('VoiceDemo start error', err);
      }
    }
  };

  const stop = async () => {
    if (call) {
      try {
        await call.stop();
      } catch (err) {
        console.error('VoiceDemo stop error', err);
      } finally {
        setCall(null);
      }
    }
  };

  return { start, stop, active: Boolean(call) };
}
