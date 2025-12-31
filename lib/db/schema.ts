import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  text,
  serial,
  jsonb,
  integer,
  boolean,
  index,
  numeric,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// User roles enum
export const userRoleEnum = ["admin", "agent", "author"] as const;
export type UserRole = (typeof userRoleEnum)[number];

// Users table - matches existing structure
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const users: any = pgTable(
  "users",
  {
    userId: serial("user_id").primaryKey(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    passwordHash: varchar("password_hash", { length: 255 }).notNull(),
    fullName: varchar("full_name", { length: 255 }),
    role: varchar("role", { length: 20 }).notNull().default("author"), // 'admin' | 'agent' | 'author'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    invitedBy: integer("invited_by").references((): any => users.userId), // For agents: who invited them
    agentTier: varchar("agent_tier", { length: 20 }), // Admin-assigned base tier for agents
    createdAt: timestamp("created_at").defaultNow(),
    lastLogin: timestamp("last_login"),
    isActive: boolean("is_active").default(true),
    // Free trial fields
    trialSessionsUsed: integer("trial_sessions_used").default(0).notNull(),
    trialSessionsLimit: integer("trial_sessions_limit").default(3).notNull(),
    isTrialActive: boolean("is_trial_active").default(true).notNull(),
  },
  (table) => ({
    emailIdx: index("idx_users_email").on(table.email),
    roleIdx: index("idx_users_role").on(table.role),
  })
);

// Projects table - sits between users and sessions
export const projects = pgTable(
  "projects",
  {
    projectId: uuid("project_id").primaryKey().defaultRandom(),
    userId: integer("user_id")
      .references(() => users.userId, { onDelete: "cascade" })
      .notNull(),
    projectName: varchar("project_name", { length: 255 }).notNull(),
    projectDescription: text("project_description"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
    isActive: boolean("is_active").default(true),
  },
  (table) => ({
    userIdIdx: index("idx_projects_user").on(table.userId),
    projectIdIdx: index("idx_projects_id").on(table.projectId),
  })
);

// Sessions table - matches existing structure
export const sessions = pgTable(
  "sessions",
  {
    sessionId: uuid("session_id").primaryKey().defaultRandom(),
    projectId: uuid("project_id")
      .references(() => projects.projectId, { onDelete: "cascade" })
      .notNull(),
    userId: integer("user_id").references(() => users.userId, {
      onDelete: "cascade",
    }),
    sessionName: varchar("session_name", { length: 255 }),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
    isCompleted: boolean("is_completed").default(false),
    completionPercentage: numeric("completion_percentage").default("0"),
  },
  (table) => ({
    userIdIdx: index("idx_sessions_user").on(table.userId),
    projectIdIdx: index("idx_sessions_project").on(table.projectId),
  })
);

// Author data table
export const authorData = pgTable(
  "author_data",
  {
    id: serial("id").primaryKey(),
    sessionId: uuid("session_id")
      .unique()
      .references(() => sessions.sessionId, { onDelete: "cascade" }),
    userId: integer("user_id").references(() => users.userId, {
      onDelete: "cascade",
    }),
    dataJson: jsonb("data_json").default({}),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    sessionIdIdx: index("idx_author_data_session").on(table.sessionId),
    userIdIdx: index("idx_author_data_user").on(table.userId),
  })
);

// Chat messages table
export const chatMessages = pgTable(
  "chat_messages",
  {
    id: serial("id").primaryKey(),
    sessionId: uuid("session_id").references(() => sessions.sessionId, {
      onDelete: "cascade",
    }),
    role: varchar("role", { length: 20 }).notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    sessionIdIdx: index("idx_chat_messages_session").on(table.sessionId),
  })
);

// Message feedback table
export const messageFeedback = pgTable(
  "message_feedback",
  {
    id: serial("id").primaryKey(),
    sessionId: uuid("session_id")
      .references(() => sessions.sessionId, { onDelete: "cascade" })
      .notNull(),
    messageId: varchar("message_id", { length: 255 }).notNull(),
    feedbackType: varchar("feedback_type", { length: 20 }).notNull(), // 'positive' | 'negative'
    reasons: jsonb("reasons").default([]).$type<string[]>(),
    customFeedback: text("custom_feedback"),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    sessionIdIdx: index("idx_message_feedback_session").on(table.sessionId),
    messageIdIdx: index("idx_message_feedback_message").on(table.messageId),
    createdAtIdx: index("idx_message_feedback_created").on(table.createdAt),
  })
);

// Agent Invitations table
export const agentInvitations = pgTable(
  "agent_invitations",
  {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull().unique(),
    invitedByUserId: integer("invited_by_user_id")
      .references(() => users.userId, { onDelete: "cascade" })
      .notNull(),
    status: varchar("status", { length: 20 }).notNull().default("pending"), // 'pending' | 'accepted' | 'revoked' | 'expired'
    tier: varchar("tier", { length: 20 }).notNull().default("basic"), // Assigned tier for the agent
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    usedAt: timestamp("used_at"),
  },
  (table) => ({
    emailIdx: index("idx_agent_invitations_email").on(table.email),
    tokenIdx: index("idx_agent_invitations_token").on(table.token),
    statusIdx: index("idx_agent_invitations_status").on(table.status),
  })
);

// Session Shares table - for agents sharing sessions with authors
export const sessionShares = pgTable(
  "session_shares",
  {
    id: serial("id").primaryKey(),
    sessionId: uuid("session_id")
      .references(() => sessions.sessionId, { onDelete: "cascade" })
      .notNull(),
    agentUserId: integer("agent_user_id")
      .references(() => users.userId, { onDelete: "cascade" })
      .notNull(), // Agent who shared
    authorUserId: integer("author_user_id").references(() => users.userId, {
      onDelete: "cascade",
    }), // Author who accepted (null until accepted)
    shareToken: varchar("share_token", { length: 255 }).notNull().unique(),
    status: varchar("status", { length: 20 }).notNull().default("active"), // 'active' | 'revoked' | 'expired'
    expiresAt: timestamp("expires_at"), // Optional expiry
    createdAt: timestamp("created_at").defaultNow(),
    acceptedAt: timestamp("accepted_at"), // When author first accessed
  },
  (table) => ({
    sessionIdIdx: index("idx_session_shares_session").on(table.sessionId),
    agentUserIdIdx: index("idx_session_shares_agent").on(table.agentUserId),
    authorUserIdIdx: index("idx_session_shares_author").on(table.authorUserId),
    shareTokenIdx: index("idx_session_shares_token").on(table.shareToken),
    statusIdx: index("idx_session_shares_status").on(table.status),
  })
);

// Agent Assignments table - for admins to assign agents to authors
export const agentAssignments = pgTable(
  "agent_assignments",
  {
    id: serial("id").primaryKey(),
    agentUserId: integer("agent_user_id")
      .references(() => users.userId, { onDelete: "cascade" })
      .notNull(),
    authorUserId: integer("author_user_id")
      .references(() => users.userId, { onDelete: "cascade" })
      .notNull(),
    assignedByUserId: integer("assigned_by_user_id").references(
      () => users.userId,
      { onDelete: "set null" }
    ), // Admin who made the assignment
    isActive: boolean("is_active").default(true).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    agentUserIdIdx: index("idx_agent_assignments_agent").on(table.agentUserId),
    authorUserIdIdx: index("idx_agent_assignments_author").on(
      table.authorUserId
    ),
    agentAuthorIdx: index("idx_agent_assignments_agent_author").on(
      table.agentUserId,
      table.authorUserId
    ),
    isActiveIdx: index("idx_agent_assignments_active").on(table.isActive),
  })
);

// Subscriptions table
export const subscriptions = pgTable(
  "subscriptions",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .references(() => users.userId, { onDelete: "cascade" })
      .notNull(),
    polarSubscriptionId: varchar("polar_subscription_id", { length: 255 })
      .notNull()
      .unique(),
    polarCustomerId: varchar("polar_customer_id", { length: 255 }),
    productId: varchar("product_id", { length: 255 }).notNull(),
    productName: varchar("product_name", { length: 255 }),
    priceId: varchar("price_id", { length: 255 }).notNull(),
    priceAmount: integer("price_amount"),
    priceCurrency: varchar("price_currency", { length: 10 }),
    status: varchar("status", { length: 50 }).notNull(),
    tier: varchar("tier", { length: 20 }).notNull().default("free"), // Subscription tier (free, basic, pro, enterprise)
    currentPeriodStart: timestamp("current_period_start"),
    currentPeriodEnd: timestamp("current_period_end"),
    cancelAtPeriodEnd: boolean("cancel_at_period_end").default(false),
    metadata: jsonb("metadata").default({}),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    userIdIdx: index("idx_subscriptions_user").on(table.userId),
    polarIdIdx: index("idx_subscriptions_polar_id").on(
      table.polarSubscriptionId
    ),
    statusIdx: index("idx_subscriptions_status").on(table.status),
    tierIdx: index("idx_subscriptions_tier").on(table.tier),
  })
);

// Relations
export const usersRelations = relations(users, ({ many, one }) => ({
  projects: many(projects),
  sessions: many(sessions),
  authorData: many(authorData),
  subscriptions: many(subscriptions),
  agentInvitationsSent: many(agentInvitations, { relationName: "invitedBy" }),
  sessionSharesAsAgent: many(sessionShares, { relationName: "sharedByAgent" }),
  sessionSharesAsAuthor: many(sessionShares, {
    relationName: "sharedWithAuthor",
  }),
  agentAssignmentsAsAgent: many(agentAssignments, {
    relationName: "assignedAgent",
  }),
  agentAssignmentsAsAuthor: many(agentAssignments, {
    relationName: "assignedAuthor",
  }),
  agentAssignmentsMade: many(agentAssignments, { relationName: "assignedBy" }),
  invitedByUser: one(users, {
    fields: [users.invitedBy],
    references: [users.userId],
    relationName: "invitedAgents",
  }),
}));

export const projectsRelations = relations(projects, ({ one, many }) => ({
  user: one(users, {
    fields: [projects.userId],
    references: [users.userId],
  }),
  sessions: many(sessions),
}));

export const sessionsRelations = relations(sessions, ({ one, many }) => ({
  project: one(projects, {
    fields: [sessions.projectId],
    references: [projects.projectId],
  }),
  user: one(users, {
    fields: [sessions.userId],
    references: [users.userId],
  }),
  authorData: one(authorData),
  chatMessages: many(chatMessages),
  messageFeedback: many(messageFeedback),
  sessionShares: many(sessionShares),
}));

export const authorDataRelations = relations(authorData, ({ one }) => ({
  session: one(sessions, {
    fields: [authorData.sessionId],
    references: [sessions.sessionId],
  }),
  user: one(users, {
    fields: [authorData.userId],
    references: [users.userId],
  }),
}));

export const chatMessagesRelations = relations(chatMessages, ({ one }) => ({
  session: one(sessions, {
    fields: [chatMessages.sessionId],
    references: [sessions.sessionId],
  }),
}));

export const messageFeedbackRelations = relations(
  messageFeedback,
  ({ one }) => ({
    session: one(sessions, {
      fields: [messageFeedback.sessionId],
      references: [sessions.sessionId],
    }),
  })
);

export const subscriptionsRelations = relations(subscriptions, ({ one }) => ({
  user: one(users, {
    fields: [subscriptions.userId],
    references: [users.userId],
  }),
}));

export const agentInvitationsRelations = relations(
  agentInvitations,
  ({ one }) => ({
    invitedBy: one(users, {
      fields: [agentInvitations.invitedByUserId],
      references: [users.userId],
      relationName: "invitedBy",
    }),
  })
);

export const sessionSharesRelations = relations(sessionShares, ({ one }) => ({
  session: one(sessions, {
    fields: [sessionShares.sessionId],
    references: [sessions.sessionId],
  }),
  agent: one(users, {
    fields: [sessionShares.agentUserId],
    references: [users.userId],
    relationName: "sharedByAgent",
  }),
  author: one(users, {
    fields: [sessionShares.authorUserId],
    references: [users.userId],
    relationName: "sharedWithAuthor",
  }),
}));

export const agentAssignmentsRelations = relations(
  agentAssignments,
  ({ one }) => ({
    agent: one(users, {
      fields: [agentAssignments.agentUserId],
      references: [users.userId],
      relationName: "assignedAgent",
    }),
    author: one(users, {
      fields: [agentAssignments.authorUserId],
      references: [users.userId],
      relationName: "assignedAuthor",
    }),
    assignedBy: one(users, {
      fields: [agentAssignments.assignedByUserId],
      references: [users.userId],
      relationName: "assignedBy",
    }),
  })
);

// Type exports
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type Session = typeof sessions.$inferSelect;
export type NewSession = typeof sessions.$inferInsert;
export type AuthorData = typeof authorData.$inferSelect;
export type NewAuthorData = typeof authorData.$inferInsert;
export type ChatMessage = typeof chatMessages.$inferSelect;
export type NewChatMessage = typeof chatMessages.$inferInsert;
export type Subscription = typeof subscriptions.$inferSelect;
export type NewSubscription = typeof subscriptions.$inferInsert;
export type AgentInvitation = typeof agentInvitations.$inferSelect;
export type NewAgentInvitation = typeof agentInvitations.$inferInsert;
export type SessionShare = typeof sessionShares.$inferSelect;
export type NewSessionShare = typeof sessionShares.$inferInsert;
export type AgentAssignment = typeof agentAssignments.$inferSelect;
export type NewAgentAssignment = typeof agentAssignments.$inferInsert;
export type MessageFeedback = typeof messageFeedback.$inferSelect;
export type NewMessageFeedback = typeof messageFeedback.$inferInsert;
