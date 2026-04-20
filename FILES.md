# Layout (this package)

Paths are relative to **`lumen-design-system/`** (the package root).

## Published surface

| Path | Role |
|------|------|
| `package.json` | Package name, `exports` map (`"."`, `./styles/lumen.css`, `./design-system.json`) |
| `src/index.js` | Barrel exports for all public components and `resolveMediaSrc` |
| `src/NavTextButton.jsx` | Nav text buttons + `ArrowUpRightIcon` |
| `src/SiteNavBrand.jsx` | Mono brand link |
| `src/Footer.jsx` | `Footer`, `FooterSocialLinks` |
| `src/WorkCard.jsx` | Project / case-study card |
| `src/SendPlaneIcon.jsx` | AI panel send icon |
| `src/cms/mediaUrl.js` | `resolveMediaSrc`, `getUploadsOrigin` |
| `styles/lumen.css` | Design tokens (`:root`) + site nav, nav buttons, work cards, site footer |
| `design-system.json` | Token + component metadata (Style Dictionary schema) |

## Portfolio integration

The site imports the package and loads CSS in `src/main.jsx` before `src/styles.css`. App-specific UI (CMS, Isabel AI, design-system doc page-only classes) remains in the portfolio `src/styles.css`.

| Portfolio file | Role |
|----------------|------|
| `src/DesignSystemPage.jsx` | Full `/design-system` gallery (uses package components + local `NavStatusWidget`) |
| `src/components/NavStatusWidget.jsx` | App-specific status / Marvin entry (not in this package) |
