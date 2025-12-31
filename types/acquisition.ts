// Database types
export interface User {
  user_id: string;
  email: string;
  full_name: string;
  password_hash?: string;
  created_at?: Date;
}

export interface Project {
  // Support both camelCase (Drizzle ORM) and snake_case formats
  project_id?: string;
  projectId?: string;
  user_id?: number;
  userId?: number;
  project_name?: string;
  projectName?: string;
  project_description?: string | null;
  projectDescription?: string | null;
  created_at?: Date | null;
  createdAt?: Date | null;
  updated_at?: Date | null;
  updatedAt?: Date | null;
  is_active?: boolean | null;
  isActive?: boolean | null;
  // Computed/virtual fields
  sessionCount?: number;
}

export interface Session {
  // Support both camelCase (Drizzle ORM) and snake_case (legacy) formats
  session_id?: string;
  sessionId?: string;
  project_id?: string | null;
  projectId?: string | null;
  user_id?: string;
  userId?: number | null;
  session_name?: string;
  sessionName?: string | null;
  created_at?: Date | null;
  createdAt?: Date | null;
  updated_at?: Date | null;
  updatedAt?: Date | null;
  is_completed?: boolean | null;
  isCompleted?: boolean | null;
  completion_percentage?: string | null;
  completionPercentage?: string | null;
}

export interface AuthorData {
  id?: number;
  session_id: string;
  user_id: string;
  data_json: Record<string, unknown>;
  created_at?: Date;
  updated_at?: Date;
}

// Chat types
export interface ChatMessage {
  id?: string;
  role: "user" | "assistant" | "system";
  content: string;
}

// Feedback types
export interface MessageFeedback {
  id?: number;
  session_id: string;
  message_id: string;
  feedback_type: "positive" | "negative";
  reasons: string[];
  custom_feedback?: string;
  created_at?: Date;
}

export interface FeedbackData {
  type: "positive" | "negative";
  reasons: string[];
  customFeedback?: string;
}

// Schema types
export interface FlowField {
  id: string;
  prompt: string;
  required: boolean;
  order: number;
}

// Author data collected fields
export interface AuthorDataFields {
  current_occupation?: string | null;
  interests?: string | null;
  writing_experience?: string | null;
  writing_goals?: string | null;
  book_title?: string | null;
  book_genre?: string | null;
  manuscript_status?: string | null;
  word_count?: number | string | null;
  unique_selling_points?: string | null;
  editing_level?: string | null;
  design_needs?: boolean | string | null;
  formats?: string[] | string | null;
  distribution?: string | null;
  marketing?: string | null;
  contact_name?: string | null;
  contact_email?: string | null;
  budget_range?: string | null;
  publishing_timeline?: string | null;
  publishing_concerns?: string | null;
  bellwether_features_interest?: string | null;
}

// Author Persona types
export interface AuthorPersona {
  persona_summary?: string | null;
  personal_background: {
    occupation?: string | null;
    life_experience?: string | null;
    interests?: string[] | null;
    summary?: string | null;
  };
  author_identity: {
    experience_level?: string | null;
    writing_motivation?: string | null;
    goals?: string[] | null;
    self_description?: string | null;
  };
  creative_vision: {
    themes?: string[] | null;
    passions?: string[] | null;
    unique_perspective?: string | null;
    inspiration_sources?: string[] | null;
  };
  book_project: {
    genre?: string | null;
    concept_summary?: string | null;
    unique_elements?: string[] | null;
    target_audience?: string | null;
  };
  personality_traits: {
    communication_style?: string | null;
    core_values?: string[] | null;
    primary_concerns?: string[] | null;
    decision_making?: string | null;
  };
  professional_approach: {
    publishing_goals?: string | null;
    timeline_preference?: string | null;
    budget_mindset?: string | null;
    marketing_interest?: string | null;
  };
  motivations: {
    why_this_book?: string | null;
    definition_of_success?: string | null;
    long_term_vision?: string | null;
    desired_impact?: string | null;
  };
  key_quotes?: string[] | null;
}

// API Response types
export interface SessionCreateResponse {
  sessionId: string;
  success: boolean;
}

export interface ChatResponse {
  reply: string;
  updatedData: AuthorDataFields;
  nextQuestion?: string;
  isComplete: boolean;
}

export interface ProgressResponse {
  percentage: number;
  completedFields: number;
  totalRequiredFields: number;
}
