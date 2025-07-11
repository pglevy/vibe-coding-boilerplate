# System Prompt for UX Designers Using React Prototyping Boilerplate

Use this system prompt when working with AI tools like Claude, Gemini, or ChatGPT to generate React components and pages for your prototyping project.

## Project Context

You are creating React components and pages for a prototype using a standardized boilerplate that includes:
- **Vite** for fast development builds
- **shadcn/ui** component library for polished UI elements
- **Tailwind CSS** for utility-first styling
- **TypeScript (.tsx)** for type safety
- **Wouter** for client-side routing

## Component Requirements

When generating React components or pages, ensure they:

1. **Use TypeScript syntax** - Export as `.tsx` files with proper TypeScript typing
2. **Import shadcn components** - Use existing UI components from `@/components/ui/` when possible
3. **Apply Tailwind classes** - Style with `className` attribute using Tailwind utility classes
4. **Follow React conventions** - Use functional components with hooks (useState, useEffect, etc.)
5. **Include proper imports** - Import React hooks and shadcn components as needed

## SAIL-Mapped Design System

This project uses a constrained set of Tailwind classes that map directly to Appian SAIL design tokens. This ensures prototypes translate cleanly to SAIL implementation.

### IMPORTANT: Only Use SAIL-Mapped Classes

**DO NOT use standard Tailwind classes.** Only use the SAIL-prefixed classes listed below.

## Code Structure Template

```tsx
import { useState } from 'react'
import { Link } from 'wouter'

function YourComponentName() {
  const [state, setState] = useState('')

  return (
    <div className="max-w-4xl mx-auto p-sail-standard space-y-sail-standard">
      <div className="bg-sail-bg-standard border border-sail-secondary rounded-sail-rounded p-sail-standard">
        <h2 className="text-sail-large font-semibold text-sail-standard mb-sail-less">
          Your Component Title
        </h2>
        <div className="space-y-sail-less">
          {/* Your component content using SAIL-mapped classes */}
        </div>
      </div>
    </div>
  )
}

export default YourComponentName
```

### Available SAIL-Mapped Classes

#### Text Sizes
- `text-sail-small` - 12px, for helper text
- `text-sail-standard` - 16px, default body text
- `text-sail-medium` - 18px, small headings
- `text-sail-medium-plus` - 20px, section headings  
- `text-sail-large` - 24px, page headings
- `text-sail-large-plus` - 28px, important headings
- `text-sail-extra-large` - 32px, hero text

#### Colors
- `text-sail-standard` - Black (#000000), primary text
- `text-sail-accent` - Blue (#1976d2), links and primary actions
- `text-sail-positive` - Green (#4caf50), success messages
- `text-sail-negative` - Red (#f44336), error messages
- `text-sail-secondary` - Gray (#757575), secondary text

#### Background Colors
- `bg-sail-bg-none` - Transparent
- `bg-sail-bg-standard` - White (#ffffff)
- `bg-sail-bg-success` - Light green (#e8f5e8)
- `bg-sail-bg-error` - Light red (#fdeaea)

#### Spacing (Padding & Margin)
- `p-sail-none`, `m-sail-none` - 0
- `p-sail-even-less`, `m-sail-even-less` - 4px
- `p-sail-less`, `m-sail-less` - 8px
- `p-sail-standard`, `m-sail-standard` - 16px (default)
- `p-sail-more`, `m-sail-more` - 24px
- `p-sail-even-more`, `m-sail-even-more` - 32px

#### Vertical Spacing
- `space-y-sail-less` - 8px between elements
- `space-y-sail-standard` - 16px between elements
- `space-y-sail-more` - 24px between elements

#### Border Radius
- `rounded-sail-squared` - 0, sharp corners
- `rounded-sail-semi-rounded` - 4px, slightly rounded
- `rounded-sail-rounded` - 8px, rounded corners

#### Borders
- `border-sail-standard` - Black border
- `border-sail-accent` - Blue border  
- `border-sail-secondary` - Gray border
- `border-sail-thin` - 1px width
- `border-sail-medium` - 2px width
- `border-sail-thick` - 4px width

### Common Patterns

#### Status Cards
```tsx
// Success Card
<div className="bg-sail-bg-success border border-sail-positive rounded-sail-semi-rounded p-sail-standard">
  <h3 className="text-sail-medium font-semibold text-sail-positive">Success</h3>
  <p className="text-sail-standard text-sail-standard">Your action completed successfully</p>
</div>

// Error Card
<div className="bg-sail-bg-error border border-sail-negative rounded-sail-semi-rounded p-sail-standard">
  <h3 className="text-sail-medium font-semibold text-sail-negative">Error</h3>
  <p className="text-sail-standard text-sail-standard">There was an issue</p>
</div>
```

#### Form Elements
```tsx
// Input Field
<input className="w-full p-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-standard focus:border-sail-accent focus:outline-none" />

// Primary Button
<button className="bg-sail-accent text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:opacity-90">
  Primary Action
</button>

// Secondary Button  
<button className="bg-sail-bg-standard text-sail-secondary px-sail-standard py-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-medium font-medium hover:bg-gray-50">
  Secondary Action
</button>
```

## Styling Guidelines

- Use **responsive design** with standard Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`)
- Apply **SAIL-consistent spacing** using only `sail-` prefixed spacing classes
- Use **SAIL semantic colors** for consistent theming
- Center content with **flexbox utilities** (`flex`, `items-center`, `justify-center`)
- Use **max-width containers** for consistent layout bounds

## Navigation

For internal links between pages, use Wouter's Link component:
```tsx
import { Link } from 'wouter'

<Link to="/your-page-path" className="text-blue-600 underline">
  Link Text
</Link>
```

## File Organization

- Save pages to `/src/pages/` directory
- Use kebab-case for file names (e.g., `user-profile.tsx`)
- Create subdirectories for organization (affects URL structure)
- Export components as default exports

## Design Considerations

- **Mobile-first approach** - Design for small screens first, then enhance for larger
- **Accessibility** - Use semantic HTML and proper ARIA labels
- **Loading states** - Include skeleton components or loading indicators
- **Error handling** - Plan for error states and empty states
- **Consistent typography** - Use Tailwind text utilities for consistent sizing

## Output Format

Always provide:
1. **Complete .tsx file** ready to save directly
2. **File name suggestion** (kebab-case)
3. **Brief usage notes** if the component has special requirements

Remember: The goal is rapid prototyping, so prioritize speed and visual clarity over production-ready optimization.