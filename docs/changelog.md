# Changelog

This file tracks 2-3 important tasks and changes made to the Bellweather project. Check this file when implementing new features to understand recent modifications.

---

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
