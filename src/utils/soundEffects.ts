/**
 * Subtle technical sound synthesizer using Web Audio API
 * Generates restrained, pleasant engineering tones and cinematic sweeps without requiring external audio assets.
 */

class SoundSystem {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false; // Enabled by default for rich cinematic experience

  constructor() {
    // AudioContext will be initialized on first user interaction or gesture
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (!this.isMuted) {
      this.playTone(520, 0.08, 'sine', 0.08);
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public playTone(freq: number = 440, duration: number = 0.08, type: OscillatorType = 'sine', volume: number = 0.05) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio context might fail on restricted policies, safely ignore
    }
  }

  public playSubBassHum(duration: number = 1.8) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(45, this.ctx.currentTime); // Deep cinematic sub-bass
      osc.frequency.exponentialRampToValueAtTime(95, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // ignore
    }
  }

  public playWarpSpeed() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      // Filtered White Noise Warp Whoosh
      const bufferSize = this.ctx.sampleRate * 1.5;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(200, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(2200, this.ctx.currentTime + 1.2);
      filter.Q.value = 3.0;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.09, this.ctx.currentTime + 0.6);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.4);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
      noise.stop(this.ctx.currentTime + 1.4);
    } catch {
      // ignore
    }
  }

  public playCircuitSparks() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const sparkTimes = [0, 0.12, 0.28, 0.45, 0.62, 0.8];
      sparkTimes.forEach((t, i) => {
        setTimeout(() => {
          this.playTone(1200 + i * 220, 0.04, 'sine', 0.035);
        }, t * 1000);
      });
    } catch {
      // ignore
    }
  }

  public playNeonSurge() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(110, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(220, this.ctx.currentTime + 0.8);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc2.frequency.linearRampToValueAtTime(440, this.ctx.currentTime + 0.8);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, this.ctx.currentTime);
      filter.frequency.linearRampToValueAtTime(3200, this.ctx.currentTime + 0.8);

      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.07, this.ctx.currentTime + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.9);

      osc.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc2.start();
      osc.stop(this.ctx.currentTime + 0.9);
      osc2.stop(this.ctx.currentTime + 0.9);
    } catch {
      // ignore
    }
  }

  public playChromeImpact() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      // Heavy Cinematic Sub-Drop Impact
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(38, this.ctx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 1.4);

      // Metallic Chime Layer
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
        setTimeout(() => {
          this.playTone(f, 0.6, 'sine', 0.04 / (i + 1));
        }, i * 60);
      });
    } catch {
      // ignore
    }
  }

  public playGlintSweep() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const shimmerNotes = [1046.5, 1318.5, 1567.98, 2093.0];
      shimmerNotes.forEach((f, idx) => {
        setTimeout(() => {
          this.playTone(f, 0.4, 'sine', 0.035);
        }, idx * 70);
      });
    } catch {
      // ignore
    }
  }

  public playLaserSweep() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(2400, this.ctx.currentTime + 0.4);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);

      // Lowpass filter to soften sawtooth harshness
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1800, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.4);
    } catch {
      // ignore
    }
  }

  public playNodeConnect() {
    if (this.isMuted) return;
    this.playTone(880, 0.06, 'sine', 0.04);
    setTimeout(() => this.playTone(1320, 0.09, 'sine', 0.03), 50);
  }

  public playChirp() {
    if (this.isMuted) return;
    this.playTone(640, 0.05, 'triangle', 0.04);
  }

  public playSubtleClick() {
    if (this.isMuted) return;
    this.playTone(380, 0.03, 'sine', 0.03);
  }

  public playReveal() {
    if (this.isMuted) return;
    const freqs = [440, 554.37, 659.25, 880, 1108.73];
    freqs.forEach((f, i) => {
      setTimeout(() => this.playTone(f, 0.35, 'sine', 0.035), i * 80);
    });
  }
}

export const soundFx = new SoundSystem();
