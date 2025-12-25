# Decision Log

This file tracks product-level important decisions for the Bellweather project, including major library additions, significant features (OAuth, Resend integration, etc.), and architectural choices. Check this file when implementing new features to understand the project's technical direction and past decisions.

---

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
