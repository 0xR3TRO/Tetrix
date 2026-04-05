# API Reference

This document is a function-level reference for the core runtime.

## Runtime Composition

Main app class (`Tetrix` in `index.html`) composes:

- `GameEngine` (`src/engine.js`)
- `Renderer` (`src/renderer.js`)
- `InputManager` (`src/input.js`)
- `AudioEngine` (`src/audio.js`)
- `StorageManager` (`src/storage.js`)
- `UIManager` (`src/ui.js`)
- `CustomSelectManager` (`src/custom-select.js`)

## Main App (`Tetrix`)

### `start(mode = "marathon")`

- Resets engine with target mode.
- Resets timing accumulators.
- Activates gameplay screen.
- Starts game music.
- Starts frame loop.

### `#gameLoop(timestamp)`

- Calculates clamped `deltaTime`.
- Runs engine update when not paused/game-over.
- Applies gravity and soft-drop multiplier.
- Polls gamepad.
- Syncs HUD and renderer every frame.

### `#setMusicStyle(style)`

- Accepts `classic`, `pulse`, `ambient`.
- Persists style in storage.
- Restarts music if music is active.

### `#setMusicEnabled(enabled, autoplay = true)`

- Updates audio engine state.
- Persists `musicEnabled`.
- Syncs launcher/settings toggle controls.

### `#setLanguage(lang)`

- Loads i18n locale.
- Persists `tetrix_lang`.
- Synchronizes language controls and custom selects.
- Refreshes localized, JS-rendered UI blocks (leaderboard and launcher score tables).

### `#applySettings()`

- Applies input config (`DAS`, `ARR`, `SDF`).
- Applies audio config and persisted style/toggles.
- Syncs mirror controls in launcher + settings.
- Uses persisted `musicEnabled`; default project setting is `false` in `StorageManager`.

## Game Engine (`src/engine.js`)

### Public Getters

- `board`, `currentPiece`, `holdPiece`, `canHold`
- `score`, `level`, `lines`, `combo`
- `gameOver`, `paused`, `mode`, `timeElapsed`
- `piecesPlaced`, `tSpins`

### Public Methods

- `getNextPieces(count = 5): string[]`
- `getGravity(): number`
- `reset(mode = "marathon"): void`
- `movePiece(direction): boolean`
- `rotatePiece(direction): boolean`
- `softDrop(): boolean`
- `hardDrop(): number`
- `hold(): boolean`
- `getGhostY(): number`
- `update(deltaTime): void`
- `applyGravity(): boolean`
- `togglePause(): void`
- `setPaused(paused): void`

### Emitted Events

- `reset` → `{ mode }`
- `pieceSpawn` → `{ type }`
- `pieceMove` → `{ direction }`
- `pieceRotate` → `{ direction }`
- `softDrop` → no payload
- `hardDrop` → `{ cells }`
- `hold` → `{ held }`
- `pieceLock` → `{ type }`
- `lineClear` → `{ lines, rows, points, combo, isTSpin, isMini, isPerfectClear, actionText }`
- `levelUp` → `{ level }`
- `pauseToggle` → `{ paused }`
- `sprintComplete` → `{ time, score }`
- `ultraComplete` → `{ score, lines }`
- `gameOver` → `{ score, level, lines, time }`

## UI Manager (`src/ui.js`)

### Public Methods

- `showScreen(screenName): void`
- `showGameOver(stats): void`
- `showPause(): void`
- `hidePause(): void`
- `updateHUD(state): void`
- `showActionText(text, type = "default"): void`
- `refreshLocalizedContent(): void`

### Behavior Notes

- `showScreen("game")` activates `#game-container` directly.
- Keyboard launcher navigation supports arrows, `Home`, `End`, `Enter`, `Space`.
- Interactive controls (`input`, `select`, `textarea`, `button`) are excluded from global launcher shortcuts.

## Input Manager (`src/input.js`)

### Public Methods

- `setConfig(newConfig): void`
- `setEnabled(enabled): void`
- `on(action, callback): void`
- `pollGamepad(): void`
- `isSoftDropHeld(): boolean`
- `getSoftDropFactor(): number`
- `destroy(): void`

### Notes

- Keyboard mapping is declared in `KEY_ACTIONS`.
- DAS/ARR repetition is used for horizontal movement.
- Blur event auto-pauses active game.

## Storage Manager (`src/storage.js`)

### Settings API

- `getSettings(): object`
- `getSetting(key): any`
- `updateSettings(newSettings): void`
- `resetSettings(): void`

### Stats API

- `getStats(): object`
- `updateStats(gameStats): void`
- `resetStats(): void`

### Leaderboard API

- `getHighScores(mode): array`
- `isHighScore(mode, score): boolean`
- `addHighScore(mode, entry): number`
- `clearHighScores(mode?): void`

### Formatting Helpers

- `StorageManager.formatTime(ms): string`
- `StorageManager.formatScore(score): string`

## Audio Engine (`src/audio.js`)

### Lifecycle and Config

- `init(): void`
- `resume(): Promise<void>`
- `setMasterVolume(value): void`
- `setSfxVolume(value): void`
- `setMusicVolume(value): void`
- `setMusicStyle(style): void`
- `setEnabled(enabled): void`
- `setMusicEnabled(enabled): void`

### SFX and Music

- `playMove()`, `playRotate()`, `playLock()`, `playLineClear(lines)`
- `playTetris()`, `playTSpin()`, `playLevelUp()`, `playGameOver()`
- `playHardDrop()`, `playHold()`, `playPause()`
- `playMenuSelect()`, `playMenuMove()`
- `playMusic()`, `stopMusic()`, `toggleMusic()`
- `isMusicPlaying(): boolean`

## Renderer (`src/renderer.js`)

### Public Methods

- `render(): void`
- `toggleFps(): void`
- `drawPiecePreview(ctx, pieceType, x, y, scale = 0.6): void`

## Custom Select Manager (`src/custom-select.js`)

### Public Methods

- `init(): void`
- `syncAll(): void`
- `destroy(): void`

### Notes

- Keeps native `<select>` in DOM for semantics and value source.
- Re-renders options on `i18n:updated` event.
- Dispatches native `change` on selection commit.

## i18n Module (`index.html` / `src/i18n.js`)

### Public Methods

- `I18n.load(language): void`
- `I18n.t(key, vars?): string`

### Events

- `i18n:updated` (document-level `CustomEvent`)
  - Emitted after language switch.
  - Used by `CustomSelectManager` and UI refresh flow.
