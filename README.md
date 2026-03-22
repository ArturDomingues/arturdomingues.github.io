# Artur Domingues — Personal Academic Website

Static single-page academic website deployed to [arturdomingues.github.io](https://arturdomingues.github.io).

## What It Does

Presents Artur Domingues' professional profile as a physicist — biography, research works (MSc dissertation, simulation code, QuaCCAToo contributions), and contact details. Built with [Zensical](https://zensical.org) (MkDocs-compatible static site generator) and styled with a custom Tokyo Night color palette (light and dark modes).

## Quickstart

```bash
# Prerequisites: Python 3.12+, uv (https://github.com/astral-sh/uv)

git clone https://github.com/ArturDomingues/arturdomingues.github.io.git
cd arturdomingues.github.io
uv sync                        # install dependencies
uv run zensical serve          # live preview at http://127.0.0.1:8000
```

No environment variables required.

## Project Structure

```
docs/                   Content root (Markdown pages, JS, CSS)
  index.md              Homepage — the sole content page
  javascripts/          MathJax 3 config (mathjax.js)
  stylesheets/          Custom Tokyo Night palette (tokyo-night.css)
.github/workflows/      CI/CD: build + deploy to GitHub Pages
mkdocs.yml              Site config (nav, theme, extensions, assets)
pyproject.toml          Python project metadata + zensical dependency
```

See [AGENTS.md](AGENTS.md) for full directory map, conventions, and dependency details.

## Development

```bash
# Production build (outputs to site/, same as CI)
uv run zensical build --clean

# Live preview with hot-reload
uv run zensical serve
```

There are no automated tests. The build itself is the validation — if it exits 0, the site is valid.

## Deployment

Every push to `main` or `master` triggers the GitHub Actions workflow (`.github/workflows/docs.yml`), which builds the site and deploys it to GitHub Pages automatically.

## License

[MIT](LICENSE) — Copyright (c) 2022 Artur V. Domingues
