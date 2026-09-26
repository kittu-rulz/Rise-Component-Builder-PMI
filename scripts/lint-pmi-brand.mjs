import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const componentsDir = join(rootDir, 'components');

const APPROVED_BRAND_HEXES = new Set([
  '#00799E', '#4F17A8', '#68D8ED', '#197F10', '#F7F4EF',
  '#808080', '#05BFE0', '#FF610F', // soft gray, Aqua 300, Tangerine 300: decorative tokens in design/pmi-tokens.css
  '#E7E4DC', '#CFCBC2', '#200F3B', '#FFFFFF', '#00799E',
  '#68D8ED', '#371075', '#200F3B', '#FFFFFF', '#200F3B'
]);

const EMOJI_REGEX = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F1E6}-\u{1F1FF}\u{1FA70}-\u{1FAFF}→➔➜▶▼▲◀✓✔✕✖★☆]/u;

let totalErrors = 0;
let totalWarnings = 0;

function reportViolation(file, line, message, isBlocking = true) {
  const prefix = isBlocking ? '[\x1b[31mERROR\x1b[0m]' : '[\x1b[33mWARN\x1b[0m]';
  console.log(`${prefix} ${file}:${line} - ${message}`);
  if (isBlocking) totalErrors += 1;
  else totalWarnings += 1;
}

function lintComponentFile(filePath, filename) {
  const content = readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((lineText, lineIdx) => {
    const lineNum = lineIdx + 1;
    const trimmed = lineText.trim();

    // Skip comment lines
    if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
      return;
    }

    // 1. Check for unapproved hex color literals in CSS strings
    const hexMatches = lineText.match(/#[0-9a-fA-F]{3,8}\b/g);
    if (hexMatches) {
      hexMatches.forEach(hex => {
        const upper = hex.toUpperCase();
        if (!APPROVED_BRAND_HEXES.has(upper)) {
          // Check if it's within a CSS template or style block
          if (lineText.includes('background') || lineText.includes('color') || lineText.includes('border') || lineText.includes('fill') || lineText.includes('stroke')) {
            reportViolation(`components/${filename}`, lineNum, `Hardcoded color literal "${hex}" is outside PMI brand token system.`);
          }
        }
      });
    }

    // 2. Check for non-PMI font-family in CSS declarations
    if (lineText.includes('font-family:') && !lineText.includes('Aeonik') && !lineText.includes('GT Pressura') && !lineText.includes('var(--pmi-font') && !lineText.includes('var(--font-family') && !lineText.includes('var(--heading-font-family')) {
      reportViolation(`components/${filename}`, lineNum, `Learner-facing font-family declaration must use Aeonik or GT Pressura Mono.`);
    }

    // 3. Check for sub-16px font size on body/content copy
    const fsMatch = lineText.match(/font-size:\s*(\d+)px/);
    if (fsMatch) {
      const px = parseInt(fsMatch[1], 10);
      if (px < 16 && (lineText.includes('body') || lineText.includes('desc') || lineText.includes('content') || lineText.includes('text') || lineText.includes('card-p') || lineText.includes('item-text'))) {
        reportViolation(`components/${filename}`, lineNum, `Learner-facing body copy font-size (${px}px) is below the 16px PMI standard floor.`);
      }
    }

    // 4. Check for direct emoji or non-library icon glyphs in template strings
    if (lineText.includes('`') || lineText.includes("'") || lineText.includes('"')) {
      const emojiMatch = lineText.match(EMOJI_REGEX);
      if (emojiMatch && !lineText.includes('EMOJI_REGEX') && !lineText.includes('EMOJI_AND_UNAPPROVED_ICONS_REGEX')) {
        reportViolation(`components/${filename}`, lineNum, `Non-library icon or emoji character ("${emojiMatch[0]}") found in component markup/template.`);
      }
    }

    // 5. Check for removed focus outline without custom ring or delegation
    if ((lineText.includes('outline: none') || lineText.includes('outline: 0')) && !lineText.includes('outline: 3px') && !lineText.includes('outline-offset')) {
      // Check if subsequent lines delegate focus to a child element (e.g. .node-marker or .flip-card-front)
      const nextFewLines = lines.slice(lineIdx, Math.min(lines.length, lineIdx + 8)).join('\n');
      if (!nextFewLines.includes('outline: 3px')) {
        reportViolation(`components/${filename}`, lineNum, `Removed focus outline without providing PMI 3px Violet focus ring.`, false);
      }
    }
  });
}

console.log('\n--- Running PMI Brand Compliance Linter (Prompt 8) ---\n');

const componentFiles = readdirSync(componentsDir).filter(f => f.endsWith('.js'));
for (const file of componentFiles) {
  lintComponentFile(join(componentsDir, file), file);
}

console.log(`\nScan completed: ${componentFiles.length} component files audited.`);
if (totalErrors === 0 && totalWarnings === 0) {
  console.log('\x1b[32m✔ 100% Brand Compliant. Zero brand rule violations detected.\x1b[0m\n');
  process.exit(0);
} else if (totalErrors === 0) {
  console.log(`\x1b[33m✔ Passed with ${totalWarnings} advisory warning(s).\x1b[0m\n`);
  process.exit(0);
} else {
  console.error(`\x1b[31m✖ Failed: ${totalErrors} blocking brand violation(s), ${totalWarnings} warning(s).\x1b[0m\n`);
  process.exit(1);
}
