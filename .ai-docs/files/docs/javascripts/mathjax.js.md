# `docs/javascripts/mathjax.js`

## Purpose

Configures MathJax 3 for use within the Zensical/MkDocs site and re-triggers math typesetting on every page navigation. Because MkDocs renders pages as a single-page application (SPA), MathJax must be manually re-invoked after each virtual page load; this file handles that re-triggering via the MkDocs `document$` observable.

## Exports / Public API

No JavaScript exports. This file operates by side effect — it sets `window.MathJax` before the MathJax CDN script loads, and subscribes to `document$` (a global MkDocs/Material observable) to re-run typesetting on navigation.

## Internal Logic

1. **Pre-configuration block** (`window.MathJax = { ... }`): Sets MathJax options *before* the CDN script loads (required by MathJax 3's async loading model):
   - `inlineMath`: recognizes `\( ... \)` delimiters for inline math.
   - `displayMath`: recognizes `\[ ... \]` delimiters for display/block math.
   - `processEscapes: true`: allows `\$` to produce a literal dollar sign.
   - `processEnvironments: true`: enables LaTeX environments (e.g. `\begin{align}`).
   - `ignoreHtmlClass: ".*|"`: prevents MathJax from processing elements with any class (opt-out by default).
   - `processHtmlClass: "arithmatex"`: only processes elements that PyMdownx Arithmatex has marked — ensures integration with the MkDocs Arithmatex extension.

2. **SPA re-trigger** (`document$.subscribe(...)`): Subscribes to MkDocs' reactive `document$` stream. On each page change:
   - `MathJax.startup.output.clearCache()` — clears the output renderer cache.
   - `MathJax.typesetClear()` — removes previous typesetting metadata.
   - `MathJax.texReset()` — resets TeX numbering/labels.
   - `MathJax.typesetPromise()` — re-processes all math on the new page.

## State & Side Effects

- **Sets `window.MathJax`** global before the CDN script loads.
- **Subscribes to `document$`** — a global RxJS-like observable exposed by MkDocs/Material theme.
- Triggers DOM mutations (math rendering) on every page load event.

## Configuration & Environment

No environment variables. Depends on:
- The MathJax 3 CDN script registered in `mkdocs.yml` under `extra_javascript`:
  ```yaml
  extra_javascript:
    - javascripts/mathjax.js
    - https://unpkg.com/mathjax@3/es5/tex-mml-chtml.js
  ```
  **Order matters**: `mathjax.js` must be listed *before* the CDN URL so that `window.MathJax` is set before MathJax initializes.
- The `pymdownx.arithmatex` extension in `mkdocs.yml` with `generic: true`, which generates `<span class="arithmatex">` elements for MathJax to target.

## Error Handling

No explicit error handling. If `document$` is undefined (e.g., theme without MkDocs Material), the `subscribe` call will throw a runtime error silently in the browser console.

## How to Modify Safely

- To add or change math delimiters, update the `inlineMath` / `displayMath` arrays.
- Do not reorder the `extra_javascript` entries in `mkdocs.yml` — `mathjax.js` must load before the CDN script.
- To disable MathJax, remove both entries from `extra_javascript` and remove `pymdownx.arithmatex` from `markdown_extensions` in `mkdocs.yml`.

## ⚠️ Gotchas & Known Issues

- The CDN URL `https://unpkg.com/mathjax@3/es5/tex-mml-chtml.js` is not pinned to a specific patch version — a breaking change in MathJax 3.x could affect the site without any local code change.
- `ignoreHtmlClass: ".*|"` is a non-obvious regex pattern; it means "match any class string" — effectively ignoring all elements unless they carry `arithmatex`. This is the correct pattern for MkDocs/Material integration but looks like a bug at first glance.

---

## 🔗 Linked Files

### Imports From
- *(none — no JS imports; relies on globals)*

### Imported By
- [[mkdocs.yml]] — registered under `extra_javascript`; loaded on every page

### Shared Types / Interfaces
- *(none)*

### Related Concepts
- [`.ai-docs/files/mkdocs.yml.md`](../../mkdocs.yml.md) — registers this script and the `pymdownx.arithmatex` extension
- [`.ai-docs/files/docs/index.md.md`](../index.md.md) — the content page where math may be authored
