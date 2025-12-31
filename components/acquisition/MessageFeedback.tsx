"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ThumbsUp, ThumbsDown, Copy, Check, X } from "lucide-react";
import { toast } from "sonner";

interface MessageFeedbackProps {
  sessionId: string;
  messageId: string;
  messageContent: string;
  onFeedbackSubmit?: (messageId: string, feedback: FeedbackData) => void;
}

interface FeedbackData {
  type: "positive" | "negative";
  reasons: string[];
  customFeedback?: string;
}

const POSITIVE_REASONS = [
  "Up to date",
  "Accurate",
  "Helpful",
  "Followed instructions",
  "Good sources",
];

const NEGATIVE_REASONS = [
  "Out of date",
  "Inaccurate",
  "Wrong sources",
  "Too long",
  "Too short",
];

export function MessageFeedback({
  sessionId,
  messageId,
  messageContent,
  onFeedbackSubmit,
}: MessageFeedbackProps) {
  const [copied, setCopied] = useState(false);
  const [feedbackType, setFeedbackType] = useState<
    "positive" | "negative" | null
  >(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [customFeedback, setCustomFeedback] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(messageContent);
      setCopied(true);
      toast.success("Message copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (_error) {
      toast.error("Failed to copy message");
    }
  };

  const handleLike = () => {
    setFeedbackType("positive");
    setShowFeedbackForm(true);
    setSelectedReasons([]);
    setCustomFeedback("");
  };

  const handleDislike = () => {
    setFeedbackType("negative");
    setShowFeedbackForm(true);
    setSelectedReasons([]);
    setCustomFeedback("");
  };

  const toggleReason = (reason: string) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

  const handleSubmitFeedback = async () => {
    const feedbackData: FeedbackData = {
      type: feedbackType!,
      reasons: selectedReasons,
      customFeedback: customFeedback.trim() || undefined,
    };

    // Call the callback if provided
    if (onFeedbackSubmit) {
      onFeedbackSubmit(messageId, feedbackData);
    }

    // Send to API
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          messageId,
          ...feedbackData,
        }),
      });
      toast.success("Thank you for your feedback!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }

    setShowFeedbackForm(false);
  };

  const handleCloseFeedback = () => {
    setShowFeedbackForm(false);
    setFeedbackType(null);
    setSelectedReasons([]);
    setCustomFeedback("");
  };

  const reasons =
    feedbackType === "positive" ? POSITIVE_REASONS : NEGATIVE_REASONS;

  return (
    <div className="relative">
      {/* Action buttons */}
      <div className="flex items-center gap-1 mt-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 px-2 hover:bg-muted"
          aria-label="Copy message"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-600" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleLike}
          className={`h-7 px-2 hover:bg-muted ${
            feedbackType === "positive" ? "bg-muted" : ""
          }`}
          aria-label="Like this response"
        >
          <ThumbsUp className="h-3.5 w-3.5" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleDislike}
          className={`h-7 px-2 hover:bg-muted ${
            feedbackType === "negative" ? "bg-muted" : ""
          }`}
          aria-label="Dislike this response"
        >
          <ThumbsDown className="h-3.5 w-3.5" />
        </Button>
      </div>

      {/* Feedback form */}
      {showFeedbackForm && (
        <Card className="mt-3 p-4 border shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm font-medium">
              {feedbackType === "positive"
                ? "What did you like about this response? (Optional)"
                : "What didn't you like about this response? (Optional)"}
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCloseFeedback}
              className="h-6 w-6 p-0 hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Reason chips with improved hover state */}
          <div className="flex flex-wrap gap-2 mb-3">
            {reasons.map((reason) => {
              const isSelected = selectedReasons.includes(reason);
              return (
                <button
                  key={reason}
                  onClick={() => toggleReason(reason)}
                  className={`
                    px-3 py-1.5 rounded-full text-sm font-medium
                    transition-all duration-200 cursor-pointer
                    border
                    ${
                      isSelected
                        ? "bg-foreground text-background border-foreground"
                        : "bg-background text-foreground border-border hover:bg-foreground hover:text-background hover:border-foreground"
                    }
                  `}
                >
                  {reason}
                </button>
              );
            })}
            <button
              onClick={() => {
                const input = document.getElementById(
                  `custom-feedback-${messageId}`
                ) as HTMLInputElement;
                input?.focus();
              }}
              className="
                px-3 py-1.5 rounded-full text-sm font-medium
                transition-all duration-200 cursor-pointer
                border border-border
                bg-background text-foreground
                hover:bg-muted hover:border-muted-foreground
              "
            >
              Other...
            </button>
          </div>

          {/* Custom feedback input */}
          <Input
            id={`custom-feedback-${messageId}`}
            value={customFeedback}
            onChange={(e) => setCustomFeedback(e.target.value)}
            placeholder="Add additional feedback (optional)"
            className="mb-3 text-sm"
          />

          {/* Submit button */}
          <div className="flex justify-end">
            <Button onClick={handleSubmitFeedback} size="sm" className="px-4">
              Submit Feedback
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
