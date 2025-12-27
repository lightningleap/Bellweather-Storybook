# Decision Log

This file tracks product-level important decisions for the Bellweather project, including major library additions, significant features (OAuth, Resend integration, etc.), and architectural choices. Check this file when implementing new features to understand the project's technical direction and past decisions.

---

## [Figma Asset Integration Strategy] - 2025-12-26

**Decision:** Use Figma API asset URLs directly for icons and images
**Context:** Figma design included custom icons and illustrations that needed to be integrated into the app
**Options Considered:**
- Download and self-host all assets in public/images
- Use Figma API URLs directly
- Convert SVGs to React components
- Use icon libraries (Lucide, Heroicons)
**Decision:** Figma API URLs with local fallbacks
**Rationale:**
- Fastest implementation (no asset download/conversion needed)
- Assets are CDN-hosted by Figma (7-day expiry)
- Can easily update when designs change
- Reduces repository size
- Exact match with Figma design
- Can migrate to self-hosted later if needed
**Consequences:**
- Toolbar icons loaded from Figma CDN
- Social login icons loaded from Figma CDN
- Assets expire after 7 days (need to refresh URLs)
- Added fallback to local images where available
- Image URLs stored as constants at top of components
- Need to update URLs when Figma design changes
- Better performance with Figma's CDN than self-hosting

## [Editor Background Pattern] - 2025-12-26

**Decision:** CSS radial-gradient for dotted grid background
**Context:** Figma design showed a subtle dotted grid pattern in the editor background
**Options Considered:**
- SVG pattern definition with <pattern> element
- CSS radial-gradient with background-size
- Canvas-based rendering
- Background image (PNG/SVG file)
**Decision:** CSS radial-gradient approach
**Rationale:**
- Pure CSS solution (no external files)
- Lightweight and performant
- Easy to customize (color, spacing, size)
- Scales perfectly at any resolution
- No HTTP requests
- Works in all modern browsers
**Consequences:**
- Background style: radial-gradient(circle, #D1D5DC 0.5px, transparent 0.5px)
- Background size: 8.77px 8.77px (matches Figma spacing)
- Applied to main editor container
- Can be toggled on/off easily
- No asset management needed

## [TypeScript Error Resolution] - 2025-12-26

**Decision:** Strict TypeScript configuration with proper type safety
**Context:** Build was failing due to type errors in ref callbacks and header types
**Options Considered:**
- Disable strict mode temporarily
- Use @ts-ignore comments
- Fix types properly
**Decision:** Fix types properly with correct TypeScript patterns
**Rationale:**
- Type safety prevents runtime errors
- Better developer experience with autocomplete
- Catches bugs at compile time
- Aligns with Next.js best practices
- Production-ready code
**Consequences:**
- Ref callbacks must return void (not values)
- Use Record<string, string> for header objects
- Proper type casting where needed
- All components compile without errors
- Better IDE support and intellisense
- Easier refactoring in future

## [Font Loading Strategy] - 2025-12-26

**Decision:** Migrate from CSS @import to Next.js next/font system
**Context:** CSS @import rules were causing parsing errors in Tailwind CSS v4 because @import must precede all other rules
**Options Considered:**
- Keep @import and restructure CSS files
- Use external CDN links in HTML
- Next.js next/font system
**Decision:** Next.js next/font system
**Rationale:**
- Automatic font optimization and subsetting
- Eliminates layout shift (CLS) with font-display: swap
- Fonts loaded as static assets, not external requests
- Type-safe with TypeScript
- CSS variables for flexible usage across components
- No FOUT (Flash of Unstyled Text)
- Better performance with preloading
**Consequences:**
- All fonts loaded in app/layout.tsx
- Fonts: DM Sans, Inter, Just Me Again Down Here, Plus Jakarta Sans
- CSS variables: --font-dm-sans, --font-inter, --font-just-me-again, --font-plus-jakarta
- Components use inline styles or CSS variables for font-family
- Zero external font requests at runtime

## [Editor UI Design Approach] - 2025-12-26

**Decision:** Match Figma specifications exactly with fixed-width document frames
**Context:** Editor needed to match BellwetherBooks Figma design for consistency and professional appearance
**Options Considered:**
- Responsive fluid layout
- Fixed 752px document frames (Figma spec)
- Hybrid responsive with max-width constraints
**Decision:** Fixed 752px document frames
**Rationale:**
- Matches professional document editors (Google Docs, Notion)
- Consistent line length for better readability (optimal 60-80 characters)
- Exact match with Figma design specifications
- Print-ready layout dimensions
- Better focus with centered content
- Professional appearance
**Consequences:**
- Document frames: 752px width, white background
- Centered layout with scrollable container
- Bottom toolbar: 697.37px width, fixed position
- Header: Full width with title and upgrade button
- Typography: DM Sans for headings, Plus Jakarta Sans for body
- Two document frames for editing and preview/comparison
- 32px padding inside frames
- Box shadow for elevation

## [Design System Enhancement] - 2025-12-26

**Decision:** Adopt BellwetherBooks comprehensive design system with full CSS variable architecture
**Context:** Initial design system was minimal; needed richer visual design to match production-ready BellwetherBooks app
**Options Considered:**
- Keep minimal design system
- Gradually enhance existing system
- Full adoption of BellwetherBooks design system
**Decision:** Full BellwetherBooks design system adoption
**Rationale:**
- Production-proven design system
- Comprehensive color palette (orange 50-900)
- Established shadow and elevation system
- Consistent typography scale
- Better visual hierarchy
- Professional 3D effects and depth
- Dotted grid background for texture
- Ready for dark mode
**Consequences:**
- Added CSS variables for all orange shades (50-900)
- Typography scale from xs (12px) to 7xl (72px)
- Font weight variables (normal, medium, semibold, bold)
- Border radius variables (button: 6px, card: 8px)
- Shadow system with elevation-sm
- Dotted grid background pattern
- All components updated to use new variables
- Book spine image asset added to public/images

## [3D Component Design Strategy] - 2025-12-26

**Decision:** Implement 3D effects using multi-layered gradients and complex shadows
**Context:** BellwetherBooks reference had sophisticated 3D visual design that needed replication
**Options Considered:**
- CSS 3D transforms
- Multi-layered div containers with gradients
- SVG-based depth effects
- Flat design with subtle shadows
**Decision:** Multi-layered containers with gradients and complex shadows
**Rationale:**
- Exact match with Figma specifications
- Better browser compatibility than 3D transforms
- Precise control over visual appearance
- Layer-based approach familiar to designers
- Works well with Tailwind utilities
- Performant (no 3D matrix calculations)
**Consequences:**
- PromptInput: 3 nested gradient layers
- BookCard: Book spine overlay + multiple shadow layers
- Toolbar: Gradient background + multi-layer shadows
- Upgrade button: Inset shadows + outer glow
- Shadow specifications: rgba with precise opacity values
- Border layers with white borders for depth
- Inline styles for complex shadow/gradient definitions

## [Editor Toolbar Position] - 2025-12-26

**Decision:** Fixed bottom center toolbar instead of top toolbar
**Context:** Figma design showed floating toolbar at bottom; needed to decide positioning strategy
**Options Considered:**
- Top sticky toolbar (traditional)
- Fixed bottom center (Figma spec)
- Context menu on selection
**Decision:** Fixed bottom center toolbar
**Rationale:**
- Matches Figma design exactly
- Better ergonomics (closer to typing area)
- Doesn't obstruct document title
- Modern design pattern (similar to mobile keyboards)
- Floating appearance adds visual interest
- Stays out of the way while writing
**Consequences:**
- Toolbar: fixed position at bottom
- Z-index: 10 for overlay
- Position: bottom-[29.66px], centered with translate-x-[-50%]
- Width: 697.37px (slightly narrower than document)
- All formatting icons included (18 tools)
- Gradient background matching PromptInput style
- Document container padding-bottom: 32 to prevent overlap

## [Component Organization] - 2025-12-25

**Decision:** Organize components by feature rather than by type
**Context:** Need to structure components for scalability and maintainability in the Bellweather app
**Options Considered:**
- By type: components/forms/, components/cards/, components/modals/
- By feature: components/auth/, components/books/, components/editor/
**Decision:** Feature-based organization
**Rationale:**
- Easier to locate related components
- Better code organization and encapsulation
- Aligns with Next.js App Router philosophy
- Clear separation of concerns
**Consequences:**
- All auth components in components/auth/
- All book-related in components/books/
- All editor-specific in components/editor/
- Layout components separate in components/layout/
- Generic UI in components/ui/

## [Books Routing Strategy] - 2025-12-25

**Decision:** Use query parameters instead of dynamic routes for books
**Context:** Need to maintain static build capability while supporting book navigation
**Options Considered:**
- Dynamic routes: /books/[bookId] and /editor/[bookId]
- Query params: /books?bookId=xxx and /editor?bookId=xxx
**Decision:** Query parameters
**Rationale:**
- Maintains static build (no need for generateStaticParams)
- Single page bundle for all books
- Better for SEO with server-side rendering
- Simpler middleware implementation
**Consequences:**
- URLs: /editor?bookId=proj-123&chapterId=ch-456
- Use useSearchParams() to access IDs
- All books share same page component
- Easy to add more query params in future

## [Authentication Approach] - 2025-12-25

**Decision:** Frontend-only JWT auth with localStorage (temporary) + React Context
**Context:** Need authentication while backend is not yet ready
**Options Considered:**
- NextAuth.js v5 (requires backend integration)
- Clerk (third-party service)
- Custom JWT with localStorage (frontend-only)
**Decision:** Custom JWT with localStorage temporarily
**Rationale:**
- Start building frontend without waiting for backend
- Easy migration path to httpOnly cookies when backend ready
- Full control over auth flow
- No third-party dependencies
**Consequences:**
- JWT stored in localStorage + cookie (for middleware)
- Mock OTP verification (accepts any 6-digit code)
- Ready to swap with real API calls
- Auth context provides: login, signup, verifyOTP, logout

## [State Management] - 2025-12-25

**Decision:** React Context API + Server Components
**Context:** Need state management for auth, books, and editor
**Options Considered:**
- Zustand
- Redux Toolkit
- TanStack Query + Context
- React Context only
**Decision:** React Context API
**Rationale:**
- No external dependencies needed
- Simple and sufficient for current scope
- Works well with Next.js Server Components
- Easy to understand and maintain
- Can add Zustand later if needed
**Consequences:**
- Created AuthProvider, BooksProvider, EditorProvider
- Custom hooks: useAuth, useBooks, useEditor
- Context wrapped at appropriate layout levels
- Client components where needed

## [UI Component Library] - 2025-12-25

**Decision:** Fresh shadcn/ui installation
**Context:** Need UI components consistent with Bellwether design
**Options Considered:**
- Migrate existing components from BellwetherBooks React app
- Fresh shadcn/ui installation
- Build custom components from scratch
**Decision:** Fresh shadcn/ui installation
**Rationale:**
- Clean start with latest shadcn components
- Proper Next.js 16 compatibility
- Customized with Bellwether theme from start
- Better TypeScript support
- Easier to maintain
**Consequences:**
- Installed 17 shadcn components
- Configured with orange primary color (#FF6321)
- DM Sans font throughout
- CSS variables for theming
- Tailwind CSS v4 integration

## [Design System] - 2025-12-25

**Decision:** Maintain BellwetherBooks design system (orange #FF6321, DM Sans)
**Context:** Need consistent branding across React and Next.js versions
**Decision:** Keep existing design tokens
**Rationale:**
- Brand consistency
- User familiarity
- Professional appearance
- Already proven design
**Consequences:**
- Primary color: hsl(18 96% 57%) = #FF6321
- Font: DM Sans (400, 500, 600, 700)
- Border radius: 12px (0.75rem)
- Full light + dark mode support
- CSS variables in globals.css

## [Route Groups Structure] - 2025-12-25

**Decision:** Three route groups: (auth), (main), (editor)
**Context:** Need different layouts for auth, main app, and editor
**Options Considered:**
- Single layout with conditional rendering
- Two layouts: public and authenticated
- Three layouts: auth, main, editor
**Decision:** Three separate route groups
**Rationale:**
- Auth needs two-column layout with carousel
- Main app needs header + collapsible sidebar
- Editor needs icon sidebar + closable right panel
- Clean separation of concerns
- No layout prop drilling
**Consequences:**
- app/(auth)/ - Two-column auth layout
- app/(main)/ - Header + MainSidebar layout
- app/(editor)/ - EditorSidebar + RightPanel layout
- Each group has its own layout.tsx
- BooksProvider wrapped at main and editor levels

## [Form Validation] - 2025-12-25

**Decision:** React Hook Form + Zod schemas
**Context:** Need robust form validation for auth and book creation
**Options Considered:**
- Formik + Yup
- React Hook Form + Zod
- Manual validation
**Decision:** React Hook Form + Zod
**Rationale:**
- Best performance (uncontrolled forms)
- Type-safe validation with Zod
- Built-in error handling
- Works perfectly with shadcn form components
- Industry standard
**Consequences:**
- Created validation schemas in lib/validators.ts
- Used zodResolver for all forms
- Type-safe form data with z.infer
- Consistent error messages

## [Initial Setup] - 2025-12-25

**Decision:** Project initialization and documentation structure
**Context:** Starting the Bellweather project with proper documentation tracking
**Consequences:** Established changelog and decision log for tracking development progress and important technical decisions
