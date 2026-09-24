// AT&T brand design-token layer, as a CSS custom-property block.
//
// This is the runtime source of the token layer for the *export pipeline*
// (js/preview.js#generateIframeContent injects it into every compiled artifact's
// `:root {}` block, so iframe snippet / HTML fragment / standalone HTML / Web
// Package ZIP all carry it identically — docs/EXPORT-CONTRACT.md's single-compiler
// guarantee). The builder app itself loads the same values from the canonical
// human-readable file, design/pmi-tokens.css, as its first stylesheet.
//
// design/pmi-tokens.css is authoritative. PMI_TOKENS_CSS below must stay a
// verbatim copy of that file's `:root { ... }` body — tests/unit/pmi-tokens.test.js
// fails if they drift. When a value changes, change design/pmi-tokens.css and copy
// it here (or vice versa) and the test will confirm they match.
//
// Note: only "ATT Aleck Sans" is embedded in exports (js/custom-fonts.js). The
// --pmi-font-cd / --pmi-font-slab tokens exist for completeness but their families
// are not bundled yet — a component that references them will fall back to the
// stack's Helvetica/Georgia until the Condensed/Slab cuts are subsetted and added.

export const PMI_TOKENS_CSS = `  /* Primary — AT&T Blue must be dominant wherever possible */
  --pmi-blue: #009FDB;
  --pmi-white: #FFFFFF;

  /* Secondary — support only; never out-weigh AT&T Blue. Cobalt is the CTA color. */
  --pmi-cobalt: #00388F;
  --pmi-mint: #49EEDC;
  --pmi-lime: #91DC00;

  /* Neutrals */
  --pmi-grey-1: #F3F4F5;
  --pmi-grey-2: #DCDFE3;
  --pmi-grey-3: #BDC2C7;
  --pmi-black: #000000;

  /* AT&T Blue gradient — limited use, full ramp only, never partial, never re-authored */
  --pmi-blue-dark: #0079B1;   /* 15% darker */
  --pmi-blue-light: #00C9FF;  /* 15% lighter */
  --pmi-gradient: linear-gradient(90deg, #0079B1 0%, #009FDB 50%, #00C9FF 100%);

  /* Semantic roles (derived only from the values above) */
  --pmi-text: #000000;
  --pmi-text-on-dark: #FFFFFF;
  --pmi-heading: #009FDB;        /* preferred headline color */
  --pmi-heading-contrast: #000000;
  --pmi-surface: #FFFFFF;
  --pmi-surface-sunken: #F3F4F5;
  --pmi-border: #DCDFE3;
  --pmi-border-strong: #BDC2C7;
  --pmi-focus: #00388F;
  --pmi-cta-bg: #00388F;
  --pmi-cta-fg: #FFFFFF;
  --pmi-cta-bg-hover: #002A6B;   /* Cobalt darkened for state only — not a new brand color */

  /* Type */
  --pmi-font-sans: "ATT Aleck Sans", "AT&T Aleck Sans", Helvetica, Arial, sans-serif;
  --pmi-font-cd: "ATT Aleck Cd", "ATT Aleck Sans", Helvetica, Arial, sans-serif;
  --pmi-font-slab: "ATT Aleck Slab", Georgia, serif;

  --pmi-w-light: 300;
  --pmi-w-regular: 400;
  --pmi-w-medium: 500;
  --pmi-w-bold: 700;
  --pmi-w-black: 900;

  /* Type scale — component scale, 16px body floor for learner-facing text */
  --pmi-fs-eyebrow: 0.75rem;   /* 12px, uppercase, letterspaced label */
  --pmi-fs-body-sm: 0.875rem;  /* 14px — metadata only, never body copy */
  --pmi-fs-body: 1rem;         /* 16px */
  --pmi-fs-body-lg: 1.125rem;  /* 18px */
  --pmi-fs-h4: 1.25rem;
  --pmi-fs-h3: 1.5rem;
  --pmi-fs-h2: 1.875rem;
  --pmi-fs-h1: 2.5rem;

  --pmi-lh-tight: 1.15;
  --pmi-lh-heading: 1.25;
  --pmi-lh-body: 1.5;
  --pmi-ls-eyebrow: 0.08em;

  /* Spacing — 4px base */
  --pmi-space-1: 4px;
  --pmi-space-2: 8px;
  --pmi-space-3: 12px;
  --pmi-space-4: 16px;
  --pmi-space-5: 24px;
  --pmi-space-6: 32px;
  --pmi-space-7: 48px;
  --pmi-space-8: 64px;

  /* Curvature — rounded rectangles are the brand's long-form/digital curvature asset.
     Radius scales with container size so corners read consistently. */
  --pmi-radius-sm: 8px;    /* chips, badges, inputs */
  --pmi-radius-md: 12px;   /* buttons, small cards */
  --pmi-radius-lg: 20px;   /* content cards, accordion rows */
  --pmi-radius-xl: 32px;   /* full-width block shells */
  --pmi-radius-pill: 999px;

  /* Elevation — restrained; brand leans on curvature and color, not shadow */
  --pmi-shadow-1: 0 1px 2px rgba(0,0,0,0.06), 0 1px 8px rgba(0,0,0,0.04);
  --pmi-shadow-2: 0 4px 16px rgba(0,0,0,0.08);

  /* Motion */
  --pmi-dur-fast: 150ms;
  --pmi-dur-base: 250ms;
  --pmi-dur-slow: 400ms;
  --pmi-ease: cubic-bezier(0.2, 0, 0.2, 1);

  /* Icons — library ships 32/64px functional icons and 96px pictograms */
  --pmi-icon-sm: 24px;
  --pmi-icon-md: 32px;
  --pmi-icon-lg: 64px;
  --pmi-pictogram: 96px;`;
