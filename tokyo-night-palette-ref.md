# Tokyo Night

This file gives references on how to define the coolors for Tokyo Night Theme in css

| Token           | Dark      | **Storm**     | Light     |
| --------------- | --------- | ------------- | --------- |
| `bg`            | `#1a1b26` | **`#24283b`** | `#e6e7ed` |
| `bg_dark`       | `#16161e` | **`#1f2335`** | `#d5d6db` |
| `bg_highlight`  | `#292e42` | **`#292e42`** | `#d5d6db` |
| `bg_popup`      | `#16161e` | **`#1f2335`** | `#f4f5f9` |
| `bg_statusline` | `#16161e` | **`#1f2335`** | `#d5d6db` |
| `bg_visual`     | `#283457` | **`#2e3c64`** | `#a8afc0` |
| `fg`            | `#c0caf5` | **`#c0caf5`** | `#343b58` |
| `fg_dark`       | `#a9b1d6` | **`#a9b1d6`** | `#565f89` |
| `fg_gutter`     | `#3b4261` | **`#3b4261`** | `#b0b3c0` |
| `fg_sidebar`    | `#a9b1d6` | **`#a9b1d6`** | `#565f89` |
| `border`        | `#565f89` | **`#565f89`** | `#b0b3c0` |
| `bg_search`     | `#3d59a1` | **`#3d59a1`** | `#7890dd` |
| `blue`          | `#7aa2f7` | **`#7aa2f7`** | `#2959aa` |
| `blue0`         | `#3d59a1` | **`#3d59a1`** | `#0f4b6e` |
| `cyan`          | `#2ac3de` | **`#2ac3de`** | `#006c86` |
| `green`         | `#9ece6a` | **`#9ece6a`** | `#385f0d` |
| `magenta`       | `#bb9af7` | **`#bb9af7`** | `#5a3e8e` |
| `orange`        | `#ff9e64` | **`#ff9e64`** | `#965027` |
| `purple`        | `#9d7cd8` | **`#9d7cd8`** | `#7847ad` |
| `red`           | `#f7768e` | **`#f7768e`** | `#8c4351` |
| `teal`          | `#73dacb` | **`#73dacb`** | `#33635c` |
| `yellow`        | `#e0af68` | **`#e0af68`** | `#8f5e15` |

## tokyo-night-storm css

```css
[data-md-color-scheme="tokyo-night-storm"] {
  /* Core Storm palette - bg is lighter than Night, darker than Day */
  --tns-bg: #24283b;
  --tns-bg-dark: #1f2335;
  --tns-bg-highlight: #292e42;
  --tns-bg-popup: #1f2335;
  --tns-bg-visual: #2e3c64;

  /* Foreground (same as Night) */
  --tns-fg: #c0caf5;
  --tns-fg-dark: #a9b1d6;
  --tns-fg-gutter: #3b4261;
  --tns-fg-muted: #565f89;

  /* Accent colors (same as Night) */
  --tns-red: #f7768e;
  --tns-orange: #ff9e64;
  --tns-amber: #e0af68;
  --tns-green: #9ece6a;
  --tns-teal: #73dacb;
  --tns-cyan: #2ac3de;
  --tns-sky: #7dcfff;
  --tns-blue: #7aa2f7;
  --tns-violet: #bb9af7;
  --tns-purple: #9d7cd8;
  --tns-magenta: #bb9af7;

  /* Surface/sidebar */
  --tns-surface: #414868;
  --tns-surface-2: #2a2f4a;
  --tns-border: #565f89;

  /* Material mappings for Storm */
  --md-default-bg-color: var(--tns-bg);
  --md-default-bg-color--light: color-mix(in srgb, var(--tns-bg) 85%, white);
  --md-default-bg-color--lighter: color-mix(in srgb, var(--tns-bg) 70%, white);
  --md-default-bg-color--lightest: color-mix(in srgb, var(--tns-bg) 55%, white);
  --md-default-fg-color: var(--tns-fg);
  --md-default-fg-color--light: var(--tns-fg-dark);
  --md-default-fg-color--lighter: var(--tns-fg-muted);
  --md-default-fg-color--lightest: var(--tns-border);
  --md-primary-fg-color: var(--tns-fg);
  --md-primary-fg-color--light: var(--tns-fg-dark);
  --md-primary-fg-color--dark: var(--tns-fg);
  --md-primary-bg-color: var(--tns-surface);
  --md-primary-bg-color--light: color-mix(
    in srgb,
    var(--tns-surface) 70%,
    transparent
  );
  --md-accent-fg-color: var(--tns-cyan);
  --md-accent-fg-color--transparent: color-mix(
    in srgb,
    var(--tns-cyan) 16%,
    transparent
  );
  --md-accent-bg-color: var(--tns-surface);
  --md-code-bg-color: var(--tns-surface);
  --md-code-fg-color: var(--tns-fg);
  --md-typeset-color: var(--tns-fg);
  --md-typeset-a-color: var(--tns-blue);
  --md-typeset-mark-color: color-mix(
    in srgb,
    var(--tns-amber) 35%,
    transparent
  );
  --md-typeset-table-color: color-mix(
    in srgb,
    var(--tns-border) 45%,
    transparent
  );
  --md-typeset-kbd-color: var(--tns-surface-2);
  --md-typeset-kbd-border-color: var(--tns-border);
  --md-admonition-bg-color: var(--tns-surface);
  --md-admonition-fg-color: var(--tns-fg);
  --md-footer-bg-color: var(--tns-surface);
  --md-footer-bg-color--dark: var(--tns-bg);
  --md-footer-fg-color: var(--tns-fg);
  --md-warning-fg-color: var(--tns-bg);
  --md-warning-bg-color: var(--tns-amber);
  --md-shadow-z1:
    0 0.2rem 0.5rem rgba(0, 0, 0, 0.18), 0 0 0.05rem rgba(255, 255, 255, 0.08);
  --md-shadow-z2:
    0 0.2rem 0.5rem rgba(0, 0, 0, 0.35), 0 0 0.05rem rgba(255, 255, 255, 0.16);
  --md-shadow-z3:
    0 0.5rem 2rem rgba(0, 0, 0, 0.4), 0 0 0.05rem rgba(0, 0, 0, 0.2);

  color: var(--tns-fg-dark);
  background-color: var(--tns-bg);
  color-scheme: dark;
}
```

## tokyo-night-light css

```css
[data-md-color-scheme="tokyo-night-light"] {
  /* Core Light palette */
  --tnl-bg: #e6e7ed;
  --tnl-bg-dark: #d5d6db;
  --tnl-bg-highlight: #d5d6db;
  --tnl-bg-popup: #f4f5f9;
  --tnl-bg-visual: #a8afc0;

  /* Foreground */
  --tnl-fg: #343b58;
  --tnl-fg-dark: #40434f;
  --tnl-fg-muted: #6c6e75;
  --tnl-fg-gutter: #b0b3c0;

  /* Accent colors */
  --tnl-red: #8c4351;
  --tnl-orange: #965027;
  --tnl-amber: #8f5e15;
  --tnl-brown: #634f30;
  --tnl-green: #385f0d;
  --tnl-teal: #33635c;
  --tnl-cyan: #006c86;
  --tnl-azure: #0f4b6e;
  --tnl-blue: #2959aa;
  --tnl-violet: #5a3e8e;
  --tnl-navy: #343b58;

  /* Surface/sidebar */
  --tnl-surface: #e6e7ed;
  --tnl-surface-2: #f4f5f9;
  --tnl-card: #ffffff;
  --tnl-border: #b0b3c0;

  /* Material theme variable overrides */
  --md-default-bg-color: var(--tnl-surface);
  --md-default-bg-color--light: color-mix(
    in srgb,
    var(--tnl-surface) 85%,
    white
  );
  --md-default-bg-color--lighter: color-mix(
    in srgb,
    var(--tnl-surface) 70%,
    white
  );
  --md-default-bg-color--lightest: color-mix(
    in srgb,
    var(--tnl-surface) 55%,
    white
  );
  --md-default-fg-color: var(--tnl-navy);
  --md-default-fg-color--light: var(--tnl-fg-dark);
  --md-default-fg-color--lighter: var(--tnl-muted);
  --md-default-fg-color--lightest: var(--tnl-surface);
  --md-primary-fg-color: var(--tnl-surface);
  --md-primary-fg-color--light: color-mix(
    in srgb,
    var(--tnl-surface) 70%,
    transparent
  );
  --md-primary-fg-color--dark: white;
  --md-primary-bg-color: var(--tnl-azure);
  --md-primary-bg-color--light: color-mix(in srgb, var(--tnl-azure) 20%, white);
  --md-accent-fg-color: var(--tnl-blue);
  --md-accent-fg-color--transparent: color-mix(
    in srgb,
    var(--tnl-blue) 16%,
    transparent
  );
  --md-accent-bg-color: var(--tnl-surface);
  --md-code-bg-color: var(--tnl-navy);
  --md-code-fg-color: var(--tnl-surface);
  --md-typeset-color: var(--tnl-navy);
  --md-typeset-a-color: var(--tnl-blue);
  --md-typeset-mark-color: color-mix(
    in srgb,
    var(--tnl-amber) 28%,
    transparent
  );
  --md-typeset-table-color: color-mix(
    in srgb,
    var(--tnl-border) 60%,
    transparent
  );
  --md-typeset-kbd-color: var(--tnl-surface-2);
  --md-typeset-kbd-border-color: var(--tnl-border);
  --md-admonition-bg-color: white;
  --md-admonition-fg-color: var(--tnl-navy);
  --md-footer-bg-color: var(--tnl-surface-2);
  --md-footer-bg-color--dark: var(--tnl-surface);
  --md-footer-fg-color: var(--tnl-navy);
  --md-warning-fg-color: var(--tnl-navy);
  --md-warning-bg-color: color-mix(in srgb, var(--tnl-amber) 35%, white);
  --md-shadow-z1:
    0 0.2rem 0.5rem rgba(52, 59, 88, 0.08), 0 0 0.05rem rgba(52, 59, 88, 0.06);
  --md-shadow-z2:
    0 0.2rem 0.5rem rgba(52, 59, 88, 0.12), 0 0 0.05rem rgba(52, 59, 88, 0.12);
  --md-shadow-z3:
    0 0.5rem 2rem rgba(52, 59, 88, 0.16), 0 0 0.05rem rgba(52, 59, 88, 0.16);

  color: var(--tnl-navy);
  background-color: var(--tnl-surface);
  color-scheme: light;
}
```

## tokyo-night-dark css

```css
[data-md-color-scheme="tokyo-night-dark"] {
  /* Core Night palette - deepest contrast */
  --tnd-bg: #1a1b26;
  --tnd-bg-dark: #16161e;
  --tnd-bg-highlight: #292e42;
  --tnd-bg-popup: #16161e;
  --tnd-bg-visual: #283457;

  /* Foreground */
  --tnd-fg: #c0caf5;
  --tnd-fg-dark: #a9b1d6;
  --tnd-fg-muted: #565f89;
  --tnd-fg-gutter: #3b4261;

  /* Accent colors */
  --tnd-red: #f7768e;
  --tnd-orange: #ff9e64;
  --tnd-amber: #e0af68;
  --tnd-green: #9ece6a;
  --tnd-teal: #73dacb;
  --tnd-mint: #b4f9f8;
  --tnd-cyan: #2ac3de;
  --tnd-sky: #7dcfff;
  --tnd-blue: #7aa2f7;
  --tnd-violet: #bb9af7;
  --tnd-purple: #9d7cd8;

  /* Surface/sidebar */
  --tnd-surface: #414868;
  --tnd-surface-2: #2a2f4a;
  --tnd-border: #565f89;

  /* Material theme variable overrides */
  --md-default-bg-color: var(--tnd-bg);
  --md-default-bg-color--light: color-mix(in srgb, var(--tnd-bg) 85%, white);
  --md-default-bg-color--lighter: color-mix(in srgb, var(--tnd-bg) 70%, white);
  --md-default-bg-color--lightest: color-mix(in srgb, var(--tnd-bg) 55%, white);
  --md-default-fg-color: var(--tnd-fg);
  --md-default-fg-color--light: var(--tnd-fg-dark);
  --md-default-fg-color--lighter: var(--tnd-muted);
  --md-default-fg-color--lightest: var(--tnd-border);
  --md-primary-fg-color: var(--tnd-fg);
  --md-primary-fg-color--light: var(--tnd-fg-dark);
  --md-primary-fg-color--dark: var(--tnd-soft);
  --md-primary-bg-color: var(--tnd-surface);
  --md-primary-bg-color--light: color-mix(
    in srgb,
    var(--tnd-surface) 70%,
    transparent
  );
  --md-accent-fg-color: var(--tnd-cyan);
  --md-accent-fg-color--transparent: color-mix(
    in srgb,
    var(--tnd-cyan) 16%,
    transparent
  );
  --md-accent-bg-color: var(--tnd-surface);
  --md-code-bg-color: var(--tnd-surface);
  --md-code-fg-color: var(--tnd-fg);
  --md-typeset-color: var(--tnd-fg);
  --md-typeset-a-color: var(--tnd-blue);
  --md-typeset-mark-color: color-mix(
    in srgb,
    var(--tnd-amber) 35%,
    transparent
  );
  --md-typeset-table-color: color-mix(
    in srgb,
    var(--tnd-border) 45%,
    transparent
  );
  --md-typeset-kbd-color: var(--tnd-surface-2);
  --md-typeset-kbd-border-color: var(--tnd-border);
  --md-admonition-bg-color: var(--tnd-surface);
  --md-admonition-fg-color: var(--tnd-fg);
  --md-footer-bg-color: var(--tnd-surface);
  --md-footer-bg-color--dark: var(--tnd-bg);
  --md-footer-fg-color: var(--tnd-fg);
  --md-warning-fg-color: var(--tnd-bg);
  --md-warning-bg-color: var(--tnd-amber);
  --md-shadow-z1:
    0 0.2rem 0.5rem rgba(0, 0, 0, 0.18), 0 0 0.05rem rgba(255, 255, 255, 0.08);
  --md-shadow-z2:
    0 0.2rem 0.5rem rgba(0, 0, 0, 0.35), 0 0 0.05rem rgba(255, 255, 255, 0.16);
  --md-shadow-z3:
    0 0.5rem 2rem rgba(0, 0, 0, 0.4), 0 0 0.05rem rgba(0, 0, 0, 0.2);

  color: var(--tnd-fg-dark);
  background-color: var(--tnd-bg);
  color-scheme: dark;
}
```
