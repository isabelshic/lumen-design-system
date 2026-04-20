# Lumen Design System

**Lumen** is the design system used on [isabelshic.com](https://isabelshic.com). The live gallery is at **`/design-system`** on the site.

This repository contains **real React components**, **global styles** (`styles/lumen.css`), and a **token manifest** (`design-system.json`) so you can build against the same UI in your own app.

## Install

From npm (when published):

```bash
npm install lumen-design-system
```

From a local path or GitHub checkout:

```bash
npm install ./lumen-design-system
# or
npm install github:isabelshic/lumen-design-system
```

Peer dependencies: **React 18** and **react-dom**.

## Use in an app

1. Import styles **once** at your app entry (before your own CSS):

```javascript
import "lumen-design-system/styles/lumen.css";
```

2. Import components:

```javascript
import {
  NavTextButton,
  SiteNavBrand,
  Footer,
  FooterSocialLinks,
  WorkCard,
  ArrowUpRightIcon,
  SendPlaneIcon
} from "lumen-design-system";
```

3. Load fonts to match the site (optional but recommended): **Inter**, **Nunito**, **IBM Plex Mono**, **Source Serif 4** — see the typography section on `/design-system`.

## What’s included

| Export | Role |
|--------|------|
| `NavTextButton`, `ArrowUpRightIcon` | Header navigation control with arrow affordance |
| `SiteNavBrand` | Mono wordmark link |
| `Footer`, `FooterSocialLinks` | ASCII “galaxy” footer and social icon row |
| `WorkCard` | Case-study / project card with expandable panel |
| `SendPlaneIcon` | AI composer send glyph |
| `resolveMediaSrc`, `getUploadsOrigin` | Same media URL rules as the portfolio CMS (Vite env) |

**Not included:** `NavStatusWidget` (Marvin / Isabel AI) stays in the main app because it depends on chat context and analytics. You can compose your own pill next to `SiteNavBrand` and `NavTextButton` using the same layout classes in `lumen.css`.

## Tokens

- **CSS:** `:root` custom properties are defined in `styles/lumen.css` (`--color-black`, `--font-ui`, etc.).
- **JSON:** `design-system.json` is a Style Dictionary–style snapshot of colors, type, spacing, and component notes (from Figma).

## Developing this package from the portfolio repo

The canonical implementation lives in **`lumen-design-system/`** inside the [portfolio](https://github.com/isabelshic/portfolio) monorepo. The site depends on it via:

```json
"lumen-design-system": "file:./lumen-design-system"
```

Changes to components or `lumen.css` in this folder are what you publish or push to the standalone GitHub repo.

## Publishing this folder as its own GitHub repository

This directory can be copied out and pushed as **`lumen-design-system`** (now with full source, not only docs):

```bash
cp -R lumen-design-system ~/lumen-design-system && cd ~/lumen-design-system
git init
git add .
git commit -m "feat: Lumen design system — components and styles"
git branch -M main
git remote add origin https://github.com/<YOUR_USER>/lumen-design-system.git
git push -u origin main
```

### GitHub CLI

```bash
gh repo create lumen-design-system --public --source=. --remote=origin --push
```

## License

Design and code © Isabel Shic. See the portfolio repository for terms if not specified here.
