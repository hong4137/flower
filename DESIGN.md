---
name: Botanical Excellence
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#404a3b'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#707a6a'
  outline-variant: '#bfcab7'
  surface-tint: '#126e0c'
  primary: '#004900'
  on-primary: '#ffffff'
  primary-container: '#006400'
  on-primary-container: '#86df72'
  inverse-primary: '#82db6f'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#3e402e'
  on-tertiary: '#ffffff'
  tertiary-container: '#555744'
  on-tertiary-container: '#ccccb5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9df888'
  primary-fixed-dim: '#82db6f'
  on-primary-fixed: '#002200'
  on-primary-fixed-variant: '#005300'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e4e4cc'
  tertiary-fixed-dim: '#c8c8b0'
  on-tertiary-fixed: '#1b1d0e'
  on-tertiary-fixed-variant: '#474836'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is centered on the intersection of organic beauty and high-end professional service. The brand personality is poised, welcoming, and artisanal, targeting a discerning clientele that values botanical artistry and premium experiences. 

The style utilizes a **Minimalist-Luxury** approach. It balances generous whitespace with intentional, high-contrast focal points. By combining the warmth of soft neutrals with the prestige of gold and the vitality of deep forest tones, the UI evokes an emotional response of tranquility and exclusivity. Visuals are characterized by high-quality floral photography, thin gold-trimmed accents, and a soft, tactile depth that feels more like a physical invitation than a digital interface.

## Colors

The palette is rooted in a natural, Earth-inspired spectrum.

*   **Primary (Deep Green - #006400):** Used for primary call-to-action buttons, active navigation states, and bold typography. It represents growth and professional stability.
*   **Secondary/Accent (Gold - #D4AF37):** Reserved for high-value details such as thin borders, iconography accents, and small labels. It signifies luxury and premium quality.
*   **Base (Soft Beige - #F5F5DC):** The foundation for all surfaces. A lighter variant (#FDFDF5) is used for the main background to ensure the page feels airy, while the standard beige is used for container backgrounds.
*   **Neutral (#2D2D2A):** A soft charcoal used for body text and subtle dividers to maintain high legibility without the harshness of pure black.

## Typography

This design system employs a high-contrast typographic pairing to establish hierarchy. 

**Playfair Display** is the primary serif for all headlines. Its high-contrast strokes convey the elegance of editorial fashion and floral arrangement. Large headlines should use slightly tighter letter-spacing to enhance the premium feel.

**Manrope** serves as the functional sans-serif for body text, labels, and UI elements. Its clean, modern proportions ensure readability across all devices, balancing the decorative nature of the serif headlines.

For micro-copy and small labels, use the `label-caps` style with increased letter spacing to create a sophisticated, "branded" look for categories or metadata.

## Layout & Spacing

The design system utilizes a **Fixed Grid** model on desktop to maintain a boutique, curated feel. 

*   **Desktop:** A 12-column grid with a maximum container width of 1280px. Section gaps are intentionally large (120px) to allow the "minimalist" aspect of the brand to breathe.
*   **Mobile:** A 4-column fluid grid with 20px side margins. Content typically stacks vertically, with imagery taking full-width priority.
*   **Rhythm:** Spacing follows an 8px base unit. Elements within a card or section should use the `stack` variables to maintain consistent vertical relationships. Use whitespace as a luxury element—do not crowd the components.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and tonal layering rather than heavy elevation.

Surfaces should feel like high-quality matte paper. Shadows are extremely soft and diffused, using the Deep Green color at 5-10% opacity rather than pure black to maintain an "organic" feel. 

*   **Level 1 (Base):** Soft Beige background.
*   **Level 2 (Cards/Modules):** White or lighter beige surface with a 1px Gold-trimmed border and a subtle, long-range shadow (e.g., `0 10px 30px rgba(0, 50, 0, 0.05)`).
*   **Level 3 (Interactive):** Upon hover, cards may lift slightly, increasing the shadow spread and gold border intensity.

## Shapes

The shape language is **Rounded** to reflect the organic curves found in nature. 

Standard components (buttons, input fields) use a 0.5rem (8px) corner radius. Larger containers and cards use a 1.5rem (24px) radius to soften the layout and make the site feel more approachable and modern. Circular treatments are used exclusively for iconography containers or decorative badge elements to mimic wax seals or premium stamps.

## Components

*   **Buttons:** Primary buttons are solid Deep Green with White or Gold text. They feature a generous padding (16px 32px) and a subtle hover state that transitions to a slightly darker green. Secondary buttons are outlined in Gold.
*   **Cards:** These are the centerpiece. Every card must have a 1px Gold (#D4AF37) border and a soft ambient shadow. Use a 24px internal padding.
*   **Input Fields:** Minimalist design with a Soft Beige background and a bottom-border-only approach in Deep Green, or a full rounded border that turns Gold on focus.
*   **Chips/Tags:** Used for flower categories (e.g., "Seasonal," "Wedding"). These should use the `label-caps` typography, a 0.5px Gold border, and a transparent background.
*   **Gold Trim:** Apply a 2px top-border or a thin surrounding border of Gold to highlight "Featured" or "Premium" items.
*   **Image Containers:** Images should always have the standard 8px or 24px rounded corners; sharp-edged photography is prohibited to maintain the organic style.