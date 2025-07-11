# Style Mapping Project

## Main goal/question

I'm using this project to do rapid prototyping with react and tailwind. When we get to implementation, we build in Appian SAIL. It doesn't have to be exact, but I want to explore how to define a mapping between Tailwind CSS and the SAIL "design tokens" we have available. That way, when we generate and refine prototypes, we have a better idea of how they would translate to implementation. It would also make our prototypes more consistent.

**Question: What's the best way to do this?**

## Types of things to map

- Type sizes. See https://docs.appian.com/suite/help/25.2/Styled_Text_Component.html
- Icon sizes. See https://docs.appian.com/suite/help/25.2/Styled_Icon_Component.html
- Spacing. This varies slightly by component, but mostly like this: https://docs.appian.com/suite/help/25.2/Section_Layout.html
- Named colors: See https://docs.appian.com/suite/help/25.2/Styled_Text_Component.html
- Card style and padding: https://docs.appian.com/suite/help/25.2/card_layout.html

## Other reference material

- See README.md and LLM_INSTRUCTIONS.md for more context about this project

## Discussion Summary & Approach Decision

### Problem Analysis
- **Challenge**: shadcn components come with pre-built Tailwind classes that don't align with SAIL constraints
- **Goal**: LLMs should generate prototypes using only Tailwind classes that map to available SAIL design tokens
- **Current Issue**: No systematic way to ensure prototype styles translate to implementation

### Considered Approaches
1. **Custom Tailwind config + helper functions** - Abstract SAIL limitations through utility functions
2. **Custom component library** - Build SAIL-constrained components alongside shadcn (rejected: too much upfront work)
3. **Hybrid approach** - Keep shadcn + create mapping documentation
4. **Drop shadcn entirely** - Use only SAIL-aligned Tailwind classes (selected approach)

### Recommended Solution
**Drop shadcn components and create a SAIL-constrained Tailwind configuration**

**Rationale:**
- LLMs naturally create semantic, accessible HTML when generating components on-the-fly
- Direct control over all styling decisions without pre-built component interference
- Cleaner mapping: every available Tailwind class has a known SAIL equivalent
- Simpler architecture: one styling system instead of Tailwind + shadcn hybrid
- Better implementation handoff: designers see exactly what's possible in SAIL

**Implementation Steps:**
1. Create custom Tailwind config with only SAIL-mappable design tokens
2. Update LLM instructions to use only approved Tailwind classes  
3. Remove shadcn dependencies and components
4. Create mapping documentation showing Tailwind class → SAIL equivalent

**Benefits:**
- Constrained creativity: LLMs work within SAIL boundaries
- Direct translation: clear path from prototype to implementation
- Cleaner prototypes: no component library complexity
- Consistent results: systematic approach to style constraints

## Summary of Work Done

### 🎉 SAIL-Constrained Prototyping System Complete!

**✅ What Works:**
- **Pure SAIL Design Tokens** - Every class maps directly to SAIL capabilities
- **Complete Examples** - Forms, dashboards, buttons all using SAIL patterns
- **Clean Codebase** - No shadcn confusion, minimal dependencies
- **LLM-Ready** - Updated instructions for generating SAIL-compliant prototypes
- **Documentation** - Complete mapping reference in `SAIL_MAPPING_REFERENCE.md`

**🔥 Ready for Testing:**
- `http://localhost:5173/` - Updated home with SAIL styling
- `http://localhost:5173/sail-examples` - Component showcase
- `http://localhost:5173/process-list` - Real-world dashboard conversion
- `http://localhost:5173/demo/button-demo` - Button patterns
- `http://localhost:5173/demo/form-demo` - Form components

**📖 For Others:**
- `LLM_INSTRUCTIONS.md` - Clear guidance for LLMs
- `SAIL_MAPPING_REFERENCE.md` - Complete implementation guide
- `STYLE_MAPPING.md` - Project approach and decisions

**🎯 Outcome:**
This approach makes prototype → SAIL implementation **much smoother** and keeps prototypes within realistic constraints. LLMs now generate components using only SAIL-mappable design tokens, ensuring direct translation to implementation.