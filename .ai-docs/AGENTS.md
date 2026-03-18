# Guide for AI Agents Working on This Repo

## Before You Start Any Task

1. **Read [`_INDEX.md`](_INDEX.md) fully** — understand the project shape, stack, and conventions.
2. **Identify which files are involved** using the Files Index table in `_INDEX.md`.
3. **Read the `.md` doc** for each relevant file in `.ai-docs/files/`.
4. **Check [`WORKFLOWS.md`](WORKFLOWS.md)** if your task spans multiple files or involves build/deploy.
5. **Browse the actual source files** (`mkdocs.yml`, `docs/index.md`, etc.) to verify what you read in the docs matches reality — these docs were generated at a point in time and may drift.

---

## Rules & Conventions to Always Follow

### Content
- All site content lives in `docs/`. Do not place content files anywhere else.
- Every new `.md` page in `docs/` **must** be registered in the `nav` section of `mkdocs.yml`.
- Internal links between pages should use relative Markdown links, not absolute URLs.

### CSS & Styling
- Custom stylesheets go in `docs/stylesheets/` and must be added to `extra_css` in `mkdocs.yml`.
- The Tokyo Night palette uses two prefixes: `--tnl-*` (light) and `--tnd-*` (dark). Always update both scheme blocks when changing colors.
- Do not hardcode hex colors in new CSS — use the existing CSS custom properties.

### JavaScript
- Custom scripts go in `docs/javascripts/` and must be added to `extra_javascript` in `mkdocs.yml`.
- **Load order matters**: if a script sets a global (like `window.MathJax`), it must appear before the library script in `extra_javascript`.

### Configuration (`mkdocs.yml`)
- YAML syntax is strict — use a YAML linter before saving.
- The `!!python/name:` and `!!python/object/apply:` tags are PyYAML-specific; handle with care.
- `use_directory_urls: false` means links should use `.html` suffix or no suffix, not trailing slashes.

### Git & Deployment
- Never commit the `site/` directory — it is gitignored and rebuilt by CI.
- Never commit `.venv/` or `uv.lock`.
- Every push to `main`/`master` triggers an automatic deployment — ensure changes are ready for production before pushing.

### Python Environment
- Use `uv run <command>` to execute project commands — this ensures the correct virtual environment is used.
- Python version is pinned to 3.12 via `.python-version`.

---

## What NOT to Do

- **Do not commit `site/`** — it is the generated build output and is gitignored. Committing it will bloat the repo and interfere with CI.
- **Do not edit files in `site/`** — they are overwritten on every build.
- **Do not add a new page without updating `mkdocs.yml` `nav`** — the page will build but be unreachable.
- **Do not add CSS without registering it in `mkdocs.yml` `extra_css`** — it will not be loaded.
- **Do not add JavaScript without registering it in `mkdocs.yml` `extra_javascript`** — it will not be loaded.
- **Do not change only one palette scheme** (`tokyo-night-light` or `tokyo-night-dark`) when styling — always update both to avoid inconsistency.
- **Do not use `git push` or `gh` CLI to push changes** — use the `report_progress` tool if you are a Copilot agent.
- **Do not create test files, linting configs, or CI for tests** — this project has no test infrastructure and does not need any.
- **Do not pin `zensical` to a specific version** unless explicitly asked — the project intentionally floats to the latest.

---

## Running Tests

This repository has **no automated tests**. There is no test runner, no unit tests, no integration tests, and no linting pipeline.

**The only validation available is the build itself:**
```bash
# Validate that the site builds without errors
uv run zensical build --clean

# Live preview for visual validation
uv run zensical serve
```

If the build exits 0, the site is valid. Check the browser preview for visual correctness.

---

## Safe Zones vs. Risky Zones

### ✅ Safe Zones (low-risk, easy to change)

| File / Area | Why It's Safe |
|---|---|
| `docs/index.md` | Pure Markdown content — changes are isolated; no code dependencies |
| New `.md` files in `docs/` | Additive only; cannot break existing pages |
| CSS custom property values in `tokyo-night.css` | Changes are visual-only; revert is easy |
| `README.md` | Documentation only; no build dependency |

### ⚠️ Risky Zones (higher coupling, requires care)

| File / Area | Why It's Risky |
|---|---|
| `mkdocs.yml` | Controls the entire build pipeline; YAML syntax errors stop the build; nav entries must match existing files |
| `docs/javascripts/mathjax.js` | Script load order with CDN matters; `document$` subscription pattern is MkDocs-specific |
| `docs/stylesheets/tokyo-night.css` — scheme names | The scheme names (`tokyo-night-light`, `tokyo-night-dark`) must exactly match the `scheme:` values in `mkdocs.yml` `palette`; renaming either breaks the theme |
| `.github/workflows/docs.yml` | Any error prevents deployment; requires understanding of GitHub Actions permissions and Pages setup |
| `pyproject.toml` `requires-python` | Changing the Python version requirement must be coordinated with `.python-version` and CI |

---

## Quick Reference: Common Tasks

| Task | Files to Change |
|---|---|
| Update bio or research info | `docs/index.md` |
| Add a new page | Create `docs/<page>.md` + update `nav` in `mkdocs.yml` |
| Change header/sidebar color (light) | `docs/stylesheets/tokyo-night.css` → `--tnl-azure` |
| Change header/sidebar color (dark) | `docs/stylesheets/tokyo-night.css` → `--tnd-surface` |
| Add a new icon for admonition type | `mkdocs.yml` → `theme.icon.admonition` |
| Change site name | `mkdocs.yml` → `site_name` |
| Add math to a page | Use `\( inline \)` or `\[ display \]` — MathJax is already configured |
| Add a Mermaid diagram | Use ` ```mermaid ` fenced code block — already configured in `mkdocs.yml` |
| Fix broken deployment | Check `.github/workflows/docs.yml`, verify GitHub Pages is enabled in repo settings |
