# 🎮 RetroTetris

> Fully-featured browser Tetris implementing the official Tetris Guideline —
> built with vanilla JavaScript, no dependencies.

## 🚀 Play Now

Open `index.html` in your browser to play!

**[▶ Live Demo — GitHub Pages](https://0xR3TRO.github.io/Gameboy-Tetris)**

## ✨ Features

- **Official Tetris Guideline mechanics** — SRS rotation, 7-bag randomizer, wall kicks
- **T-Spin detection** — Single, Double, Triple, Mini T-Spin scoring
- **Ghost piece** — See where your piece will land
- **Hold queue** — Save a piece for later
- **Next queue** — Preview 5 upcoming pieces
- **3 game modes:**
    - Marathon — Classic endless, score as high as you can
    - Sprint (40L) — Clear 40 lines as fast as possible
    - Ultra (2min) — Max score in 2 minutes
- **Web Audio API** — Procedural sound effects (no external files)
- **LocalStorage** — High scores, settings, lifetime stats
- **Responsive** — Works on desktop and mobile
- **Configurable** — DAS/ARR settings for competitive play

## 🎮 Controls

### Keyboard (Desktop)

| Key        | Action                    |
| ---------- | ------------------------- |
| ← →        | Move left/right           |
| ↑ / X      | Rotate clockwise          |
| Z / Ctrl   | Rotate counter-clockwise  |
| ↓          | Soft drop                 |
| Space      | Hard drop                 |
| C / Shift  | Hold piece                |
| P / Escape | Pause                     |
| R          | Restart (after game over) |
| F          | Toggle FPS counter        |

### Touch (Mobile)

| Gesture          | Action     |
| ---------------- | ---------- |
| Swipe left/right | Move       |
| Swipe down       | Soft drop  |
| Swipe up         | Hard drop  |
| Tap left half    | Rotate CCW |
| Tap right half   | Rotate CW  |
| Long press       | Hold       |

### Gamepad

Xbox/PlayStation controller support via Gamepad API.

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  RetroTetris                                                │
├─────────────────────────────────────────────────────────────┤
│  index.html                                                 │
│    ├── Main entry point                                     │
│    └── Game initialization                                  │
├─────────────────────────────────────────────────────────────┤
│  src/                                                       │
│    ├── engine.js      Game logic, physics, scoring          │
│    ├── renderer.js    Canvas rendering                      │
│    ├── input.js       Keyboard/touch/gamepad handling       │
│    ├── audio.js       Web Audio API sound system            │
│    ├── storage.js     LocalStorage persistence              │
│    └── ui.js          Menus, overlays, HUD                  │
├─────────────────────────────────────────────────────────────┤
│  styles/                                                    │
│    ├── main.css       Layout, typography                    │
│    ├── game.css       Board, panels                         │
│    └── animations.css CSS animations                        │
└─────────────────────────────────────────────────────────────┘
```

### Event-Driven Design

Components communicate through an `EventEmitter`:

```javascript
engine.on("lineClear", (data) => {
    audio.playLineClear(data.lines);
    ui.showActionText("TETRIS!");
});
```

## 📊 Tetris Guideline Compliance

| Feature                       | Status |
| ----------------------------- | ------ |
| 10×20 board (+ 2 hidden rows) | ✅     |
| 7-bag randomizer              | ✅     |
| Super Rotation System (SRS)   | ✅     |
| Wall kicks (I and JLSTZ)      | ✅     |
| Lock delay (500ms, 15 resets) | ✅     |
| Ghost piece                   | ✅     |
| Hold queue                    | ✅     |
| 5-piece preview               | ✅     |
| T-Spin detection              | ✅     |
| Back-to-back bonus            | ✅     |
| Combo scoring                 | ✅     |
| Perfect clear                 | ✅     |
| DAS/ARR configurable          | ✅     |

## 🔧 Development

### Running Locally

No build process needed! Simply open `index.html` in a modern browser.

For development with live reload:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

### Browser Support

- Chrome 100+
- Firefox 100+
- Safari 15+
- Edge 100+

### Project Structure

```
Gameboy-Tetris/
├── index.html          # Entry point
├── src/
│   ├── engine.js       # Game logic, physics, collisions
│   ├── renderer.js     # Canvas rendering
│   ├── input.js        # Input handling (keyboard/touch/gamepad)
│   ├── audio.js        # Web Audio API sound system
│   ├── storage.js      # LocalStorage persistence
│   └── ui.js           # UI management
├── styles/
│   ├── main.css        # Layout, typography
│   ├── game.css        # Board, panels
│   └── animations.css  # CSS animations
├── Directories/        # Legacy p5.js implementation (deprecated)
├── LICENSE             # MIT License
├── README.md           # This file
└── CHANGELOG.md        # Version history
```

## ⚖️ Legal Notice

This project is an independent fan implementation of the Tetris game concept.

"Tetris" and associated trademarks are property of The Tetris Company.
This project is not affiliated with, endorsed by, or sponsored by The Tetris Company or any of its subsidiaries.

## 📝 License

MIT © 2025 0xR3TRO

See [LICENSE](LICENSE) for full text.
