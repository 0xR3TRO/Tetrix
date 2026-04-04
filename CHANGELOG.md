# Changelog

All notable changes to RetroTetris will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2025-04-04

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

## [1.0.0] - 2025-04-04

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
