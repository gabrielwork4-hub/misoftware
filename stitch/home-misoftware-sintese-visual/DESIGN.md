---
name: Technical Essay & Architectural Digest
colors:
  surface: '#f9f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f9f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeef'
  surface-container-high: '#e8e8e9'
  surface-container-highest: '#e2e2e3'
  on-surface: '#1a1c1d'
  on-surface-variant: '#434655'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#747686'
  outline-variant: '#c3c5d7'
  surface-tint: '#1852da'
  primary: '#0048d1'
  on-primary: '#ffffff'
  primary-container: '#3263eb'
  on-primary-container: '#f1f1ff'
  inverse-primary: '#b6c4ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#49576b'
  on-tertiary: '#ffffff'
  tertiary-container: '#616f84'
  on-tertiary-container: '#ecf2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164f'
  on-primary-fixed-variant: '#003baf'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d5e3fc'
  tertiary-fixed-dim: '#b9c7df'
  on-tertiary-fixed: '#0d1c2e'
  on-tertiary-fixed-variant: '#3a485b'
  background: '#f9f9fa'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e3'
typography:
  display-hero:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.025em
  headline-title:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-title-mobile:
    fontFamily: Outfit
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-section:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lead:
    fontFamily: Newsreader
    fontSize: 21px
    fontWeight: '400'
    lineHeight: 34px
  body-prose:
    fontFamily: Newsreader
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-prose-dense:
    fontFamily: Newsreader
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  meta-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  meta-index:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.08em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
spacing:
  gutter: 2rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
  space-2xl: 5rem
---

## Brand & Style

This design system draws fundamentally from mid-century Swiss International Typographic Style and premium print long-form journalism, translated rigorously into modern web architecture. It treats software, technical infrastructure, and engineering literature as deliberate cultural artifacts rather than disposable SaaS products. 

The aesthetic repudiates contemporary digital clichés: no glowing neon badges, no iridescent gradient headlines, no floating bubble cards, and no synthetic visual noise. Instead, the identity commands authority through disciplined vertical rhythm, structural hairline division rules, asymmetrical architectural layouts, high-contrast black slate typography, and abundant typographic whitespace. 

The target audience comprises software architects, technical fellows, engineering leaders, and deep-domain researchers. Every surface must feel printed, precise, archival, and intellectually rigorous.

## Colors

The palette is rooted in cold-press archival paper and stark typographic ink, using chromatic color solely for critical interaction state and systemic focus:

- **Surface Base (`#fcfcfd`)**: The structural off-white canvas. Softens harsh screen contrast while preserving pristine editorial clarity.
- **Surface Pure (`#ffffff`)**: Reserved for embedded paper panels, isolated pullout frames, and interactive inputs.
- **Primary Ink (`#0f172a`)**: Deep slate ink for headline display, primary body typography, and brand marks. Never pure pitch `#000000`.
- **Secondary Ink (`#1e293b` & `#475569`)**: Muted slate tones for subheadings, lead paragraphs, bylines, and narrative metadata.
- **Hairline Rule (`#eaecf0` & `#e2e8f0`)**: 1px architectural lines for margins, dividing graticules, footnotes, and column separators.
- **Interactive Blue (`#3263eb`)**: The singular active voice of the system. Employed strictly for text hyperlinks, focused states, primary trigger buttons, and precise inline index numbers. Never used as a diffuse gradient or decorative glow.

## Typography

The typographic hierarchy establishes a rigorous distinction between architectural display, long-form editorial exposition, and technical metadata:

1. **Display & Headlines (`Outfit`)**: Clean, structural, high-clarity sans-serif. Used for titles, section headings, index numbering, and module titles. Tight negative tracking applied to all sizes above 24px creates an authoritative, modern publication masthead feel.
2. **Reading Narrative (`Newsreader`)**: Literature-grade transitional serif crafted specifically for prolonged technical reading on screens. The proportions optimize eye drift across wide columns without visual exhaustion.
3. **System Metadata & Code (`JetBrains Mono`)**: Strict, high-legibility monospace reserved for timestamps, section indices (e.g., `SEC_04.1`), reading metrics, figure tags, pullout footnotes, and code snippets. Always uppercase for metadata tags to enforce systematic discipline.

## Layout & Spacing

Layout geometry follows an asymmetric Swiss editorial grid rather than generic dashboard tiles.

- **Grid Architecture**: 12-column desktop grid with a hard max-width container of `1280px`. The primary reading channel enforces a strict maximum prose width of `680px` (or 7 columns) to guarantee a consistent 65–75 character measure for reading comfort. The remaining 5 columns are assigned to contextual side notes, author citations, section tables of contents, or structural whitespace.
- **Graticule Dividers**: Structural division between panels, headers, and digest rows is achieved through 1px horizontal and vertical hair lines (`#eaecf0`). Margins and padding align flush against these borders, evoking printed broadsheets.
- **Vertical Rhythm**: Generous editorial spacing (`space-xl` and `space-2xl`) isolates major sections. Compact monospace intervals (`space-xs` and `space-sm`) structure metadata clusters and tabular lists.
- **Breakpoints**:
  - `Desktop (> 1024px)`: Asymmetric 12-column layout; persistent marginalia and side-aligned index tracking.
  - `Tablet (768px – 1023px)`: 8-column layout; margin notes collapse inline beneath hair-line callout rules.
  - `Mobile (< 767px)`: 4-column single-stream column; outer margin reduces to `1.25rem`; vertical dividing rules collapse to horizontal hairline dividers.

## Elevation & Depth

This design system avoids simulated z-axis dropshadows. There are no floating elevations, ambient light halos, or blurred translucent glass panels. Depth is created strictly through planar boundaries and tone:

- **Planar Depth**: Achieved via 1px crisp rules (`#eaecf0`) and contrast shifts between `#fcfcfd` (base foundation) and `#ffffff` (embedded panels, code blocks, inspection windows).
- **Border Hierarchy**: 
  - Structural rules: 1px solid `#eaecf0`.
  - Emphasized divisions or active boundaries: 1px solid `#0f172a`.
  - Focused interactive regions: 1px solid `#3263eb`.
- **States & Hover**: Hover depth is communicated through instantaneous tint shifts (e.g., `#fcfcfd` shifting to `#f8fafc`) or an underline stroke snap, never by lifting an element toward the user with elevation shadows.

## Shapes

The geometric architecture is uncompromisingly rectilinear (`roundedness: 0`). 

Corners are razor-sharp across all UI primitives: cards, buttons, callouts, popovers, and input fields. This zero-radius discipline creates the aesthetic authority of a physical printed paper digest, technical blueprint, or research journal, directly contrasting the ubiquitous soft-pill UI trends of consumer software.

## Components

### Buttons & Interactive Anchors
- **Primary Trigger**: Solid `#0f172a` ink background, `#ffffff` text, 0px border radius, monospaced or sans-serif medium typography. On hover: shifts immediately to `#3263eb`. No gradients, no dropshadows.
- **Secondary Action**: Bordered 1px `#eaecf0` against `#ffffff` background, `#0f172a` text. On hover: border-color transitions to `#0f172a`.
- **Editorial Text Links**: `#3263eb` text with a 1px solid underline offset by 3px (`text-underline-offset: 4px`). Transitions to `#0f172a` on hover.

### Meta Badges & Chips
- Crisp, unrounded tags (`border: 1px solid #eaecf0; background: #ffffff; color: #475569`).
- Prefixed with monospace classification indexes (e.g., `[SYS // 01] ARCHITECTURE`).
- Letter-spacing: `0.05em`, font size: `11px`, font family: `JetBrains Mono`.

### Editorial Digest Cards & Row Items
- Built without floating card containers. Articles in a stream are demarcated by 1px solid `#eaecf0` horizontal hairline borders.
- Padding: `2rem 0` with top metadata, large sans-serif headline, Newsreader serif abstract, and footer timestamp.
- Hover state: The title shifts from `#0f172a` to `#3263eb` with no card bounce or elevation translation.

### Input Fields & Search Bars
- Clean hairline box with 0px corner radius (`1px solid #e2e8f0; background: #ffffff; color: #0f172a`).
- Text in `JetBrains Mono` or `Outfit`.
- Focus state: Hard 1px ring in `#3263eb` without soft outer blur halos.

### Selection Controls (Checkboxes & Radios)
- Exact square form factor with sharp 90-degree corners (`16px × 16px`).
- Inactive: 1px solid `#cbd5e1` on `#ffffff`.
- Active: Solid `#0f172a` fill with an inset sharp white dot (radios) or crisp right-angled checkmark (checkboxes).

### Asymmetric Margin Notes & Footnotes
- Sits in the secondary column parallel to the reading text.
- Formatted in `Newsreader` italic or `JetBrains Mono` with an accompanying bracketed index number in `#3263eb` (e.g., `[^03]`).
- Divided from the main column by negative whitespace or a vertical hairline rule.

### Code & Technical Excerpts
- Inset box on `#ffffff` with a continuous `1px solid #eaecf0` border.
- Header toolbar containing file path, language specifier in uppercase `JetBrains Mono`, and a copy trigger separated by a bottom hairline border.