# `pyproject.toml`

## Purpose

Defines the Python project metadata for the local development environment and declares the sole runtime dependency: `zensical`. This file is used by `uv` (the package manager) to create the virtual environment and install dependencies needed to build and serve the site locally.

## Exports / Public API

This is a configuration file — no exports. Used by:
- `uv init` / `uv sync` — to install dependencies
- `uv run zensical build --clean` / `uv run zensical serve` — to execute the installed CLI

## Internal Logic

```toml
[project]
name = "arturdomingues-github-io"
version = "0.1.0"
description = "Local build"
readme = "README.md"
requires-python = ">=3.12"
dependencies = ['zensical']
```

- **`requires-python = ">=3.12"`**: enforces Python 3.12 or newer. The `.python-version` file pins it to exactly 3.12.
- **`dependencies = ['zensical']`**: the only runtime dependency. No version pin is specified — `uv` resolves the latest compatible version. The resolved version is stored in `uv.lock` (gitignored).

## State & Side Effects

None — pure configuration. When consumed by `uv`, it triggers package installation into `.venv/`.

## Configuration & Environment

No environment variables. The `.python-version` file (pinning Python 3.12) is read by `uv` and `pyenv` to select the correct interpreter.

## Error Handling

`uv` will fail if:
- Python 3.12+ is not available on the system
- The `zensical` package cannot be resolved from PyPI

## How to Modify Safely

- To pin `zensical` to a specific version: change `'zensical'` to `'zensical==X.Y.Z'`.
- To add a new Python dependency: add it to the `dependencies` list and run `uv sync`.
- The `name`, `version`, and `description` fields are metadata only — changing them has no functional effect on the site build.

## ⚠️ Gotchas & Known Issues

- `zensical` is not pinned to a specific version. If a breaking Zensical release ships, the local build may break until the lock file (`uv.lock`) is regenerated. The CI workflow (`docs.yml`) uses `pip install zensical` without pinning either.
- `uv.lock` is gitignored, so different developers/CI runs may resolve different Zensical versions. If reproducibility is needed, commit `uv.lock` and add it to the workflow.

---

## 🔗 Linked Files

### Imports From
- *(none)*

### Imported By
- [[.python-version]] — pairs with this file to fully specify the Python runtime
- [[.github/workflows/docs.yml]] — the CI workflow uses `pip install zensical` independently (does not use this file directly)
- [[README.md]] — documents the `uv init` / `uv run` commands referencing this file

### Shared Types / Interfaces
- *(none)*

### Related Concepts
- [`.ai-docs/files/.python-version.md`](.python-version.md) — pins the Python interpreter version
- [`.ai-docs/files/.github/workflows/docs.yml.md`](.github/workflows/docs.yml.md) — the CI equivalent of this local setup
