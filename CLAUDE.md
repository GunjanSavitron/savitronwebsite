# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server with Turbopack and `NODE_OPTIONS=--max-old-space-size=4096` (via `cross-env`)
- `npm run build` — `next build`. `next.config.ts` sets `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` to `true`, so a green build does **not** prove clean types or lint
- `npm run lint` — `next lint`
- `npm start` — serves the built app on `$PORT` (Hostinger sets this; falls back to Next.js's default 3000 locally)

No test runner is configured.

## Deployment

The site is deployed to **Hostinger Business plan** as a managed Node.js app (internal Hostinger site name was `slateblue-swallow-390063` during initial setup; `savitursolutions.com` was bound to it after WordPress was moved off the apex). Hostinger's built-in GitHub OAuth integration watches the `gunjanbohra/Saviturwebsite` repo — every push to `main` triggers a rebuild (`npm install` + `npm run build`) and an app restart. There is **no `vercel.json`, no GitHub Actions workflow, no Dockerfile** — Hostinger's managed Node runtime handles installs, builds, port binding (via `$PORT`), SSL (Let's Encrypt), and the webhook from GitHub. `savitursolutions.com` and `www.savitursolutions.com` both resolve to the Hostinger Business plan's server. DNS is hosted at Hostinger; MX (Outlook 365), SPF, and the `autodiscover` CNAME records are preserved in the DNS Zone — DO NOT touch them when modifying website-related DNS.

## Architecture

This is a **mostly-static Next.js Pages Router marketing site** for Savitur Solutions (Next 15, React 19, TypeScript). It does **not** use the App Router. There is no database, no auth, and no admin panel — an earlier MongoDB-backed CMS layer was intentionally removed (see the explicit "CMS removed; falls through to 404" comment in [[slug].tsx](pages/[slug].tsx)). The **only** API route is [pages/api/contact.ts](pages/api/contact.ts), which sends contact-form submissions to `s.vivek@savitursolutions.com` via Microsoft 365 SMTP (nodemailer). Treat the absence of `lib/models/`, `lib/server/`, and `pages/admin/` as deliberate, not as missing files to restore.

**SMTP env vars** (set in Hostinger hPanel → Node.js website → Environment variables; locally in `.env.local`): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`. See [.env.example](.env.example) for the full list. The contact API returns `{ ok: true }` on success or `{ ok: false, error: "..." }` on failure; the form shows inline success/error UI.

Styling is **Tailwind CSS v3** (config in [tailwind.config.js](tailwind.config.js)) plus **MUI v7** via emotion (used mainly for icons and the theme provider). Tailwind defines the "Platinum Edge" palette — `page`, `surface`, `platinum`, `ink`, `gold`, `navbar`, `footer` — and the Tailwind content globs cover `app/`, `amitkk/`, `pages/`, `components/`.

### Path aliases ([tsconfig.json](tsconfig.json))

- `@amitkk/*` → `amitkk/*` — all shared React components, layouts, theme, and static fixtures
- `lib/*` → `lib/*` — currently only [env.ts](lib/env.ts) and [createEmotionCache.ts](lib/createEmotionCache.ts)
- `pages/`, `styles/`, `types/` are imported by relative path

`tsconfig.json` `include` whitelists `pages/**`, `amitkk/**`, and `lib/**/*.ts`. Anything outside those globs is not typechecked.

### Page structure

Pages under [pages/](pages/) are individual route components — one `.tsx` per marketing page (`about`, `careers`, `contact-us`, `our-services`, `our-products`, plus the four service pages and four product pages). Notable special files:

- [pages/_app.tsx](pages/_app.tsx) — wraps every page in `AppLayout` and renders a `Loader` overlay on route transitions. No providers besides MUI's `ThemeProvider` (inside `AppLayout`). There is no `AuthProvider` and no per-pathname layout switching.
- [pages/_document.tsx](pages/_document.tsx) — emotion SSR cache extraction (boilerplate from MUI's pages-router setup).
- [pages/[slug].tsx](pages/[slug].tsx) — catch-all that returns `notFound: true` with empty `getStaticPaths`. It is **intentionally a 404 stub** post-CMS-removal; do not turn it back into a CMS resolver without an explicit ask.
- [pages/blogs/](pages/blogs/) — Insights pages backed by static fixtures, not a database.
- [pages/sitemap.tsx](pages/sitemap.tsx) — hand-maintained sitemap; new top-level pages should be added to its `pages[]` array.

### Shared components ([amitkk/](amitkk/))

Almost all reusable UI lives here, not in a `components/` root.

- [amitkk/basic/utils/layouts/AppLayout.tsx](amitkk/basic/utils/layouts/AppLayout.tsx) — the only layout. Renders `Header` → `<main>` → `Footer` inside MUI's `ThemeProvider` and mounts a `react-hot-toast` `Toaster`. Accepts a `meta` prop (`{ title?, description? }`) that page components surface via `pageProps.meta`.
- [amitkk/basic/static/](amitkk/basic/static/) — reusable building blocks (`Hero`, `SectionTag`, `CTABanner`, `StatsStrip`, `ValuesGrid`, `Timeline`, `SplitPanel`, `FilterGrid`, `StickyFilterNav`, `ScrollReveal`, `Header`/`NavBar`/`Sidebar`/`Footer`, `ContactForm`, `ProductPage`, `Loader`, `SocialMedia`, policy pages). Page-level files compose these.
- [amitkk/basic/utils/config.tsx](amitkk/basic/utils/config.tsx) — central registry for nav data. `serviceLinks` and `productLinks` drive both the Services/Products dropdowns in [NavBar.tsx](amitkk/basic/static/NavBar.tsx) and the corresponding `/our-services` and `/our-products` landing pages. Adding or renaming a service/product page means updating this file too.
- [amitkk/basic/utils/theme.tsx](amitkk/basic/utils/theme.tsx) — MUI theme.
- [amitkk/blog/static/dummyBlogs.ts](amitkk/blog/static/dummyBlogs.ts) — fixture array of blog posts consumed by the Insights pages. Each entry is a `DummyBlog` with `_id`, `url`, `cover`, `content` (HTML), `category[]`. Treat it as the canonical blog source until/unless a CMS is reintroduced.

### Styling notes

- [styles/globals.css](styles/globals.css) — imports `./style.css`, sets CSS variables for `--font-heading` (Cormorant Garamond) and `--font-body` (Inter), and exposes `@layer base` utility class aliases (`fijb`, `divider-gold-left`, etc.) used throughout the marketing components.
- Tailwind palette is dual-keyed: the "Platinum Edge" names (`page`, `ink`, `gold`, …) **and** a set of "Surion-port" / legacy aliases (`brown`, `tan`, `cream`, `primary`, `action`, `orange`, `lightgray`, `darkgray`) all map onto the same hexes — keeping legacy JSX working during a port. New code should use the Platinum Edge names; the legacy aliases are flagged for "Stage 10 cleanup" in the Tailwind config.
- `images.unoptimized = true` in [next.config.ts](next.config.ts) is intentional (low-memory build target). The same file rewrites `/storage/:path*` to `https://www.demo303.amitkkdev.com/storage/:path*` — any image references using `/storage/...` resolve to that remote CDN.

### Environment

- [lib/env.ts](lib/env.ts) exports `isDev`, `isProd`, `isTest`, `MODE`, `isCustomDev`. `MODE` defaults to `"prod"` and is read from `process.env.MODE`, but no other source file currently consumes these helpers — they exist for future use, so adding a feature that depends on them won't break anything but won't be exercised either.
- No other environment variables are required for the site to build or run locally.

## Gotchas

- **The CMS layer was deliberately removed.** Don't assume `pages/api/`, `lib/models/`, `lib/server/`, `pages/admin/`, or `amitkk/componentMaps.ts` should exist. The `[slug].tsx` 404 stub carries a comment confirming this. If a task seems to require those, ask before reintroducing them.
- **`next build` ignores TS and ESLint errors** ([next.config.ts](next.config.ts)). Run `npx tsc --noEmit` directly if you need real type verification.
- **Nav, sitemap, and dropdown data are hand-maintained in three places**: [amitkk/basic/utils/config.tsx](amitkk/basic/utils/config.tsx) (`serviceLinks`/`productLinks`), [amitkk/basic/static/NavBar.tsx](amitkk/basic/static/NavBar.tsx) (`navItems`), and [pages/sitemap.tsx](pages/sitemap.tsx) (`pages[]`). When adding a new top-level page, update all three.
- **Two stale dependencies survive from the removed CMS**: `mongoose` (devDep) and `bcryptjs`/`jsonwebtoken`/`formidable`/`@aws-sdk/client-s3`/`mongodb`/`bullmq`/`ioredis` etc. in `dependencies`. `types/mongoose.d.ts` likewise persists. They're unused by the current tree — don't write new code against them without first confirming the CMS is actually coming back.
- **`amitkk/componentMaps.ts`** appears in [.gitignore](.gitignore) but is not generated or used by anything in the current tree. Ignore it unless explicitly told otherwise.
- **Workspaces declared but empty**: `package.json` declares `"workspaces": ["packages/*"]` but there is no `packages/` directory. Don't rely on monorepo tooling.
