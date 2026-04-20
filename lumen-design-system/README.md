# Lumen Design System

Documentation and source map for **Lumen**, the design system used on [isabelshic.com](https://isabelshic.com). The live reference is published at **`/design-system`**.

## Summary

- **Product name:** Lumen Design System (page title *Lumen Design System — Isabel Shic*).
- **Tagline:** Built by Isabel Shic, inspired by Apple HIG.
- **Stack:** React 18, Vite; tokens and layout in global CSS (`:root` custom properties).

## What’s in the system

| Area | Contents |
|------|------------|
| **Foundations** | Color tokens (`--color-black`, grays, white), typography specimens (Inter, Nunito, IBM Plex Mono, Source Serif 4). |
| **Patterns** | Navigation, hero, section tabs, work cards, CMS & blog (breadcrumb, meta, scroll progress, columns), about, status bars, filter pills, AI chat panel, social links (dark strip + light variant). |

## Canonical source code

The implementation lives in the **portfolio** application repository (this monorepo’s parent). It is not vendored as a separate npm package; patterns use the same components as production (e.g. `WorkCard`, `Footer` / `FooterSocialLinks`, Isabel AI panel classes).

See **`FILES.md`** for paths to the main files.

## Publishing this folder as its own GitHub repository

This directory lives inside the **portfolio** repo. To host it as a **separate** GitHub repo (docs + file map only):

1. **Copy** this folder somewhere outside the portfolio clone (or use a fresh temp path), e.g.  
   `cp -R lumen-design-system ~/lumen-design-system && cd ~/lumen-design-system`
2. On GitHub: **New repository** → name it (e.g. `lumen-design-system`) → create **without** a README/license if you will push an existing tree.
3. In the copied folder:

```bash
git init
git add .
git commit -m "docs: Lumen Design System overview and file map"
git branch -M main
git remote add origin https://github.com/<YOUR_USER>/lumen-design-system.git
git push -u origin main
```

### One-command create + push (after [GitHub CLI](https://cli.github.com/) install)

```bash
brew install gh
gh auth login
# from the copied folder, after git init and first commit:
gh repo create lumen-design-system --public --source=. --remote=origin --push
```

## License

Design system documentation © Isabel Shic. Source code ownership follows the parent portfolio repository.
