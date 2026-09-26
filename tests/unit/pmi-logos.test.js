import { describe, it, expect } from 'vitest';
import { PMI_LOGOS, PMI_LOGO_MIN_HEIGHT_PX, PMI_LOGO_CLEARSPACE_RATIO, pmiLogoSvg } from '../../js/pmi-logos.js';

describe('PMI logos', () => {
  it('embeds the horizontal lockup and the Project Mark in full colour and white', () => {
    expect(Object.keys(PMI_LOGOS).sort()).toEqual(['horizontalFullColor', 'horizontalWhite', 'markFullColor', 'markWhite']);
  });

  it('carries no text, images or styles that could drift from the supplied artwork', () => {
    for (const logo of Object.values(PMI_LOGOS)) {
      expect(logo.inner).not.toMatch(/<(text|image|style|script)\b/i);
    }
  });

  it('follows PMI rules: 32px minimum height and 1/2X clearspace', () => {
    expect(PMI_LOGO_MIN_HEIGHT_PX).toBe(32);
    expect(PMI_LOGO_CLEARSPACE_RATIO).toBe(0.5);
    expect(pmiLogoSvg({ height: 10 })).toContain('height="32"');
    expect(pmiLogoSvg({ height: 48 })).toContain('height="48"');
  });

  it('is labelled as PMI for assistive technology', () => {
    expect(pmiLogoSvg()).toMatch(/role="img" aria-label="PMI"/);
  });

  it('keeps the artwork proportions', () => {
    const svg = pmiLogoSvg({ variant: 'horizontal', height: 40 });
    expect(svg).toContain('width="134"');
  });
});
