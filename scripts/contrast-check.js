/*
 * Kanso Matcha — WCAG contrast check (dev utility)
 *
 * Tracks ~/kanso_design_system canonical v1.2 tokens.
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
    sunken: '#e2ded2',
    soft: '#dce2d1',
    fg: '#34382f',
    fgMuted: '#616359',
    link: '#48676b',
    linkActive: '#5c664a',
    border: '#d5d0c2',
    borderStrong: '#827e74',
    focus: '#626d4f',
    accentStrong: '#5c664a',
    success: '#5c664a',
    warning: '#795e2c',
    danger: '#944e47',
    info: '#48676b',
  };
  const dark = {
    bg: '#22251f',
    surface: '#2d3129',
    elevated: '#363a31',
    sunken: '#1c1f1a',
    soft: '#41483a',
    fg: '#e8e5d9',
    fgMuted: '#b5b5a9',
    link: '#9cb8ba',
    linkActive: '#c1ccac',
    border: '#41463b',
    borderStrong: '#83877f',
    focus: '#a3ae91',
    accentStrong: '#c1ccac',
    success: '#c1ccac',
    warning: '#d2b477',
    danger: '#e1a59c',
    info: '#9cb8ba',
  };

  const surfaces = ['bg', 'surface', 'elevated', 'sunken', 'soft'];
  const statusKeys = ['success', 'warning', 'danger', 'info'];

  let ok = true;
  for (const [mode, t] of [['Morning Matcha', light], ['Evening Zen', dark]]) {
    console.log(`--- ${mode} ---`);
    for (const s of surfaces) {
      ok = ratio(`body fg / ${s}`, t.fg, t[s]) && ok;
      ok = ratio(`muted fg / ${s}`, t.fgMuted, t[s]) && ok;
    }
    for (const k of statusKeys) {
      for (const s of surfaces) {
        ok = ratio(`${k} / ${s}`, t[k], t[s]) && ok;
      }
    }
    ok = ratio('link / bg', t.link, t.bg) && ok;
    ok = ratio('link-active / bg', t.linkActive, t.bg) && ok;
    // border-subtle is decorative (not held to 3:1 per WCAG 1.4.11)
    ok = ratio('border-strong / bg (ui)', t.borderStrong, t.bg, 3) && ok;
  }
  process.exit(ok ? 0 : 1);
}
