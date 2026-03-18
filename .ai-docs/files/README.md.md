# `README.md`

## Purpose

The maintainer guide for the repository. Documents the project overview, directory structure, local development workflow, site configuration guide, links to advanced customization resources, and deployment notes. It is the primary reference for humans (and AI agents) setting up the project for the first time.

## Exports / Public API

Not a code file — pure documentation. No exports.

## Internal Logic

Organized into 6 sections:

1. **Overview** — Names the project, production URL, build tool (Zensical), and deployment method.
2. **Project structure** — Maps the key directories and files (`docs/`, `mkdocs.yml`, `.github/workflows/docs.yml`, `site/`).
3. **Local development** — Three commands: `uv sync` (setup), `uv run zensical serve` (preview), `uv run zensical build --clean` (production build).
4. **Configuration guide** — Explains how to modify navigation, theme options, custom styles, typography, and CSS additions.
5. **Advanced customization** — External links to Zensical documentation for setup, authoring, and publishing.
6. **Deployment notes** — Confirms automated deployment on push to `main`/`master` via GitHub Actions.

## State & Side Effects

None — static documentation file.

## Configuration & Environment

No environment variables. The `uv init` instruction implies `uv` must be installed on the local machine.

## Error Handling

Not applicable.

## How to Modify Safely

- Keep the README synchronized with `mkdocs.yml` and `.github/workflows/docs.yml` if configuration or CI steps change.
- If the Zensical documentation URL structure changes, update the links in Section 5 (the `> Note:` callout at the end of Section 5 acknowledges this risk).

## ⚠️ Gotchas & Known Issues

- `site/` is listed as "generated output (ignored)" — it is indeed in `.gitignore` and should never be committed.

---

## 🔗 Linked Files

### Imports From
- *(none — pure documentation)*

### Imported By
- [[pyproject.toml]] — the `readme = "README.md"` field references this file

### Shared Types / Interfaces
- *(none)*

### Related Concepts
- [`.ai-docs/files/mkdocs.yml.md`](mkdocs.yml.md) — the configuration file described in Section 4
- [`.ai-docs/files/.github/workflows/docs.yml.md`](.github/workflows/docs.yml.md) — the CI/CD workflow described in Section 6
- [`.ai-docs/files/pyproject.toml.md`](pyproject.toml.md) — the Python dependency setup described in Section 3
