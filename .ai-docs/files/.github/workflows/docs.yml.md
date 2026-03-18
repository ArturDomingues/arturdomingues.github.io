# `.github/workflows/docs.yml`

## Purpose

GitHub Actions workflow that automatically builds the Zensical static site and deploys it to GitHub Pages on every push to the `main` or `master` branch. This is the sole CI/CD pipeline for the repository — there are no tests, no linting, just build and deploy.

## Exports / Public API

This is a GitHub Actions workflow YAML file — no code exports. It exposes one workflow named **"Documentation"** triggered by push events.

## Internal Logic

### Trigger
```yaml
on:
  push:
    branches:
      - master
      - main
```
Runs on every push to either `master` or `main`. Not triggered by pull requests, tags, or manual dispatch.

### Permissions
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```
- `contents: read` — read repository files during checkout.
- `pages: write` — write to the GitHub Pages deployment environment.
- `id-token: write` — required for OIDC-based GitHub Pages deployment (passwordless auth).

### Job: `deploy`
Runs on `ubuntu-latest`. Has an environment binding to `github-pages` (required for Pages deployment protection rules). The `url` output is set from the `deploy-pages` step for display in the Actions UI.

### Steps (in order)

| Step | Action | Purpose |
|---|---|---|
| 1 | `actions/configure-pages@v5` | Configures the GitHub Pages environment; sets base URL |
| 2 | `actions/checkout@v5` | Checks out the repository source code |
| 3 | `actions/setup-python@v5` (`python-version: 3.x`) | Installs Python 3.x (latest 3.x at runtime) |
| 4 | `pip install zensical` | Installs the Zensical static site generator |
| 5 | `zensical build --clean` | Builds the site, writing output to `site/` |
| 6 | `actions/upload-pages-artifact@v4` (`path: site`) | Uploads `site/` as a Pages artifact |
| 7 | `actions/deploy-pages@v4` (id: `deployment`) | Deploys the artifact to GitHub Pages |

## State & Side Effects

- Creates and uploads a Pages deployment artifact to GitHub infrastructure.
- Deploys to the live GitHub Pages site at `https://arturdomingues.github.io`.
- Does **not** push back to the repository (no `git push` in the workflow).

## Configuration & Environment

- No repository secrets required — uses OIDC token (`id-token: write`) for authentication.
- GitHub Pages must be enabled in the repository settings and configured to deploy from Actions.
- The `github-pages` environment must exist (GitHub creates it automatically when Pages is first enabled via Actions).

## Error Handling

The workflow will fail (and send a GitHub notification) if:
- `zensical build --clean` exits non-zero (e.g., broken Markdown, missing files referenced in `nav`)
- The Pages artifact upload or deployment fails (e.g., Pages not enabled, permissions issue)
- Python setup fails (unlikely with `python-version: 3.x`)

On failure, the previous deployment remains live — GitHub Pages only updates on successful deployments.

## How to Modify Safely

- To change the trigger branches, edit the `branches` list under `on.push`.
- To add a pull-request preview, add a separate `pull_request` trigger job.
- To pin versions, change action tags (e.g., `actions/checkout@v5`) and `pip install zensical==X.Y.Z`.
- To add build steps (e.g., lint, test content), add them between the checkout and build steps.
- Test changes by pushing to `main`/`master` and monitoring the Actions tab.

## ⚠️ Gotchas & Known Issues

- `python-version: 3.x` is not pinned — it resolves to the latest Python 3 minor version available on the GitHub runner. This could theoretically break if a new Python version has compatibility issues with Zensical.
- `pip install zensical` has no version pin — Zensical upgrades automatically. If a breaking Zensical version is released, the build will fail unexpectedly.
- The `actions/checkout@v5` and `actions/configure-pages@v5` use major version tags — these float to the latest compatible minor/patch version within v5.
- There is no `uv` usage in CI — the workflow uses `pip` directly instead of the `uv` toolchain used for local development (as documented in `pyproject.toml` and `README.md`). This is intentional for simplicity but means CI and local dev use different package manager setups.

---

## 🔗 Linked Files

### Imports From (reads at build time)
- [[mkdocs.yml]] — consumed by `zensical build --clean`
- [[docs/index.md]] — built into `site/index.html`
- [[docs/javascripts/mathjax.js]] — bundled into the build output
- [[docs/stylesheets/tokyo-night.css]] — bundled into the build output

### Imported By
- *(nothing imports this workflow — it is triggered by GitHub infrastructure)*

### Shared Types / Interfaces
- *(none)*

### Related Concepts
- [`.ai-docs/files/pyproject.toml.md`](../../pyproject.toml.md) — local dev equivalent of the `pip install zensical` step
- [`.ai-docs/files/mkdocs.yml.md`](../../mkdocs.yml.md) — the configuration the build step consumes
- [`.ai-docs/WORKFLOWS.md`](../../WORKFLOWS.md) — documents the full end-to-end build and deploy workflow
