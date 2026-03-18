# `mkdocs.yml`

## Purpose

The central configuration file for the Zensical/MkDocs static site generator. It controls every aspect of the site build: the site name and URLs, the content root directory, navigation structure, theme appearance (palette, icons, features), Markdown extension pipeline, extra CSS and JavaScript assets, and URL generation strategy.

## Exports / Public API

This is a YAML configuration file — no exports. It is consumed directly by the `zensical build` and `zensical serve` commands.

## Internal Logic

The file is organized into the following top-level keys:

### Site Metadata
```yaml
site_name: My personal page
docs_dir: docs
repo_url: https://github.com/ArturDomingues/arturdomingues.github.io
site_url: https://arturdomingues.github.io
```
- `docs_dir: docs` — tells Zensical to look for Markdown content in the `docs/` folder.
- `site_url` — used for canonical links and sitemap generation.

### Markdown Extensions
A comprehensive set of [PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/) enabling:

| Extension | Purpose |
|---|---|
| `admonition` | `!!! note`, `!!! warning`, etc. callout blocks |
| `pymdownx.details` | Collapsible `??? note` blocks |
| `pymdownx.superfences` | Fenced code blocks + Mermaid diagram support |
| `pymdownx.highlight` | Syntax highlighting with anchor line numbers |
| `pymdownx.inlinehilite` | Inline code syntax highlighting |
| `pymdownx.snippets` | File inclusion via `--8<--` |
| `pymdownx.tabbed` | Tabbed content blocks |
| `def_list` | Definition lists |
| `pymdownx.tasklist` | `- [x]` / `- [ ]` checkboxes |
| `tables` | GFM-style tables |
| `pymdownx.caret` | `^superscript^` and `^^insert^^` |
| `pymdownx.keys` | Keyboard key rendering `++ctrl+c++` |
| `pymdownx.mark` | `==highlight==` |
| `pymdownx.tilde` | `~~strikethrough~~` and `~subscript~` |
| `attr_list` | HTML attribute injection on Markdown elements |
| `md_in_html` | Markdown inside HTML blocks |
| `pymdownx.emoji` | `:emoji:` shortcodes via Twemoji |
| `pymdownx.blocks.caption` | Image captions |
| `pymdownx.arithmatex` | Math delimiters for MathJax (`\( \)`, `\[ \]`) |

**Mermaid configuration**: Under `superfences`, a custom fence named `mermaid` is defined with `fence_code_format`, enabling fenced Mermaid diagram blocks.

**Arithmatex configuration**: Uses `generic: true`, which outputs `<span class="arithmatex">` elements compatible with any JS math renderer (not MathJax-specific).

### Extra JavaScript
```yaml
extra_javascript:
  - javascripts/mathjax.js
  - https://unpkg.com/mathjax@3/es5/tex-mml-chtml.js
```
Order is critical — `mathjax.js` must come first to set `window.MathJax` before the CDN script loads.

### Theme Configuration
```yaml
theme:
  features:
    - content.code.copy      # Copy button on code blocks
    - content.code.select    # Text selection in code blocks
    - content.tabs.link      # Sync tab selections across page
  icon:
    repo: fontawesome/brands/github
    admonition: { ... }      # Custom icons per admonition type
  palette:                   # Three-entry palette for system/light/dark
    - media: "(prefers-color-scheme)"       # System default toggle
    - media: "(prefers-color-scheme: light)" # scheme: tokyo-night-light
    - media: "(prefers-color-scheme: dark)"  # scheme: tokyo-night-dark
  language: en
```

The three palette entries implement a three-way toggle: **system preference → light → dark → system**.

### Extra CSS
```yaml
extra_css:
  - stylesheets/tokyo-night.css
```

### URL Strategy
```yaml
use_directory_urls: false
```
Files are served as `index.html` (not `index/index.html`). This means `docs/index.md` builds to `site/index.html`.

### Navigation
```yaml
nav:
  - Home: index.md
```
Currently a single-page site. Adding pages requires adding entries here.

## State & Side Effects

None — pure configuration file. Consumed at build time only.

## Configuration & Environment

No environment variables. The file itself is the environment for the build tool.

## Error Handling

Zensical/MkDocs will raise a build error if:
- A file listed under `nav` does not exist in `docs_dir`
- A Markdown extension is listed but not installed
- YAML syntax is invalid

## How to Modify Safely

- **Adding a page**: create `docs/<page>.md` and add `- Title: <page>.md` under `nav`.
- **Adding CSS**: place file in `docs/stylesheets/`, add path under `extra_css`.
- **Adding JS**: place file in `docs/javascripts/`, add path under `extra_javascript` (watch load order).
- **Adding extensions**: install the Python package if needed, then add the extension name.
- **Changing theme features**: refer to [Zensical/MkDocs Material features docs](https://zensical.org/docs/setup/).
- Run `uv run zensical serve` after changes to validate locally.

## ⚠️ Gotchas & Known Issues

- `pymdownx.superfences` appears **twice** in the extensions list — once with the custom `mermaid` fence configuration, and once as a plain entry. The last entry wins for options; if the second plain entry ever had options added, it would silently discard the Mermaid config. (See V002 in `.ai-docs/VISUAL-ISSUES.md`.)
- The `!!python/name:` and `!!python/object/apply:` YAML tags are PyYAML-specific — they call Python objects at parse time. Editing these requires understanding PyYAML constructors.
- The `slugify` setting for `pymdownx.tabbed` uses `!!python/object/apply:pymdownx.slugs.slugify {}` — this calls the function constructor to produce a proper slugifier instance; it cannot be simplified to a plain string.
- `use_directory_urls: false` means all URLs are flat `.html` files — no trailing-slash URLs. Keep this in mind when writing internal links.
- `theme:` has no `name: material` key. Zensical defaults to Material, so the build currently succeeds. If Zensical's default theme ever changes, all custom CSS targeting Material component classes will silently break. (See V003 in `.ai-docs/VISUAL-ISSUES.md`.)
- `pymdownx.tabbed` is configured without `alternate_style: true`. Material for MkDocs requires this setting for tabs to render correctly. Adding any tabbed content to the site before fixing this will produce broken output. (See V005 in `.ai-docs/VISUAL-ISSUES.md`.)
- `site_name: My personal page` is a generic placeholder. Browser tab titles and search-engine snippets show this text rather than the author's name. Consider updating to `Artur Domingues`. (See V004 in `.ai-docs/VISUAL-ISSUES.md`.)

---

## 🔗 Linked Files

### Imports From (references at build time)
- [[docs/index.md]] — the sole content page referenced in `nav`
- [[docs/javascripts/mathjax.js]] — registered under `extra_javascript`
- [[docs/stylesheets/tokyo-night.css]] — registered under `extra_css`

### Imported By
- [[.github/workflows/docs.yml]] — the CI workflow runs `zensical build --clean` which reads this file

### Shared Types / Interfaces
- *(none)*

### Related Concepts
- [`.ai-docs/files/pyproject.toml.md`](pyproject.toml.md) — declares the `zensical` Python package dependency
- [`.ai-docs/files/docs/stylesheets/tokyo-night.css.md`](files/docs/stylesheets/tokyo-night.css.md) — the custom CSS this config loads
- [`.ai-docs/files/docs/javascripts/mathjax.js.md`](files/docs/javascripts/mathjax.js.md) — the custom JS this config loads
