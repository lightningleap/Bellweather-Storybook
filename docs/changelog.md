# Changelog

This file tracks 2-3 important tasks and changes made to the Bellweather project. Check this file when implementing new features to understand recent modifications.

---

## [0.3.0] - 2025-12-26

### Phase 7: Figma Design Implementation - Pixel-Perfect UI ✅
- **Redesigned** Editor interface to match Figma specifications exactly:
  - Added dotted grid background pattern (8.77px spacing, #D1D5DC color)
  - Updated EditorToolbar with Figma icon assets (17 toolbar icons)
  - Toolbar: gradient background, border layers, precise shadows
  - Toolbar icons: Undo/Redo, Bold, Italic, Underline, Strikethrough, Lists, Align, Link, Code, Mention, Emoji, Image, Video
  - Fixed bottom positioning (29.66px from bottom, 697.37px width)
- **Enhanced** EditorSidebar:
  - Updated width to 84px for better spacing
  - Custom book icon SVG for logo/home button
  - Increased button sizes (68px × 84px)
  - Larger icons (28px) with proper stroke width
  - Added footer section with proper spacing (76px header height)
- **Redesigned** AI Chat Panel (right panel):
  - User messages: gray bubbles (#F9FAFB), right-aligned, max-width 260px
  - Assistant messages: white bubbles, full width
  - Action buttons: Copy, Thumbs Up, Thumbs Down (below each AI message)
  - Chat input: rounded container with orange submit button
  - Sample conversation data matching Figma content
  - Proper typography (DM Sans throughout)
- **Updated** RightPanel styling:
  - Width: 406px (from Figma spec)
  - Added rounded corners and shadow
  - Updated header with proper border and spacing
  - Better content padding (8px margin around panel)
- **Redesigned** Signup page to match Figma design:
  - Updated SignupForm with exact Figma styling
  - Email input with proper border (#CAD5E2) and rounded corners
  - Sign Up button with gradient effects and text shadow
  - Proper spacing and typography
- **Added** Social login buttons with Figma assets:
  - SSO, Facebook, Google, Apple, Microsoft icons
  - Each button has label below (14px Manrope font)
  - Icons positioned with exact Figma coordinates
  - Buttons: 47px × 47px, #F1F5F9 background
  - Labels centered below each icon
- **Enhanced** AuthCarousel:
  - Updated headline typography (32px DM Sans Medium)
  - Proper pagination dots (8px circles, 24px active)
  - Figma illustration fallback support
  - Smooth transitions between slides
- **Fixed** TypeScript compilation errors:
  - Fixed ref callback in OTP verification (void return type)
  - Fixed HeadersInit type issue in API client (Record<string, string>)
  - All components now compile without errors
- **Improved** Navigation:
  - Fixed home button in EditorHeader and EditorSidebar
  - Added console logs for debugging
  - Added cursor-pointer class for better UX

## [0.2.0] - 2025-12-26

### Phase 6: UI Redesign - BellwetherBooks Design System Integration ✅
- **Enhanced** Design system with comprehensive CSS variables from BellwetherBooks reference
- **Added** Full orange color palette (50-900 shades) with CSS variables
- **Implemented** Dotted grid background pattern using radial gradients
- **Migrated** Font loading from CSS @import to Next.js font system (DM Sans, Inter, Just Me Again Down Here, Plus Jakarta Sans)
- **Redesigned** PromptInput component with 3D gradient multi-layered design:
  - Multi-layered gradient backgrounds (#e9e9e9 to #ffffff)
  - 140px fixed height with precise padding layers
  - Complex shadow system with multiple border layers
  - 3D button effect with nested gradient containers
  - Inter font for input text
- **Redesigned** BookCard component with 3D book rendering:
  - Realistic book spine image overlay
  - Multi-layer shadow system for depth (outer + inset shadows)
  - Precise dimensions (226.742px × 150.465px)
  - Border styling (0.697px for covers, 0.261px for placeholders)
- **Enhanced** DashboardGreeting component:
  - Rotated emoji (8deg) for personality
  - Just Me Again Down Here cursive font for greeting
  - Proper spacing and typography (36px main heading)
  - Exact color matching (#030712)
- **Updated** Button component with enhanced styling:
  - CSS variable-based border radius (var(--radius-button))
  - Improved focus states with 3px ring effects
  - Better transition handling (colors → all)
  - Enhanced dark mode support
- **Redesigned** Editor interface to match Figma specifications:
  - Created EditorHeader with home button, title, and "Upgrade ★ 100" button
  - Updated TextEditor with document frame style (752px white containers)
  - Redesigned EditorToolbar as fixed bottom toolbar with all formatting icons
  - Document frames with proper shadows, borders, and padding
  - Title (30px DM Sans), Subtitle (20px DM Sans), Body (16px Plus Jakarta Sans)
  - Added second document frame for preview/comparison
- **Enhanced** Typography system:
  - Base typography with proper font families and weights
  - CSS variables for all font sizes (7xl to xs)
  - Font weight variables (normal, medium, semibold, bold)
- **Added** Shadow and elevation system with CSS variables
- **Fixed** CSS parsing errors by migrating to Next.js font system

## [0.1.0] - 2025-12-25

### Phase 5: Editor Workspace ✅
- **Added** Editor context for state management (current book, chapter, right panel)
- **Added** EditorSidebar with icon-based navigation (AI Chat, Editor, Outline, Design, Review, Assets)
- **Added** RightPanel component with closable AI Chat and Outline views
- **Added** TextEditor with auto-save (500ms debounce)
- **Added** EditorToolbar with formatting controls (Bold, Italic, Lists, Undo/Redo)
- **Added** ChapterNav with dropdown chapter selector
- **Added** WordCount component with real-time statistics
- **Added** AIChatPanel with message history and mock responses
- **Added** OutlinePanel with hierarchical book structure
- **Implemented** Editor page with query param routing (?bookId=xxx&chapterId=xxx)

### Phase 4: Main Application ✅
- **Added** Books context for managing book data and CRUD operations
- **Added** DashboardGreeting with personalized time-based greeting
- **Added** PromptInput component for AI interactions
- **Added** BookCard with cover images and click-to-edit
- **Added** BookGrid with responsive layout and loading skeletons
- **Added** CreateBookDialog for new book creation
- **Implemented** Home page with dashboard, prompt input, and book preview
- **Implemented** My Books page with search functionality and full book library
- **Added** 4 mock books for development (Untitled, Steve Jobs, The Martian, A Million To One)

### Phase 3: Authentication ✅
- **Added** Auth context with login, signup, OTP verification, and logout
- **Added** LoginForm component with email/password validation
- **Added** SignupForm component with optional name field
- **Added** OTPVerification component with 6-digit input
- **Added** AuthCarousel with auto-rotating feature slides
- **Implemented** Sign in page with social auth placeholders
- **Implemented** Sign up page with account creation
- **Implemented** OTP verification page
- **Added** Form validation using React Hook Form + Zod
- **Added** JWT token management in localStorage and cookies

### Phase 2: Core UI Components ✅
- **Installed** 17 shadcn/ui components (button, input, card, dialog, form, etc.)
- **Added** Logo component with Bellwether branding
- **Added** Header component with upgrade button
- **Added** MainSidebar with collapsible navigation
- **Added** SidebarProvider for sidebar state management
- **Created** Main app layout with sidebar and header
- **Created** Auth layout with two-column design

### Phase 1: Foundation Setup ✅
- **Initialized** Next.js 16 project with App Router
- **Configured** shadcn/ui with Bellwether orange theme (#FF6321)
- **Set up** Design system in globals.css with CSS variables
- **Installed** DM Sans font (400, 500, 600, 700 weights)
- **Created** Utility functions (cn, time formatting, auth helpers)
- **Added** TypeScript type definitions for auth, books, and API
- **Implemented** Middleware for protected route authentication
- **Created** API client with mock responses
- **Set up** Project folder structure (components, contexts, hooks, lib, types)
