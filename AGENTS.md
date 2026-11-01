AGENTS.md — Kanso Matcha

Project Identity

Project: Kanso Matcha
Type: Obsidian Community Theme
Platform: Obsidian Desktop, Mobile and Tablet
Core technologies: CSS, SCSS, HTML, JavaScript (build tooling only)
Runtime dependencies: None
Design philosophy: Minimal × Zen × Wabi-Sabi × Matcha

Kanso Matcha is an original Obsidian theme that combines the functional design philosophy of Minimal with a distinct Japanese-inspired visual identity.

It should provide a calm, warm, natural and distraction-free environment without sacrificing Obsidian's functionality or customization.

The three influences

Minimal — Functional foundation

Study and adopt the principles behind:

- Distraction-free workspace design.
- Carefully controlled typography.
- Content width management.
- Reading and editing consistency.
- Customizable layouts.
- Tables, cards and image grids.
- Plugin compatibility.
- Theme configuration.
- Desktop and mobile consistency.

Zen — Visual restraint

- Intentional use of empty space.
- Clear visual hierarchy.
- Reduced visual noise.
- Consistent interface elements.
- Subtle interactions.
- Calm, predictable layouts.

Wabi-Sabi — Organic character

- Warm, imperfect-looking natural surfaces.
- Muted earth tones.
- Soft visual transitions.
- Natural rather than sterile contrast.
- Restrained borders and separators.
- Avoid excessive geometric decoration.

Matcha — Botanical accent

- Muted matcha greens.
- Sage and moss undertones.
- Warm clay accents.
- Natural color relationships.
- Accent colors used intentionally.

The result must be an original theme, not a reskinned copy of Minimal.

---

1. Reference Research

Research these projects before establishing the final architecture and visual system.

A. Minimal

Repository: https://github.com/kepano/obsidian-minimal

Documentation: https://minimal.guide

Primary focus: Functional architecture and interface behavior.

Study:

- Source directory organization.
- CSS/SCSS architecture.
- CSS variable conventions.
- Obsidian interface coverage.
- Typography customization.
- Reading and editing modes.
- Workspace and sidebar layouts.
- Tab and navigation styling.
- Background contrast options.
- Style Settings integration.
- Helper classes.
- Table and card layouts.
- Image grids.
- Embed and transclusion behavior.
- Plugin-specific styles.
- Build pipeline.
- Version compatibility.
- Desktop and mobile behavior.

Pay particular attention to how Minimal exposes useful customization without requiring users to manually edit CSS.

B. Zen-inspired design references

Study Japanese-inspired editorial interfaces and restrained design systems.

Focus on:

- Visual hierarchy.
- Negative space.
- Typography and rhythm.
- Surface relationships.
- Warm neutral backgrounds.
- Subtle separators.
- Organic color relationships.
- Calm interaction states.

C. Wabi-Sabi and Matcha

Study the relationship between:

- Natural stone.
- Warm paper.
- Aged wood.
- Ceramic surfaces.
- Muted botanical greens.
- Moss and sage.
- Earthy clay.

Translate these references into practical interface colors rather than decorative illustrations.

Research deliverable

Create:

"docs/REFERENCE-STUDY.md"

Include:

1. Minimal architecture analysis.
2. Minimal feature analysis.
3. Obsidian CSS variable research.
4. Japanese-inspired visual research.
5. Proposed design system.
6. Proposed theme architecture.
7. Features to adopt conceptually.
8. Features to improve.
9. Features intentionally excluded.
10. Implementation decisions.

Do not blindly reproduce Minimal's source code, CSS or distinctive design arrangements.

Minimal is MIT-licensed. If directly adapting or redistributing its code, comply with its license and attribution requirements. Prefer independent implementations based on documented behavior and design principles.

---

2. Design System

The theme must have two coordinated modes:

- Morning Matcha — Light.
- Evening Zen — Dark.

Both must share the same semantic design language.

Morning Matcha

Token| Hex
Background| #F3F1E9
Surface| #E8E5DA
Elevated surface| #FAF9F4
Primary matcha| #89977A
Secondary sage| #AAB49A
Soft matcha| #DCE2D1
Warm clay| #B68E78
Main text| #34382F
Secondary text| #77796D
Border| #D5D0C2

Evening Zen

Token| Hex
Background| #22251F
Surface| #2D3129
Elevated surface| #363A31
Primary matcha| #A3AE91
Secondary sage| #858F76
Soft matcha| #41483A
Warm clay| #B58E79
Main text| #E8E5D9
Secondary text| #AAA99B
Border| #41463B

These are initial tokens. Refine them through contrast testing and real Obsidian previews.

Semantic color categories

Organize colors by purpose:

- Base backgrounds.
- Workspace surfaces.
- Elevated surfaces.
- Main typography.
- Muted typography.
- Links.
- Interactive accents.
- Selection.
- Focus states.
- Borders.
- Headings.
- Syntax.
- Callouts.
- Tags.
- Graphs.
- Diagnostics.
- Status indicators.

Do not scatter hexadecimal values throughout the stylesheet.

Use semantic CSS custom properties.

Example:

:root {
  --km-bg: #F3F1E9;
  --km-surface: #E8E5DA;
  --km-elevated: #FAF9F4;

  --km-fg: #34382F;
  --km-fg-muted: #77796D;

  --km-matcha: #89977A;
  --km-sage: #AAB49A;
  --km-clay: #B68E78;

  --km-border: #D5D0C2;
}

Map these tokens to Obsidian's official CSS variables.

Use the corresponding dark palette under the dark theme selector.

Avoid redefining Obsidian variables unnecessarily. Inspect the current supported variable definitions and provide fallbacks where needed.

---

3. Technical Architecture

The project must be a real Obsidian community theme.

No custom plugin should be required for basic functionality.

Recommended structure:

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
│       ├── _dataview.scss
│       ├── _calendar.scss
│       ├── _kanban.scss
│       ├── _excalidraw.scss
│       └── ...
├── settings/
│   └── style-settings.css
├── docs/
│   ├── REFERENCE-STUDY.md
│   ├── DESIGN-SYSTEM.md
│   ├── COMPONENTS.md
│   └── PLUGIN-SUPPORT.md
├── scripts/
│   └── ...
└── package.json

This is a proposed structure. Refine it after researching Minimal and evaluating the build requirements.

Technical rules

1. Keep source styles modular.
2. Compile a distributable "theme.css".
3. Do not require Node.js at runtime.
4. Keep the installed theme self-contained.
5. Use Obsidian's supported CSS variables.
6. Avoid unnecessary "!important".
7. Prefer scoped selectors.
8. Avoid brittle DOM selectors.
9. Avoid hardcoded dimensions where responsive variables are appropriate.
10. Keep mobile-specific rules separate.
11. Avoid duplicating declarations.
12. Keep generated CSS reproducible.

---

4. Obsidian Compatibility

The theme must cover the complete Obsidian experience.

Application interface

- Workspace.
- Left sidebar.
- Right sidebar.
- File explorer.
- Search.
- Tabs.
- Tab headers.
- Navigation.
- Ribbon.
- Status bar.
- Tooltips.
- Popovers.
- Context menus.
- Command palette.
- Settings.
- Modals.
- Properties panel.
- Bases views.
- Graph view.
- Canvas.

Editor

Support both source and live preview modes.

- Editor background.
- Active line.
- Cursor.
- Selection.
- Indentation guides.
- Line numbers.
- Folding.
- Search matches.
- Syntax highlighting.
- Inline formatting.
- Code blocks.
- Tables.
- Checkboxes.
- Footnotes.
- Links.
- Embeds.

Reading view

- Heading hierarchy.
- Paragraph typography.
- Blockquotes.
- Lists.
- Tables.
- Images.
- Captions.
- Code blocks.
- Horizontal rules.
- Internal links.
- External links.
- Embedded notes.
- Callouts.
- Mathematical notation.

Mobile

Treat mobile as a first-class target.

- Navigation.
- Sidebar behavior.
- Bottom toolbar.
- Mobile tab interface.
- Touch-friendly controls.
- Modals.
- Menus.
- Editor spacing.
- Reading typography.
- Safe-area handling.

Do not assume desktop CSS will automatically work on mobile.

---

5. Typography

Typography is a central part of the theme's identity.

The visual goal is warm, readable, modern and editorial.

Provide customization for:

- Interface font.
- Text font.
- Monospace font.
- Heading font.
- Font size.
- Line height.
- Paragraph spacing.
- Heading spacing.
- Sidebar typography.
- Code typography.

Suggested initial direction:

- Body: warm, neutral sans-serif.
- Headings: restrained serif or elegant sans-serif.
- Interface: clean modern sans-serif.
- Code: legible monospace.

Fonts must use system fallbacks. Do not bundle copyrighted font files without appropriate licensing.

The typography should not become excessively decorative.

---

6. Markdown Design Language

Markdown is the heart of Obsidian.

Make written content feel like a carefully designed notebook.

Headings

- Clear hierarchy.
- Distinct sizes.
- Consistent spacing.
- Restrained color differences.
- No excessive colorful heading treatment.
- Optional subtle matcha accent.

Paragraphs

- Comfortable line height.
- Appropriate line width.
- Natural paragraph spacing.
- Readable contrast.

Lists

- Subtle list markers.
- Clear nesting.
- Consistent indentation.
- Well-styled checkboxes.

Blockquotes

- Soft surface treatment.
- Muted vertical accent.
- Comfortable internal spacing.
- No heavy boxes.

Callouts

- Consistent shape and spacing.
- Semantic colors.
- Muted backgrounds.
- Readable titles and icons.
- Dark/light parity.

Code blocks

- Distinct but subtle background.
- Readable syntax.
- Consistent padding.
- Minimal borders.
- Inline code styling.

Tables

- Clear header distinction.
- Restrained separators.
- Comfortable cell padding.
- Optional alternating rows.
- Horizontal scrolling on small screens.

Links

- Muted matcha accent.
- Clear hover state.
- Accessible distinction from normal text.
- Optional underline customization.

---

7. Minimal-Inspired Functional Features

Do not restrict the project to colors and typography.

Study Minimal's functional capabilities and implement equivalent features where appropriate.

Layout

- [ ] Normal content width.
- [ ] Wide content width.
- [ ] Maximum content width.
- [ ] Adjustable sidebar typography.
- [ ] Workspace contrast modes.
- [ ] Optional reduced workspace borders.

Content helpers

- [ ] Image grids.
- [ ] Image width controls.
- [ ] Table width controls.
- [ ] Full-width content helpers.
- [ ] Card layouts.
- [ ] Embed/transclusion styling.
- [ ] Image filters where practical.

Markdown customization

- [ ] Alternate checkbox styles.
- [ ] Callout variants.
- [ ] Heading styles.
- [ ] Table modifiers.
- [ ] List modifiers.

Interface customization

- [ ] Focus-oriented appearance.
- [ ] Optional compact status bar.
- [ ] Navigation styling.
- [ ] Active file styling.
- [ ] Sidebar contrast options.

Implement features through CSS classes, CSS variables and supported Obsidian mechanisms whenever possible.

Do not introduce a companion plugin unless a feature genuinely requires application-level functionality.

---

8. Style Settings Integration

Style Settings should be an optional customization layer.

Expose meaningful controls rather than overwhelming users with hundreds of options.

Suggested categories:

Theme

- Accent intensity.
- Background contrast.
- Surface appearance.
- Border visibility.

Typography

- Body font.
- Heading font.
- Interface font.
- Code font.
- Font sizes.
- Line height.

Workspace

- Sidebar contrast.
- Tab appearance.
- Border visibility.
- Content width.
- Compact mode.

Editor

- Active line.
- Indentation guides.
- Cursor appearance.
- Heading styles.
- Link styles.
- Code block appearance.

Markdown

- Callout style.
- Table style.
- Checkbox appearance.
- Blockquote style.
- Image presentation.

Optional appearance

- Transparent-looking surfaces.
- Subtle rounded corners.
- Reduced visual decoration.

All Style Settings options must have sensible defaults.

The theme must work without the Style Settings plugin installed.

---

9. Plugin Compatibility

Prioritize commonly used Obsidian plugins.

Essential

- Dataview.
- Calendar.
- Kanban.
- Excalidraw.
- Tasks.
- Templater.
- QuickAdd.

Additional

- Charts.
- Outliner.
- Git.
- Bases.
- Homepage.
- Recent Files.
- Various navigation and productivity plugins.

Plugin support means styling their visible interfaces and states, not requiring or bundling those plugins.

Rules:

1. Inspect plugin interfaces before writing CSS.
2. Prefer stable plugin-provided CSS classes and variables.
3. Avoid broad selectors that affect unrelated components.
4. Test both light and dark modes.
5. Test desktop and mobile where applicable.
6. Document known limitations.
7. Do not claim support without verification.

---

10. Accessibility

Visual restraint must not compromise usability.

Requirements:

- Adequate text contrast.
- Visible keyboard focus.
- Readable muted text.
- Distinguishable links.
- Clear error and warning states.
- Accessible selected states.
- Readable code.
- Sufficient touch target sizes.
- Reduced-motion compatibility.

Check contrast for actual foreground/background combinations rather than judging colors independently.

---

11. Testing and Quality Assurance

Use real Obsidian installations and representative vaults.

Visual testing

Test:

- Light mode.
- Dark mode.
- Desktop.
- Mobile.
- Reading view.
- Live Preview.
- Source mode.
- Settings.
- Modals.
- File explorer.
- Graph.
- Canvas.
- Properties.
- Bases.
- Community plugin interfaces.

Content fixtures

Create a test vault containing:

- Complex Markdown.
- Nested headings.
- Nested lists.
- All checkbox types.
- All common callouts.
- Tables.
- Dataview queries.
- Images and galleries.
- Embedded notes.
- Code blocks.
- Math.
- Tags.
- Properties.
- Internal links.
- External links.
- Footnotes.
- Long documents.

Technical checks

- [ ] Valid manifest.json.
- [ ] Valid theme.css.
- [ ] Correct theme name.
- [ ] Valid CSS syntax.
- [ ] No missing generated files.
- [ ] No broken CSS variables.
- [ ] No unintended selector collisions.
- [ ] No severe console errors.
- [ ] Light/dark consistency.
- [ ] Responsive behavior.

---

12. AI Agent Working Rules

Before modifying the project:

1. Read AGENTS.md.
2. Read ROADMAP.md.
3. Read docs/REFERENCE-STUDY.md.
4. Inspect existing source files.
5. Understand the affected component.
6. Check current Obsidian CSS conventions.

When implementing:

1. Work incrementally.
2. Keep CSS modular.
3. Reuse semantic variables.
4. Avoid unnecessary overrides.
5. Preserve existing functionality.
6. Test both themes.
7. Test reading and editing modes.
8. Test mobile when affected.
9. Update documentation.
10. Update ROADMAP.md honestly.

Never:

- Copy Minimal wholesale.
- Introduce unnecessary dependencies.
- Hardcode colors in plugin-specific files.
- Claim compatibility without testing.
- Sacrifice readability for aesthetics.
- Implement features solely because another theme has them.
- Treat screenshots as proof of full functionality.

---

13. Definition of Done

A release-ready theme must have:

- Complete light and dark modes.
- A consistent semantic design system.
- Comprehensive Obsidian UI styling.
- Reading and editing mode support.
- Responsive mobile styling.
- Typography customization.
- Style Settings support.
- Essential plugin compatibility.
- Useful layout helpers.
- Accessible interaction states.
- Reproducible CSS build.
- Valid manifest and theme files.
- Installation documentation.
- Visual previews.
- Tested release package.

The final result should feel like a quiet, natural digital notebook that remains powerful enough for serious knowledge management.

Design principle: Make space for thought, not decoration.
