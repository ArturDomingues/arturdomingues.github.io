# Visual Issues Inventory

_Last updated: 2026-03-18 | Found: 6 | Fixed: 0 | Pending human review: 2 (Guided — V001, V004) | Document Only: 4_

## Open Issues

| ID | Severity | File | Location | Issue | Fix Strategy |
|----|----------|------|----------|-------|--------------|
| V001 | 🟡 Med | `docs/stylesheets/tokyo-night.css` | Line 129 — `.md-typeset blockquote` (light scheme) | `--tnl-muted` (#6c6e75) text on `--tnl-surface` (#e6e7ed) background has contrast ratio ~3.8:1, below the WCAG AA minimum of 4.5:1 for body-size text. Affects blockquote text and syntax comment tokens in light mode. | Guided |
| V002 | 🟢 Low | `mkdocs.yml` | Lines 9–14 and line 22 — `markdown_extensions` | `pymdownx.superfences` is listed twice: first with the Mermaid custom fence configuration (lines 9–14) and again as a plain entry (line 22). The last entry wins for options, silently discarding the Mermaid config if any options are set on the second entry. Currently harmless but brittle. | Document Only |
| V003 | 🟢 Low | `mkdocs.yml` | Line 52 — `theme` block | `theme:` has no `name: material` key. Zensical currently defaults to the Material theme and the build succeeds, but any upstream change to Zensical's default theme would silently break all custom CSS targeting Material component classes. | Document Only |
| V004 | 🟢 Low | `mkdocs.yml` | Line 1 — `site_name` | `site_name: My personal page` is a generic placeholder. Browser tab titles and search-engine snippets read "My personal page" rather than the author's identity, which conflicts with the H1 heading "Artur Domingues" and reduces discoverability. | Guided |
| V005 | 🟢 Low | `mkdocs.yml` | Lines 24–26 — `pymdownx.tabbed` | `pymdownx.tabbed` is configured without `alternate_style: true`. Material for MkDocs requires this setting for tabbed content to render correctly. Currently not manifesting because no tabbed content exists in the site, but adding any tab block in the future will produce broken output. | Document Only |
| V006 | 🟢 Low | `mkdocs.yml` | Line 51 — `extra_javascript` | The MathJax CDN URL `https://unpkg.com/mathjax@3/es5/tex-mml-chtml.js` resolves to the latest MathJax 3.x release. A future breaking minor/patch release could silently break math rendering without any local change. | Document Only |

## Severity Guide

- 🔴 High — broken layout, unusable on mobile, content invisible or inaccessible
- 🟡 Medium — degraded experience, readability issue, fails accessibility standard
- 🟢 Low — polish issue, minor inconsistency, best-practice violation

## Fix Strategy Guide

- Immediate — safe to auto-fix: missing attribute, single-line CSS change, broken link
- Guided — needs human decision: color choices, layout restructuring, font changes
- Document Only — structural issue that requires redesign or is an intentional trade-off

## Notes on Checks That Passed

The following audit checks were run and found no issues:

- **Viewport meta tag**: `<meta name="viewport" content="width=device-width,initial-scale=1">` present (injected by Zensical/Material).
- **Responsive layout**: Material for MkDocs handles all responsive breakpoints; no custom layout CSS overrides these.
- **Heading hierarchy**: H1 → H2 → H3, no skipped levels.
- **Internal links**: All `href="#section"` anchors in the generated navigation point to IDs that exist in the HTML.
- **External links with `target="_blank"`**: None of the content links in `docs/index.md` use `target="_blank"`; the `rel="noopener noreferrer"` check is therefore not triggered.
- **Images**: No images in site content; no `alt`-attribute issues.
- **CSS/JS asset references**: All files listed in `extra_css` and `extra_javascript` in `mkdocs.yml` exist in the repository.
- **CSS custom properties**: Every `var(--tnl-*)` and `var(--tnd-*)` reference in `tokyo-night.css` is defined within the same scheme block.
- **Font stack**: Material for MkDocs provides Inter (sans-serif) and JetBrains Mono (monospace) with `display=fallback`; no fallback missing.
- **Body text contrast (dark mode)**: `--tnd-soft` (#c0caf5) on `--tnd-background` (#1a1b26) ≈ 9.7:1 — passes WCAG AAA.
- **Body text contrast (light mode)**: `--tnl-navy` (#343b58) on `--tnl-surface` (#e6e7ed) ≈ 8.1:1 — passes WCAG AAA.
- **Link contrast (light mode)**: `--tnl-cyan` (#006c86) on `--tnl-surface` (#e6e7ed) ≈ 4.5:1 — passes WCAG AA.
- **Nav text contrast (light mode)**: `--tnl-surface` (#e6e7ed) on `--tnl-azure` (#0f4b6e) ≈ 6.7:1 — passes WCAG AA.

## Resolved Issues

| ID | Fix Applied | Date |
|----|------------|------|
