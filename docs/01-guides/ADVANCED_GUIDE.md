# Advanced Guide

This guide focuses on implementation patterns and extension strategy.

For raw function signatures, use `docs/02-reference/API_REFERENCE.md`.
For module ownership and architecture, use `docs/03-architecture/CODE_STRUCTURE.md`.

## Extension Workflow

1. Identify state owner first.
2. Implement logic at the owner boundary.
3. Emit/update state once.
4. Let UI/audio consume emitted state instead of recomputing it.

### Example: Adding a New Mode

1. Add completion and score logic in `GameEngine`.
2. Add launcher card and mode metadata in `index.html` translations.
3. Extend `UIManager` mode cycling arrays.
4. Add leaderboard slot + sort rule in `StorageManager`.

### Example: Adding a New Persistent Setting

1. Add key in `DEFAULT_SETTINGS`.
2. Add UI control (`index.html`).
3. Add event binding in app setup.
4. Apply in `#applySettings()` and sync mirrored controls.

## UI Patterns

### Custom Selects

- Native `select` remains source-of-truth state.
- Visual custom dropdown mirrors native options and selected value.
- Selection commits must dispatch native `change` event.
- i18n updates should rebuild visible custom options.

### Launcher Navigation

- Keep keyboard and pointer interactions equivalent.
- Selected mode must synchronize visual state and ARIA state (`aria-selected`).
- Do not intercept arrows when user is focused inside a form control.

## Reliability Checklist

Before release:

- Start each mode and confirm no overlay dim regression.
- Verify pause/resume and quit flow in all modes.
- Check language switch updates launcher + settings dropdowns.
- Check music style switch from launcher and settings.
- Confirm leaderboard tabs still switch independently.

## Performance Checklist

- Avoid per-frame DOM queries in game loop.
- Keep animation-heavy effects outside the main board draw path.
- Prefer class toggles over repeated inline style churn where possible.
