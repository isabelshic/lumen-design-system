# Publish checklist

- [ ] Copy `lumen-design-system/` out of the portfolio repo (or push from the portfolio subtree).
- [ ] `git init` → commit → add `origin` → `git push`.
- [ ] Optional: set the GitHub repo **About** description to: *Lumen — React components and styles for isabelshic.com (`/design-system`).*
- [ ] Optional: add the live URL `https://isabelshic.com/design-system` to the repo **Website** field.
- [ ] Optional: publish to npm (`npm publish` from this folder after `npm login`).

The **`lumen-design-system` folder in the portfolio repo** is the source of truth for components and `lumen.css`; the site consumes it via `"lumen-design-system": "file:./lumen-design-system"`.
