---
name: Food Safety Simplified
# Values mirror app/globals.css, which is the source of truth. Update both together.
colors:
  primary: '#003e7c'
  primary-hover: '#002b59'
  on-primary: '#ffffff'
  leaf-accent: '#5fa820'
  leaf-deep: '#498516'
  secondary-hover: '#356010'
  on-secondary: '#ffffff'
  badge-bg-blue: '#e6effa'
  badge-bg-green: '#edf7e6'
  surface: '#f9f9ff'
  surface-canvas: '#f4f7fb'
  surface-card: '#ffffff'
  surface-container-low: '#edf2f9'
  surface-container: '#e1eaf5'
  surface-container-high: '#d4e1f0'
  surface-container-highest: '#c8d7eb'
  slate-body: '#2c3e50'
  slate-muted: '#5a6b7c'
  on-surface: '#001c3d'
  on-surface-variant: '#3a4d63'
  border-subtle: '#dce5f0'
  footer: '#001d3a'
  focus-ring: '#388ae5'
  error: '#ba1a1a'
  on-error: '#ffffff'
typography:
  fontFamily: Plus Jakarta Sans
  monoFamily: Geist Mono
radius: 0
breakpoints:
  xs: 25rem
  sm: 40rem
  md: 48rem
  lg: 64rem
  xl: 80rem
  2xl: 96rem
container:
  max-width: 80rem
---

# Food Safety Simplified — Design System

> **Source of truth:** tokens live in `app/globals.css` (`:root` for values, `@theme inline` for Tailwind classes). This document explains how to use them. If the two disagree, fix whichever is wrong and update both in the same change.

## Brand & Style

The UI expresses authoritative regulatory expertise with fresh, practical clarity. It is built for food safety auditing, compliance operations, and technical consulting, and should read as clean, precise, and trustworthy.

- **Precision modernism:** zero-radius, rectilinear geometry. Straight 90° edges convey audit-grade certainty.
- **Clinical light mode:** cool whites and slates, maximum legibility. The site is **light mode only** (the `.dark` block in `globals.css` is intentionally disabled; don't add `dark:` styles to new code).
- **Dual anchor:** deep brand blue for structure and authority; deep leaf green (`leaf-deep`) as the secondary color for verification and pass states, with brighter `leaf-accent` reserved for decorative accents.

## Stack

- **Next.js** (App Router) + **Tailwind CSS v4** (CSS-first config, no `tailwind.config`).
- **shadcn/ui**, style `base-lyra`, built on **Base UI** primitives (`@base-ui/react`). Install components from the registry before building custom ones (see `AGENTS.md`).
- **Icons:** Material Symbols Outlined via `<Icon name="…" />` (`components/ui/icon.tsx`). Inside buttons/badges pass `data-icon="inline-start"` or `"inline-end"` for correct padding.
- **Fonts:** Plus Jakarta Sans (`font-sans`, also `font-heading`), Geist Mono (`font-mono`), loaded with `next/font` in `app/layout.tsx`.

## Colors

Always use the Tailwind class, never a raw hex value.

### Brand

| Role | Class | Hex | Use |
|---|---|---|---|
| Primary | `bg-primary` / `text-primary` / `border-primary` | `#003e7c` | Headings, nav, brand chrome, primary buttons, structural frames |
| Primary hover | `bg-primary-hover` | `#002b59` | Hover state for primary fills |
| On primary | `text-primary-foreground` (`text-on-primary`) | `#ffffff` | Text/icons on primary fills |
| Secondary (leaf deep) | `bg-leaf-deep` / `text-leaf-deep` / `border-leaf-deep` (`bg-secondary`) | `#498516` | Main green: all `leaf` component variants, green text, pass/verified fills and borders |
| Secondary hover | `bg-secondary-hover` | `#356010` | Hover state for `leaf-deep` fills |
| On secondary | `text-on-secondary` (`text-secondary-foreground`) | `#ffffff` | Text/icons on `leaf-deep` fills |
| Leaf accent | `bg-leaf-accent` / `border-leaf-accent` | `#5fa820` | Decorative accents only: underlines, accent edges, dots, chart series. Never for text or text-bearing fills |

### Surfaces

| Role | Class | Hex | Use |
|---|---|---|---|
| Page background | `bg-background` (`bg-surface`) | `#f9f9ff` | Default `body` background |
| Canvas | `bg-surface-canvas` | `#f4f7fb` | Alternate ground behind white content |
| Card / white | `bg-surface-card` (`bg-card`) | `#ffffff` | Cards, inputs, outline button/badge fills — use this when you need pure white |
| Container low → highest | `bg-surface-container-low` … `bg-surface-container-highest` | `#edf2f9` → `#c8d7eb` | Tinted section bands and nested panels, lightest to darkest |
| Tint badges | `bg-badge-bg-blue` / `bg-badge-bg-green` | `#e6effa` / `#edf7e6` | Soft status chips |
| Footer | `bg-footer` | `#001d3a` | Site footer only |

### Text, borders & states

| Role | Class | Hex | Use |
|---|---|---|---|
| Body text | `text-foreground` (`text-slate-body`) | `#2c3e50` | Default copy |
| Muted text | `text-muted-foreground` (`text-slate-muted`) | `#5a6b7c` | Metadata, hints, captions |
| Strong text | `text-on-surface` | `#001c3d` | High-emphasis non-brand headings |
| Secondary strong | `text-on-surface-variant` | `#3a4d63` | Sub-labels |
| Hairline border | `border-border` (`border-input`) | `#dce5f0` | 1px dividers and outlines (applied globally by default) |
| Focus ring | `ring-ring` / `outline-ring` | `#388ae5` | Keyboard focus |
| Error | `text-destructive` / `bg-destructive` | `#ba1a1a` | Validation and errors |

### Contrast rules

- `leaf-deep` (`#498516`) is ~4.5:1 against white, so green text and white-on-green fills pass WCAG AA. This is why it is the secondary color.
- `leaf-accent` (`#5fa820`) is only ~2.9:1 against white and fails AA for text of any size. Use it only where no text depends on it.
- Primary on white and white on primary pass AA at all sizes.

## Typography

Plus Jakarta Sans everywhere. Use Tailwind's default type scale with these patterns:

| Role | Classes |
|---|---|
| Page title (h1) | `text-3xl md:text-4xl font-extrabold tracking-tight text-primary` |
| Hero statement | `text-2xl md:text-3xl lg:text-4xl font-bold` |
| Section heading (h2) | `text-2xl font-bold tracking-tight text-primary` |
| Card / subsection title | `text-lg font-bold` |
| Lead paragraph | `text-lg text-foreground` |
| Body | `text-base` |
| Small / meta | `text-sm text-muted-foreground` |
| Label, tag, badge | `text-xs font-bold uppercase tracking-wider` |

- Headings use weight 700–800 with `tracking-tight`.
- Labels and badges are uppercase, weight 700, open tracking (`tracking-wide` to `tracking-wider`) to evoke inspection stamps.
- Headings that sit on the same line as a logo or icon use `leading-none`; never add `truncate` to text with descenders at `leading-none` (it clips the bottoms of letters).

## Layout & Spacing

- **Spacing:** Tailwind's default 4px scale (`--spacing: 0.25rem`). Stick to even steps: `2` (8px) for dense lists, `4` (16px) default, `6` (24px) card padding and gaps between content blocks.
- **Vertical rhythm — keep it compact.** Pages should feel dense and efficient, not airy. Match the home page:
  - **Page section bands** (full-width `<section>` wrappers): `py-6 lg:py-10` (24px → 40px). Never exceed `py-10`.
  - **Stacked blocks inside a section or card** (e.g. numbered legal sections, card groups): `gap-6` (24px), with a `Separator` between them when they're distinct topics.
  - **Heading to its content:** `mb-3` / `gap-3` (12px). **Paragraph to paragraph:** `gap-4` (16px).
  - **Hero stacks** (badge → title → lead → actions): `gap-4` to `gap-5`.
  - **Card padding:** `--card-spacing: --spacing(6)` on mobile, up to `--spacing(8)` from `md`/`lg`.
- **Container:** content is centered with `mx-auto max-w-7xl` (1280px). Header, footer, and page sections all use the same max width so edges align.
- **Page gutters:** `px-4` on mobile. Header, footer, and page sections should share the same horizontal padding at each breakpoint.
- **Grid:** 12 columns from `lg` (`lg:grid-cols-12`), single column below. Column gap `gap-6` to `gap-12`.
- **Breakpoints:** Tailwind defaults plus a custom `xs` at 25rem (400px):

| Prefix | Min width |
|---|---|
| — | 0 |
| `xs` | 400px |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

Navigation collapses to a menu button below `md`.

## Shape

Zero radius on everything: buttons, cards, inputs, badges, menus, avatars, toggles.

- `--radius: 0` drives all shadcn radius tokens, so `rounded-lg`, `rounded-2xl` etc. in registry components resolve to 0 automatically.
- Use `rounded-none` explicitly in custom code. Never use `rounded-full` or arbitrary radii (`rounded-[…]`) with fixed px values.

## Elevation & Depth

No soft, blurred, or ambient shadows. Hierarchy comes from surface contrast, borders, and hard offsets.

- **Layering:** tinted section (`bg-surface-container-low`) → white card (`bg-surface-card`) with a `border border-border` hairline.
- **Hard offset shadow:** zero blur, primary colored — `shadow-[4px_4px_0px_var(--primary)]` for featured cards and elevated panels. Use a smaller `3px` offset for menus and popovers.
- **Accent edge:** high-priority cards may use a 3–4px top or left border: `border-primary` for procedural content, `border-leaf-deep` for verified/compliant status (or `border-leaf-accent` when purely decorative).
- Remove shadcn's default `shadow-sm` / `ring-1` on cards when they conflict with this rule.

## Components

Variant names below are the actual `variant` prop values.

### Button (`components/ui/button.tsx`)

| Variant | Look |
|---|---|
| `default` | Primary fill, white text |
| `leaf` | `leaf-deep` fill, white text |
| `outline-primary` | White/background fill, 2px primary border, primary text; fills primary on hover |
| `outline-leaf` | 2px `leaf-deep` border and text; fills `leaf-deep` on hover |
| `outline`, `secondary`, `ghost`, `destructive`, `link` | shadcn defaults, mapped to brand tokens |

Sizes: `xs` (28px), `sm` (32px), `default` (40px), `lg` (44px), plus square `icon-*` sizes. Use `lg` for hero calls to action. For links, use `nativeButton={false} render={<Link href="…" />}`.

### Badge (`components/ui/badge.tsx`)

| Variant | Look |
|---|---|
| `primary` / `default` | Primary fill, white text — authority tag |
| `outline-primary` | White fill, primary border and text |
| `leaf` | `leaf-deep` fill, white text — pass/verified |
| `outline-leaf` | White fill, `leaf-deep` border and text — compliance badge |

Badges are uppercase labels; pair with a Material Symbol such as `verified` via `data-icon="inline-start"`. Long badge text on mobile needs `h-auto whitespace-normal`.

### Card (`components/ui/card.tsx`)

- **Standard card:** `bg-card border border-border`, 24px padding (`--card-spacing: --spacing(6)`).
- **Featured card:** add the hard offset shadow.
- **Compliance card:** add a `border-t-4 border-leaf-deep` top edge.

### Alert (`components/ui/alert.tsx`)

| Variant | Look |
|---|---|
| `primary` | `badge-bg-blue` fill, 4px `primary` left edge, primary title/icon — key notes and callouts |
| `leaf` | `badge-bg-green` fill, 4px `leaf-deep` left edge, green title/icon — positive/responsibility callouts |
| `default`, `destructive` | shadcn defaults |

- Put an `<Icon>` as the first child; it is vertically centered against the title + description.
- Use `role="note"` for static callouts so screen readers don't announce them as live alerts.

### Form inputs (`input`, `textarea`, `select`, `radio-group`, `field`)

- White (`bg-surface-card`) fill, 1px `border-input`, zero radius, `px-4 py-3`, 44px tall.
- Focus: border becomes `border-primary` plus a 2px `outline-ring` outline.
- Errors: `aria-invalid` switches border/outline to `destructive`.
- Checkboxes and radios are square; switches are rectangular sliding blocks, never pills.

### Header & footer

- Header: sticky, `bg-background`, bottom hairline border, 64px tall (`h-16`). Brand = logo + "Food Safety Simplified" + uppercase `leaf-deep` tagline.
- Footer: `bg-footer`, `text-xs text-white/60`, links hover to white.

## Known deviations (to fix in code)

These are places where the code does not yet follow this document:

- **Badge** base style is `font-medium` without uppercase tracking; label styling is currently applied per use.
- **Card** base keeps shadcn's `shadow-sm` and `ring-1 ring-foreground/5` soft effects.
- **Button focus** uses `ring-3 ring-ring/30` instead of the 2px solid `outline-ring` used by inputs.
- **Horizontal padding** differs between header (`pl-4 pr-6`), pages (`px-4 md:px-16 lg:px-6`), and footer (`px-4 lg:px-8`).
