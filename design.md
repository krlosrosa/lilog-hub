---
name: Vibrant Logistics System
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#484554'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#797586'
  outline-variant: '#c9c4d7'
  surface-tint: '#6042d6'
  primary: '#451ebb'
  on-primary: '#ffffff'
  primary-container: '#5d3fd3'
  on-primary-container: '#d8ceff'
  inverse-primary: '#cabeff'
  secondary: '#5f5d69'
  on-secondary: '#ffffff'
  secondary-container: '#e4e0ef'
  on-secondary-container: '#65636f'
  tertiary: '#693700'
  on-tertiary: '#ffffff'
  tertiary-container: '#8b4b00'
  on-tertiary-container: '#ffc99e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e6deff'
  primary-fixed-dim: '#cabeff'
  on-primary-fixed: '#1c0062'
  on-primary-fixed-variant: '#4723be'
  secondary-fixed: '#e4e0ef'
  secondary-fixed-dim: '#c8c5d3'
  on-secondary-fixed: '#1b1a25'
  on-secondary-fixed-variant: '#474551'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#ffb77a'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6d3a00'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 1px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  margin-mobile: 20px
  gutter: 12px
---

## Brand & Style

The design system is built for a Warehouse Management System (WMS) that balances high-intensity utility with a modern, approachable aesthetic. The brand personality is efficient, precise, and tech-forward, aiming to reduce the cognitive load of warehouse staff through clarity and visual hierarchy.

The chosen style is **Modern / Corporate** with a focus on **Tonal Layering**. It utilizes a clean, spacious layout to prevent information density from becoming overwhelming. By borrowing elements from consumer-grade task management apps—such as soft rounded corners and vibrant accents—the design system creates an interface that feels professional yet refreshing, moving away from the "industrial gray" typical of the logistics sector.

## Colors

The palette is anchored by a **Vibrant Purple** (Primary), used to highlight critical actions and navigation. This is supported by a **Light Lavender** (Secondary) for large background areas and subtle containment, which reduces eye strain compared to pure white. 

An **Amber** (Tertiary) color is reserved for warnings and priority status indicators, essential for warehouse safety and deadline management. The Neutral scale is optimized for high legibility, using deep charcoals for text and soft grays for structural borders.

- **Primary:** Actionable elements, active states, and brand presence.
- **Secondary:** Surface backgrounds and low-emphasis containers.
- **Surface:** Pure white for high-contrast cards and input fields.
- **Status:** Standard semantic colors (Success: Green, Error: Red) are utilized but adjusted to match the vibrant saturation of the primary purple.

## Typography

The design system uses **Plus Jakarta Sans** for headlines and body text to provide a modern, friendly, and highly legible experience. Its open counters and geometric shapes ensure readability on mobile screens even in low-light warehouse environments.

**Inter** is employed for labels and technical metadata. Its systematic nature and superior performance at small sizes make it ideal for SKU numbers, barcodes, and timestamps. 

- **Headlines:** Used for page titles and section headers.
- **Body:** Used for primary content and descriptions.
- **Labels:** Used for captions, status tags, and all-caps identifiers to create a clear distinction from narrative text.

## Layout & Spacing

This design system follows a **Fluid Grid** model optimized for mobile handsets. A 4-column grid is standard for most screens, ensuring that interactive elements are large enough for "one-handed" operation in a warehouse setting.

The spacing rhythm is based on a **4px baseline**, with 16px (md) being the standard padding for cards and containers. Safe areas are strictly enforced at 20px on the horizontal edges to prevent accidental touches near the bezel. Vertical stacks use 12px gutters to group related information clusters (e.g., an item name and its quantity) closely while maintaining overall screen scanability.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** rather than heavy shadows. 
- **Level 0 (Background):** The secondary light lavender color (#F4F0FF).
- **Level 1 (Cards/Containers):** Pure white surfaces with a soft, 2px stroke in a light neutral or a very subtle 8% opacity shadow to lift them from the background.
- **Level 2 (Modals/Popovers):** Higher elevation with a 15% opacity diffused shadow and a backdrop blur of 10px to focus the user's attention.

Interactive elements like buttons use a slight gradient or inner glow to suggest "pressability," mimicking the tactile feel of physical tools.

## Shapes

The design system adopts a **Rounded** shape language to create a soft, modern interface that contrasts with the harsh, angular environment of a warehouse.

- **Buttons & Cards:** 1rem (16px) corner radius for a friendly, approachable feel.
- **Input Fields:** 0.5rem (8px) corner radius to maintain structural integrity.
- **Status Chips:** Fully pill-shaped (round) to distinguish them from actionable buttons.

These rounded forms help the eye flow smoothly across the interface and prevent the UI from feeling "sharp" or overly technical.

## Components

### Buttons
Primary buttons are solid purple with white text and a 16px corner radius. Secondary buttons use a purple outline or a light purple background with dark purple text. All buttons have a minimum height of 48px to accommodate gloved or rapid touch interactions.

### Cards
Cards are the primary container for warehouse tasks (e.g., "Picking List"). They feature 16px padding, a white background, and 16px rounded corners. Critical data like "Quantity" or "Location" should be bolded and placed in the top right or bottom right corners.

### Chips & Tags
Used for status (In Progress, Completed, Delayed). These are pill-shaped with low-saturation background colors and high-saturation text of the same hue to ensure they are visible but don't compete with primary actions.

### Input Fields
Inputs feature a subtle gray border that turns primary purple on focus. Labels should always be visible (top-aligned) to ensure the user doesn't lose context while typing or scanning barcodes.

### Specialized WMS Components
- **Scanner Feedback:** A full-screen momentary overlay (Green for success, Red for error) that provides immediate haptic and visual feedback after a barcode scan.
- **Quantity Steppers:** Large, easy-to-tap plus/minus buttons surrounding a numeric value for quick inventory adjustments.
- **Progress Circulars:** Small circular indicators within list items to show the percentage of a multi-item task completed.