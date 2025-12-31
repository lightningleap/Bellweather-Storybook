# Acquisition Bot Migration Checklist

> Migration from `/bellwether` to `/bellwether-nextJs`

## Overview

This document outlines the complete migration plan for moving the Acquisition Bot from the bellwether codebase to bellwether-nextJs with all functionality intact.

---

## Current State Comparison

| Feature | bellwether (Source) | bellwether-nextJs (Target) |
|---------|---------------------|---------------------------|
| Database | PostgreSQL + Drizzle ORM | None (mocked data) |
| AI Integration | Groq API (GPT-OSS 20B) | Mocked responses |
| Chat Interface | Full implementation | Basic AI chat panel |
| Authentication | NextAuth | Custom OTP (frontend only) |
| API Routes | Implemented | Not implemented |
| shadcn/ui | Yes | Yes |

---

## Migration Checklist

### Phase 1: Database Setup

- [ ] **1.1 Install Drizzle ORM dependencies**
  ```
  Dependencies to add:
  - drizzle-orm
  - drizzle-kit
  - @neondatabase/serverless (or pg for standard PostgreSQL)
  - dotenv
  ```

- [ ] **1.2 Create database schema**
  - Copy from: `bellwether/lib/db/schema.ts`
  - Tables needed:
    - `users` - User accounts
    - `sessions` - Chat sessions
    - `projects` - Project groupings
    - `author_data` - JSON blob for collected fields
    - `chat_messages` - Message history
    - `message_feedback` - Response ratings

- [ ] **1.3 Create database queries/helpers**
  - Copy from: `bellwether/lib/db/queries.ts`
  - Functions needed:
    - `getAuthorData(sessionId)`
    - `updateAuthorData(sessionId, data)`
    - `saveChatMessage(sessionId, role, content)`
    - `getChatMessages(sessionId)`
    - Session CRUD operations

- [ ] **1.4 Setup Drizzle config**
  - Create `drizzle.config.ts`
  - Configure database connection
  - Run initial migration

- [ ] **1.5 Environment variables**
  ```env
  DATABASE_URL=postgresql://...
  GROQ_API_KEY=...
  ```

---

### Phase 2: Core Bot Logic (lib/)

- [ ] **2.1 Copy schema definitions**
  - Source: `bellwether/lib/schema.ts`
  - Contains:
    - `AuthorDataFields` type (20 fields)
    - Phase definitions (8 phases)
    - Required fields list (9 fields)
    - Field metadata

- [ ] **2.2 Copy Groq integration**
  - Source: `bellwether/lib/groq.ts`
  - Contains:
    - Groq API client setup
    - `groqChatAndExtract()` function
    - System prompt with phase logic
    - Retry mechanism (3 attempts)
    - JSON extraction from responses

- [ ] **2.3 Copy utility functions**
  - Source: `bellwether/lib/utils.ts` (merge with existing)
  - Functions needed:
    - `calculateProgress()` - Progress percentage
    - `mergeAuthorData()` - Merge extracted data
    - `isFlowComplete()` - Check completion
    - `getNextField()` - Determine next question

- [ ] **2.4 Copy quick reply options**
  - Source: `bellwether/lib/quickReplyOptions.ts`
  - Contains button options for:
    - Writing experience
    - Book genres
    - Manuscript status
    - Editing levels
    - Design needs
    - Formats (multi-select)
    - Distribution
    - Marketing
    - Timeline
    - Budget ranges
    - Bellwether features

- [ ] **2.5 Copy visual triggers**
  - Source: `bellwether/lib/visualTriggers.ts`
  - Conditional display logic for:
    - Pricing breakdown
    - Timeline visualization
    - ROI projection
    - Progress milestones

- [ ] **2.6 Copy persona generation prompt**
  - Source: `bellwether/lib/prompts/personaGeneration.ts`
  - Author persona extraction logic

---

### Phase 3: API Routes

- [ ] **3.1 Create main chat API**
  - Source: `bellwether/app/api/chat/route.ts`
  - Path: `app/api/chat/route.ts`
  - Handles authenticated user chat

- [ ] **3.2 Create trial chat API**
  - Source: `bellwether/app/api/trial-chat/route.ts`
  - Path: `app/api/trial-chat/route.ts`
  - Handles unauthenticated trial chat

- [ ] **3.3 Create persona generation API**
  - Source: `bellwether/app/api/generate-persona/route.ts`
  - Path: `app/api/generate-persona/route.ts`
  - Generates author profile from conversation

- [ ] **3.4 Create session management APIs**
  - `app/api/sessions/route.ts` - Create/list sessions
  - `app/api/sessions/[sessionId]/route.ts` - Get/update session

---

### Phase 4: Components

- [ ] **4.1 Create/Update ChatInterface component**
  - Source: `bellwether/components/ChatInterface.tsx`
  - For authenticated users
  - Replace or enhance existing `ai-chat-panel.tsx`

- [ ] **4.2 Create TrialChatInterface component**
  - Source: `bellwether/components/TrialChatInterface.tsx`
  - For trial users
  - Enhanced with visuals and quick replies

- [ ] **4.3 Create MessageBubble component**
  - Source: `bellwether/components/MessageBubble.tsx`
  - User/Assistant message styling

- [ ] **4.4 Create ProgressSidebar component**
  - Source: `bellwether/components/ProgressSidebar.tsx`
  - Shows:
    - Progress bar
    - Collected data display
    - Field checkmarks
    - Generate persona button

- [ ] **4.5 Create MessageFeedback component**
  - Source: `bellwether/components/MessageFeedback.tsx`
  - Thumbs up/down + reasons

- [ ] **4.6 Create QuickReplyButtons component**
  - Source: `bellwether/components/QuickReplyButtons.tsx`
  - Clickable option buttons

- [ ] **4.7 Create Visual components**
  - Source: `bellwether/components/visuals/`
  - Components:
    - `PricingBreakdown.tsx`
    - `TimelineVisualization.tsx`
    - `ROIProjection.tsx`
    - `ProgressIndicator.tsx`

---

### Phase 5: Pages/Routes

- [ ] **5.1 Create authenticated chat page**
  - Source: `bellwether/app/chat/[sessionId]/page.tsx`
  - Path: `app/(main)/chat/[sessionId]/page.tsx`

- [ ] **5.2 Create trial chat page**
  - Source: `bellwether/app/trial/[sessionId]/page.tsx`
  - Path: `app/trial/[sessionId]/page.tsx`
  - Book spine navigation UI
  - Spiral binding design

- [ ] **5.3 Create sessions list page**
  - List all user sessions
  - Resume previous conversations

- [ ] **5.4 Update middleware**
  - Add chat routes to protected paths
  - Allow trial routes for unauthenticated users

---

### Phase 6: Integration & Polish

- [ ] **6.1 Add Groq package**
  ```
  npm install groq-sdk
  ```

- [ ] **6.2 Update types**
  - Add chat-related types to `/types/`
  - Ensure type consistency

- [ ] **6.3 Update navigation**
  - Add chat/acquisition bot links to header/sidebar
  - Update landing page CTA to point to trial

- [ ] **6.4 Handle localStorage for trial**
  - Trial data storage keys
  - Session validation
  - Data persistence

- [ ] **6.5 Style consistency**
  - Match existing theme
  - Responsive design
  - Dark mode support (if applicable)

- [ ] **6.6 Error handling**
  - API error states
  - Network failure recovery
  - User-friendly error messages

---

### Phase 7: Testing & Verification

- [ ] **7.1 Test trial flow**
  - Start new trial session
  - Complete conversation
  - Verify data collection

- [ ] **7.2 Test authenticated flow**
  - Login → Start session
  - Messages persist to database
  - Resume previous session

- [ ] **7.3 Test quick replies**
  - All button options work
  - Multi-select for formats

- [ ] **7.4 Test visuals**
  - Pricing appears after word count
  - Timeline appears after timeline selection
  - ROI appears after budget selection

- [ ] **7.5 Test persona generation**
  - Generate persona after 2+ messages
  - Verify all categories populated

- [ ] **7.6 Test edge cases**
  - Empty responses
  - Very long responses
  - Network interruptions
  - Session expiration

---

## Files to Copy Summary

### From `bellwether/lib/`
| Source File | Target Path | Notes |
|-------------|-------------|-------|
| `schema.ts` | `lib/acquisition/schema.ts` | Author data types |
| `groq.ts` | `lib/acquisition/groq.ts` | AI integration |
| `quickReplyOptions.ts` | `lib/acquisition/quickReplyOptions.ts` | Button options |
| `visualTriggers.ts` | `lib/acquisition/visualTriggers.ts` | Visual logic |
| `prompts/personaGeneration.ts` | `lib/acquisition/prompts/personaGeneration.ts` | Persona prompt |
| `db/schema.ts` | `lib/db/schema.ts` | Database schema |
| `db/queries.ts` | `lib/db/queries.ts` | Database queries |

### From `bellwether/components/`
| Source File | Target Path | Notes |
|-------------|-------------|-------|
| `ChatInterface.tsx` | `components/acquisition/ChatInterface.tsx` | Auth chat |
| `TrialChatInterface.tsx` | `components/acquisition/TrialChatInterface.tsx` | Trial chat |
| `MessageBubble.tsx` | `components/acquisition/MessageBubble.tsx` | Message UI |
| `ProgressSidebar.tsx` | `components/acquisition/ProgressSidebar.tsx` | Progress |
| `MessageFeedback.tsx` | `components/acquisition/MessageFeedback.tsx` | Feedback |
| `QuickReplyButtons.tsx` | `components/acquisition/QuickReplyButtons.tsx` | Quick replies |
| `visuals/*` | `components/acquisition/visuals/*` | All visuals |

### From `bellwether/app/api/`
| Source File | Target Path | Notes |
|-------------|-------------|-------|
| `chat/route.ts` | `app/api/chat/route.ts` | Chat API |
| `trial-chat/route.ts` | `app/api/trial-chat/route.ts` | Trial API |
| `generate-persona/route.ts` | `app/api/generate-persona/route.ts` | Persona API |

### From `bellwether/app/`
| Source File | Target Path | Notes |
|-------------|-------------|-------|
| `chat/[sessionId]/page.tsx` | `app/(main)/chat/[sessionId]/page.tsx` | Chat page |
| `trial/[sessionId]/page.tsx` | `app/trial/[sessionId]/page.tsx` | Trial page |

---

## Dependencies to Add

```json
{
  "dependencies": {
    "drizzle-orm": "^0.38.x",
    "@neondatabase/serverless": "^0.10.x",
    "groq-sdk": "^0.8.x"
  },
  "devDependencies": {
    "drizzle-kit": "^0.30.x"
  }
}
```

---

## Environment Variables Required

```env
# Database
DATABASE_URL=postgresql://user:password@host:5432/database

# Groq AI
GROQ_API_KEY=gsk_xxxxxxxxxxxxx

# Optional
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Estimated Effort

| Phase | Tasks | Complexity |
|-------|-------|------------|
| Phase 1: Database | 5 | Medium |
| Phase 2: Core Logic | 6 | Low (copy) |
| Phase 3: API Routes | 4 | Medium |
| Phase 4: Components | 7 | Medium |
| Phase 5: Pages | 4 | Low |
| Phase 6: Integration | 6 | Medium |
| Phase 7: Testing | 6 | Medium |

**Total Tasks: 38**

---

## Notes

1. **Authentication Integration**: The current bellwether-nextJs uses custom OTP auth, not NextAuth. Session management may need adjustment.

2. **Existing AI Chat**: There's already an `ai-chat-panel.tsx` in the editor. Decide whether to:
   - Replace it with acquisition bot
   - Keep both separate (editor chat vs acquisition chat)
   - Merge functionality

3. **Database Choice**: bellwether uses Neon serverless PostgreSQL. You can use the same or configure for standard PostgreSQL.

4. **Styling**: Both projects use shadcn/ui, so component styles should be compatible.

---

## Ready to Proceed?

Once this checklist is reviewed and approved, we can begin the migration phase by phase.
