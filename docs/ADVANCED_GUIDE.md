# Advanced Guide

Modern RetroTetris ships with an immediate launcher, richer theming, and selectable music vibes. This guide explains how to take advantage of the new UI and how to tune the experience further.

## Launcher & navigation

- The old menu is gone. You land directly on the **launcher** with three mode cards (Marathon, Sprint, Ultra).
- Quick chips on the hero let you jump straight to **Settings**, **Controls**, **High Scores**, and **Stats** without leaving the launcher.
- Each mode card is fully clickable (or reachable via keyboard arrows). Press **Enter** or click to start instantly.

## Theming

Four built-in palettes are available everywhere:

- **Dark** — deep greens with subtle parchment highlights.
- **Light** — parchment-inspired daylight look.
- **Neon** — cool midnight blues with electric cyan and violet accents.
- **Sunset** — warm amber and coral tones with soft glows.

How to switch:

- Use the navbar theme toggle to cycle through palettes.
- Use the theme chips on the launcher or the palette buttons in **Settings**.
- Preferences persist in `localStorage` (`rt_theme` + settings payload).

Tweaking colors:

1. Open `styles/main.css`.
2. Locate the `[data-theme="<name>"]` blocks and adjust the `--rt-*` tokens.
3. Keep `--bg-*`, `--accent-*`, and `--text-*` coherent to preserve contrast.

## Music styles

Music now has selectable “vibes,” each generated procedurally:

- **Classic (Korobeiniki)** — square-wave melody with subtle hi-hats.
- **Pulse runner** — faster saw-wave motif with a light kick/hat pattern.
- **Ambient drift** — slower triangle pads with gentle bass movement.

How to switch:

- From the launcher or **Settings**, choose a **Music vibe** option.
- Toggle music on/off via the quick switch on the launcher or in **Settings**.
- Choices are saved in settings (`musicStyle`, `musicEnabled`).

Extending music:

- Edit `AudioEngine.MUSIC_STYLES` in `src/audio.js`.
- Each style accepts `tempo`, `wave`, `gain`, `melody`, `bass`, optional `percussion`, and `pad` flags.
- Notes use scientific pitch (e.g., `E5`, `C#4`); durations are in beats.

## Controls & accessibility

- Keyboard navigation works anywhere outside the active game. `Escape` leaves sub-screens back to the launcher.
- Mode cards are focusable; arrow keys still cycle modes, and **Enter** starts the selected mode.
- Touch controls auto-show on small screens; buttons carry larger hit targets and press feedback.

## Troubleshooting

- **No audio?** Browsers require interaction—click or press any key once to unlock audio. Check the quick music toggle.
- **Theme not sticking?** Ensure `localStorage` is available (disable private mode restrictions) and that `rt_theme` is not blocked.
- **Performance dips?** Lower volume, disable music, or switch to the Ambient vibe; this trims active oscillators.

