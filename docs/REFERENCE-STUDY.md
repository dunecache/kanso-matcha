# Reference Study — Kanso Matcha

Research deliverable for **Phase 0 — Research and Discovery**.

This document records the study of:

1. Minimal's architecture.
2. Minimal's feature set.
3. Obsidian's theming system.
4. Japanese-inspired visual references.
5. The proposed design system.
6. The proposed theme architecture.
7. Features to adopt conceptually.
8. Features to improve.
9. Features intentionally excluded.
10. Implementation decisions.

---

## 1. Minimal architecture analysis

### 1.1 Source directory organization

Minimal (v9.1.4) organizes its source as follows under `src/scss/`:

```
src/scss/
├── index.scss              # Sass entry point / module composition root
├── app/                    # Obsidian application shell areas
│   ├── bases.scss          # Base layers, backgrounds, raised surfaces
│   ├── editor.scss         # Editor background, active line, cursor
│   ├── metadata.scss       # Metadata block
│   ├── preview.scss        # Live preview containers
│   ├── ribbon.scss         # Left navigation ribbon
│   ├── status-bar.scss     # Status bar
│   ├── tab-stacks.scss     # Tab stacks
│   ├── title-bar.scss      # Window title bar
│   ├── window-frame.scss   # Desktop window frame
│   └── workspace.scss      # Workspace layout
├── color-schemes/          # Named light/dark schemes (HSL-driven)
├── components/             # Reusable component styling
│   ├── buttons.scss
│   ├── document-search.scss
│   ├── modals.scss
│   ├── popovers.scss
│   ├── progress.scss
│   └── tooltips.scss
├── content/                # Markdown content styling
│   ├── blockquotes.scss
│   ├── callouts.scss
│   ├── checklists.scss
│   ├── code.scss
│   ├── embeds-transclusions.scss
│   ├── links.scss
│   ├── lists.scss
│   ├── preview-backlinks.scss
│   ├── pdf.scss
│   ├── tables.scss
│   ├── tags.scss
│   └── text.scss
├── dev/                    # Developer-facing helpers (e.g. dev-block-width)
├── features/               # Optional / user-selectable features
│   ├── active-line.scss
│   ├── animations.scss
│   ├── block-width.scss
│   ├── borders.scss
│   ├── cards.scss
│   ├── checklist-icons.scss
│   ├── colorful-active-states.scss
│   ├── colorful-frame.scss
│   ├── colorful-headings.scss
│   ├── focus-mode.scss
│   ├── full-width-media.scss
│   ├── helpers.scss
│   ├── helpers-tables.scss
│   ├── image-filters.scss
│   ├── image-grid.scss
│   ├── labeled-nav.scss
│   ├── link-underline.scss
│   ├── sidebar-background.scss
│   ├── tab-styles.scss
│   ├── trim-file-names.scss
│   └── underline-headings.scss
├── mobile/                 # Mobile-specific overrides
│   ├── ios.scss
│   ├── mobile.scss
│   └── toolbar.scss
├── plugins-core/           # Core plugin surfaces (file explorer, search, canvas, sync…)
├── plugins/                # Community plugin surfaces (calendar, dataview, git, kanban…)
├── variables/              # Design token definitions
│   ├── adaptive-font-size.scss
│   ├── dynamic-color.scss
│   ├── root.scss
│   └── theme.scss
└── variables/dynamic-color.scss
```

Key structural observations for Kanso Matcha:

- Minimal uses a **single Sass entry point** (`index.scss`) that composes modules via `@use`.
- The entry point groups modules into phases: `variables`, `app`, `components`, `content`, `features`, `mobile`, `plugins-core`, `plugins`, `color-schemes`.
- **Tokens live first** (`variables/`), then get mapped into Obsidian's semantic variable names (e.g. `--background-primary: var(--bg1)`).
- Optional features are split into separate modules so they can be toggled independently and stay out of the base experience.
- Community plugin styling lives in a clearly separate namespace from core Obsidian styling.

### 1.2 SCSS architecture

- Minimal targets SCSS via the `sass` Dart Sass package (v1.83+).
- Source: `src/scss/index.scss`; each module is a single-file partial with `_` prefixed file names internally via directories.
- Build (`build.js`): compiles `index.scss` with `style: 'expanded'` into `theme.css` (with minification temporarily disabled), and also emits `Minimal.css` (expanded copy at project root).
- Two distribution files:
  - `theme.css` — distributed (minified where enabled) to the community themes store; also copied to the local vault (`.obsidian/themes/`) via `.env` → `OBSIDIAN_PATH`.
  - `Minimal.css` — unminified convenience copy at repo root.
- Build tooling: `npm run build` (one-off), `npm run dev` (`node build.js --watch`) using `chokidar` to watch `src/scss/**/*.{scss,css}`.
- Generated CSS must include the MIT license notice; the license lives at `src/css/license.css`.

Implications for Kanso Matcha:

- Kanso Matcha should use the same module composition approach: an entry SCSS file composing `_tokens`, `_variables`, `_base`, `_typography`, `_workspace`, `_editor`, `_markdown`, … partials.
- Generated `theme.css` should be reproducible (deterministic Sass compilation) and self-contained.

### 1.3 CSS variable mapping

Minimal maps its own semantic tokens onto Obsidian's CSS variables using the `.theme-light` / `.theme-dark` selectors:

```scss
.theme-light,
.theme-dark {
  --background-primary:        var(--bg1);
  --background-secondary:      var(--bg2);
  ...
  --text-normal:                var(--tx1);
  --text-muted:                 var(--tx2);
  --text-accent:                var(--ax1);
  --interactive-normal:        var(--ui1);
  --interactive-accent:        var(--ax3);
  --divider-color:             var(--ui1);
  --ribbon-background:         var(--bg2);
  ...
}
```

This is the recommended pattern for Kanso Matcha: define `--km-*` semantic tokens in a `:root`-scoped token layer and map them onto Obsidian's official variables per theme selector.

### 1.4 Theme configuration

Minimal exposes configuration primarily through:

- Companion plugin: **Minimal Theme Settings** (`kepano/obsidian-minimal-settings`) for background contrast, color schemes, line width, hotkeys.
- **Style Settings** plugin for custom color schemes / deeper customization.
- **Hider** plugin for hiding Obsidian UI elements.

Kanso Matcha should follow the AGENTS.md rule: keep a no-companion-plugin core (theme works with plain Obsidian), use CSS variables + optional helper classes.

### 1.5 Build pipeline notes

- Node.js + npm required at development time only; runtime has no dependencies.
- No runtime JavaScript in the theme itself.
- Vault copy via `.env` (`OBSIDIAN_PATH`).

---

## 2. Minimal feature analysis

### 2.1 Application interface

Minimal styles: workspace, app bases, editor, metadata, preview, ribbon, status bar, tab stacks, title bar, window frame, workspace — all via the `app/` module.

### 2.2 Editor

Active-line background, cursor, editor background tokens from `app/editor` + `features/active-line`.

### 2.3 Reading / markdown content

Styled via `content/`: blockquotes, callouts, checklists, code, embeds/transclusions, links, lists, preview-backlinks, pdf, tables, tags, text.

### 2.4 Interface features

Optional toggles (via companion settings / hotkeys / helper classes):

- Focus mode (hide title bar + status bar).
- Colorful frame (accent for top app area).
- Colorful headings (per-heading accent).
- Colorful active states.
- Labeled navigation (text labels for primary navigation).
- Border toggles (workspace borders hidden).
- Sidebar background (subtle surface distinction).
- Tab styles.
- Animations.
- Full-width media.
- Image grid.
- Image filters (`#invert`, `#invertW`, `#circle`, `#outline`).
- Link underline.
- Underline headings.
- Trim filenames.
- Active line.
- Block width / line width (normal, wide, max, full).
- Background contrast (incl. true black / OLED).
- Focus mode.

### 2.5 Content helpers / block widths

Minimal pioneered CSS helper classes for per-note control:

- Image: `img-100`, `img-max`, `img-wide`, `full-bleed` style modifiers.
- Tables: `table-100`, `table-max`, `table-wide`, `table-nowrap`, `table-wrap`, `table-numbers`, `table-tabular`, `table-small`, `table-tiny`, `table-lines`, `row-lines`, `col-lines`, `row-alt`, `col-alt`.
- Iframes/embeds: similar width classes.
- Cards: `cards`, `cards-align-bottom`, `cards-cover`, `cards-16-9`, `cards-1-1`, `cards-2-1`, `cards-2-3`, `cards-cols-1..8` — for Dataview tables.
- Embeds/transclusions: `embed-strict`.

### 2.6 Checklists

Rich checkbox syntax beyond default task list: `- [>]` forward, `- [ ]` etc., with custom icons per state.

### 2.7 Mobile

`mobile/` module: `mobile.scss` (Android), `ios.scss` (iOS), `toolbar.scss` (bottom toolbar). Platform-scoped selectors.

### 2.8 Plugin support

Separate namespaces: `plugins-core/`, `plugins/`, plus optional third-party surfaces. Known limitations: compatibility must be tested with actual plugins.

---

## 3. Obsidian CSS variable research

### 3.1 Official guidance

- Obsidian exposes **hundreds of CSS variables** for UI customization.
- Themes should define variables under `.theme-light` and `.theme-dark`.
- `body` with `:root` variables is discouraged where a scoped selector fits (`.theme-dark`, `.theme-light`, or element selectors).
- Both variables and utility approach: overriding Obsidian variables can achieve most theming without brittle selectors.
- Obsidian's developer docs also document foundations: Borders, Colors, Cursor, Icons, Layers, Radiuses, Spacing; plus Components (Canvas, File explorer, Graph, Search), Editor, Foundations, Plugins, Publish, Window.

### 3.2 Key variable categories relevant to Kanso Matcha

Foundations:

- **Colors**: base backgrounds, text, accents, interactive states, borders, modifiers, table rows, selection, highlights, shadows, modal borders, mobile sidebar background.
- **Spacing**: `--size-*` / spacing tokens.
- **Radii**, **Layers**, **Borders**, **Cursor**, **Icons**.

Window:

- Divider, Ribbon, Scrollbar, Status bar, Window frame, Workspace background.

Editor:

- Font families/sizes, syntax variables, etc.

### 3.3 Obsidian variable naming observed from Minimal's mapping

Minimal's semantic token architecture maps Obsidian variables in three tiers:

- Kanso-matcha-style tier 1 (own tokens): `--bg1..3`, `--ui1..3`, `--tx1..4`, `--ax1..3`, `--hl1..2`, `--sp1`, `--base-h/s/l`, `--accent-h/s/l`, `--color-*-rgb`.
- Tier 2 (theme selector overrides): `--background-primary`, `--background-secondary`, `--background-modifier-*`, `--text-normal`, `--text-muted`, `--text-accent`, `--interactive-*`, `--divider-color`, `--nav-item-*`, `--ribbon-background`, `--titlebar-*`, `--tab-*`, `--status-bar-*`, `--modal-*`, `--shadow-*`, `--active-line-bg`, `--text-selection`, `--checkbox-*`, `--code-*`, `--quote-*`, `--metadata-*`, `--icon-*`, `--prompt-*`, `--search-*`, `--workspace-*`.

### 3.4 Dark / light strategies

- `.theme-light` and `.theme-dark` are the canonical selectors.
- Additional variant classes (e.g. `minimal-light-contrast`) show how variants layer via selectors.
- Mobile is first-class via `is-mobile` / `is-phone` selectors and platform-specific variables (`--mobile-sidebar-width`).

### 3.5 Official theme requirements (from docs)

- `manifest.json` fields: `name`, `version`, `minAppVersion`, `author`, `authorUrl`, `fundingUrl`.
- `versions.json` maps app version → theme version for submission.
- Sample theme: `obsidianmd/obsidian-sample-theme` (with `theme.css` pre-populated with standard variables).

---

## 4. Japanese-inspired visual research

### 4.1 Zen

- Intentional empty space, clear hierarchy, reduced visual noise, subtle interactions, calm predictable layouts.

### 4.2 Wabi-Sabi

- Warm, imperfect-looking natural surfaces; muted earth tones; soft transitions; natural rather than sterile contrast; restrained borders; avoid excessive geometric decoration.

### 4.3 Matcha

- Muted matcha greens; sage and moss undertones; warm clay accents; natural color relationships; accent used intentionally.

### 4.4 Warm paper / stone / ceramic references

- Background tones derived from warm paper (`#F3F1E9`), aged paper (`#FAF9F4` elevated), warm gray surface (`#E8E5DA`).
- Earth-tone accents: clay (`#B68E78`), matcha green (`#89977A`), sage (`#AAB49A`).
- Borders derived from warm taupe (`#D5D0C2`) rather than pure gray — preserving warmth.

### 4.5 Light / dark atmosphere

- Morning Matcha (light): calm paper-like background, warm neutrals, soft surfaces.
- Evening Zen (dark): deep warm charcoal, elevated warm gray surfaces, reduced contrast but high readability.

---

## 5. Proposed design system

### 5.1 Goals

- Calm, warm, natural, distraction-free environment without sacrificing functionality or customization.
- Editorial, notebook-like reading experience.
- Original theme identity — not a reskin of Minimal.

### 5.2 Two coordinated modes

- Morning Matcha — light.
- Evening Zen — dark.

### 5.3 Semantic tokens (from AGENTS.md design system, initial values)

Light:

| Token | Hex | Use |
|---|---|---|
| Background | #F3F1E9 | App background |
| Surface | #E8E5DA | Panels |
| Elevated surface | #FAF9F4 | Cards, modals |
| Primary matcha | #89977A | Accent |
| Secondary sage | #AAB49A | Soft accent |
| Soft matcha | #DCE2D1 | Highlights |
| Warm clay | #B68E78 | Accent (clay) |
| Main text | #34382F | Body |
| Secondary text | #77796D | Muted |
| Border | #D5D0C2 | Hairlines |

Dark:

| Token | Hex |
|---|---|
| Background | #22251F |
| Surface | #2D3129 |
| Elevated surface | #363A31 |
| Primary matcha | #A3AE91 |
| Secondary sage | #858F76 |
| Soft matcha | #41483A |
| Warm clay | #B58E79 |
| Main text | #E8E5D9 |
| Secondary text | #AAA99B |
| Border | #41463B |

### 5.4 Semantic color categories

- Base backgrounds, workspace surfaces, elevated surfaces, main/muted typography, links, interactive accents, selection, focus, borders, headings, syntax, callouts, tags, graphs, diagnostics, status indicators.

### 5.5 Mapping strategy

Use semantic CSS custom properties and map onto Obsidian's official variables per theme selector, with fallbacks.

---

## 6. Proposed theme architecture

### 6.1 Module layout (aligned with research findings)

Based on Minimal's structure and Kanso Matcha's own proposed structure:

```
kanso-matcha/
├── AGENTS.md
├── ROADMAP.md
├── README.md
├── LICENSE
├── manifest.json
├── theme.css
├── styles/
│   ├── _tokens.scss
│   ├── _variables.scss
│   ├── _base.scss
│   ├── _typography.scss
│   ├── _workspace.scss
│   ├── _editor.scss
│   ├── _markdown.scss
│   ├── _headings.scss
│   ├── _links.scss
│   ├── _callouts.scss
│   ├── _tables.scss
│   ├── _lists.scss
│   ├── _tags.scss
│   ├── _embeds.scss
│   ├── _properties.scss
│   ├── _graph.scss
│   ├── _modals.scss
│   ├── _mobile.scss
│   ├── _accessibility.scss
│   └── plugins/
├── settings/
│   └── style-settings.css
├── docs/
├── scripts/
└── package.json
```

### 6.2 Build

- SCSS compile via Sass (Dart Sass) to `theme.css`.
- Reproducible production build; watch mode for development.

### 6.3 Technical rules (recap)

Modular source; distributable `theme.css`; no runtime JS; self-contained install; Obsidian-supported variables; avoid unnecessary `!important`; scoped selectors; no brittle DOM selectors; responsive variables; mobile rules separate; no duplicate declarations; reproducible build.

---

## 7. Features to adopt conceptually from Minimal

- Content width management (normal / wide / max / full) via Obsidian variables (`--line-width`, `--max-width`) and optional helper classes.
- Image grids, image filters, image widths, full-width media.
- Table controls (width, wrapping, lines, row/col striping, row numbers, tabular figures).
- Cards layout for Dataview tables.
- Embed/transclusion styling (seamless transclusion).
- Background contrast options (incl. true black for OLED).
- Alternate checkbox styles and icons.
- Helper classes for per-note layout control (cards, image grid, block widths, table controls).
- Focus mode, sidebar backgrounds, tab styles, labeled nav, link underline, heading underline, border toggles, animations, colorful variants — where they fit Kanso Matcha's restraint principles.
- Mobile module structure (platform-specific overrides).

---

## 8. Features to improve over Minimal

- Keep **restraint** (Kanso Matcha's core philosophy) rather than adopting "colorful" variants wholesale.
- Avoid re-introducing borders where whitespace/space alone can separate surfaces.
- Avoid heavy box treatments for blockquotes/callouts — prefer soft surfaces and muted accents.
- Keep visual identity original rather than reskinning Minimal's palette.
- Prefer semantic tokens over Minimal's generic HSL ramps for maintainability.

---

## 9. Features intentionally excluded

- Full set of plugin integrations beyond essentials (until validated with actual plugins).
- Publish-specific theming at this stage (focus: app theme).
- E-ink, OLED-friendly variant (future ideas), additional typography presets (future), custom visual presets (future).

---

## 10. Implementation decisions

- The theme will expose two coordinated modes: **Morning Matcha** (light), **Evening Zen** (dark).
- Semantic tokens named `--km-*` in source, mapped to Obsidian variables.
- Light defaults; dark via `.theme-dark`.
- Font stacks to use system fallbacks; no bundled fonts without licensing.
- Typography-first approach; minimal chrome overrides.
- Style Settings optional; theme must work without it.
- Build via Sass; output `theme.css`.

---

## Phase 0 status

- [x] Minimal repository inspected (structure, build, manifest, variables).
- [x] Minimal feature analysis (features, helpers, plugins, mobile).
- [x] Obsidian CSS variable research (official docs, variables, light/dark selectors, manifest requirements).
- [x] Visual research (Zen, Wabi-Sabi, Matcha, warm paper/stone colors, light/dark atmosphere).
- [x] Design system direction (two modes, semantic tokens, mapping plan).
- [x] Theme architecture proposal (module plan).
- [x] Deliverables created: `docs/REFERENCE-STUDY.md`, `docs/DESIGN-SYSTEM.md`.

Next phase: **Phase 1 — Project Foundation**.
