# Site documentation (MkDocs + Material)

## Local preview
```bash
pip install mkdocs mkdocs-material
mkdocs serve
```

## Deployment
- Push to `master` or `main` to trigger the GitHub Actions workflow.
- The workflow builds and deploys with `mkdocs gh-deploy --force`, publishing to the `gh-pages` branch.
- In the repository settings, configure GitHub Pages to publish from the `gh-pages` branch.

## Content layout
- All site content lives in `docs/` (homepage at `docs/index.md`).
- Assets (PDFs, images, etc.) stay under `docs/assets/`. Link to them from pages using paths like `/assets/notes/your-file.pdf`.
