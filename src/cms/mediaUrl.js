/**
 * Resolves stored media paths for <img> / <video> src.
 *
 * - Absolute URLs (e.g. DigitalOcean Spaces): path-style SDK URLs
 *   (`region.digitaloceanspaces.com/bucket/key`) are rewritten to virtual-hosted
 *   (`bucket.region.digitaloceanspaces.com/key`) so public media loads (path-style often 404s).
 * - Paths like `/uploads/...` are same-origin when the Node app serves both UI and files.
 * - When the client was built with `VITE_API_URL` (SPA and API on different origins), the
 *   browser must load `/uploads/...` from the API host — set `VITE_UPLOADS_ORIGIN` to that
 *   origin (no trailing slash), e.g. `https://your-app-xxxxx.ondigitalocean.app`.
 * - If `VITE_UPLOADS_ORIGIN` is unset, we derive the origin from `VITE_API_URL` by stripping
 *   a trailing `/api` segment (e.g. `https://api.example.com/api` → `https://api.example.com`).
 * - Scheme-less Spaces URLs (`sfo3.digitaloceanspaces.com/bucket/key`) must become `https://…`
 *   or the browser treats them as relative to the current page (e.g. under `/admin/case-study/`).
 */
function ensureHttpsScheme(url) {
  const s = String(url || "").trim();
  if (!s) return "";
  if (/^https?:\/\//i.test(s)) return s;
  if (s.startsWith("//")) return `https:${s}`;
  if (/\.digitaloceanspaces\.com(\/|$)/i.test(s)) {
    return `https://${s.replace(/^\/+/, "")}`;
  }
  return s;
}

function normalizeDigitalOceanSpacesPublicUrl(url) {
  const s = ensureHttpsScheme(url);
  if (!/^https?:\/\//i.test(s)) return String(url || "").trim();
  try {
    const u = new URL(s);
    const host = u.hostname.toLowerCase();
    if (!host.endsWith(".digitaloceanspaces.com")) return s;
    const withoutTld = host.slice(0, -".digitaloceanspaces.com".length);
    const labels = withoutTld.split(".");
    if (labels.includes("cdn")) return s;
    if (labels.length === 2) {
      return s;
    }
    if (labels.length === 1) {
      const region = labels[0];
      const rawPath = decodeURIComponent(u.pathname.replace(/^\/+|\/+$/g, ""));
      const segments = rawPath.split("/").filter(Boolean);
      if (segments.length >= 2) {
        const bucketName = segments[0];
        const key = segments.slice(1).join("/");
        const keyEncoded = key
          .split("/")
          .map((segment) => encodeURIComponent(segment))
          .join("/");
        const out = `https://${bucketName}.${region}.digitaloceanspaces.com/${keyEncoded}`;
        return u.search ? `${out}${u.search}` : out;
      }
    }
  } catch {
    return s;
  }
  return s;
}

export function getUploadsOrigin() {
  if (typeof import.meta === "undefined" || !import.meta.env) return "";
  const explicit = import.meta.env.VITE_UPLOADS_ORIGIN;
  if (explicit) return String(explicit).replace(/\/$/, "");
  const api = import.meta.env.VITE_API_URL;
  if (!api) return "";
  return String(api)
    .trim()
    .replace(/\/$/, "")
    .replace(/\/api\/?$/, "");
}

export function resolveMediaSrc(path) {
  if (path == null) return "";
  let s = String(path).trim();
  if (!s) return "";
  s = ensureHttpsScheme(s);
  if (/^https?:\/\//i.test(s)) return normalizeDigitalOceanSpacesPublicUrl(s);
  if (s.startsWith("/")) {
    const origin = getUploadsOrigin();
    return origin ? `${origin}${s}` : s;
  }
  return s;
}
