# Code Structure

This file describes the current project organization and runtime boundaries.

## Top-Level Layout

- `index.html` - application shell, screen markup, bootstrapping logic
- `src/` - runtime modules and game systems
- `styles/` - visual system and layout styles
- `docs/` - technical and development documentation

## Runtime Modules (`src/`)

- `engine.js`
  - Core gameplay state and rules
  - Piece physics, gravity, lock delay, scoring, mode completion
  - EventEmitter-based outputs for UI/audio

- `renderer.js`
  - Draws current engine state to canvas
  - Renders board, active/ghost piece, hold, queue, overlays

- `input.js`
  - Keyboard/touch/gamepad adapter
  - DAS/ARR behavior and input callback dispatch

- `audio.js`
  - Procedural SFX and music loop generation (Web Audio API)
  - Runtime music style switching (`classic`, `pulse`, `ambient`)

- `storage.js`
  - Local persistence for settings/stats/leaderboards
  - Includes shared formatting helpers

- `ui.js`
  - Screen transitions, HUD updates, pause/game-over overlays
  - Launcher navigation and mode selection behavior

- `custom-select.js`
  - UI enhancement for themed custom dropdowns
  - Keeps native selects as source-of-truth state

- `i18n.js`
  - Standalone i18n module for modular integration paths

## Styling Layers (`styles/`)

- `main.css`
  - Theme tokens (`--rt-*`)
  - Launcher and non-game screens
  - Buttons, custom selects, responsive breakpoints

- `game.css`
  - Active game layout and side panels
  - Pause overlay and touch controls

- `animations.css`
  - Shared animations and reduced-motion behavior

## Runtime Flow

1. DOM loads and creates `Tetrix` app instance.
2. App initializes storage/audio/engine/renderer/input/ui.
3. App wires engine events to audio + UI effects.
4. User starts mode from launcher.
5. Main frame loop runs engine update + render + HUD sync.
6. Game completion emits mode result and transitions to post-game UI.

## Design Rules

- Engine is state authority for gameplay correctness.
- Renderer is read-only against engine state.
- UI must not duplicate gameplay logic.
- Persisted settings should always be applied through app-level sync methods.
- Custom selects should emit native `change` for compatibility with existing listeners.

## Recommended Future Refactors

- Move inline app bootstrap class from `index.html` into `src/app.js`.
- Replace remaining inline translation object with module-backed i18n loading.
- Add dedicated test harness for engine scoring and mode completion.
