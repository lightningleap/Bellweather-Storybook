import { eq, desc, and } from 'drizzle-orm';
import { db } from './index';
import * as schema from './schema';
import { AuthorDataFields } from '@/types/acquisition';
import { BELLWETHER_FLOW } from '../acquisition/schema';

// ====================
// User Functions
// ====================

/**
 * Get user by email
 */
export async function getUserByEmail(email: string) {
  const [user] = await db.select().from(schema.users).where(eq(schema.users.email, email)).limit(1);
  return user || null;
}

/**
 * Get user by ID
 */
export async function getUserById(userId: string | number) {
  const id = typeof userId === 'string' ? parseInt(userId) : userId;
  const [user] = await db.select().from(schema.users).where(eq(schema.users.userId, id)).limit(1);
  return user || null;
}

/**
 * Create a new user
 */
export async function createUser(email: string, fullName: string, passwordHash: string) {
  const users = (await db
    .insert(schema.users)
    .values({
      email,
      fullName,
      passwordHash,
    })
    .returning()) as unknown as Array<{
      userId: number;
      email: string;
      fullName: string;
      passwordHash: string;
      role: string | null;
      agentTier: string | null;
      invitedBy: number | null;
      createdAt: Date | null;
      lastLogin: Date | null;
      isActive: boolean | null;
    }>;
  return users[0];
}

// ====================
// Project Functions
// ====================

/**
 * Create a new project for a user
 */
export async function createProject(userId: number, projectName: string, projectDescription?: string) {
  console.log('[createProject] Creating project for userId:', userId, 'name:', projectName);

  const [project] = await db
    .insert(schema.projects)
    .values({
      userId,
      projectName,
      projectDescription: projectDescription || null,
    })
    .returning();

  console.log('[createProject] Project created:', project.projectId);
  return project;
}

/**
 * Get all projects for a user
 */
export async function getUserProjects(userId: string | number) {
  const id = typeof userId === 'string' ? parseInt(userId) : userId;
  console.log('[getUserProjects] Fetching projects for userId:', id);

  const projects = await db
    .select()
    .from(schema.projects)
    .where(eq(schema.projects.userId, id))
    .orderBy(desc(schema.projects.createdAt));

  console.log('[getUserProjects] Found', projects.length, 'projects for userId:', id);
  return projects;
}

/**
 * Get project by ID
 */
export async function getProjectById(projectId: string) {
  const [project] = await db
    .select()
    .from(schema.projects)
    .where(eq(schema.projects.projectId, projectId))
    .limit(1);

  return project || null;
}

/**
 * Get project count for a user
 */
export async function getProjectCount(userId: string | number): Promise<number> {
  const id = typeof userId === 'string' ? parseInt(userId) : userId;
  const projects = await db
    .select()
    .from(schema.projects)
    .where(and(eq(schema.projects.userId, id), eq(schema.projects.isActive, true)));

  return projects.length;
}

/**
 * Get all sessions in a project
 */
export async function getProjectSessions(projectId: string) {
  console.log('[getProjectSessions] Fetching sessions for projectId:', projectId);

  const sessions = await db
    .select()
    .from(schema.sessions)
    .where(eq(schema.sessions.projectId, projectId))
    .orderBy(desc(schema.sessions.createdAt));

  console.log('[getProjectSessions] Found', sessions.length, 'sessions');
  return sessions;
}

/**
 * Update project details
 */
export async function updateProject(
  projectId: string,
  data: { projectName?: string; projectDescription?: string; isActive?: boolean }
) {
  console.log('[updateProject] Updating project:', projectId);

  const [updatedProject] = await db
    .update(schema.projects)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(eq(schema.projects.projectId, projectId))
    .returning();

  console.log('[updateProject] Project updated:', projectId);
  return updatedProject;
}

/**
 * Delete a project (will cascade delete sessions)
 */
export async function deleteProject(projectId: string) {
  console.log('[deleteProject] Deleting project:', projectId);

  await db.delete(schema.projects).where(eq(schema.projects.projectId, projectId));

  console.log('[deleteProject] Project deleted:', projectId);
}

/**
 * Get or create a "Shared Sessions" project for an author
 * This is a special project where shared sessions from agents are placed
 */
export async function getOrCreateSharedProject(authorUserId: number): Promise<string> {
  console.log('[getOrCreateSharedProject] Looking for shared project for author:', authorUserId);

  // Look for existing shared project (by name convention)
  const existingProjects = await db
    .select()
    .from(schema.projects)
    .where(
      and(
        eq(schema.projects.userId, authorUserId),
        eq(schema.projects.projectName, 'Shared Sessions')
      )
    )
    .limit(1);

  if (existingProjects.length > 0) {
    console.log('[getOrCreateSharedProject] Found existing shared project:', existingProjects[0].projectId);
    return existingProjects[0].projectId;
  }

  // Create new shared project
  console.log('[getOrCreateSharedProject] Creating new shared project');
  const [newProject] = await db
    .insert(schema.projects)
    .values({
      userId: authorUserId,
      projectName: 'Shared Sessions',
      projectDescription: 'Sessions shared with you by agents',
    })
    .returning();

  console.log('[getOrCreateSharedProject] Created shared project:', newProject.projectId);
  return newProject.projectId;
}

// ====================
// Session Functions
// ====================

/**
 * Get session by ID
 */
export async function getSession(sessionId: string) {
  const [session] = await db.select().from(schema.sessions).where(eq(schema.sessions.sessionId, sessionId)).limit(1);
  return session || null;
}

/**
 * Get all sessions for a user
 */
export async function getUserSessions(userId: string | number) {
  const id = typeof userId === 'string' ? parseInt(userId) : userId;
  console.log('[getUserSessions] Fetching sessions for userId:', id);

  const sessions = await db.select().from(schema.sessions).where(eq(schema.sessions.userId, id)).orderBy(desc(schema.sessions.createdAt));

  console.log('[getUserSessions] Found', sessions.length, 'sessions for userId:', id);
  if (sessions.length > 0) {
    console.log('[getUserSessions] Session IDs:', sessions.map(s => s.sessionId));
  }

  return sessions;
}

/**
 * Create a session for an authenticated user
 */
export async function createAuthSession(userId: string | number, sessionName: string, projectId: string) {
  const id = typeof userId === 'string' ? parseInt(userId) : userId;
  console.log('[createAuthSession] Starting session creation for userId:', id, 'projectId:', projectId);

  // Create session
  const [session] = await db
    .insert(schema.sessions)
    .values({
      userId: id,
      projectId,
      sessionName: sessionName || `Session ${new Date().toLocaleDateString()}`,
    })
    .returning();

  console.log('[createAuthSession] Session record created:', {
    sessionId: session.sessionId,
    sessionName: session.sessionName,
    userId: session.userId
  });

  // Initialize author_data with empty JSON
  const initialData: AuthorDataFields = {};
  BELLWETHER_FLOW.forEach((field) => {
    initialData[field.id as keyof AuthorDataFields] = null;
  });

  await db.insert(schema.authorData).values({
    sessionId: session.sessionId,
    userId: id,
    dataJson: initialData,
  });

  console.log('[createAuthSession] Author data initialized for session:', session.sessionId);

  // Save initial greeting message
  const initialGreeting = `Hi there! Welcome to Bellwether Books! Let's chat about your book. We'll go step by step — starting with your manuscript.`;
  await db.insert(schema.chatMessages).values({
    sessionId: session.sessionId,
    role: 'assistant',
    content: initialGreeting,
  });

  console.log('[createAuthSession] Initial greeting message saved for session:', session.sessionId);
  console.log('[createAuthSession] Session creation completed successfully:', session.sessionId);

  return session.sessionId;
}

/**
 * Create a new session (legacy function for compatibility)
 */
export async function createSession(name: string, email: string): Promise<string> {
  console.log('[createSession] Creating session with name:', name, 'email:', email);

  // Create or update user
  const existingUser = await getUserByEmail(email);
  let userId: number;

  if (existingUser) {
    console.log('[createSession] Found existing user:', existingUser.userId);
    userId = existingUser.userId;
  } else {
    console.log('[createSession] Creating new user for email:', email);
    const newUser = await createUser(email, name, '');
    console.log('[createSession] New user created:', newUser.userId);
    userId = newUser.userId;
  }

  // Get or create a default project for this user
  console.log('[createSession] Getting/creating default project for user:', userId);
  const userProjects = await getUserProjects(userId);
  let projectId: string;

  if (userProjects.length > 0) {
    projectId = userProjects[0].projectId;
    console.log('[createSession] Using existing project:', projectId);
  } else {
    const newProject = await createProject(userId, 'My First Project', 'Default project');
    projectId = newProject.projectId;
    console.log('[createSession] Created new project:', projectId);
  }

  console.log('[createSession] Calling createAuthSession with userId:', userId, 'projectId:', projectId);
  // Create session using the auth session function
  const sessionId = await createAuthSession(userId, `Session ${new Date().toLocaleDateString()}`, projectId);
  console.log('[createSession] Session created successfully:', sessionId);
  return sessionId;
}

// ====================
// Author Data Functions
// ====================

/**
 * Get author data for a session
 */
export async function getAuthorData(sessionId: string): Promise<AuthorDataFields> {
  const [result] = await db.select().from(schema.authorData).where(eq(schema.authorData.sessionId, sessionId)).limit(1);

  if (!result) {
    // Return empty data structure if not found
    const emptyData: AuthorDataFields = {};
    BELLWETHER_FLOW.forEach((field) => {
      emptyData[field.id as keyof AuthorDataFields] = null;
    });
    return emptyData;
  }

  return result.dataJson as AuthorDataFields;
}

/**
 * Update author data JSON for a session
 */
export async function updateAuthorData(sessionId: string, data: AuthorDataFields): Promise<void> {
  await db
    .update(schema.authorData)
    .set({
      dataJson: data,
      updatedAt: new Date(),
    })
    .where(eq(schema.authorData.sessionId, sessionId));
}

// ====================
// Chat Message Functions
// ====================

/**
 * Save a chat message to the database
 */
export async function saveChatMessage(sessionId: string, role: 'user' | 'assistant' | 'system', content: string): Promise<void> {
  await db.insert(schema.chatMessages).values({
    sessionId,
    role,
    content,
  });
}

/**
 * Get all chat messages for a session
 */
export async function getChatMessages(sessionId: string) {
  const messages = await db
    .select({
      role: schema.chatMessages.role,
      content: schema.chatMessages.content,
    })
    .from(schema.chatMessages)
    .where(eq(schema.chatMessages.sessionId, sessionId))
    .orderBy(schema.chatMessages.createdAt);

  return messages as Array<{ role: 'user' | 'assistant' | 'system'; content: string }>;
}

// ====================
// Subscription Functions
// ====================

/**
 * Get active subscription for a user
 */
export async function getActiveSubscription(userId: string | number) {
  const id = typeof userId === 'string' ? parseInt(userId) : userId;
  const [subscription] = await db
    .select()
    .from(schema.subscriptions)
    .where(and(eq(schema.subscriptions.userId, id), eq(schema.subscriptions.status, 'active')))
    .orderBy(desc(schema.subscriptions.createdAt))
    .limit(1);

  return subscription || null;
}

/**
 * Get all subscriptions for a user
 */
export async function getUserSubscriptions(userId: string | number) {
  const id = typeof userId === 'string' ? parseInt(userId) : userId;
  const subscriptions = await db
    .select()
    .from(schema.subscriptions)
    .where(eq(schema.subscriptions.userId, id))
    .orderBy(desc(schema.subscriptions.createdAt));

  return subscriptions;
}

/**
 * Create a new subscription
 */
export async function createSubscription(data: schema.NewSubscription) {
  const [subscription] = await db.insert(schema.subscriptions).values(data).returning();
  return subscription;
}

/**
 * Update subscription status
 */
export async function updateSubscription(polarSubscriptionId: string, data: Partial<schema.NewSubscription>) {
  const [subscription] = await db
    .update(schema.subscriptions)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(eq(schema.subscriptions.polarSubscriptionId, polarSubscriptionId))
    .returning();

  return subscription;
}

/**
 * Get subscription by Polar subscription ID
 */
export async function getSubscriptionByPolarId(polarSubscriptionId: string) {
  const [subscription] = await db.select().from(schema.subscriptions).where(eq(schema.subscriptions.polarSubscriptionId, polarSubscriptionId)).limit(1);

  return subscription || null;
}

/**
 * Check if user has active subscription
 */
export async function hasActiveSubscription(userId: string | number): Promise<boolean> {
  const subscription = await getActiveSubscription(userId);
  return subscription !== null;
}

/**
 * Get user by email (from subscription customer email)
 */
export async function getUserBySubscriptionEmail(customerEmail: string) {
  return getUserByEmail(customerEmail);
}

// ====================
// Trial Functions
// ====================

/**
 * Check if user can create a new session based on trial/subscription status
 */
export async function canCreateSession(userId: string | number): Promise<{
  allowed: boolean;
  reason: 'subscribed' | 'trial' | 'trial_expired' | 'no_access';
  sessionsRemaining?: number;
  sessionsUsed?: number;
  sessionsLimit?: number;
  message?: string;
}> {
  const id = typeof userId === 'string' ? parseInt(userId) : userId;
  const user = await getUserById(id);

  if (!user) {
    return {
      allowed: false,
      reason: 'no_access',
      message: 'User not found',
    };
  }

  // Check if user has active subscription
  const hasSubscription = await hasActiveSubscription(id);

  // Subscribed users have unlimited sessions
  if (hasSubscription) {
    return {
      allowed: true,
      reason: 'subscribed',
    };
  }

  // Check trial status
  if (user.isTrialActive) {
    const remaining = user.trialSessionsLimit - user.trialSessionsUsed;

    if (remaining > 0) {
      return {
        allowed: true,
        reason: 'trial',
        sessionsRemaining: remaining,
        sessionsUsed: user.trialSessionsUsed,
        sessionsLimit: user.trialSessionsLimit,
      };
    } else {
      return {
        allowed: false,
        reason: 'trial_expired',
        sessionsUsed: user.trialSessionsUsed,
        sessionsLimit: user.trialSessionsLimit,
        message: 'Your free trial has ended. Subscribe to create more sessions.',
      };
    }
  }

  // No trial, no subscription
  return {
    allowed: false,
    reason: 'no_access',
    message: 'No active subscription or trial',
  };
}

/**
 * Increment trial session usage counter
 */
export async function incrementTrialUsage(userId: string | number): Promise<void> {
  const id = typeof userId === 'string' ? parseInt(userId) : userId;

  // Get current user to increment
  const user = await getUserById(id);
  if (!user) return;

  await db
    .update(schema.users)
    .set({
      trialSessionsUsed: user.trialSessionsUsed + 1,
    })
    .where(eq(schema.users.userId, id));
}

/**
 * Get user's trial status
 */
export async function getUserTrialStatus(userId: string | number) {
  const id = typeof userId === 'string' ? parseInt(userId) : userId;
  const user = await getUserById(id);

  if (!user) {
    return null;
  }

  return {
    isActive: user.isTrialActive,
    sessionsUsed: user.trialSessionsUsed,
    sessionsLimit: user.trialSessionsLimit,
    sessionsRemaining: user.trialSessionsLimit - user.trialSessionsUsed,
  };
}

/**
 * Deactivate trial when user subscribes
 */
export async function deactivateTrialOnSubscription(userId: string | number): Promise<void> {
  const id = typeof userId === 'string' ? parseInt(userId) : userId;

  await db
    .update(schema.users)
    .set({
      isTrialActive: false,
    })
    .where(eq(schema.users.userId, id));
}

/**
 * Reactivate trial when subscription is canceled (user goes back to trial limits)
 */
export async function reactivateTrialOnCancellation(userId: string | number): Promise<void> {
  const id = typeof userId === 'string' ? parseInt(userId) : userId;

  await db
    .update(schema.users)
    .set({
      isTrialActive: true,
    })
    .where(eq(schema.users.userId, id));
}

// ====================
// Session Sharing Functions
// ====================

/**
 * Get all sessions shared with an author
 */
export async function getSharedSessionsForAuthor(authorUserId: string | number) {
  const id = typeof authorUserId === 'string' ? parseInt(authorUserId) : authorUserId;

  const sharedSessions = await db
    .select({
      shareId: schema.sessionShares.id,
      sessionId: schema.sessionShares.sessionId,
      sessionName: schema.sessions.sessionName,
      agentUserId: schema.sessionShares.agentUserId,
      agentName: schema.users.fullName,
      agentEmail: schema.users.email,
      acceptedAt: schema.sessionShares.acceptedAt,
      createdAt: schema.sessionShares.createdAt,
      expiresAt: schema.sessionShares.expiresAt,
      isCompleted: schema.sessions.isCompleted,
    })
    .from(schema.sessionShares)
    .innerJoin(schema.sessions, eq(schema.sessionShares.sessionId, schema.sessions.sessionId))
    .innerJoin(schema.users, eq(schema.sessionShares.agentUserId, schema.users.userId))
    .where(
      and(
        eq(schema.sessionShares.authorUserId, id),
        eq(schema.sessionShares.status, 'active')
      )
    )
    .orderBy(desc(schema.sessionShares.acceptedAt));

  // Get message counts for each shared session
  const sessionIds = sharedSessions.map((s) => s.sessionId);

  if (sessionIds.length > 0) {
    const messageCounts = await Promise.all(
      sessionIds.map(async (sessionId) => {
        const messages = await db
          .select()
          .from(schema.chatMessages)
          .where(eq(schema.chatMessages.sessionId, sessionId));
        return { sessionId, count: messages.length };
      })
    );

    const countMap = new Map(messageCounts.map((m) => [m.sessionId, m.count]));

    return sharedSessions.map((s) => ({
      ...s,
      messageCount: countMap.get(s.sessionId) || 0,
    }));
  }

  return sharedSessions.map((s) => ({ ...s, messageCount: 0 }));
}
