# Changelog

All notable changes to Tetrix will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Settings now include a dedicated statistics reset action with confirmation prompt.
- Settings now include a full game reset action that clears settings, lifetime stats, and score tables.
- Name-entry screen now supports direct keyboard typing (`A-Z`, `0-9`) for high-score initials.
- Added localized strings for stats reset actions and guidance text in the name-entry flow.
- Added localized strings for full game reset actions and notifications.

### Changed

- Removed the fixed top navbar to keep launcher/gameplay layout cleaner.
- Launcher mode selection improved: horizontal arrows, `Home`/`End`, and accessible `aria-selected` sync.
- Project branding updated to `Tetrix`.
- Launcher quick actions converted into an icon menu.
- Selection lists now use custom dropdown controls backed by native `select` values.
- Theme styling refreshed with per-theme background gradients across launcher and app surfaces.
- Light theme redesigned with a distinct cool palette to avoid overlap with other themes.
- Typography updated across menu and in-game UI for better readability and visual consistency.
- Stats screen labels for best score and best level are now fully localized.
- Branding and game title were unified to `Tetrix` across source files and documentation.
- Stats, score tables, and secondary screens were visually centered for a consistent layout.

### Fixed

- Fixed dimmed gameplay issue caused by activating an empty `#game-screen` overlay during active play.
- Keyboard navigation no longer hijacks arrows while focus is on form controls (e.g. dropdowns).
- Name-entry key handling now prevents accidental browser back navigation on `Backspace`.

### Documentation

- Removed duplicated guide content and introduced a split docs structure.
- Added `docs/README.md` as a docs index.
- Added `docs/02-reference/API_REFERENCE.md` for function/event contracts.
- Added `docs/03-architecture/CODE_STRUCTURE.md` for architecture ownership and flow.
- Added `docs/04-localization/I18N_STYLE_GUIDE.md` for translation standards.
- Reworked `docs/01-guides/ADVANCED_GUIDE.md` as an implementation pattern guide.
- Sorted docs into dedicated folders (`01-guides`, `02-reference`, `03-architecture`, `04-localization`).

## [3.0.0] - 2026-04-04

### Added

- **Enhanced Game Window UI**
    - Redesigned pause overlay with blurred backdrop and polished button layout
    - Pause menu buttons now feature left-border accent, action icons, hover slide animation, and a dedicated danger style for "Quit to Menu"
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
    - Navbar theme toggle button (moon/sun)
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
