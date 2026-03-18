# `docs/stylesheets/tokyo-night.css`

## Purpose

Provides complete custom CSS color scheme definitions for both **Tokyo Night Light** (`tokyo-night-light`) and **Tokyo Night Dark** (`tokyo-night-dark`) theme variants. These CSS custom properties and selectors override the default MkDocs/Material theme palette with the Tokyo Night color system across all major UI components: header, navigation, content, code blocks, syntax highlighting, search, footer, tables, admonitions, and blockquotes.

## Exports / Public API

No JavaScript exports. Defines two CSS color scheme scopes:
- `[data-md-color-scheme="tokyo-night-light"]` — light variant
- `[data-md-color-scheme="tokyo-night-dark"]` — dark variant

### CSS Custom Properties — Light scheme (`--tnl-*`)

| Variable | Value | Role |
|---|---|---|
| `--tnl-red` | `#8c4351` | Error/code highlights |
| `--tnl-orange` | `#965027` | Strings, admonition titles |
| `--tnl-amber` | `#8f5e15` | Numbers, selection background |
| `--tnl-brown` | `#634f30` | Operators |
| `--tnl-green` | `#385f0d` | Blockquote border |
| `--tnl-teal` | `#33635c` | Admonition borders |
| `--tnl-cyan` | `#006c86` | Links, function names |
| `--tnl-azure` | `#0f4b6e` | Header/sidebar background |
| `--tnl-blue` | `#2959aa` | Keywords, active nav, active border |
| `--tnl-violet` | `#5a3e8e` | Headings, class names |
| `--tnl-navy` | `#343b58` | Body text |
| `--tnl-slate` | `#40434f` | Footer background |
| `--tnl-indigo` | `#343b58` | Table headers, pre background |
| `--tnl-muted` | `#6c6e75` | Comments, secondary text |
| `--tnl-border` | `var(--tnl-muted)` | All borders |
| `--tnl-surface` | `#e6e7ed` | Page background |
| `--tnl-foreground` | `#40434f` | Primary foreground text |

### CSS Custom Properties — Dark scheme (`--tnd-*`)

| Variable | Value | Role |
|---|---|---|
| `--tnd-red` | `#f7768e` | Error/code highlights |
| `--tnd-orange` | `#ff9e64` | Strings, admonition titles |
| `--tnd-amber` | `#e0af68` | Numbers, selection background |
| `--tnd-green` | `#9ece6a` | General green accent |
| `--tnd-teal` | `#73dacb` | Blockquote border |
| `--tnd-mint` | `#b4f9f8` | Search input focus |
| `--tnd-cyan` | `#2ac3de` | Admonition borders, search hover |
| `--tnd-sky` | `#7dcfff` | Links, active nav, hover |
| `--tnd-blue` | `#7aa2f7` | Keywords, search result marks |
| `--tnd-violet` | `#bb9af7` | Headings, class names |
| `--tnd-soft` | `#c0caf5` | Primary foreground text |
| `--tnd-text` | `#a9b1d6` | Body text |
| `--tnd-muted` | `#9aa5ce` | Comments, blockquote text |
| `--tnd-border` | `#565f89` | All borders, operators |
| `--tnd-surface` | `#414868` | Sidebar/header/surface background |
| `--tnd-background` | `#1a1b26` | Main page background |

## Internal Logic

The file is structured in two major blocks:

1. **Light scheme** (lines 1–199): Sets `--tnl-*` variables and applies them to MkDocs Material component selectors.
2. **Dark scheme** (lines 201–402): Sets `--tnd-*` variables and applies them to the same set of component selectors.

Each block covers:
- `:root` / scheme base styles (colors, background)
- `.md-container` / `body` — page background
- `.md-header`, `.md-tabs` — top navigation bar
- `.md-nav`, `.md-sidebar` — side navigation
- `.md-content` — main content area
- `.md-typeset h1–h4` — headings
- `.md-typeset a` — links
- `.md-typeset code`, `pre code`, `pre` — inline and block code
- `::selection` — text selection
- `.md-footer` — page footer
- `.md-typeset blockquote` — blockquotes
- `.md-typeset table` — tables
- `.md-typeset .admonition`, `.details` — callout boxes
- `.md-search__*` — search UI components
- `hr` — horizontal rules

**Syntax highlighting** (lines 403–499): Overrides Pygments token colors for both schemes:
- `.k`, `.kc`, `.kd`, `.kn` — keywords
- `.s`, `.sa`, `.sb`, `.sc` — strings
- `.m`, `.mb`, `.mf`, `.mh`, `.mi` — numbers
- `.nc`, `.nn`, `.nt`, `.ne` — class/type names
- `.nf`, `.fm` — function names
- `.c`, `.cm`, `.cp` — comments
- `.o`, `.ow` — operators
- `.kc`, `.no`, `.bp` (dark only) — builtin constants

## State & Side Effects

None — pure CSS. No JavaScript, no HTTP requests, no DOM manipulation.

## Configuration & Environment

No environment variables. Must be registered in `mkdocs.yml` under `extra_css`:
```yaml
extra_css:
  - stylesheets/tokyo-night.css
```
The scheme names `tokyo-night-light` and `tokyo-night-dark` must match the `scheme` values in `mkdocs.yml`'s `theme.palette` entries.

## Error Handling

Not applicable — CSS does not throw errors. Unrecognized CSS custom properties degrade silently (browsers use inherited or default values).

## How to Modify Safely

- To change a color, update the CSS custom property value in the relevant `:root`/scheme block — the change propagates everywhere that variable is used.
- To add a new UI component style, add a new selector block within the correct scheme scope.
- To add a new syntax token, add the Pygments CSS class selector in the syntax highlighting section at the bottom.
- Always test both light and dark modes after any change (toggle with the sun/moon button in the header).
- Run `uv run zensical serve` for live preview.

## ⚠️ Gotchas & Known Issues

- The `--tnl-indigo` variable in the light scheme has the same value (`#343b58`) as `--tnl-navy` — this is intentional (they share the same dark blue), but can be confusing.
- The dark scheme's `.md-typeset .highlight .o` and `.ow` (operators) reuse `var(--tnd-border)` (`#565f89`) — this is intentional Tokyo Night Dark coloring but may appear dim.
- CSS custom properties defined on `:root` apply globally but are overridden by the scheme-scoped selectors when a scheme is active. The `:root` block doubles as the light scheme default.
- The file has no vendor prefixes — it targets modern browsers only.

---

## 🔗 Linked Files

### Imports From
- *(none — standalone CSS)*

### Imported By
- [[mkdocs.yml]] — registered under `extra_css: - stylesheets/tokyo-night.css`

### Shared Types / Interfaces
- *(none)*

### Related Concepts
- [`.ai-docs/files/mkdocs.yml.md`](../../mkdocs.yml.md) — registers this stylesheet and defines which palette schemes reference these names
- [`.ai-docs/files/docs/index.md.md`](../index.md.md) — the content page that is visually styled by these rules
