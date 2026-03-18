# `docs/index.md`

## Purpose

This is the homepage — and currently the only content page — of Artur Domingues' personal academic website. It presents his professional identity as a physicist, a short biography, a list of research works (MSc dissertation, research code, ongoing contribution), and contact details. It is pure Markdown content with no dynamic logic.

## Exports / Public API

This is a content file, not a code file. It has no exports or API. It renders into the root URL of the site (`/` or `/index.html` depending on `use_directory_urls` in `mkdocs.yml`).

## Internal Logic

No programming logic. The file uses standard Markdown formatting:
- `---` horizontal rules as visual section dividers
- `##` headings for sections: Bio, Works, Contact, Disclaimer
- Hyperlinks to external resources (USP thesis repository, GitHub, LinkedIn, QuaCCAToo)
- Bullet lists for research topics

## State & Side Effects

None. Static Markdown content only. No database queries, API calls, or global state modifications.

## Configuration & Environment

No environment variables. The page is included in the site navigation via the `nav` entry in `mkdocs.yml`:
```yaml
nav:
  - Home: index.md
```

## Error Handling

Not applicable — static content file.

## How to Modify Safely

- Edit freely in any text editor.
- Run `uv run zensical serve` locally to preview changes with hot reload before pushing.
- Adding new top-level sections: add a `##` heading and optionally a new entry under `nav` in `mkdocs.yml`.
- Adding new pages: create additional `.md` files in `docs/` and register them in `mkdocs.yml` `nav`.

## ⚠️ Gotchas & Known Issues

- The `Disclaimer` section at the bottom notes the site is "under construction" — this is intentional and reflects ongoing updates.
- External links (USP thesis, GitHub, LinkedIn, QuaCCAToo) are not validated by the build process; they must be checked manually if URLs change.
- The MSc dissertation link points to a USP repository URL that may require institutional access to view the full text.

---

## 🔗 Linked Files

### Imports From
- *(none — pure content)*

### Imported By
- [[mkdocs.yml]] — referenced in `nav: Home: index.md` and `docs_dir: docs`

### Shared Types / Interfaces
- *(none)*

### Related Concepts
- [`.ai-docs/files/mkdocs.yml.md`](../mkdocs.yml.md) — controls how this file is built and served
- [`.ai-docs/files/docs/stylesheets/tokyo-night.css.md`](stylesheets/tokyo-night.css.md) — provides the visual styling applied to this page
- [`.ai-docs/files/docs/javascripts/mathjax.js.md`](javascripts/mathjax.js.md) — provides math rendering (available on this page if math syntax is used)
