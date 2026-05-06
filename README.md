# Periodic Table of Sustainable Product Engineering

100 concepts spanning Green Product Thinking, Drive (Purpose / Autonomy / Mastery), Metrics & Feedback, LeSS / Systems Thinking, Green Dev Practices, Sustainable Architecture, and GreenOps.

Static site. Open `index.html` via a local server:

```
python3 -m http.server
```

## Editing tiles

`tiles.yaml` is the single source of truth for tile content (colors + elements).
After editing, regenerate `data.json` (which the site loads at runtime):

```
python3 build.py
```

The build validates that `num` values are contiguous, every `cat` exists in `colors`,
and no two tiles share a `row`/`col` cell. Commit both `tiles.yaml` and the rebuilt
`data.json`.

## Docs

- [docs/sustainable_product_engineering.md](docs/sustainable_product_engineering.md) — concept manifesto.
- [docs/categories_and_tiles.md](docs/categories_and_tiles.md) — categories and tile reference.
