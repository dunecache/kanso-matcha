/*
 * Kanso Matcha — WCAG contrast check (dev utility)
 *
 * Phase 2: verifies light-mode (Morning Matcha) and dark-mode (Evening Zen)
 * token pairs against WCAG AA (4.5:1 body text, 3:1 large text / UI borders).
 */

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const full =
    h.length === 3
      ? h.split('').map((c) => c + c).join('')
      : h;
  const num = parseInt(full, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function luminance(rgb) {
  const [r, g, b] = rgb.map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const la = luminance(hexToRgb(a));
  const lb = luminance(hexToRgb(b));
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

function ratio(name, fg, bg, min) {
  const r = contrast(fg, bg);
  const ok = r >= (min || 4.5);
  console.log(
    `${ok ? 'PASS' : 'FAIL'}  ${name}: fg=${fg} on bg=${bg} → ${r.toFixed(2)}:1 (min ${min || 4.5}:1)`
  );
  return ok;
}

module.exports = { hexToRgb, luminance, contrast, ratio };

if (require.main === module) {
  const light = {
    bg: '#f3f1e9',
    surface: '#e8e5da',
    elevated: '#faf9f4',
    fg: '#34382f',
    fgMuted: '#636a49',
    fgFaint: '#9b9c90',
    matcha: '#89977a',
    sage: '#aab49a',
    clay: '#b68e78',
    soft: '#dce2d1',
    border: '#d5d0c2',
    borderStrong: '#c9c2ae',
    link: '#61705a',
    selection: '#dce2d1',
    focus: '#89977a',
  };
  const dark = {
    bg: '#22251f',
    surface: '#2d3129',
    elevated: '#363a31',
    fg: '#e8e5d9',
    fgMuted: '#aaa99b',
    fgFaint: '#85857a',
    matcha: '#a3ae91',
    sage: '#858f76',
    clay: '#b58e79',
    soft: '#41483a',
    border: '#41463b',
    borderStrong: '#4d5146',
    link: '#a3ae91',
    selection: '#41483a',
    focus: '#a3ae91',
  };

  console.log('--- Morning Matcha (light) ---');
  ratio('body fg / bg', light.fg, light.bg);
  ratio('body fg / surface', light.fg, light.surface);
  ratio('body fg / elevated', light.fg, light.elevated);
  ratio('muted fg / bg', light.fgMuted, light.bg);
  ratio('muted fg / surface', light.fgMuted, light.surface);
  ratio('faint fg / bg', light.fgFaint, light.bg);
  ratio('link / bg', light.link, light.bg);
  ratio('fg / soft', light.fg, light.soft);
  ratio('border / bg (ui)', light.border, light.bg, 3);

  console.log('--- Evening Zen (dark) ---');
  ratio('body fg / bg', dark.fg, dark.bg);
  ratio('body fg / surface', dark.fg, dark.surface);
  ratio('body fg / elevated', dark.fg, dark.elevated);
  ratio('muted fg / bg', dark.fgMuted, dark.bg);
  ratio('muted fg / surface', dark.fgMuted, dark.surface);
  ratio('faint fg / bg', dark.fgFaint, dark.bg);
  ratio('link / bg', dark.link, dark.bg);
  ratio('fg / soft', dark.fg, dark.soft);
  ratio('border / bg (ui)', dark.border, dark.bg, 3);
}
