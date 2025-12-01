import { useSettings } from '../contexts/SettingsContext';

type SoundType = 'click' | 'success' | 'delete' | 'pop';

export const useSound = () => {
  const { soundEnabled } = useSettings();

  const playSound = (type: SoundType) => {
    if (!soundEnabled) return;

    // In a real app, these would be actual audio files.
    // For this demo, we'll use simple generated beeps if possible, 
    // or just log to console to simulate.
    // To make it "real" without external assets, we can use the Web Audio API or small data URIs.
    // For simplicity and reliability in this environment, we'll use short data URIs for simple beeps.
    
    // Let's use a simple oscillator for immediate feedback without assets
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        const now = ctx.currentTime;
        
        switch (type) {
          case 'click':
            osc.frequency.setValueAtTime(600, now);
            gain.gain.setValueAtTime(0.1, now);
            osc.start(now);
            osc.stop(now + 0.05);
            break;
          case 'success':
            osc.frequency.setValueAtTime(400, now);
            osc.frequency.linearRampToValueAtTime(800, now + 0.1);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.3);
            osc.start(now);
            osc.stop(now + 0.3);
            break;
          case 'delete':
            osc.frequency.setValueAtTime(300, now);
            osc.frequency.linearRampToValueAtTime(100, now + 0.1);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.2);
            osc.start(now);
            osc.stop(now + 0.2);
            break;
          case 'pop':
            osc.frequency.setValueAtTime(800, now);
            gain.gain.setValueAtTime(0.05, now);
            osc.start(now);
            osc.stop(now + 0.03);
            break;
        }
      }
    } catch (e) {
      console.error('Audio play failed', e);
    }
  };

  return { playSound };
};
