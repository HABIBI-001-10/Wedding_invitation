/**
 * Sound Effects & Procedural Romantic Wedding Music Engine
 * Powered by Web Audio API for 100% zero-dependency reliable playback.
 */

class WeddingAudioManager {
  private ctx: AudioContext | null = null;
  private isPlayingMusic: boolean = false;
  private musicInterval: number | null = null;
  private gainNode: GainNode | null = null;
  private masterVolume: number = 0.45;
  private customAudio: HTMLAudioElement | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Wax Seal Break & Unfold Sound
   */
  public playSealBreak() {
    try {
      this.initContext();
      if (!this.ctx || !this.gainNode) return;

      const now = this.ctx.currentTime;

      // Soft crisp wax pop (bandpass filtered noise)
      const bufferSize = this.ctx.sampleRate * 0.15;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.Q.setValueAtTime(3, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.gainNode);
      whiteNoise.start(now);

      // Magical gentle chime chord (Chimes: C#6, E6, G#6, B6)
      const chimeNotes = [1108.73, 1318.51, 1661.22, 1975.53];
      chimeNotes.forEach((freq, idx) => {
        if (!this.ctx || !this.gainNode) return;
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        oscGain.gain.setValueAtTime(0, now + idx * 0.05);
        oscGain.gain.linearRampToValueAtTime(0.08, now + idx * 0.05 + 0.04);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 1.2);

        osc.connect(oscGain);
        oscGain.connect(this.gainNode);

        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 1.3);
      });
    } catch {
      // Audio autoplay policy fallback
    }
  }

  /**
   * Heart / Blessing Click Ping
   */
  public playHeartSound() {
    try {
      this.initContext();
      if (!this.ctx || !this.gainNode) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gain);
      gain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + 0.55);
    } catch {
      // ignore
    }
  }

  /**
   * Start Romantic Ambient Wedding Music
   * Plays a delicate, soothing piano & harp procedural harmony in D Major / F# Minor
   */
  public startMusic(customAudioUrl?: string | null) {
    if (this.isPlayingMusic) return;

    if (customAudioUrl) {
      try {
        if (!this.customAudio) {
          this.customAudio = new Audio(customAudioUrl);
          this.customAudio.loop = true;
          this.customAudio.volume = this.masterVolume;
        }
        this.customAudio.play().then(() => {
          this.isPlayingMusic = true;
        }).catch(() => {
          this.startProceduralPiano();
        });
        return;
      } catch {
        this.startProceduralPiano();
        return;
      }
    }

    this.startProceduralPiano();
  }

  private startProceduralPiano() {
    this.initContext();
    this.isPlayingMusic = true;

    // Romantic chord progressions (Dmaj9, Bm9, Gmaj7, Aadd9, F#m7)
    const chords = [
      [293.66, 369.99, 440.00, 554.37, 659.25], // D, F#, A, C#, E
      [246.94, 293.66, 369.99, 440.00, 587.33], // B, D, F#, A, D
      [196.00, 246.94, 293.66, 369.99, 440.00], // G, B, D, F#, A
      [220.00, 277.18, 329.63, 440.00, 554.37], // A, C#, E, A, C#
    ];

    let chordIndex = 0;
    let step = 0;

    const playNextArpeggioNote = () => {
      if (!this.isPlayingMusic || !this.ctx || !this.gainNode) return;

      const currentChord = chords[chordIndex % chords.length];
      const noteFreq = currentChord[step % currentChord.length];
      const octaveMultiplier = (step % 2 === 0) ? 1 : (Math.random() > 0.5 ? 2 : 1);
      const finalFreq = noteFreq * octaveMultiplier;

      const now = this.ctx.currentTime;

      // Piano tone (sine with subtle harmonic overtone)
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(finalFreq, now);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(finalFreq * 2, now);

      const osc2Gain = this.ctx.createGain();
      osc2Gain.gain.setValueAtTime(0.08, now);
      osc2.connect(osc2Gain);

      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(0.06, now + 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

      osc1.connect(noteGain);
      osc2Gain.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 2.5);
      osc2.stop(now + 2.5);

      step++;
      if (step >= currentChord.length * 2) {
        step = 0;
        chordIndex++;
      }
    };

    // Trigger initial note
    playNextArpeggioNote();
    this.musicInterval = window.setInterval(playNextArpeggioNote, 950);
  }

  public stopMusic() {
    this.isPlayingMusic = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
    if (this.customAudio) {
      this.customAudio.pause();
    }
  }

  public toggleMusic(customAudioUrl?: string | null): boolean {
    if (this.isPlayingMusic) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic(customAudioUrl);
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlayingMusic;
  }

  public setVolume(vol: number) {
    this.masterVolume = Math.max(0, Math.min(1, vol));
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    }
    if (this.customAudio) {
      this.customAudio.volume = this.masterVolume;
    }
  }
}

export const weddingAudio = new WeddingAudioManager();
