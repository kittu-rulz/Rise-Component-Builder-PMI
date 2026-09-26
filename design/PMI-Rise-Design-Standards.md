# PMI Brand Standards — Rise Component Builder

Authoritative reference for the visual layer of every exported Rise block. Distilled from
`design/PMI-BRAND-EXTRACT.md` (which records where each rule comes from and which source is
current). If a rule here conflicts with existing builder CSS, this file wins.

Tokens live in `design/pmi-tokens.css` and are mirrored verbatim in `js/pmi-tokens.js`.

## 1. Non-negotiables

1. **Violet 500 (`#4F17A8`) leads.** It is the primary colour and the CTA, link and focus colour.
2. **No invented colours.** Only the values in `pmi-tokens.css`. Hover/active states may darken a
   token (Violet 600 `#371075`, Aqua 600 `#005C77`); no new hues. Saddle is not used.
3. **Aqua and Tangerine accent.** Aqua 500 (`#00799E`) is the text-safe accent. Aqua 300 (`#05BFE0`)
   and Tangerine 300 (`#FF610F`) are decorative on light surfaces (Aqua 300 is 2.2:1 on white); on
   dark surfaces they may carry text. Tangerine (`#D5340B`) is the warning colour.
4. **Curvature scales with the container.** 24px for block shells and content cards, 8px small
   cards and menus, 4px buttons and inputs, pill for chips and tags.
5. **Type is Aeonik.** Aeonik for headlines, titles and body (Bold for emphasis); GT Pressura Mono
   for subtitles, captions and footers. Fallback Aptos, then Arial. Both faces are embedded in every
   export.
6. **Gradient is limited-use.** `--pmi-gradient` (Tangerine → Violet → deep Violet) as a background
   or containing shape only. Never on text; most blocks use flat colour.

## 2. Colour application

| Role | Token | Notes |
|---|---|---|
| Block background | white or `--pmi-neutral-50` | Warm neutral for sunken areas |
| CTA / focus / links | `--pmi-violet` | White text on it (10.4:1) |
| Text-safe accent | `--pmi-aqua` | 5.0:1 on white |
| Decorative accent | `--pmi-aqua-bright`, Tangerine 300 | Never text on light surfaces |
| Warning | `--pmi-tangerine` | |
| Success / danger | `--pmi-green` / `--pmi-red` | Status only |
| Body text | `--pmi-off-black` `#200F3B`; muted `#574E69` | |

Contrast floors: 4.5:1 for text, 3:1 for non-text UI, verified by axe in the end-to-end suite,
including dark mode.

## 3. Symbols

Eight PMI symbols (`js/pmi-symbols.js`). Rules enforced in code and tests:

- Colours are the three core colours only: Violet, Aqua, Tangerine.
- In a pattern the gap is 1/7 of a symbol's width, and no two adjacent symbols share a colour.
- A pattern fills less than 75% of the space it sits in, in a corner or a third to a half of a layout.
- Symbols are decorative: `aria-hidden`, unfocusable, never behind text.
- Photos may be cropped to a symbol ("holding shape"); the picker warns which shapes hide detail.

Block headers show a symbol by default ("auto" picks a stable one per component type); authors can
choose another symbol, a colour, or none.

## 4. Logo

`js/pmi-logos.js` (generated from PMI's supplied SVGs). Full colour on light surfaces, white on
dark; never recoloured, skewed or shadowed. Minimum height 32px on screen; clear space is half the
logo's height on every side. Do not include the trademark for social profiles or favicons.

## 5. Icons

Functional icons are in `js/pmi-icons.js`, inherited from the previous build by decision.

## 6. Interaction and accessibility

- Focus ring: 3px solid `--pmi-focus` (Violet), 2px offset.
- Touch targets: at least 44×44px.
- Motion is disabled under `prefers-reduced-motion: reduce`.
- Body copy: 16px minimum, line-height 1.5.
- Selected/current state is never colour alone: pair it with a fill, underline or icon.
