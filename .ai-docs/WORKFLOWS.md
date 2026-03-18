# Workflows — arturdomingues.github.io

This document describes the two primary end-to-end workflows through this codebase.

---

## Workflow: Local Development & Content Authoring

**Trigger:** Developer edits content locally and wants to preview before pushing.

**File Chain:**
1. [[pyproject.toml]] — defines the `zensical` dependency; `uv sync` / `uv init` installs it
2. [[.python-version]] — `uv` reads this to select Python 3.12
3. [[docs/index.md]] — author edits Markdown content (bio, works, contact)
4. [[mkdocs.yml]] — Zensical reads this to understand nav, extensions, theme, extra assets
5. [[docs/stylesheets/tokyo-night.css]] — loaded as `extra_css`, applied to all pages
6. [[docs/javascripts/mathjax.js]] — loaded as `extra_javascript`, configures MathJax
7. `uv run zensical serve` → hot-reload dev server at `http://127.0.0.1:8000`

**Key Data:**
- Input: Markdown files in `docs/`, YAML configuration in `mkdocs.yml`
- Output: Live-reloading HTML preview in browser
- The dev server watches all files in `docs/` and `mkdocs.yml` for changes

**Failure Points:**
- `uv` not installed → setup fails before any serving
- Python < 3.12 installed → `uv` refuses to run
- `mkdocs.yml` YAML syntax error → `zensical serve` crashes on startup
- File listed in `nav` not found in `docs/` → build error
- Duplicate `superfences` extension entries in `mkdocs.yml` → silently uses last definition (see mkdocs.yml gotchas)

---

## Workflow: Automated Build & Deploy to GitHub Pages (CI/CD)

**Trigger:** `git push` to `main` or `master` branch.

**File Chain:**
1. [[.github/workflows/docs.yml]] — GitHub Actions picks up the push event
2. Step: `actions/configure-pages@v5` — configures base URL and Pages environment
3. Step: `actions/checkout@v5` — checks out all repository files
4. Step: `actions/setup-python@v5` — installs Python 3.x (latest)
5. Step: `pip install zensical` — installs Zensical (unpinned, latest)
6. [[mkdocs.yml]] — consumed by `zensical build --clean`
7. [[docs/index.md]] — compiled to `site/index.html`
8. [[docs/stylesheets/tokyo-night.css]] → copied/bundled into `site/`
9. [[docs/javascripts/mathjax.js]] → copied/bundled into `site/`
10. Step: `actions/upload-pages-artifact@v4` — packages `site/` as a Pages artifact
11. Step: `actions/deploy-pages@v4` — deploys artifact; sets `${{ steps.deployment.outputs.page_url }}`
12. Live site updated at `https://arturdomingues.github.io`

**Key Data:**
- Input: All files in the repository root + `docs/` + `mkdocs.yml`
- Intermediate: `site/` directory containing static HTML, CSS, JS, assets
- Output: Live GitHub Pages deployment at `https://arturdomingues.github.io`
- The `site/` directory is **not committed** to the repository (gitignored)

**Failure Points:**
- `zensical build --clean` exits non-zero:
  - Broken Markdown syntax
  - File referenced in `mkdocs.yml` `nav` not present in `docs/`
  - PyMdown extension not installed (all are bundled with Zensical)
- GitHub Pages not enabled in repository settings → deployment step fails
- `id-token: write` permission missing → OIDC authentication fails
- Breaking Zensical update (unpinned `pip install zensical`) → build error
- On any failure, the previous live deployment remains unchanged

---

## Workflow: Adding a New Content Page

**Trigger:** Author wants to add a new page to the site.

**File Chain:**
1. Create `docs/<new-page>.md` — write the Markdown content
2. [[mkdocs.yml]] — add the new page to `nav`:
   ```yaml
   nav:
     - Home: index.md
     - New Page: new-page.md
   ```
3. [[docs/index.md]] — optionally link to the new page from the homepage
4. `uv run zensical serve` — verify the new page renders correctly
5. `git push` → triggers the CI/CD workflow above → deploys updated site

**Key Data:**
- Input: New `.md` file + `mkdocs.yml` nav update
- Output: New page accessible at `https://arturdomingues.github.io/new-page.html` (note: `use_directory_urls: false` in `mkdocs.yml`)

**Failure Points:**
- Forgetting to add the page to `nav` → page is inaccessible (no link to it)
- Using directory-URL-style links in content while `use_directory_urls: false` → broken links

---

## Workflow: Adding or Modifying Visual Styles

**Trigger:** Author wants to change the color scheme or add new CSS.

**File Chain:**
1. [[docs/stylesheets/tokyo-night.css]] — edit existing CSS variables or add new selectors
2. [[mkdocs.yml]] — if adding a *new* CSS file: register it under `extra_css`
3. `uv run zensical serve` — verify changes in both light and dark mode
4. `git push` → CI/CD workflow deploys updated styles

**Key Data:**
- CSS custom properties (`--tnl-*`, `--tnd-*`) are the primary modification points
- Both `tokyo-night-light` and `tokyo-night-dark` scheme blocks must be updated for full coverage

**Failure Points:**
- Editing only one scheme → inconsistency between light and dark modes
- Misspelling a CSS custom property → silent fallback to inherited/default browser value
- Adding a new CSS file without registering it in `mkdocs.yml` → style not loaded
