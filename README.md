# Kanso Matcha

A quiet, warm digital notebook theme for [Obsidian](https://obsidian.md).

**Kanso Matcha** combines the functional clarity of [Minimal](https://github.com/kepano/obsidian-minimal) with a distinct Japanese-inspired visual identity drawn from Zen, Wabi-Sabi and Matcha.

The result should feel like a calm, warm, natural and distraction-free environment — without sacrificing Obsidian's functionality or customization.

## Modes

- **Morning Matcha** — light, warm paper tones.
- **Evening Zen** — deep warm charcoal, quiet botanical accents.

## Development

This theme uses SCSS as source, compiled to a distributable `theme.css`.

### Requirements

- Node.js
- [pnpm](https://pnpm.io)

### Commands

```bash
pnpm install   # install dependencies (Sass)
pnpm dev       # watch mode: recompile styles/index.scss -> theme.css on change
pnpm build     # one-off production build -> theme.css
pnpm fonts     # regenerate styles/_fonts.scss (base64-embedded Latin woff2)
pnpm validate  # lint/validate the SCSS sources and generated theme.css
```

### Fonts

Kanso Matcha bundles its type system as base64-encoded woff2 files so the
theme works offline and on mobile (no @import, no separate font files):

- **IBM Plex Sans** (400, 500) — UI, with IBM Plex Sans Arabic (400, 500).
- **Literata** (variable, roman + italic) — title, headings, body.
- **IBM Plex Mono** (400, 600) — code.
- **Noto Naskh Arabic** (variable) — Arabic notes.

Regenerate `styles/_fonts.scss` with `pnpm fonts` after changing the pairing.
Full license text in `FONT-LICENSES.txt`.

### Local vault output

Copy `.env.example` to `.env` and set `OBSIDIAN_PATH` to the local Obsidian vault
theme folder before running the build, so the compiled `theme.css` is copied
into the vault for live reload.

## Status

Early development. Phase 0 (research) is complete; Phase 1 (project foundation) is in progress.

## License

MIT — see [LICENSE](LICENSE).
