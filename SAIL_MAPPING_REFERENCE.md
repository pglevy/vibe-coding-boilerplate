# SAIL to Tailwind Mapping Reference

This document provides the complete mapping between SAIL design tokens and the constrained Tailwind classes available in this project.

## Text Sizes

| SAIL Size | Tailwind Class | CSS Value | Usage |
|-----------|---------------|-----------|--------|
| SMALL | `text-sail-small` | 0.75rem / 12px | Helper text, captions |
| STANDARD | `text-sail-standard` | 1rem / 16px | Body text (default) |
| MEDIUM | `text-sail-medium` | 1.125rem / 18px | Small headings |
| MEDIUM_PLUS | `text-sail-medium-plus` | 1.25rem / 20px | Section headings |
| LARGE | `text-sail-large` | 1.5rem / 24px | Page headings |
| LARGE_PLUS | `text-sail-large-plus` | 1.75rem / 28px | Important headings |
| EXTRA_LARGE | `text-sail-extra-large` | 2rem / 32px | Hero text |

## Colors

### Text Colors
| SAIL Color | Tailwind Class | Hex Value | Usage |
|------------|---------------|-----------|--------|
| STANDARD | `text-sail-standard` | #000000 | Primary text |
| ACCENT | `text-sail-accent` | #1976d2 | Links, primary actions |
| POSITIVE | `text-sail-positive` | #4caf50 | Success messages |
| NEGATIVE | `text-sail-negative` | #f44336 | Error messages |
| SECONDARY | `text-sail-secondary` | #757575 | Secondary text |

### Background Colors
| SAIL Background | Tailwind Class | Value | Usage |
|----------------|---------------|-------|--------|
| NONE | `bg-sail-bg-none` | transparent | No background |
| STANDARD | `bg-sail-bg-standard` | #ffffff | Default white |
| SUCCESS | `bg-sail-bg-success` | #e8f5e8 | Success state backgrounds |
| ERROR | `bg-sail-bg-error` | #fdeaea | Error state backgrounds |

### Border Colors
| SAIL Color | Tailwind Class | Usage |
|------------|---------------|--------|
| STANDARD | `border-sail-standard` | Default borders |
| ACCENT | `border-sail-accent` | Primary borders |
| SECONDARY | `border-sail-secondary` | Subtle borders |

## Spacing (Margins & Padding)

| SAIL Spacing | Tailwind Classes | CSS Value | Usage |
|--------------|-----------------|-----------|--------|
| NONE | `p-sail-none`, `m-sail-none` | 0 | No spacing |
| EVEN_LESS | `p-sail-even-less`, `m-sail-even-less` | 0.25rem / 4px | Minimal spacing |
| LESS | `p-sail-less`, `m-sail-less` | 0.5rem / 8px | Tight spacing |
| STANDARD | `p-sail-standard`, `m-sail-standard` | 1rem / 16px | Default spacing |
| MORE | `p-sail-more`, `m-sail-more` | 1.5rem / 24px | Generous spacing |
| EVEN_MORE | `p-sail-even-more`, `m-sail-even-more` | 2rem / 32px | Large spacing |

### Vertical Spacing
Use `space-y-sail-*` classes for consistent vertical spacing between elements:
- `space-y-sail-less` - 0.5rem between elements
- `space-y-sail-standard` - 1rem between elements  
- `space-y-sail-more` - 1.5rem between elements

## Card Styling

### Border Radius
| SAIL Shape | Tailwind Class | CSS Value |
|------------|---------------|-----------|
| SQUARED | `rounded-sail-squared` | 0 |
| SEMI_ROUNDED | `rounded-sail-semi-rounded` | 0.25rem |
| ROUNDED | `rounded-sail-rounded` | 0.5rem |

### Card Heights
| SAIL Height | Tailwind Class | CSS Value |
|-------------|---------------|-----------|
| EXTRA_SHORT | `h-sail-extra-short` | 4rem |
| SHORT | `h-sail-short` | 8rem |
| MEDIUM | `h-sail-medium` | 12rem |
| TALL | `h-sail-tall` | 16rem |
| AUTO | `h-sail-auto` | auto |

## Border Widths (Dividers)

| SAIL Weight | Tailwind Class | CSS Value |
|-------------|---------------|-----------|
| THIN | `border-sail-thin` | 1px |
| MEDIUM | `border-sail-medium` | 2px |
| THICK | `border-sail-thick` | 4px |

## Component Patterns

### Status Cards
```tsx
// Success Card
<div className="bg-sail-bg-success border border-sail-positive rounded-sail-semi-rounded p-sail-standard">
  <h3 className="text-sail-medium font-semibold text-sail-positive">Success</h3>
  <p className="text-sail-standard text-sail-standard">Success message</p>
</div>

// Error Card  
<div className="bg-sail-bg-error border border-sail-negative rounded-sail-semi-rounded p-sail-standard">
  <h3 className="text-sail-medium font-semibold text-sail-negative">Error</h3>
  <p className="text-sail-standard text-sail-standard">Error message</p>
</div>
```

### Form Elements
```tsx
// Text Input
<input className="w-full p-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-standard focus:border-sail-accent" />

// Button Primary
<button className="bg-sail-accent text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium">
  Primary Action
</button>

// Button Secondary
<button className="bg-sail-bg-standard text-sail-secondary px-sail-standard py-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-medium">
  Secondary Action
</button>
```

### Layout Cards
```tsx
// Standard Card
<div className="bg-sail-bg-standard border border-sail-secondary rounded-sail-rounded p-sail-standard">
  <h3 className="text-sail-medium-plus font-semibold text-sail-standard mb-sail-less">Card Title</h3>
  <p className="text-sail-standard text-sail-standard">Card content</p>
</div>
```

## Implementation Guidelines

1. **Always use SAIL-prefixed classes** - This ensures direct mapping to SAIL components
2. **Combine classes appropriately** - Use spacing, colors, and sizing together
3. **Follow SAIL patterns** - Match the visual hierarchy and spacing patterns from SAIL
4. **Test responsive behavior** - Use standard Tailwind responsive prefixes (sm:, md:, lg:)

## Migration from Standard Tailwind

| Standard Tailwind | SAIL-Mapped Equivalent |
|------------------|----------------------|
| `text-sm` | `text-sail-small` |
| `text-base` | `text-sail-standard` |
| `text-lg` | `text-sail-medium` |
| `text-xl` | `text-sail-medium-plus` |
| `text-2xl` | `text-sail-large` |
| `p-4` | `p-sail-standard` |
| `m-6` | `m-sail-more` |
| `rounded` | `rounded-sail-semi-rounded` |
| `rounded-lg` | `rounded-sail-rounded` |

## Quick Reference for LLMs

**Approved Text Sizes**: `text-sail-small`, `text-sail-standard`, `text-sail-medium`, `text-sail-medium-plus`, `text-sail-large`, `text-sail-large-plus`, `text-sail-extra-large`

**Approved Colors**: `text-sail-standard`, `text-sail-accent`, `text-sail-positive`, `text-sail-negative`, `text-sail-secondary`

**Approved Spacing**: `p-sail-none` through `p-sail-even-more`, `m-sail-none` through `m-sail-even-more`

**Approved Backgrounds**: `bg-sail-bg-none`, `bg-sail-bg-standard`, `bg-sail-bg-success`, `bg-sail-bg-error`

**Approved Borders**: `border-sail-standard`, `border-sail-accent`, `border-sail-secondary`