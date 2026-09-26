# PMI brand extract (for the Rise Component Builder fork)

Working notes extracted from the files in `PMI branding guidelines/` (kept out of git). Nothing here is applied to code yet. Review before implementation.

## Which source is current

| Source | Date | Use |
|---|---|---|
| `Colors - Brand Guidelines - PMI Brand Guide 5.pdf` (Frontify web guide) | 2024-08-21, re-saved 2025-10 | **Authoritative for colour.** Violet / Aqua / Tangerine / Saddle + neutrals, with tonal scales. |
| `PMI_Presentation Deck Template_2026_FINAL.pptx` | 2026-05 | Confirms the colour guide: its theme uses Violet 500, Aqua 500/300, Tangerine 500/300, Saddle 500, Off-Black, Neutral 50. Body font in the template is Aptos/Arial. |
| `PMI_Guidelines_Visual Identity.pdf` (v1.0) | PDF dated 2019-2020 | **Superseded for colour and primary typeface** (older palette, e.g. violet #2B008C; names Agrandir, which PMI has since replaced with Aeonik). Still useful for the type hierarchy (GT Pressura Mono roles) and logo clear-space and usage rules. |

## Palette (from the 2024 colour guide)

Logo colours: Violet 500 `#4F17A8`, Aqua 300 `#05BFE0`, Tangerine 300 `#FF610F`. Black `#000000`, White `#FFFFFF`.

| Family | 50 | 300 | 500 | 600 | 700 | 800 | 950 |
|---|---|---|---|---|---|---|---|
| **Violet** (primary) | `#EFEDF3` | `#B465FF` | `#4F17A8` | `#371075` | | `#200F3B` (Off-Black) | `#100522` |
| **Aqua** (secondary) | `#EEFAFA` | `#05BFE0` | `#00799E` | `#005C77` | | `#023041` | `#030D19` |
| **Tangerine** (tertiary, use sparingly) | `#FEF7F3` | `#FF610F` | `#D5340B` | `#A12608` | | `#451409` | `#1A0503` |
| **Saddle** (non-core products only) | `#FFF2E8` | `#CEB7A6` | `#BE9577` | | `#804F29` | `#412713` | `#1B0E04` |

Neutrals: Neutral 50 `#F7F4EF` (alternative background), Soft Gray `#808080`, Off-Black `#200F3B` (= Violet 800; text and buttons).

Usage rules from the guide: stay within one palette per touchpoint (monochromatic preferred); emphasis on Violet, then Aqua, Tangerine as a supporting colour; use only brand colours; ensure legibility and strong contrast.

## Contrast (computed, WCAG 2.x)

| Pair | Ratio | AA text (4.5) |
|---|---|---|
| Off-Black on white / Neutral 50 | 17.6 / 16.0 | pass |
| Violet 500 on white / Neutral 50 | 10.4 / 9.5 | pass |
| White on Violet 500 | 10.4 | pass |
| Aqua 600 on white | 7.5 | pass |
| Aqua 500 on white | 5.0 | pass |
| Tangerine 600 on white | 7.5 | pass |
| Tangerine 500 on white | 4.9 | pass |
| Saddle 700 on white | 6.8 | pass |
| Off-Black on Aqua 300 | 8.0 | pass (black-ish text on aqua, not white) |
| Off-Black on Tangerine 300 | 5.8 | pass |
| Off-Black on Violet 300 | 5.2 | pass |
| **Aqua 300 on white** | **2.2** | **fail, non-text only** |
| **Tangerine 300 on white** | **3.0** | **fail for text; graphics/large only** |
| **White on Violet 300** | **3.4** | **fail for text** |
| **Soft Gray on white** | **4.0** | **fail for body text** |
| **Saddle 500 on white** | **2.7** | **fail** |

Consequence: the logo colours Aqua 300 and Tangerine 300 cannot carry text on white. The same split the previous (AT&T) build already used (a non-text `--primary` vs a text-safe `--primary-text`) applies: Violet 500 is a good text-safe primary; Aqua 500/600 and Tangerine 500/600 are the text-safe variants of the accents.

## Typography (confirmed by the user: primary is Aeonik)

| Role | Font | Files supplied |
|---|---|---|
| Primary (headlines, page titles, body; Bold for emphasis) | **Aeonik** | `Fonts/Aeonik`: Thin, Air, Light, Regular, Medium, Bold, Black + italics; OTF/TTF/WOFF/WOFF2 |
| Secondary (subtitles, captions, footers, call-outs) | **GT Pressura Mono** (Regular, Bold) | `Fonts/GT-Pressura` (Mono Regular OTF only; Mono Bold EOT/OTF/TTF/WOFF/WOFF2) |
| Fallback (2026 deck and ILT templates) | Aptos, then Arial | system fonts |

The v1.0 PDF's "Agrandir" is the retired primary and is not used. Hierarchy (v1.0 proportions, slide sizes; scale for screen): hero all-caps; page titles Regular; subtitles in GT Pressura Mono, purple, orange or black (not "PMI blue"); body Regular with Bold for emphasis; captions/footnotes GT Pressura Mono all caps with wide tracking.

Weights the app needs: Aeonik Regular, Medium, Bold (+ Regular Italic if italics are used) and GT Pressura Mono Regular and Bold.

## Licensing and font delivery

- **Aeonik (CoType `EULA WebFonts`, in the Fonts folder):** use "on one domain name (URL) only"; **WOFF/WOFF2 only** (TTF/OTF may not be put online); files may not be made available to any third party. Priced by monthly page views on that domain.
- **GT Pressura Mono:** only the Bold cut has web formats; Regular is OTF only. No licence text was in the folder.
- **Public repo:** the font files must not be committed to this public repository (redistribution to third parties).
- **Exports:** this builder embeds the brand font as base64 in every exported block, and blocks are pasted into Rise or hosted on other domains. That very likely breaches the one-domain and no-third-party terms.

Recommended default: font stack `Aeonik, "GT Pressura Mono", Aptos, Arial, sans-serif` with **no embedded font data** in exports. The builder app itself can load Aeonik WOFF2 from PMI's single licensed domain if PMI provides it; exports render in Aeonik where the host has it, otherwise Aptos/Arial. Switch to embedded subsets only after PMI/CoType confirms in writing that embedding in distributed learning content is covered.

## Reference: pmi.org (read from the live site's CSS custom properties, 2026-09-24)

- **Confirms the 2024 palette** exactly (Violet 500 `#4F17A8`, Aqua 300/500 `#05BFE0`/`#00799E`, Tangerine 500 `#D5340B`, Off-Black `#200F3B`, Neutral 50 `#F7F4EF`). Tangerine 300 on the site is `#FF630F` (guide: `#FF610F`); use the guide value.
- **Font:** `--font-family-body` and `--font-family-header` are both **Aeonik** (confirms Aeonik is primary). Nav: Medium 500; buttons: 600.
- **Full ramps** (100-900) exist on the site beyond the guide's 50/300/500/600/800/950: Violet 100 `#E0C8F9`, 200 `#CC9BFC`, 400 `#8243D6`, 700 `#2A0C5A`, 900 `#1A0837`; Aqua 100 `#C8F0F9`, 200 `#68D8ED`, 400 `#0890BA`, 700 `#004154`, 900 `#03202F`; Tangerine 100 `#FDDECE`, 200 `#FFBC9C`, 400 `#EB4D0A`, 700 `#741C06`, 900 `#290906`.
- **Status colours** (not in the guide; needed for quiz correct/incorrect feedback): Green 500 `#197F10` / 600 `#13600C` / 50 `#F2F5F2` / 100 `#BDFDBD`; Red 500 `#C41E08` / 600 `#931706` / 50 `#FFEDEC` / 100 `#FFB0A9`. Both are text-safe on white at 500.
- **Shapes:** buttons and inputs 4px radius; pills (chips, tags, pill buttons) 9999px; cards 24px; some 8px and 12px; top-rounded panels 24px 24px 0 0. Buttons are flat, no uppercase.
- **Backgrounds:** white, Neutral 50 `#F7F4EF`, Off-Black `#200F3B` for dark bands, Violet 950 `#100522` and Aqua 950 `#030D19` for dark heroes.
- **Gradients:** vertical `Saddle 50 -> Saddle 300` (`#FFF2E8 -> #CEB7A6`); vertical `Violet 950 -> #230A49` (`#100522 -> #230A49`); vertical `Aqua 950 -> Aqua 800`; horizontal `Tangerine 500 -> Violet 500 -> #230A49` (`#D5340B, #4F17A8, #230A49`); vertical `white -> Neutral 50`.
- **Neutral borders:** the site uses `#CFCBC2` and `#E7E4DC` (warm greys) and `#DAD6E1` (Off-Black 50), which gives PMI-consistent border tones without inventing colours.

## Logo files available

`Logo/`: horizontal logo (full colour, black, white, inverted) and mark, in AI/EPS/PDF/JPG; the only SVG seen is `pmi_logo_pmi_mark_black_rgb.svg`. The app will need SVG versions of the horizontal logo and mark (full colour and white). Conversion from the PDF/EPS is possible but should be confirmed against PMI's logo rules (clear space, minimum size) in the v1.0 PDF.

## Open questions

1. Font route: no embedding (recommended default), or get written permission from PMI/CoType to embed in exports.
2. Which single domain will host the builder, for a licensed Aeonik WOFF2 web load?
3. Confirm the 2024 palette is current and the older v1.0 hexes are retired.
4. Include Saddle? The guide limits it to non-core products.
5. Brand linter: block Aqua 300 / Tangerine 300 as text on white?
