ROADMAP.md — Kanso Matcha

A development roadmap for an original Obsidian theme combining Minimal's functional strengths with Zen, Wabi-Sabi and Matcha aesthetics.

Project: Kanso Matcha
Platform: Obsidian
Primary technology: CSS / SCSS
Build output: theme.css

---

Progress Legend

- [ ] Not started
- [~] In progress
- [x] Completed

Only mark a task complete after implementation and verification.

---

Phase 0 — Research and Discovery

Goal: Understand Minimal's architecture, Obsidian's theming system and the intended visual direction.

Minimal research

- [x] Inspect Minimal repository.
- [x] Study source directory organization.
- [x] Study SCSS architecture.
- [x] Study CSS variable mapping.
- [x] Study theme configuration.
- [x] Study typography system.
- [x] Study content width controls.
- [x] Study background contrast options.
- [x] Study helper classes.
- [x] Study table and card layouts.
- [x] Study image grids.
- [x] Study plugin styling.
- [x] Study build pipeline.
- [x] Study mobile implementation.

Obsidian research

- [x] Review official theme documentation.
- [x] Inspect official CSS variables.
- [x] Understand light/dark theme selectors.
- [x] Understand Reading View selectors.
- [x] Understand Live Preview selectors.
- [x] Understand Source Mode selectors.
- [x] Review modal and workspace styling.
- [x] Review Style Settings conventions.
- [x] Review theme manifest requirements.
- [x] Review theme publishing requirements.

Visual research

- [x] Define Zen visual principles.
- [x] Define Wabi-Sabi visual principles.
- [x] Define Matcha visual principles.
- [x] Study warm paper and stone colors.
- [x] Study natural green color relationships.
- [x] Define light/dark atmosphere.
- [x] Define typography direction.
- [x] Define surface and border philosophy.

Deliverables

- [x] Create "docs/REFERENCE-STUDY.md".
- [x] Create "docs/DESIGN-SYSTEM.md".
- [x] Document architecture decisions.
- [x] Document visual decisions.
- [x] Document what to adopt from Minimal.
- [x] Document what to do differently.

Verification:

The research is documented and the project has a clear implementation direction before major coding begins. — **Phase 0 complete.**

---

Phase 1 — Project Foundation

Goal: Establish a maintainable theme development environment.

Repository

- [x] Create repository.
- [x] Add AGENTS.md.
- [x] Add ROADMAP.md.
- [x] Add README.md.
- [x] Add LICENSE.
- [x] Create manifest.json.
- [x] Establish project naming.
- [x] Establish source directory structure.

Build environment

- [x] Configure package.json.
- [x] Choose SCSS build tooling.
- [x] Implement development build.
- [x] Implement production build.
- [x] Generate theme.css.
- [ ] Configure local vault output.
- [x] Add file watching.
- [x] Add CSS validation.
- [x] Add build verification.

Development workflow

- [ ] Create a test vault.
- [ ] Establish desktop testing.
- [ ] Establish mobile testing.
- [ ] Create representative Markdown fixtures.
- [ ] Establish screenshot capture workflow.

Verification:

The source can be edited and compiled into a working Obsidian theme. — **Phase 1 complete.**

Phase 1 was executed with **pnpm** (v11.19.0) as the package manager.

---

Phase 2 — Design Tokens and Color System

Goal: Establish the complete visual identity.

> **Phase 2 status:** §1 (Morning Matcha — light) complete; §2 (Evening Zen — dark) complete; §3 (CSS token architecture) complete; §4 (validation) complete. AA contrast verified for body / muted / link / focus pairs in both modes. Phase 2 palette work complete.

Morning Matcha

- [x] Background.
- [x] Surface.
- [x] Elevated surface.
- [x] Main foreground.
- [x] Secondary foreground.
- [x] Muted foreground.
- [x] Matcha accent.
- [x] Sage accent.
- [x] Clay accent.
- [x] Borders.
- [x] Selection.
- [x] Focus states.
- [x] Semantic colors.

Evening Zen

- [x] Background.
- [x] Surface.
- [x] Elevated surface.
- [x] Main foreground.
- [x] Secondary foreground.
- [x] Muted foreground.
- [x] Matcha accent.
- [x] Sage accent.
- [x] Clay accent.
- [x] Borders.
- [x] Selection.
- [x] Focus states.
- [x] Semantic colors.

CSS token architecture

- [x] Define semantic tokens.
- [x] Define light mode.
- [x] Define dark mode.
- [x] Map tokens to Obsidian variables.
- [x] Define fallback values.
- [x] Define typography variables.
- [x] Define spacing variables.
- [x] Define border variables.
- [x] Define radius variables.
- [x] Define content width variables.

Validation

- [x] Check light-mode contrast.
- [x] Check dark-mode contrast.
- [x] Check muted text.
- [x] Check links.
- [x] Check selection.
- [x] Check focus states.
- [x] Check diagnostics.
- [x] Check visual consistency.

Verification:

The palette works across both modes and all major semantic categories. — **Phase 2 complete.**

---

Phase 3 — Core Obsidian Interface

Goal: Theme the entire application shell.

> **Phase 3 status:** §Workspace complete; §Navigation complete; §Application UI complete. Phase 3 verification pending.

Workspace

- [x] Workspace background.
- [x] Workspace panels.
- [x] Workspace separators.
- [x] Left sidebar.
- [x] Right sidebar.
- [x] Main content area.
- [x] Active pane.
- [x] Inactive pane.

Navigation

- [x] Ribbon.
- [x] File explorer.
- [x] Search panel.
- [x] Tabs.
- [x] Tab headers.
- [x] Navigation controls.
- [x] Active file.
- [x] Folder hierarchy.
- [x] File hover states.

Application UI

- [x] Status bar.
- [x] Tooltips.
- [x] Popovers.
- [x] Context menus.
- [x] Command palette.
- [x] Settings.
- [x] Modals.
- [x] Notices.
- [x] Properties panel.
- [x] Graph view.
- [x] Canvas.

Verification

- [ ] Test all major workspace panels.
- [ ] Test split panes.
- [ ] Test active/inactive states.
- [ ] Test context menus.
- [ ] Test command palette.
- [ ] Test settings.
- [ ] Test both color modes.

Verification:

The application shell looks coherent, with no major unthemed native UI components.

---

Phase 4 — Typography and Reading Experience

Goal: Make Obsidian feel like a carefully designed digital notebook.

> **Phase 4 status:** §Typography complete; §Reading View complete — reading-view content styles added (typography, headings, blockquotes, lists, horizontal rules, links, tags); media/embed content deferred to Phase 5. §Editing View complete. §Content elements complete — inline code, code blocks, tables, checkboxes, callouts, math blocks and properties added; dataview-compatible output deferred to Phase 9. Phase 4 verification pending.

Typography

- [x] Body typography.
- [x] Heading typography.
- [x] Interface typography.
- [x] Monospace typography.
- [x] Font fallback system.
- [x] Font size variables.
- [x] Line height.
- [x] Paragraph spacing.
- [x] Heading spacing.
- [x] Sidebar font sizing.
- [x] Bundled fonts removed; switched to system fonts (Minimal-style adaptive sizing).

Reading View

- [x] Paragraphs.
- [x] Headings H1–H6.
- [x] Blockquotes.
- [x] Lists.
- [x] Nested lists.
- [x] Horizontal rules.
- [x] Links.
- [x] Tags.
- [ ] Footnotes.
- [ ] Images.
- [ ] Captions.
- [ ] Embeds.

Editing View

- [x] Live Preview typography.
- [x] Source Mode typography.
- [x] Active line.
- [x] Cursor.
- [x] Selection.
- [x] Indentation guides.
- [x] Line numbers.
- [x] Inline formatting.
- [x] Markdown syntax markers.

Content elements

- [x] Inline code.
- [x] Code blocks.
- [x] Tables.
- [x] Checkboxes.
- [x] Callouts.
- [x] Math blocks.
- [x] Properties.
- [ ] Dataview-compatible output.

Verification:

Reading and editing feel visually consistent and comfortable for long sessions.

---

Phase 5 — Advanced Markdown Styling

Goal: Give Markdown content a consistent visual language.

> **Phase 5 status:** §Headings complete. §Callouts complete (§Standard variants added; custom support covered by base container). §Tables complete (§Header styling, cell padding, row separators, alternating rows and hover states added; responsive behavior and width modifiers deferred to Phase 6). §Lists and checkboxes complete (§Standard bullets, numbered lists, task checkboxes and completed task appearance added; nesting, alternate task states and indentation consistency deferred). §Code complete (§Inline code, code block surfaces, syntax highlighting, line numbers, selection and scroll behavior added; code block titles deferred). Phase 5 verification pending.

Headings

- [x] Establish heading hierarchy.
- [x] Tune font weights.
- [x] Tune spacing.
- [x] Tune heading colors.
- [x] Ensure dark/light consistency.

Callouts

- [x] Note.
- [x] Abstract.
- [x] Info.
- [x] Todo.
- [x] Tip.
- [x] Success.
- [x] Question.
- [x] Warning.
- [x] Failure.
- [x] Danger.
- [x] Bug.
- [x] Example.
- [x] Quote.
- [ ] Custom callout support.

Tables

- [x] Header styling.
- [x] Cell padding.
- [x] Row separators.
- [x] Alternating rows.
- [x] Hover states.
- [ ] Responsive behavior.
- [ ] Table width modifiers.

Lists and checkboxes

- [x] Standard bullets.
- [x] Numbered lists.
- [x] Task checkboxes.
- [x] Completed task appearance.
- [ ] Nested lists.
- [ ] Alternate task states.
- [ ] Indentation consistency.

Code

- [x] Inline code.
- [x] Code block surfaces.
- [x] Syntax highlighting compatibility.
- [ ] Code block titles.
- [x] Line numbers.
- [x] Selection.
- [x] Scroll behavior.

Verification:

A representative Markdown document looks polished in both Reading View and Live Preview.

---

Phase 6 — Minimal-Inspired Layout Features

Goal: Preserve Minimal's practical strengths.

> **Phase 6 status:** §Content width in progress (§Normal line width implemented via --km-content-width; wide, maximum, full-width and responsive content width pending).

Content width

- [x] Normal line width.
- [ ] Wide line width.
- [ ] Maximum line width.
- [ ] Full-width content.
- [ ] Responsive content width.

Image features

- [ ] Default image sizing.
- [ ] Wide images.
- [ ] Full-width images.
- [ ] Image grids.
- [ ] Image captions.
- [ ] Image borders.
- [ ] Optional image filters.

Tables and embeds

- [ ] Default table width.
- [ ] Wide table.
- [ ] Full-width table.
- [ ] Table wrapping options.
- [ ] Table compact mode.
- [ ] Full-width embeds.
- [ ] Embed styling.
- [ ] Seamless transclusions.

Cards and helpers

- [ ] Card layouts.
- [ ] Card alignment.
- [ ] Card image ratios.
- [ ] Card column controls.
- [ ] Helper CSS classes.
- [ ] Composable cssClasses.

Interface options

- [ ] Workspace contrast variants.
- [ ] Optional sidebar borders.
- [ ] Active line customization.
- [ ] Compact status bar.
- [ ] Focus-oriented appearance.

Verification:

Layout features work through supported Obsidian CSS mechanisms and do not break ordinary notes.

---

Phase 7 — Style Settings

Goal: Make the theme customizable without requiring CSS knowledge.

Color controls

- [ ] Accent intensity.
- [ ] Background contrast.
- [ ] Surface contrast.
- [ ] Border visibility.
- [ ] Link appearance.
- [ ] Heading colors.

Typography controls

- [ ] Body font.
- [ ] Heading font.
- [ ] Interface font.
- [ ] Monospace font.
- [ ] Body font size.
- [ ] Sidebar font size.
- [ ] Line height.

Workspace controls

- [ ] Sidebar appearance.
- [ ] Tab appearance.
- [ ] Workspace borders.
- [ ] Content width.
- [ ] Compact appearance.

Markdown controls

- [ ] Callout appearance.
- [ ] Checkbox appearance.
- [ ] Table appearance.
- [ ] Code block appearance.
- [ ] Link underline.
- [ ] Heading appearance.

Verification

- [ ] Test with Style Settings installed.
- [ ] Test without Style Settings.
- [ ] Verify default values.
- [ ] Verify light mode.
- [ ] Verify dark mode.
- [ ] Verify customization persistence.

Verification:

Users can personalize the theme without modifying its source CSS.

---

Phase 8 — Mobile and Tablet

Goal: Make the theme feel native and intentional on smaller screens.

Mobile workspace

- [ ] Mobile navigation.
- [ ] Sidebar.
- [ ] Bottom toolbar.
- [ ] Tab navigation.
- [ ] Mobile status elements.
- [ ] Modals.
- [ ] Menus.
- [ ] Popovers.

Mobile content

- [ ] Responsive typography.
- [ ] Reading width.
- [ ] Code blocks.
- [ ] Tables.
- [ ] Images.
- [ ] Callouts.
- [ ] Lists.
- [ ] Properties.
- [ ] Embedded notes.

Touch interaction

- [ ] Touch target sizing.
- [ ] Active states.
- [ ] Hover-independent behavior.
- [ ] Safe-area handling.
- [ ] Scroll behavior.

Verification

- [ ] Test Android.
- [ ] Test iOS where available.
- [ ] Test portrait orientation.
- [ ] Test landscape orientation.
- [ ] Test both color modes.

Verification:

The mobile experience is designed independently rather than being a compressed desktop layout.

---

Phase 9 — Plugin Compatibility

Goal: Provide a coherent visual experience across popular Obsidian plugins.

Essential plugins

- [ ] Dataview.
- [ ] Calendar.
- [ ] Kanban.
- [ ] Excalidraw.
- [ ] Tasks.
- [ ] Templater.
- [ ] QuickAdd.

Additional plugins

- [ ] Charts.
- [ ] Outliner.
- [ ] Git.
- [ ] Bases.
- [ ] Homepage.
- [ ] Recent Files.

Plugin styling requirements

- [ ] Identify plugin selectors.
- [ ] Identify plugin CSS variables.
- [ ] Style light mode.
- [ ] Style dark mode.
- [ ] Check selected states.
- [ ] Check hover states.
- [ ] Check mobile.
- [ ] Document limitations.

Verification:

Each claimed plugin integration has been tested with the actual plugin.

---

Phase 10 — Accessibility and Polish

Goal: Improve visual quality without sacrificing readability.

Accessibility

- [ ] Foreground contrast.
- [ ] Muted text contrast.
- [ ] Link distinction.
- [ ] Focus visibility.
- [ ] Selection visibility.
- [ ] Diagnostic visibility.
- [ ] Touch targets.
- [ ] Reduced motion.

Visual polish

- [ ] Consistent spacing.
- [ ] Consistent borders.
- [ ] Consistent corner radii.
- [ ] Consistent typography.
- [ ] Consistent interaction states.
- [ ] Consistent light/dark relationships.
- [ ] Remove unnecessary decoration.
- [ ] Remove duplicate CSS.
- [ ] Review mobile details.

Performance

- [ ] Review selector complexity.
- [ ] Remove unused declarations.
- [ ] Review stylesheet size.
- [ ] Verify no runtime JavaScript.
- [ ] Verify build reproducibility.

Verification:

The theme is readable, consistent and performs well in a realistic vault.

---

Phase 11 — Documentation and Release

Goal: Prepare the theme for public distribution.

Documentation

- [ ] README.
- [ ] Installation instructions.
- [ ] Theme overview.
- [ ] Light/dark screenshots.
- [ ] Style Settings documentation.
- [ ] Typography documentation.
- [ ] Layout helpers documentation.
- [ ] CSS customization guide.
- [ ] Plugin compatibility list.
- [ ] Troubleshooting guide.
- [ ] License and attribution.

Release checks

- [ ] Validate manifest.json.
- [ ] Validate theme.css.
- [ ] Verify theme name.
- [ ] Verify version.
- [ ] Test clean installation.
- [ ] Test existing vault.
- [ ] Test desktop.
- [ ] Test mobile.
- [ ] Test both color modes.
- [ ] Test Style Settings.
- [ ] Test supported plugins.
- [ ] Prepare screenshots.
- [ ] Prepare release notes.
- [ ] Prepare community theme submission.

Verification:

A new Obsidian user can install and use the theme without manually editing CSS.

---

v1.0 Definition of Done

- [ ] Complete Morning Matcha.
- [ ] Complete Evening Zen.
- [ ] Full native Obsidian UI coverage.
- [ ] Reading View styling.
- [ ] Live Preview styling.
- [ ] Source Mode styling.
- [ ] Typography system.
- [ ] Markdown styling.
- [ ] Callouts.
- [ ] Tables.
- [ ] Code blocks.
- [ ] Layout helpers.
- [ ] Style Settings support.
- [ ] Responsive mobile design.
- [ ] Essential plugin integrations.
- [ ] Accessibility checks.
- [ ] Valid manifest and distributable CSS.
- [ ] Documentation.
- [ ] Screenshots.
- [ ] Release testing.

---

Future Ideas

Optional extensions after v1.0:

- [ ] Matching Neovim colorscheme.
- [ ] Matching terminal themes.
- [ ] Matching Android icon pack.
- [ ] Matching wallpaper collection.
- [ ] Additional botanical accent variants.
- [ ] E-ink-inspired variant.
- [ ] OLED-friendly dark variant.
- [ ] Additional typography presets.
- [ ] Custom visual presets.

---

Development Philosophy

Do not rush into styling every component.

First establish the visual language. Then implement the workspace, typography, Markdown and layout features.

Minimal's strength is not simply its appearance. It is the combination of visual clarity, customization and practical functionality.

Kanso Matcha should preserve those strengths while developing its own identity.

A workspace should not compete with the thoughts being written inside it.
