# TODO.md

## Current Priorities

- [x] `mkdocs.yml` line 1 — `site_name: My personal page` is a generic placeholder; browser tabs and search-engine snippets show this instead of the author's name. Consider changing to `Artur Domingues`.
- [x] `mkdocs.yml` lines 24–25 — `pymdownx.tabbed` is configured without `alternate_style: true`. Material for MkDocs requires this for tabbed content to render correctly. No tabbed content exists yet, but adding any will produce broken output.

## Backlog

- [x] `docs/index.md` line 60 — Disclaimer says "This website is currently under construction." Remove or update once the site is considered complete.

## Tech Debt

- [x] `mkdocs.yml` lines 9–14 and 22 — `pymdownx.superfences` appears twice in the extensions list (once with the Mermaid custom fence config, once plain). The duplicate is currently harmless but brittle — if options are added to the second entry, they silently discard the Mermaid config.
- [x] `mkdocs.yml` line 52 — `theme:` block has no `name: material` key. Zensical defaults to Material so the build works, but if Zensical's default ever changes, all custom CSS targeting Material classes will break silently.
- [ ] `mkdocs.yml` line 51 — MathJax CDN URL (`https://unpkg.com/mathjax@3/es5/tex-mml-chtml.js`) is unpinned. A breaking MathJax 3.x release could silently break math rendering.
- [ ] `.github/workflows/docs.yml` — `pip install zensical` has no version pin and `python-version: 3.x` resolves to latest Python 3. A breaking upstream release can fail the build without any local code change.
- [ ] `.gitignore` — Contains legacy ActionScript/Flash entries (`bin-debug/`, `bin-release/`, `*.swf`, `*.air`, `*.ipa`, `*.apk`) from a template. Harmless but confusing; could be cleaned up.
- [ ] `pyproject.toml` / `.gitignore` — `uv.lock` is gitignored, so different developers and CI may resolve different Zensical versions. If reproducibility is needed, commit `uv.lock`.
- [x] `docs/stylesheets/tokyo-night.css` line 129 — Light-mode blockquote text uses `--tnl-muted` (#6c6e75) on `--tnl-surface` (#e6e7ed) background, giving ~3.8:1 contrast ratio. This fails WCAG AA (4.5:1 minimum for body text).
