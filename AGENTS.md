## Agent Rules & Context Dependencies

### UI & Front-End Tasks
- **Design System Constraint:** Before generating, modifying, or refactoring any UI components, pages, or styling, you MUST read and strictly adhere to the project design tokens defined in `[DESIGN.md](./DESIGN.md)`.
- **Anti-Pattern Prevention:** Do not invent custom color hex codes, spacing scales, or font families. If a design requirement is missing, cross-reference `DESIGN.md` or ask for clarification instead of hallucinating Tailwind/CSS values.
- **Verification:** Ensure all generated front-end code mirrors the semantic tokens (e.g., `bg-primary`, `text-muted`) specified in the design file.

## UI Component Generation Rules (Shadcn Priority)

### Component Instantiation Pipeline
1. **Search Before Building:** Before creating any new UI element, you MUST search the shadcn registry using the active MCP tools (e.g., searching across `shadcnio` or connected registries).
2. **Prioritize Native Blocks:** If a matching or similar shadcn component or layout block exists, you MUST install it using the MCP install tool rather than writing a custom component from scratch.
3. **Reference the Demo Tool:** When implementing an installed shadcn component, run the `get component demo` tool via MCP first to inspect real, error-free implementation syntax and avoid hallucinating component props.
4. **Local Extension:** Only build custom sub-components if the shadcn catalog does not offer a structural base. When extending, use composition and merge classes utilizing the native `cn()` utility.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
