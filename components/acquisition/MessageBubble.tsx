"use client";

import { Card } from "@/components/ui/card";
import { MessageFeedback } from "./MessageFeedback";
import { Bot, User } from "lucide-react";

interface MessageBubbleProps {
  sessionId: string;
  role: "user" | "assistant" | "system";
  content: string;
  messageId?: string;
  onFeedbackSubmit?: (
    messageId: string,
    feedback: {
      type: "positive" | "negative";
      reasons: string[];
      customFeedback?: string;
    }
  ) => void;
}

export function MessageBubble({
  sessionId,
  role,
  content,
  messageId,
  onFeedbackSubmit,
}: MessageBubbleProps) {
  const isUser = role === "user";
  const isAssistant = role === "assistant";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} w-full`}
      role="article"
      aria-label={`${role} message`}
    >
      <div
        className={`flex gap-3 max-w-[85%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        <div
          className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
          aria-hidden="true"
        >
          {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
        </div>

        {/* Message content */}
        <div className="flex flex-col gap-1 min-w-0">
          <Card
            className={`p-3 sm:p-4 ${
              isUser ? "bg-primary text-primary-foreground" : "bg-muted"
            }`}
          >
            <p className="text-sm sm:text-base whitespace-pre-wrap break-words leading-relaxed">
              {content}
            </p>
          </Card>

          {/* Feedback buttons - only for assistant messages */}
          {isAssistant && (
            <MessageFeedback
              sessionId={sessionId}
              messageId={messageId || `msg-${Date.now()}`}
              messageContent={content}
              onFeedbackSubmit={onFeedbackSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
