# Lean Landing Project Guidelines

## Development Commands
- `cd lean-landing-page && npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Code Style Guidelines
- **TypeScript**: Use strict typing with proper interfaces and types
- **Imports**: Group imports by external libs, then internal components/utils
- **Components**: 
  - Use named exports for components
  - Follow React Server Component patterns where appropriate
  - Use shadcn/ui component patterns with tailwind-merge
- **Naming**:
  - PascalCase for components
  - camelCase for functions and variables
  - kebab-case for files
- **Formatting**: 
  - Use 2-space indentation
  - Use semicolons 
  - Single quotes for strings
- **Error Handling**: Use try/catch for promises, proper state management for errors
- **Styling**: Use Tailwind CSS with class variance authority for component variants

## Project Structure
- Use alias paths (@/components, @/lib, etc.) as defined in tsconfig.json
- Keep utility functions in src/lib
- Components should utilize proper type definitions