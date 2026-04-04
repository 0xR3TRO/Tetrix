"use strict";

/**
 * RetroTetris Audio System
 * Procedural audio generation using Web Audio API
 * @module audio
 */

// ============================================================================
// AUDIO ENGINE
// ============================================================================

/**
 * Procedural audio engine for game sounds and music
 * @class AudioEngine
 */
class AudioEngine {
    #ctx;
    #masterGain;
    #sfxGain;
    #musicGain;
    #enabled = true;
    #musicEnabled = true;
    #musicOscillators = [];
    #musicPlaying = false;

    constructor() {
        // Defer AudioContext creation until user interaction
        this.#ctx = null;
        this.#masterGain = null;
        this.#sfxGain = null;
        this.#musicGain = null;
    }

    /**
     * Initialize audio context (must be called after user interaction)
     */
    init() {
        if (this.#ctx) return;

        this.#ctx = new (window.AudioContext || window.webkitAudioContext)();

        // Master gain
        this.#masterGain = this.#ctx.createGain();
        this.#masterGain.gain.value = 0.7;
        this.#masterGain.connect(this.#ctx.destination);

        // SFX gain
        this.#sfxGain = this.#ctx.createGain();
        this.#sfxGain.gain.value = 1.0;
        this.#sfxGain.connect(this.#masterGain);

        // Music gain
        this.#musicGain = this.#ctx.createGain();
        this.#musicGain.gain.value = 0.4;
        this.#musicGain.connect(this.#masterGain);
    }

    /**
     * Resume audio context if suspended
     */
    async resume() {
        if (this.#ctx && this.#ctx.state === "suspended") {
            await this.#ctx.resume();
        }
    }

    // =========================================================================
    // VOLUME CONTROLS
    // =========================================================================

    /**
     * Set master volume
     * @param {number} value - Volume (0-1)
     */
    setMasterVolume(value) {
        if (this.#masterGain) {
            this.#masterGain.gain.value = Math.max(0, Math.min(1, value));
        }
    }

    /**
     * Set SFX volume
     * @param {number} value - Volume (0-1)
     */
    setSfxVolume(value) {
        if (this.#sfxGain) {
            this.#sfxGain.gain.value = Math.max(0, Math.min(1, value));
        }
    }

    /**
     * Set music volume
     * @param {number} value - Volume (0-1)
     */
    setMusicVolume(value) {
        if (this.#musicGain) {
            this.#musicGain.gain.value = Math.max(0, Math.min(1, value));
        }
    }

    /**
     * Enable/disable all audio
     * @param {boolean} enabled - Enable state
     */
    setEnabled(enabled) {
        this.#enabled = enabled;
        if (!enabled) {
            this.stopMusic();
        }
    }

    /**
     * Enable/disable music
     * @param {boolean} enabled - Enable state
     */
    setMusicEnabled(enabled) {
        this.#musicEnabled = enabled;
        if (!enabled) {
            this.stopMusic();
        }
    }

    // =========================================================================
    // SOUND EFFECTS
    // =========================================================================

    /**
     * Internal beep generator
     * @param {number} freq - Frequency in Hz
     * @param {number} duration - Duration in seconds
     * @param {string} type - Oscillator type
     * @param {number} gain - Gain value (0-1)
     */
    #beep(freq, duration, type, gain) {
        if (!this.#enabled || !this.#ctx) return;

        const osc = this.#ctx.createOscillator();
        const g = this.#ctx.createGain();

        osc.type = type;
        osc.frequency.value = freq;

        g.gain.setValueAtTime(gain, this.#ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(
            0.001,
            this.#ctx.currentTime + duration,
        );

        osc.connect(g);
        g.connect(this.#sfxGain);

        osc.start();
        osc.stop(this.#ctx.currentTime + duration);
    }

    /**
     * Play a chord
     * @param {number[]} freqs - Array of frequencies
     * @param {number} duration - Duration in seconds
     * @param {string} type - Oscillator type
     * @param {number} gain - Gain per note
     */
    #playChord(freqs, duration, type, gain) {
        freqs.forEach((freq, i) => {
            setTimeout(() => this.#beep(freq, duration, type, gain), i * 30);
        });
    }

    /**
     * Play move sound (short click)
     */
    playMove() {
        this.#beep(220, 0.05, "square", 0.08);
    }

    /**
     * Play rotation sound (higher click)
     */
    playRotate() {
        this.#beep(330, 0.05, "square", 0.06);
    }

    /**
     * Play lock/landing sound
     */
    playLock() {
        this.#beep(110, 0.1, "sawtooth", 0.12);
    }

    /**
     * Play line clear sound
     * @param {number} lines - Number of lines cleared
     */
    playLineClear(lines) {
        const freqs = [262, 330, 392, 523]; // C4 E4 G4 C5
        const notesToPlay = freqs.slice(0, lines);
        this.#playChord(notesToPlay, 0.2, "sine", 0.25);
    }

    /**
     * Play Tetris (4 lines) sound
     */
    playTetris() {
        if (!this.#enabled || !this.#ctx) return;

        // Triumphant fanfare
        const melody = [
            { freq: 523, time: 0 }, // C5
            { freq: 659, time: 0.1 }, // E5
            { freq: 784, time: 0.2 }, // G5
            { freq: 1047, time: 0.3 }, // C6
            { freq: 784, time: 0.5 }, // G5
            { freq: 1047, time: 0.6 }, // C6
        ];

        melody.forEach(({ freq, time }) => {
            setTimeout(
                () => this.#beep(freq, 0.15, "square", 0.2),
                time * 1000,
            );
        });
    }

    /**
     * Play T-Spin sound (glitchy effect)
     */
    playTSpin() {
        if (!this.#enabled || !this.#ctx) return;

        // Glitchy wobble effect
        const osc = this.#ctx.createOscillator();
        const g = this.#ctx.createGain();

        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(200, this.#ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(
            800,
            this.#ctx.currentTime + 0.1,
        );
        osc.frequency.exponentialRampToValueAtTime(
            150,
            this.#ctx.currentTime + 0.2,
        );

        g.gain.setValueAtTime(0.2, this.#ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(
            0.001,
            this.#ctx.currentTime + 0.25,
        );

        osc.connect(g);
        g.connect(this.#sfxGain);

        osc.start();
        osc.stop(this.#ctx.currentTime + 0.25);
    }

    /**
     * Play level up sound
     */
    playLevelUp() {
        if (!this.#enabled || !this.#ctx) return;

        // Ascending arpeggio
        const notes = [262, 330, 392, 523, 659]; // C4 E4 G4 C5 E5

        notes.forEach((freq, i) => {
            setTimeout(() => this.#beep(freq, 0.15, "triangle", 0.15), i * 60);
        });
    }

    /**
     * Play game over sound
     */
    playGameOver() {
        if (!this.#enabled || !this.#ctx) return;

        // Descending tone
        const osc = this.#ctx.createOscillator();
        const g = this.#ctx.createGain();

        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(400, this.#ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(
            50,
            this.#ctx.currentTime + 1.5,
        );

        g.gain.setValueAtTime(0.3, this.#ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, this.#ctx.currentTime + 1.5);

        osc.connect(g);
        g.connect(this.#sfxGain);

        osc.start();
        osc.stop(this.#ctx.currentTime + 1.5);
    }

    /**
     * Play hard drop sound
     */
    playHardDrop() {
        if (!this.#enabled || !this.#ctx) return;

        // Impact sound
        this.#beep(80, 0.15, "sawtooth", 0.2);

        const osc = this.#ctx.createOscillator();
        const g = this.#ctx.createGain();

        osc.type = "square";
        osc.frequency.setValueAtTime(150, this.#ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(
            60,
            this.#ctx.currentTime + 0.1,
        );

        g.gain.setValueAtTime(0.15, this.#ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, this.#ctx.currentTime + 0.1);

        osc.connect(g);
        g.connect(this.#sfxGain);

        osc.start();
        osc.stop(this.#ctx.currentTime + 0.1);
    }

    /**
     * Play hold sound
     */
    playHold() {
        this.#beep(440, 0.08, "sine", 0.1);
        setTimeout(() => this.#beep(550, 0.08, "sine", 0.08), 60);
    }

    /**
     * Play pause sound
     */
    playPause() {
        this.#beep(440, 0.1, "sine", 0.1);
    }

    /**
     * Play menu select sound
     */
    playMenuSelect() {
        this.#beep(660, 0.08, "square", 0.08);
    }

    /**
     * Play menu move sound
     */
    playMenuMove() {
        this.#beep(330, 0.05, "square", 0.05);
    }

    // =========================================================================
    // BACKGROUND MUSIC (Korobeiniki-inspired)
    // =========================================================================

    /**
     * Play background music (simple procedural loop)
     */
    playMusic() {
        if (
            !this.#enabled ||
            !this.#musicEnabled ||
            !this.#ctx ||
            this.#musicPlaying
        )
            return;

        this.#musicPlaying = true;

        // Simplified Korobeiniki (Type A) melody
        // Using relative note values and timing
        const melody = [
            // First phrase
            { note: "E5", duration: 0.25 },
            { note: "B4", duration: 0.125 },
            { note: "C5", duration: 0.125 },
            { note: "D5", duration: 0.25 },
            { note: "C5", duration: 0.125 },
            { note: "B4", duration: 0.125 },
            { note: "A4", duration: 0.25 },
            { note: "A4", duration: 0.125 },
            { note: "C5", duration: 0.125 },
            { note: "E5", duration: 0.25 },
            { note: "D5", duration: 0.125 },
            { note: "C5", duration: 0.125 },
            { note: "B4", duration: 0.375 },
            { note: "C5", duration: 0.125 },
            { note: "D5", duration: 0.25 },
            { note: "E5", duration: 0.25 },
            { note: "C5", duration: 0.25 },
            { note: "A4", duration: 0.25 },
            { note: "A4", duration: 0.5 },
        ];

        // Note frequencies
        const noteFreqs = {
            A4: 440,
            B4: 494,
            C5: 523,
            D5: 587,
            E5: 659,
            F5: 698,
            G5: 784,
        };

        const tempo = 150; // BPM
        const beatDuration = 60 / tempo;

        let currentTime = this.#ctx.currentTime;

        const playMelody = () => {
            if (!this.#musicPlaying) return;

            melody.forEach(({ note, duration }) => {
                const freq = noteFreqs[note];
                const noteDuration = duration * beatDuration;

                const osc = this.#ctx.createOscillator();
                const g = this.#ctx.createGain();

                osc.type = "square";
                osc.frequency.value = freq;

                g.gain.setValueAtTime(0.15, currentTime);
                g.gain.setValueAtTime(0.15, currentTime + noteDuration * 0.8);
                g.gain.exponentialRampToValueAtTime(
                    0.001,
                    currentTime + noteDuration,
                );

                osc.connect(g);
                g.connect(this.#musicGain);

                osc.start(currentTime);
                osc.stop(currentTime + noteDuration);

                this.#musicOscillators.push(osc);

                currentTime += noteDuration;
            });

            // Loop the melody
            const loopDuration =
                melody.reduce((sum, n) => sum + n.duration, 0) *
                beatDuration *
                1000;
            setTimeout(playMelody, loopDuration);
        };

        playMelody();
    }

    /**
     * Stop background music
     */
    stopMusic() {
        this.#musicPlaying = false;
        this.#musicOscillators.forEach((osc) => {
            try {
                osc.stop();
            } catch (e) {
                /* Already stopped */
            }
        });
        this.#musicOscillators = [];
    }

    /**
     * Toggle background music
     */
    toggleMusic() {
        if (this.#musicPlaying) {
            this.stopMusic();
        } else {
            this.playMusic();
        }
    }

    /**
     * Check if music is playing
     * @returns {boolean} True if playing
     */
    isMusicPlaying() {
        return this.#musicPlaying;
    }
}

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
    module.exports = { AudioEngine };
}
