# Design System — Kanso Matcha

Phase 0 deliverable — design token and visual system documentation.

This document defines the proposed semantic design system for **Kanso Matcha** ahead of implementation.

---

## 1. Modes

| Mode | Name | Character |
|---|---|---|
| Light | **Morning Matcha** | Warm paper tones, soft surfaces, calm editorial light. |
| Dark | **Evening Zen** | Deep warm charcoal, elevated warm grays, quiet botanical accents. |

Both modes share the same semantic design language.

---

## 2. Semantic tokens (light)

| Token | Hex | Purpose |
|---|---|---|
| `--km-bg` | `#F3F1E9` | Base background (paper) |
| `--km-surface` | `#E8E5DA` | Workspace / panel surface |
| `--km-elevated` | `#FAF9F4` | Elevated surface (cards, modals, overlays) |
| `--km-sunken` | `#E2DED2` | Sunken surface (code backgrounds) |
| `--km-soft` | `#DCE2D1` | Soft highlight / surface-accent (selected surfaces, washes) |
| `--km-fg` | `#34382F` | Primary text |
| `--km-fg-muted` | `#616359` | Secondary / muted text |
| `--km-matcha` | `#89977A` | Primary accent (matcha) — DECORATIVE ONLY |
| `--km-accent-strong` | `#5C664A` | Accessible accent (text, checkboxes, active tab) |
| `--km-sage` | `#AAB49A` | Secondary accent (sage) |
| `--km-clay` | `#B68E78` | Tertiary accent (warm clay) |
| `--km-selection` | `#DCE2D1` | Selection |
| `--km-focus` | `#626D4F` | Focus ring |
| `--km-border` | `#D5D0C2` | Hairlines / separators |
| `--km-border-strong` | `#827E74` | Essential boundaries (inputs, active tab edges) |
| `--km-link` | `#48676B` | Links (info domain) |
| `--km-link-active` | `#5C664A` | Link hover/active (accent-strong) |
| `--km-success` | `#5C664A` | Success status |
| `--km-warning` | `#795E2C` | Warning status |
| `--km-danger` | `#944E47` | Danger status |
| `--km-info` | `#48676B` | Info status |

---

## 3. Semantic tokens (dark)

| Token | Hex | Purpose |
|---|---|---|
| `--km-bg` | `#22251F` | Base background (deep warm charcoal) |
| `--km-surface` | `#2D3129` | Workspace / panel surface |
| `--km-elevated` | `#363A31` | Elevated surface (cards, modals, overlays) |
| `--km-sunken` | `#1C1F1A` | Sunken surface (code backgrounds) |
| `--km-soft` | `#41483A` | Soft highlight / surface-accent (selected surfaces, washes) |
| `--km-fg` | `#E8E5D9` | Primary text |
| `--km-fg-muted` | `#B5B5A9` | Secondary / muted text |
| `--km-matcha` | `#A3AE91` | Primary accent (matcha) — DECORATIVE ONLY |
| `--km-accent-strong` | `#C1CCAC` | Accessible accent (text, checkboxes, active tab) |
| `--km-sage` | `#858F76` | Secondary accent (sage) |
| `--km-clay` | `#B58E79` | Tertiary accent (warm clay) |
| `--km-selection` | `#41483A` | Selection |
| `--km-focus` | `#A3AE91` | Focus ring |
| `--km-border` | `#41463B` | Hairlines / separators |
| `--km-border-strong` | `#83877F` | Essential boundaries (inputs, active tab edges) |
| `--km-link` | `#9CB8BA` | Links (info domain) |
| `--km-link-active` | `#C1CCAC` | Link hover/active (accent-strong) |
| `--km-success` | `#C1CCAC` | Success status |
| `--km-warning` | `#D2B477` | Warning status |
| `--km-danger` | `#E1A59C` | Danger status (bright terracotta) |
| `--km-info` | `#9CB8BA` | Info status |

---

## 4. Semantic color categories

Colors must be organized by purpose, not scattered as raw hex values:

1. Base backgrounds.
2. Workspace surfaces.
3. Elevated surfaces.
4. Main typography.
5. Muted typography.
6. Links.
7. Interactive accents.
8. Selection.
9. Focus states.
10. Borders.
11. Headings.
12. Syntax.
13. Callouts.
14. Tags.
15. Graphs.
16. Diagnostics.
17. Status indicators.

Kanso Matcha source stylesheets should use semantic custom properties (`--km-*`) rather than hardcoded hex values.

---

## 5. Token mapping to Obsidian variables

Source tokens (`--km-*`) are mapped onto Obsidian's official variables under the appropriate theme selectors:

```css
:root,
.theme-light {
  --km-bg: #F3F1E9;
  --km-surface: #E8E5DA;
  --km-elevated: #FAF9F4;
  --km-fg: #34382F;
  --km-fg-muted: #77796D;
  --km-matcha: #89977A;
  --km-sage: #AAB49A;
  --km-clay: #B68E78;
  --km-soft: #DCE2D1;
  --km-border: #D5D0C2;
}

.theme-dark {
  --km-bg: #22251F;
  --km-surface: #2D3129;
  --km-elevated: #363A31;
  --km-fg: #E8E5D9;
  --km-fg-muted: #AAA99B;
  --km-matcha: #A3AE91;
  --km-sage: #858F76;
  --km-clay: #B58E79;
  --km-soft: #41483A;
  --km-border: #41463B;
}

/* Then mapped onto Obsidian official variables */
.theme-light {
  --background-primary: var(--km-bg);
  --background-secondary: var(--km-surface);
  --background-secondary-alt: var(--km-elevated);
  --text-normal: var(--km-fg);
  --text-muted: var(--km-fg-muted);
  --text-accent: var(--km-matcha);
  --interactive-normal: var(--km-border);
  --interactive-accent: var(--km-matcha);
}

.theme-dark {
  --background-primary: var(--km-bg);
  --background-secondary: var(--km-surface);
  --background-secondary-alt: var(--km-elevated);
  --text-normal: var(--km-fg);
  --text-muted: var(--km-fg-muted);
  --text-accent: var(--km-matcha);
  --interactive-normal: var(--km-border);
  --interactive-accent: var(--km-matcha);
}
```

---

## 6. Typography direction

- Body: system serif (Georgia / Times New Roman / Noto Serif).
- Headings: same serif family, restrained sizes.
- Interface: system UI stack.
- Code: system monospace.

No bundled fonts. Adaptive sizing driven by Obsidian's Appearance > Font size
setting. See `styles/_typography.scss`.

---

## 7. Accessibility and contrast

- WCAG AA: 4.5:1 body text, 3:1 large text and icons.
- Verify real foreground/background pairs before shipping.
- Visible focus, readable muted text, distinguishable links, clear errors.

---

## 8. Phase 0 status

Design system documentation completed:

- [x] Two coordinated modes defined.
- [x] Semantic tokens defined for both modes.
- [x] Semantic categories listed.
- [x] Mapping to Obsidian variables specified.
- [x] Typography direction proposed.

Next phase: **Phase 1 — Project Foundation**.
