# AGENTS.md

## Project Summary

Personal academic website for Artur Domingues, a physicist specializing in quantum control of solid-state spin systems (NV centers in diamond). Single-page static site built with Zensical (MkDocs-compatible), themed with a custom Tokyo Night palette, and auto-deployed to GitHub Pages on every push to `main` or `master`.

## Tech Stack

| Layer | Technology |
|---|---|
| Static site generator | [Zensical](https://zensical.org) (MkDocs-compatible) |
| Language | Python 3.12 (local via `.python-version`) / 3.x latest (CI) |
| Package manager | [uv](https://github.com/astral-sh/uv) (local) / pip (CI) |
| Theme | Material for MkDocs with custom Tokyo Night CSS palette |
| Math rendering | MathJax 3 (CDN: `unpkg.com/mathjax@3`) |
| Markdown extensions | PyMdown Extensions (superfences, arithmatex, highlight, emoji, etc.) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions (`.github/workflows/docs.yml`) |

## Directory Map

```
docs/                   Site content root — Markdown pages, custom JS, custom CSS
docs/javascripts/       MathJax 3 config script (mathjax.js)
docs/stylesheets/       Custom Tokyo Night light/dark CSS palette (tokyo-night.css)
.github/workflows/      CI/CD: build with Zensical, deploy to GitHub Pages (docs.yml)
```

Root files: `mkdocs.yml` (site config), `pyproject.toml` (Python deps), `.python-version` (pins 3.12), `.gitignore`, `LICENSE` (MIT), `README.md`, `AGENTS.md` (this file), `TODO.md`.

## Module Dependency Graph

This project has no Python source modules. The build-time dependency chain is:

```
mkdocs.yml
├── docs/index.md                          (sole content page, referenced by nav)
├── docs/javascripts/mathjax.js            (extra_javascript — must load before CDN script)
├── docs/stylesheets/tokyo-night.css       (extra_css — scheme names must match palette entries)
└── https://unpkg.com/mathjax@3/...        (extra_javascript — CDN, loaded after mathjax.js)
```

`pyproject.toml` declares `zensical` as the only Python dependency. `.github/workflows/docs.yml` installs it via `pip install zensical` (no version pin).

## Conventions

- **Single-page site**: all content lives in `docs/index.md`. New pages need a `.md` file in `docs/` plus a `nav` entry in `mkdocs.yml`.
- **CSS custom properties**: light uses `--tnl-*`, dark uses `--tnd-*`. Always update both scheme blocks together.
- **New CSS**: place in `docs/stylesheets/`, register under `extra_css` in `mkdocs.yml`.
- **New JS**: place in `docs/javascripts/`, register under `extra_javascript` in `mkdocs.yml`. Load order matters — config scripts before CDN scripts.
- **Math delimiters**: inline `\( ... \)`, display `\[ ... \]`. MathJax is already configured.
- **Mermaid diagrams**: use ` ```mermaid ` fenced blocks — configured in `mkdocs.yml`.
- **URL strategy**: `use_directory_urls: false` — flat `.html` URLs (no trailing slashes).
- **Local execution**: always use `uv run <command>`.
- **No linting/testing infrastructure**: validation is the build itself (`uv run zensical build --clean`).
- **Deployment**: every push to `main`/`master` triggers automatic deployment. Ensure changes are production-ready.

## How to Run

```bash
# Prerequisites: Python 3.12+, uv installed

# Install dependencies
uv sync

# Live preview with hot-reload
uv run zensical serve          # http://127.0.0.1:8000

# Production build (writes to site/)
uv run zensical build --clean
```

No environment variables, secrets, or `.env` file required.

## Rules for Agents

- **Do not commit** `site/`, `.venv/`, or `uv.lock` — all gitignored.
- **Do not add a page** without updating `nav` in `mkdocs.yml`.
- **Do not reorder** `extra_javascript` entries — `mathjax.js` must appear before the MathJax CDN URL.
- **Do not edit only one palette scheme** — always update both `tokyo-night-light` and `tokyo-night-dark` in `tokyo-night.css`.
- **Do not pin `zensical`** to a specific version unless explicitly asked.
- **Do not add test infrastructure** — this project has none and does not need any.
- **Do not add dependencies** without justification.
- **Validate changes** by running `uv run zensical build --clean` before considering them complete.
