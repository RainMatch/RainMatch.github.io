# Hand-off: bring rainmatch.ai onto the Rainmatch design system

You're picking up the marketing site (`rainmatch-site`, static HTML served
from `main` by GitHub Pages at rainmatch.ai). The mobile app was just moved
onto a new design system. Your job is to give the website the same visual
language, so the app and site feel like one product.

Read this whole file before changing anything. It is the only context you'll get.

---

## 1. Where things stand

**Done on the site** (branch `design-system`, commit `bc5056c`, pushed, not merged):
- `styles/tokens.css` defines the design tokens as CSS custom properties. Every
  page links it before `styles/index.css`.
- Figtree (400/500/600/700) loads from Google Fonts on every page, and
  `body` uses `var(--font-sans)`.
- **Brand colours:** every hard-coded brand blue and yellow is now a token, and
  so are the page background and the text colour on yellow.
- **Blue:** the site's old blue `hsl(210 97% 51%)` was moved onto the app's
  ramp. Fills use `--color-primary`; blue text on dark uses
  `--color-primary-text`.
- **Not done:** only colours and font were swapped. **Layout, spacing, type
  sizes, radii and components are unchanged.** That's your job.

**Not done yet (your scope):**
- **Gray literals.** Neutral colours are still raw: `#1f2937`, `#6b7280`,
  `#111827`, `#374151`, `#e5e7eb`, `#f3f4f6`, `hsl(220 9% …)`, many
  `rgba(255,255,255,…)`, the navy `#1a2942 #2d4a6f #4a6b8a` in blog pages, and
  the amber callout colours `#fffbeb #fef3c7 #78350f`. **Careful:** `#1f2937` is
  a background in some places, text on white cards in others (`privacy.html`,
  `contact.html`, `verified.html`), and text on yellow elsewhere. Read each use
  in context. A blanket find-and-replace will break pages.
- **Type sizes, spacing and radii** are ad hoc everywhere.
- **Inline `<style>` blocks.** Every page except `index.html` has its own block:
  - `claude.html`: 312 lines
  - `faq.html`: 202 lines
  - the 8 blog pages: 125–226 lines each, nearly identical to each other (two
    posts differ by only 9 lines)
- **Header and footer** are copy-pasted into every page.
- **The homepage hero shows old app screenshots** (`assets/Screenshot_2025…jpg`).
  The app has since been redesigned. Don't fake new ones: leave a TODO and tell
  the user they need fresh screenshots from a new build.
- **Light theme** exists in `tokens.css` but is opt-in (`data-theme="light"`).
  Pages hard-code white text (`* { color: white }` in `index.css`), so turning
  it on today would break them.

---

## 2. Source of truth

The app's design system is authoritative. The site **mirrors it by hand**: there
is no build step and no shared package. When a value changes, change it in both
places.

| What | App (rainmatch-mono, branch `design-system`) | Site |
|---|---|---|
| Colour ramps | `mobile/lib/theme/palette.ts` | `styles/tokens.css` (`--blue-*`, `--yellow-*`, `--neutral-*`) |
| Semantic colours (dark/light) | `mobile/lib/theme/themes.ts` | `styles/tokens.css` (`--color-*`) |
| Space, radius, type, motion | `mobile/lib/theme/tokens.ts` | `styles/tokens.css` (`--space-*`, `--radius-*`, `--text-*`, `--duration-*`) |
| Components (reference behaviour) | `mobile/lib/ui/*.tsx` | none yet: build the CSS equivalents (§4) |

If the monorepo is at `../rainmatch-mono`, read those files. Don't invent new
token values. If something is missing (e.g. a 48px display size for a web
hero), add it to `tokens.css` with a comment, and tell the user so they can
decide whether the app should get it too.

**Use semantic tokens in page CSS** (`--color-surface`, `--color-text-muted`,
`--space-lg`, `--radius-md`). The ramps (`--blue-600`) exist so the semantic
names have something to point at.

---

## 3. The design principles (why the app looks the way it does)

The owner's complaint about the old app was that it felt "unrefined and static"
and the cards felt crowded. These are the fixes, and they apply to the site too:

1. **A clear type hierarchy.** At most three text levels per block: a primary
   (title), a secondary (meta) and a tertiary (supporting text). The scale is
   display 32 · title1 24 · title2 20 · headline 17 · body 16 · callout 15 ·
   subhead 14 · caption 12 · overline 11 (uppercase, +0.6 tracking). Weight
   carries hierarchy (700/600 for titles, 400 for body), not random bold.
2. **Group with space, not borders.** 4pt grid. Use 4–8px inside a group,
   16–24px between groups, and 32px+ between sections. If two things belong
   together they sit closer than either does to its neighbours.
3. **Turn sentences into figures.** "You receive a $5.0K fixed amount per sale"
   becomes a big **$5K** with a small "per sale" label. On the site this
   matters for any stats or pricing.
4. **Progressive disclosure.** A card says who, what and why-care. Details live
   one click away.
5. **Depth comes from surfaces, not heavy shadows.**
   - **Dark:** `--color-bg` (page) < `--color-surface` (cards) <
     `--color-surface-raised` (things on cards), plus a 1px `--color-border`
     hairline. Shadows (`--shadow-1..3`) stay subtle, because they're nearly
     invisible on near-black.
   - **Light:** shadows do more of the work.
6. **Motion: every interactive thing responds.**
   - Press or hover: a short scale (0.98, or 0.96 on small buttons) or a tint
     (`--duration-fast` 120ms, `--easing`).
   - Nothing should feel static.
   - Respect `prefers-reduced-motion`.
7. **Contrast is non-negotiable:** ≥ 4.5:1 for text (≥ 3:1 for large text and
   icons). All semantic text and background pairs in `tokens.css` already
   pass, so keep text on its intended background.
8. **Colour roles.**
   - **Blue** is the primary action and links.
   - **Yellow** is accent only: highlights, "Pro", ratings. It's never body text
     on light backgrounds.
   - **Green** means money and success. **Red** means destructive actions and
     errors.

---

## 4. Components to build as CSS

These mirror `mobile/lib/ui`. Put them in a shared stylesheet (for example
`styles/components.css`, linked after `tokens.css`) so pages stop
re-declaring them.

| Component | Spec |
|---|---|
| **Button** | `height` 36/44/52 (sm/md/lg), `padding-inline` 12 (sm) / 24, `border-radius: var(--radius-md)`, label `600 15px` (sm `14px`), optional 16–18px icon with an 8px gap. **The icon takes the label colour** (the app had a bug where nested icons rendered black). **Variants:** primary (`--color-primary` fill, `--color-on-primary` text, pressed `--color-primary-pressed`); secondary (`--color-surface-raised` fill + 1px `--color-border`, pressed `--color-surface-highest`); ghost (transparent, `--color-primary-text`); accent (yellow fill, `--color-on-accent` text); danger (red container, red text). Disabled: `--color-surface-raised` fill, `--color-text-subtle` text and icon. |
| **Card** | `--color-surface` fill, 1px `--color-border`, `--radius-lg` (16), padding `--space-lg`. "Raised" variant: `--color-surface-raised` + `--shadow-2`. "Sunken" (stat bands): `--neutral-950` in dark. Clickable cards get the press scale and a hover tint. |
| **Tag** | Static label: `--radius-sm`, padding 2px 8px, `500 12px`. Tones: neutral, primary, accent, success, danger, each a container colour with matching text. |
| **Filter chip** | 36px tall pill, 1px border. Selected: primary fill with white text. |
| **Stat** | Value (`600 20px`, or `600 17px` small) above a label (`500 12px`, `--color-text-subtle`). Use it for any number the site brags about. |
| **Meta row** | One muted line of facts joined by ` · ` (e.g. "Chicago · ★ 4.9 · 12 deals"). |
| **Step header** | Thin progress segments (4px, `--radius-full`) + "Step n of N", then a display title and a muted subtitle. Useful for "How it works". |
| **Selectable card** | 2px border, primary border + `--blue-950` tint + check icon when selected. Selection is shown three ways, never by colour alone. |
| **Section label** | Overline: `600 11px`, uppercase, `0.6px` tracking, `--color-text-subtle`. The app uses it above every content section. |

Radius rule: a nested element's radius = the outer radius − the padding between
them.

---

## 5. Suggested plan

Do it in this order and keep each step shippable. Commit per step on the
`design-system` branch. **Never push to `main`, which deploys straight to production.**

1. **Shared CSS.**
   - Create `styles/components.css` (§4).
   - Move the blog posts' near-identical inline `<style>` blocks into
     `styles/blog.css`, keeping only true per-post differences inline.
   - Do the same for whatever `faq.html`, `claude.html`, `privacy.html`,
     `contact.html` and `verified.html` share.
2. **Tokenise the remaining literals** (grays, sizes, radii, spacing) page by
   page, reading each colour's context (§1).
3. **Header and footer.** Restyle them with tokens. They're duplicated per page,
   so change all copies consistently, and check each page links the same nav
   items. Don't introduce a build step or JS includes unless the user agrees.
4. **Homepage.**
   - Apply the hierarchy and spacing rules to the hero, "How it works" (a
     step-header pattern fits), the who-it's-for role tabs, and the CTAs.
   - Use Stat for any numbers.
   - Make the screenshot carousel feel lighter.
   - Leave the screenshots themselves for the user to replace.
5. **FAQ, Claude, privacy, contact, verified, blog index, blog posts.**
   - Use Cards for accordions and callouts.
   - Use section labels.
   - Blog posts should get a readable column, a max of about 680px for prose
     (the app uses 640 for reading columns), with body 16–18px at a 1.6
     line-height.
6. **Responsive.**
   - Current breakpoints are 1024/768/540 (in `index.css`). The app's are
     600/840.
   - Pick one set, ideally the app's (compact < 600, medium 600–839,
     expanded ≥ 840, plus a wide desktop step at your discretion).
   - Use a 16px gutter on phones and 24px+ above. No horizontal scroll at
     320px.
7. **Light theme: only if the user asks.** It needs every hard-coded white
   removed first.

---

## 6. Constraints and gotchas

- **Plain static HTML/CSS**, served by GitHub Pages from `main`. There's no
  build step, and `node_modules/` is an untracked leftover.
- **Keep everything that isn't visual:**
  - `<head>` metadata: canonical, Open Graph and Twitter tags, `theme-color`
    (`#0E1116`, a literal because meta tags can't use CSS variables).
  - The Google Analytics tag.
  - The four JSON-LD blocks (`application/ld+json`).
  - `sitemap.xml`, `robots.txt`, `CNAME`.
  - Every page's URL. The blog uses `blog/<slug>/index.html`.
- **Relative paths differ by depth:** blog posts link `../../styles/…`, the blog
  index `../styles/…`, top-level pages `styles/…`.
- **Copy:** don't rewrite marketing copy beyond tightening labels. Flag anything
  you think should change instead of changing it. Don't invent claims, numbers
  or testimonials.
- **Images:** the store badges in `assets/` are official artwork. Don't recolour
  or redraw them.
- The yellow `#fbbf24` the site used was Tailwind amber. The brand yellow is
  `--yellow-400` (`#FFC300`). It has already been swapped, so don't
  reintroduce the old one.

---

## 7. How to check your work

- **Render before and after** for every page you touch, at 390px and 1280px
  wide, with headless Chrome:
  1. Serve the site: `python3 -m http.server 8765`.
  2. Capture each page: `google-chrome --headless=new --hide-scrollbars --window-size=1280,1600 --virtual-time-budget=4000 --screenshot=out.png http://localhost:8765/<page>`.
  3. Look at the screenshots. Don't assume.
- **Literals:**
  - `grep -rnE "#[0-9a-fA-F]{3,8}\b" --include=*.css --include=*.html .`
    should only hit `tokens.css`, `theme-color` metas, and colours inside
    official assets or SVGs.
  - Same for `font-size:` with raw px outside `tokens.css` and `components.css`.
- **Contrast:** any new text/background pair must be ≥ 4.5:1.
- **Every internal link and asset still resolves**, including from blog post
  depth.
- **Report to the user:**
  - what changed;
  - what you deliberately left (screenshots, light theme, copy suggestions);
  - anything you couldn't verify.

---

## 8. Open questions to ask the user, not decide

- Should the homepage hero use new app screenshots (they need to take them), or
  an illustration?
- Should light mode ship on the site?
- Do they want the duplicated header and footer turned into something shared?
  That needs either a build step or a JS include, and both change how the site
  is maintained.
- Are there pages they plan to add, so the shared CSS can anticipate them?
