# File map (portfolio repository)

Paths are relative to the **portfolio repo root** (parent of this folder).

## Page & routing

| File | Role |
|------|------|
| `src/DesignSystemPage.jsx` | Full design system page: sections, typography specimens, pattern showcases. |
| `src/AppRouter.jsx` | Route to `/design-system`. |

## Styles

| File | Role |
|------|------|
| `src/styles.css` | `design-system-*` classes, font specimens, showcase frames, footer social previews, AI panel sandbox, nav button demos, etc. (search `design-system`). |

## Shared components (used by patterns)

| File | Role |
|------|------|
| `src/components/Footer.jsx` | Site footer; exports `FooterSocialLinks` (dark / `variant="light"`). |
| `src/HomePage.jsx` | Exports `WorkCard` for work-card demos. |
| `src/NavTextButton.jsx` | Nav text buttons + arrow icon. |
| `src/SiteNavBrand.jsx` | Mono brand link. |
| `src/isabelAi/SendPlaneIcon.jsx` | Composer send icon in AI preview. |

## Static assets

| Path | Role |
|------|------|
| `public/design-system-work-card-placeholder.svg` | Neutral placeholder for work-card demos. |

## Not duplicated here

CMS case-study classes (`cms-public-*`), personal-library filter classes (`personal-library-*`), and Isabel AI panel markup mirror production CSS class names from their respective features—see `src/styles.css` and feature folders for full definitions.
