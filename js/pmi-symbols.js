// PMI symbols: rendering, automatic choice, and the symbol pattern.
//
// PMI's identity guidelines (confirmed current by the project owner) say symbols:
//   - appear in one of the three core colours: Violet, Aqua or Tangerine;
//   - as a pattern, use equal spacing of 1/7 of the symbol width between symbols, and never
//     put the same colour next to itself;
//   - are used sparingly: in a corner or 1/3 to 1/2 of a layout, and never fill more than 75%;
//   - must not obstruct the subject of a photograph.
// The helpers below make those rules the default rather than something each caller must
// remember. Every symbol this module emits is decorative: aria-hidden, unfocusable, and
// pointer-events none, and callers reserve space for it so it never sits behind text.
import { PMI_SYMBOL_DATA, PMI_SYMBOL_VIEWBOX } from './pmi-symbol-data.js';

export { PMI_SYMBOL_DATA, PMI_SYMBOL_VIEWBOX };

/** The three core colours, as decorative fills (Aqua 300 and Tangerine 300 are decorative-only). */
export const PMI_SYMBOL_COLORS = Object.freeze({
  violet: '#4F17A8',
  aqua: '#05BFE0',
  tangerine: '#FF610F'
});
export const PMI_SYMBOL_COLOR_KEYS = Object.freeze(Object.keys(PMI_SYMBOL_COLORS));
export const PMI_SYMBOL_KEYS = Object.freeze(Object.keys(PMI_SYMBOL_DATA));

/** Spacing between symbols in a pattern, as a fraction of one symbol's width (PMI: 1/7). */
export const SYMBOL_PATTERN_GAP_RATIO = 1 / 7;
/** A pattern may never fill more than this share of the space it sits in (PMI: 75%). */
export const SYMBOL_PATTERN_MAX_COVERAGE = 0.75;

export const isSymbolKey = value => typeof value === 'string' && Object.prototype.hasOwnProperty.call(PMI_SYMBOL_DATA, value);
export const isSymbolColorKey = value => typeof value === 'string' && Object.prototype.hasOwnProperty.call(PMI_SYMBOL_COLORS, value);

/** Stable, dependency-free string hash, so "auto" picks the same symbol for the same component. */
function hashString(text) {
  let hash = 5381;
  for (let i = 0; i < text.length; i += 1) hash = ((hash << 5) + hash + text.charCodeAt(i)) | 0;
  return Math.abs(hash);
}

/** The symbol "auto" uses for a component type: stable, so a block never changes its mark. */
export function autoSymbolFor(componentId) {
  return PMI_SYMBOL_KEYS[hashString(String(componentId || 'component')) % PMI_SYMBOL_KEYS.length];
}

/**
 * Resolves a header-symbol setting to a symbol key or null.
 * 'none' -> null; a real key -> that key; 'auto' (and anything unrecognised) -> the auto choice.
 */
export function resolveHeaderSymbol(setting, componentId) {
  if (setting === 'none') return null;
  if (isSymbolKey(setting)) return setting;
  return autoSymbolFor(componentId);
}

function pathMarkup(key) {
  const symbol = PMI_SYMBOL_DATA[key];
  const rule = symbol.evenOdd ? ' fill-rule="evenodd" clip-rule="evenodd"' : '';
  return symbol.paths.map(d => `<path d="${d}"${rule}/>`).join('');
}

/**
 * One symbol as an inline decorative SVG. Sized by CSS (or width/height when given); coloured by
 * `color` (a colour key or a hex), defaulting to currentColor so a stylesheet can recolour it.
 */
export function symbolSvg(key, { color = '', size = null, className = 'pmi-symbol' } = {}) {
  if (!isSymbolKey(key)) return '';
  const fill = isSymbolColorKey(color) ? PMI_SYMBOL_COLORS[color] : (/^#[0-9a-f]{6}$/i.test(color) ? color : 'currentColor');
  const dims = size ? ` width="${size}" height="${size}"` : '';
  return `<svg class="${className}" viewBox="${PMI_SYMBOL_VIEWBOX}"${dims} fill="${fill}" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">${pathMarkup(key)}</svg>`;
}

/**
 * Lays out a symbol pattern honouring PMI's rules.
 *   - cells are `size` wide with a `size / 7` gap between them;
 *   - colours cycle so no two horizontally or vertically adjacent symbols share a colour
 *     (index = column + 2 * row, modulo the three core colours);
 *   - symbols cycle through the whole set, or through `keys` when given.
 * Returns the geometry so callers and tests can check the rules, not just the markup.
 */
export function layoutSymbolPattern({ cols = 3, rows = 2, size = 48, keys = PMI_SYMBOL_KEYS, colors = PMI_SYMBOL_COLOR_KEYS } = {}) {
  const gap = size * SYMBOL_PATTERN_GAP_RATIO;
  const cells = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      cells.push({
        col,
        row,
        x: col * (size + gap),
        y: row * (size + gap),
        key: keys[(col + row * cols) % keys.length],
        color: colors[(col + 2 * row) % colors.length]
      });
    }
  }
  const width = cols * size + (cols - 1) * gap;
  const height = rows * size + (rows - 1) * gap;
  return { cells, gap, size, width, height };
}

/** The pattern as one decorative SVG (a single element, so it costs one aria-hidden node). */
export function symbolPatternSvg(options = {}) {
  const layout = layoutSymbolPattern(options);
  // `fill`: a single colour for every symbol. PMI shows the pattern "in white on top of photography",
  // and a dark or photographic surface is that case; otherwise colours cycle per the adjacency rule.
  const fillFor = cell => (options.fill && /^#[0-9a-f]{6}$/i.test(options.fill) ? options.fill : PMI_SYMBOL_COLORS[cell.color]);
  const scale = layout.size / 200; // each symbol's drawable area is 200 units
  const groups = layout.cells.map(cell =>
    `<g transform="translate(${cell.x.toFixed(2)} ${cell.y.toFixed(2)}) scale(${scale}) translate(-50 -50)" fill="${fillFor(cell)}">${pathMarkup(cell.key)}</g>`
  ).join('');
  return `<svg class="pmi-symbol-pattern" viewBox="0 0 ${layout.width.toFixed(2)} ${layout.height.toFixed(2)}" width="${layout.width.toFixed(0)}" height="${layout.height.toFixed(0)}" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">${groups}</svg>`;
}

/**
 * A symbol as a CSS `url('data:image/svg+xml,…')` value for `mask-image`, so a photo can be cropped
 * to the shape (PMI: symbols may be "holding shapes" for photography). Single-quoted and with the
 * quote escaped, so it is safe inside a double-quoted style attribute.
 */
export function symbolMaskCssUrl(key) {
  if (!isSymbolKey(key)) return '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${PMI_SYMBOL_VIEWBOX}"><g fill="#000">${pathMarkup(key)}</g></svg>`;
  return `url('data:image/svg+xml,${encodeURIComponent(svg).replace(/'/g, '%27')}')`;
}

/**
 * How much of a photo each symbol keeps, from looking at each one applied to an image: PMI warns
 * that "negative spaces of some of the symbols may obscure important details".
 */
export const SYMBOL_PHOTO_COVERAGE = Object.freeze({
  pentagram: 'shows most of the photo',
  anvil: 'keeps the centre, cuts the sides',
  circles: 'shows the photo in pieces',
  'half-circles': 'cuts out the centre',
  square: 'large cut-outs',
  'four-triangles': 'large cut-outs',
  'two-triangles-angled': 'large cut-outs',
  'two-triangles-stacked': 'large cut-outs'
});

/** Share of a `containerWidth x containerHeight` area a pattern fills (must stay <= 75%). */
export function symbolPatternCoverage(layout, containerWidth, containerHeight) {
  return (layout.width * layout.height) / (containerWidth * containerHeight);
}
