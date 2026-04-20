# File map (portfolio repository)

Paths are relative to the **portfolio repo root** (parent of this folder).

## Page & routing

| File | Role |
|------|------|
| `src/DesignSystemPage.jsx` | Full `/design-system` page: Foundations (color tokens, typography, **Buttons** — `design-system__btn-pill`, `NavTextButton` demos), **Patterns** (embedded **SiteNavigationBar** preview for Navigation, hero, tabs, work cards, CMS & blog, about, AI panel, status bars, filter pills, social links). Defines **`SiteNavigationBar`** (same markup as the live sticky header: `SiteNavBrand`, `NavTextButton`, `NavStatusWidget`). Intro includes GitHub pill link to this repo. |
| `src/AppRouter.jsx` | Route to `/design-system`. |

## Styles

| File | Role |
|------|------|
| `src/styles.css` | `design-system-*` classes: section/showcase frames, type specimens, **`design-system__btn-pill`** (+ intro grid helper **`design-system-page__github-btn`**), **`design-system__site-nav-preview`** (embedded nav: non-sticky, flush in showcase via `:has()`), footer social previews, AI panel sandbox, nav button state demos, etc. Search `design-system` in this file. |

## Shared components (used by patterns)

| File | Role |
|------|------|
| `src/components/Footer.jsx` | Site footer; exports `FooterSocialLinks` (dark / `variant="light"`). |
| `src/components/NavStatusWidget.jsx` | Status pill in the site header (used by `SiteNavigationBar` on the design system page). |
| `src/HomePage.jsx` | Exports `WorkCard`, modals used on the design system page where needed. |
| `src/NavTextButton.jsx` | Nav text buttons + arrow icon (`ArrowUpRightIcon`). |
| `src/SiteNavBrand.jsx` | Mono brand link. |
| `src/isabelAi/SendPlaneIcon.jsx` | Composer send icon in AI preview. |

## Static assets

| Path | Role |
|------|------|
| `public/design-system-work-card-placeholder.svg` | Neutral placeholder for work-card demos. |

## Not duplicated here

CMS case-study classes (`cms-public-*`), personal-library filter classes (`personal-library-*`), and Isabel AI panel markup mirror production CSS class names from their respective features—see `src/styles.css` and feature folders for full definitions.
