// Romantic Ambient Audio Engine
// Generates gentle, warm, intimate musical chords (tender romantic progression)

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying: boolean = false;
  private intervalId: number | null = null;
  private filter: BiquadFilterNode | null = null;
  private chordIndex: number = 0;

  // Romantic harmonic chord progressions (gentle, warm frequencies)
  // Chords: Dm9, G6, Cmaj9, Fmaj7 (a classic intimate romance cadence)
  private readonly chordProgressions = [
    [146.83, 220.0, 261.63, 329.63, 440.0], // Dm9
    [196.0, 246.94, 293.66, 392.0, 440.0],  // G6
    [130.81, 196.0, 246.94, 329.63, 392.0], // Cmaj9
    [174.61, 220.0, 261.63, 329.63, 392.0], // Fmaj7
    [220.0, 261.63, 329.63, 392.0, 523.25], // Am9
  ];

  public init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtx();

    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(800, this.ctx.currentTime);

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);

    this.filter.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);
  }

  public play() {
    this.init();
    if (!this.ctx || !this.masterGain || !this.filter) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.14, now + 2.0);

    this.playChord();
    this.intervalId = window.setInterval(() => {
      if (this.isPlaying) {
        this.playChord();
      }
    }, 4000);
  }

  private playChord() {
    if (!this.ctx || !this.filter || !this.isPlaying) return;

    const chord = this.chordProgressions[this.chordIndex];
    this.chordIndex = (this.chordIndex + 1) % this.chordProgressions.length;

    const now = this.ctx.currentTime;

    // Arpeggiate the notes gently
    chord.forEach((freq, idx) => {
      if (!this.ctx || !this.filter) return;
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.18);

      const noteStart = now + idx * 0.18;
      noteGain.gain.setValueAtTime(0.0001, noteStart);
      noteGain.gain.exponentialRampToValueAtTime(0.05 / (idx * 0.3 + 1), noteStart + 0.6);
      noteGain.gain.exponentialRampToValueAtTime(0.00001, noteStart + 4.8);

      osc.connect(noteGain);
      noteGain.connect(this.filter);

      osc.start(noteStart);
      osc.stop(noteStart + 5.2);
    });
  }

  public stop() {
    if (!this.ctx || !this.masterGain) return;
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const ambientSound = new AmbientAudioEngine();
