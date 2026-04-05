# Localization Guide

This document defines translation rules and terminology consistency for `Tetrix`.

## Scope

Use this guide when updating:

- inline translations in `index.html`
- module translations in `src/i18n.js`
- generated UI labels in `src/ui.js`

## Required Consistency

Always keep the following labels aligned across all locales.

| Key | Polish | English | German | Japanese |
| --- | --- | --- | --- | --- |
| `scores.title` | `Tabela wyników` | `Score Table` | `Punktetabelle` | `スコア表` |
| `scores.empty` | `Brak wyników` | `No results yet` | `Noch keine Ergebnisse` | `まだ結果はありません` |
| `menu.scores` | `Tabela wyników` | `Score Table` | `Punktetabelle` | `スコア表` |

## Translation Rules

- Prefer concise in-game language over literal long-form translation.
- Keep all menu labels as noun phrases.
- Avoid slang and avoid emoji in UI strings.
- Keep punctuation minimal on buttons and short labels.
- Use the same tone across launcher, settings, and post-game screens.

## Update Workflow

1. Update key values in `index.html` translation object.
2. Mirror equivalent values in `src/i18n.js`.
3. If dynamic content is generated in JS, ensure `refreshLocalizedContent()` covers it.
4. Run a grep check for outdated labels, for example: `rg -n "High Scores|Wysokie wyniki|ハイスコア"`.

## QA Checklist

- Switch between `pl`, `en`, `de`, and `ja` in launcher quick settings.
- Verify launcher score cards update immediately after language change.
- Verify leaderboard tab content and empty-state text use the active locale.
- Verify no truncated labels in custom dropdown controls.
