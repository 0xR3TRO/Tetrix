# Changelog

All notable changes to RetroTetris will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.0] - 2026-04-04

### Added

- **Enhanced Game Window UI**
    - Redesigned pause overlay with blurred backdrop and polished button layout
    - Pause menu buttons now feature left-border accent, icon prefixes (▶ ↺ ⚙ ⏏), hover slide animation, and a dedicated danger style for "Quit to Menu"
    - Header buttons (`.header-btn`) upgraded: rounded corners, lift-on-hover shadow, and smooth active press effect
    - Touch control buttons (`.touch-btn`) redesigned: depth shadow, radial ripple on press, smoother press animation with `scale(0.97)` feedback
    - Panel sections gain a subtle hover highlight for better interactivity cues
    - Progress bar (level) increased to 5 px height with fully rounded caps
    - Game container shadow layered with inner border ring for a premium look
    - Board container border and shadow refined for cleaner framing

- **Pause Subtitle**
    - Added `.pause-subtitle` text element beneath the pause title to clarify game state

### Changed

- CSS architecture section renamed from "Classic Modern Gameplay Override" to "Advanced Gameplay UI Override – v3.0"
- Panel label letter-spacing increased to 0.15em, font-size reduced to 0.48rem for a cleaner information hierarchy
- Touch button minimum height increased to 50 px (main: 58 px) for better touch targets
- Game container gradient angle changed to 160° for a more dynamic look
- Hold and Next containers use a more subtle background for better piece visibility

### Fixed

- LICENSE copyright year updated to 2026
- Dates across documentation aligned to 2026-04-04

## [2.0.0] - 2026-04-04

### Added

- **Theme System**
    - Dark/Light theme toggle with CSS custom properties
    - Theme persistence in localStorage
    - Navbar theme toggle button (🌙/☀️)
    - Settings panel theme selection

- **Internationalization (i18n)**
    - Multi-language support: Polish, English, German, Japanese
    - Language switcher in navbar (PL/EN/DE/JA)
    - Language selection in settings
    - All UI text translated with data-i18n attributes
    - Pluralization support for all languages

- **Enhanced UI/UX**
    - Persistent navbar with logo and controls
    - Toast notification system
    - Improved pause overlay with blur effect
    - Better button hover states with slide animation
    - Score flyout animation

- **Design Tokens**
    - Comprehensive CSS variable system (--rt-* prefix)
    - Typography tokens (display, mono fonts)
    - Timing tokens for animations
    - Spacing and border radius tokens

### Changed

- CSS architecture refactored with design token system
- Pause overlay now uses backdrop blur filter
- Settings screen reorganized with theme and language options
- All screens now account for navbar height

### Fixed

- Body background now uses theme-aware variable
- Better color contrast in light theme for accessibility

## [1.0.0] - 2026-04-04

### Added

- **Core Game Engine**
    - Full Tetris Guideline implementation
    - Super Rotation System (SRS) with complete wall kick tables
    - 7-bag randomizer for fair piece distribution
    - Lock delay (500ms) with extended placement (15 resets max)
    - Gravity system with level-based speed progression

- **Tetromino System**
    - All 7 standard pieces (I, O, T, S, Z, J, L)
    - Proper rotation states for each piece
    - Ghost piece preview
    - Hold queue with once-per-piece restriction
    - 5-piece next queue preview

- **Scoring System**
    - T-Spin detection (Single, Double, Triple, Mini)
    - Back-to-back bonus for Tetrises and T-Spins
    - Combo system
    - Perfect clear detection and bonus
    - Soft drop and hard drop scoring

- **Game Modes**
    - Marathon: Endless classic mode
    - Sprint: Clear 40 lines as fast as possible
    - Ultra: Maximum score in 2 minutes

- **Input System**
    - Keyboard controls with configurable DAS/ARR
    - Touch controls for mobile devices
    - Gamepad support via Gamepad API
    - Auto-pause on window blur

- **Audio System**
    - Web Audio API procedural sound generation
    - Move, rotate, lock, line clear sounds
    - Tetris and T-Spin celebration sounds
    - Level up and game over sounds
    - Background music (Korobeiniki-inspired)

- **Persistence**
    - LocalStorage for high scores (top 10 per mode)
    - Settings persistence (DAS, ARR, volume, etc.)
    - Lifetime statistics tracking

- **Visual Design**
    - Retro-futuristic dark theme
    - Neon glow effects on pieces
    - CSS animations for line clears and actions
    - Action text overlays (TETRIS!, T-SPIN!, etc.)
    - Responsive layout for mobile

- **UI System**
    - Main menu with keyboard navigation
    - Mode selection screen
    - Pause overlay with options
    - Game over screen with score entry
    - Leaderboard display
    - Stats screen with lifetime totals
    - Settings panel

### Technical Details

- Pure vanilla JavaScript (ES2022+), no dependencies
- HTML5 Canvas for game rendering
- CSS3 with custom properties for theming
- Event-driven architecture
- 60 FPS fixed timestep game loop

### Browser Support

- Chrome 100+
- Firefox 100+
- Safari 15+
- Edge 100+
