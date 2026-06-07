---
name: Vice Protocol
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#e0bdcd'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#a88897'
  outline-variant: '#593f4c'
  surface-tint: '#ffaed9'
  primary: '#ffaed9'
  on-primary: '#610046'
  primary-container: '#ff3bc0'
  on-primary-container: '#55003d'
  inverse-primary: '#b30084'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#e0b6ff'
  on-tertiary: '#4c007d'
  tertiary-container: '#bb6bfb'
  on-tertiary-container: '#42006e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd8ea'
  primary-fixed-dim: '#ffaed9'
  on-primary-fixed: '#3c002a'
  on-primary-fixed-variant: '#890064'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#f2daff'
  tertiary-fixed-dim: '#e0b6ff'
  on-tertiary-fixed: '#2e004e'
  on-tertiary-fixed-variant: '#6a0baa'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-2xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  data-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  stat-value:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system establishes a high-octane, "Underground Tech" aesthetic tailored for the next generation of gaming databases. It draws heavily from the neo-noir atmosphere of a modern-day Vice City, blending gritty realism with high-fidelity digital interfaces. 

The visual narrative is built on a foundation of **Glassmorphism** and **Vaporwave-inspired Futurism**. We use deep, "OLED" blacks to provide maximum contrast for vibrant neon accents. The emotional response is one of adrenaline, exclusivity, and digital sophistication—evoking the feeling of a high-end hacker terminal or an elite criminal syndicate’s data hub. 

Key stylistic pillars:
- **Immersive Depth:** Use of frosted glass layers and background blurs to maintain context while focusing on data.
- **Electric Energy:** "Glow" effects and neon strokes that simulate physical light sources in a dark environment.
- **Precision Typography:** A mix of aggressive, industrial headings and ultra-clean, utilitarian data fonts.

## Colors

The palette is anchored by **Pure Black (#000000)** and **Deep Charcoal (#0A0A0B)** to create a true dark-mode experience that makes neon colors pop. 

- **Electric Magenta (Primary):** Used for primary actions, branding, and critical highlights.
- **Cyber Cyan (Secondary):** Used for technical data, links, and secondary interactive elements.
- **Vice Purple (Tertiary):** Used for accents, gradients, and decorative glows.
- **High-Contrast Status:** Status indicators (Online/Offline, Mission Success, etc.) use hyper-saturated "safety" colors to ensure instant recognition against the dark backgrounds.

Gradients should transition between Magenta and Purple or Cyan and Purple, mirroring the sunset aesthetic found in the reference imagery.

## Typography

The typography system strikes a balance between "Industrial Impact" and "Technical Clarity."

- **Headlines:** Use **Inter** with Heavy or Black weights. Apply slight negative letter-spacing to create a dense, powerful look suitable for gaming titles and major section headers.
- **Body Text:** **Hanken Grotesk** provides a clean, modern, and highly legible experience for long-form blog content and character descriptions.
- **Technical Data:** **JetBrains Mono** is utilized for metadata, coordinates, IDs, and "hacker" style interface elements to reinforce the high-tech theme.

All caps should be used sparingly for labels and "shouting" headlines to maintain the aggressive aesthetic without sacrificing readability.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. We prioritize a "density-based" approach where data-rich sections (like vehicle databases) use tighter spacing, while editorial blog content utilizes wider margins and increased leading.

- **Rhythm:** An 8px base unit scales all margins and paddings.
- **Safe Areas:** Maintain a minimum 16px gutter on mobile devices to prevent content from hitting the screen edge.
- **Content Reflow:** On mobile, sidebars collapse into bottom sheets or hidden drawers to keep the focus on the primary imagery and data.

## Elevation & Depth

Depth is not communicated through traditional shadows, but through **light emission and opacity**.

- **Level 0 (Floor):** Pure Black (#000000).
- **Level 1 (Base Cards):** Semi-transparent charcoal with a 20px backdrop blur (Glassmorphism).
- **Level 2 (Active/Hover):** A subtle 1px inner border using the Primary or Secondary neon colors.
- **Glow Effects:** Critical elements use "Drop Shadows" with 0 spread and high blur radii (20px-40px), colored to match the element (e.g., a pink button emits a pink ambient glow).
- **Overlays:** Full-screen blurs (30px+) are used for modals to keep the background UI visible but abstracted, maintaining immersion.

## Shapes

The design system uses a **Soft (0.25rem)** roundedness approach to feel technical and precise.

- **Primary Elements:** Buttons and small inputs use a 4px (0.25rem) radius.
- **Containers:** Large cards and glass panels use a 12px (0.75rem) radius to feel slightly more approachable while maintaining the "hard-edged" gaming vibe.
- **Interactive States:** On hover, shapes may "expand" slightly, but the corner radii remain consistent to maintain the geometric integrity of the grid.

## Components

### Buttons & Interaction
- **Primary Action:** Solid Primary color with white or black text, accompanied by an outer neon glow of the same color.
- **Secondary Action:** Ghost style with a 1px Secondary color border and neon text.
- **Hover State:** Buttons should increase in glow intensity or "fill" with a gradient transition.

### Cards (Glassmorphism)
- **Structure:** 1px semi-transparent white border (10% opacity) + 40% opaque background + 20px backdrop-filter: blur.
- **Variant:** "Hot" cards (trending posts) feature a top-edge gradient border using the Primary-to-Tertiary color ramp.

### Input Fields
- **Style:** Dark background with bottom-only borders for a sleek "terminal" look, or fully enclosed glass fields for search bars.
- **Focus:** The border-bottom transitions to a vibrant Cyan glow when active.

### High-Contrast Indicators
- **Chips/Badges:** Use JetBrains Mono for text. Backgrounds are high-saturation success/warning/error colors with black text for maximum punch.
- **Progress Bars:** Use a dual-stop gradient (e.g., Purple to Cyan) to indicate loading or mission progress.

### Lists & Data
- **Tables:** No vertical borders. Use thin, 5% opacity white horizontal dividers.
- **Hover:** List items should trigger a subtle Primary color "left-accent" bar (4px wide) on hover.