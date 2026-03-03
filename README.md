# Maintainer Guide — Zensical site

## 1. Overview
- Personal academic site for Artur Domingues.
- Production URL: https://arturdomingues.github.io
- Built with **Zensical** (docs: https://zensical.org/docs/get-started/).
- Deployed automatically to GitHub Pages via `.github/workflows/docs.yml`.

## 2. Project structure
- `docs/` — content root.
  - `docs/index.md` — homepage.
  - `docs/assets/` — static assets (images, PDFs, etc.).
  - `docs/stylesheets/` — custom styles (e.g., `tokyo-night.css`).
- `mkdocs.yml` — Zensical-compatible site configuration.
- `.github/workflows/docs.yml` — Actions workflow that builds with `zensical build --clean` and publishes to Pages.
- `site/` — generated output (ignored).

## 3. Local development
1. Create a virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```
2. Install Zensical:
   ```bash
   pip install zensical
   ```
3. Live preview:
   ```bash
   zensical serve
   ```
   Serves the docs with hot reload.
4. Production build:
   ```bash
   zensical build --clean
   ```
   Cleans any previous build and writes the static site to `site/`.

## 4. Configuration guide
- **Navigation**: edit `nav` in `mkdocs.yml` (paths are relative to `docs/`). Zensical also supports implicit nav from the folder tree if `nav` is omitted.
- **Theme options**: under `theme` in `mkdocs.yml` you can adjust language, icon set, and color schemes. Palette entries named `tokyo-night-light` and `tokyo-night-dark` are defined for the Tokyo Night theme.
- **Custom styles**: add CSS files under `docs/stylesheets/` and register them with `extra_css` in `mkdocs.yml`. The Tokyo Night palette lives in `docs/stylesheets/tokyo-night.css`.
- **Typography, spacing, layout**: extend via custom CSS (e.g., override `body`, headings, or `.md-typeset` tokens) or by providing theme overrides if you add a template override directory supported by Zensical’s customization model.
- **Adding custom CSS**: place the file in `docs/stylesheets/`, then list it under `extra_css` in `mkdocs.yml`. Zensical will bundle it into the build and apply it across pages.
- **Theme-related settings**: keep palette names, toggles, and any future font/logo settings together inside the `theme` section so they remain easy to audit.

## 5. Advanced customization
- Zensical setup: https://zensical.org/docs/setup/
- Zensical authoring: https://zensical.org/docs/authoring/
- Zensical publishing: https://zensical.org/docs/get-started/#publish
- GitHub Pages: https://docs.github.com/en/pages

> Note: If Zensical reorganizes documentation URLs, start from https://zensical.org/docs/ and follow the navigation for setup/authoring/publishing.

## 6. Deployment notes
- Every push to `main` or `master` runs `.github/workflows/docs.yml`.
- The workflow installs Zensical, runs `zensical build --clean`, uploads `site/`, and deploys to GitHub Pages.
