# Artur Domingues — Personal Site

Static single-page academic website built with **Zensical** (MkDocs-compatible) and deployed to GitHub Pages. Edit Markdown, preview locally, and deploys automatically on push.

---

## Prerequisites

- Python **3.12+** (pinned via `.python-version`)
- [`uv`](https://github.com/astral-sh/uv) for dependency management (`pip install uv` if you don't have it)

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/ArturDomingues/arturdomingues.github.io.git
cd arturdomingues.github.io
```

### 2. Install dependencies
```bash
uv sync
```

No environment variables are required.

### 3. Run (live preview with hot reload)
```bash
uv run zensical serve
```
Visit http://127.0.0.1:8000 to browse the site as you edit `docs/`.

### 4. Production build
```bash
uv run zensical build --clean
```
Outputs the static site to `site/` (ignored by git). This is the same command CI runs before publishing.

---

## Running Tests

There are no automated tests. Validate changes by running the production build:
```bash
uv run zensical build --clean
```

---

## Project Structure

```
.
├── docs/                  # Content root
│   ├── index.md           # Homepage content
│   ├── javascripts/       # MathJax config (mathjax.js)
│   └── stylesheets/       # Custom Tokyo Night palette (tokyo-night.css)
├── mkdocs.yml             # Site config (nav, theme, extensions, assets)
├── pyproject.toml         # Python metadata + zensical dependency
├── .python-version        # Pins Python 3.12 locally
├── .github/workflows/     # GitHub Actions build & deploy to Pages
└── README.md
```

---

## Contributing

- Create a branch from `main`, then open a PR back to `main`.
- Before pushing, run `uv run zensical build --clean` to ensure the site builds.
- Do not commit generated output (`site/`) or virtual envs (`.venv/`); they are gitignored.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Static site generator | Zensical (MkDocs-compatible) |
| Language & runtime | Python 3.12 |
| Package manager | uv |
| Theme | Material for MkDocs with custom Tokyo Night palette |
| Math rendering | MathJax 3 (CDN) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions (`.github/workflows/docs.yml`) |
