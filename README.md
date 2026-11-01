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
pnpm validate  # lint/validate the SCSS sources and generated theme.css
```

### Local vault output

Copy `.env.example` to `.env` and set `OBSIDIAN_PATH` to the local Obsidian vault
theme folder before running the build, so the compiled `theme.css` is copied
into the vault for live reload.

## Status

Early development. Phase 0 (research) is complete; Phase 1 (project foundation) is in progress.

## License

MIT — see [LICENSE](LICENSE).
