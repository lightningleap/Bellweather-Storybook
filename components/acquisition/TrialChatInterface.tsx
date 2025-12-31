'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageBubble } from './MessageBubble';
import { QuickReplies } from './QuickReplies';
import { PricingBreakdown } from './visuals/PricingBreakdown';
import { TimelineVisualization } from './visuals/TimelineVisualization';
import { ROIProjection } from './visuals/ROIProjection';
import { ProgressIndicator } from './visuals/ProgressIndicator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';
import { AuthorDataFields, ChatMessage } from '@/types/acquisition';
import { toast } from 'sonner';
import { Send, Loader2, RotateCcw, Check } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { TrialSignUpModal } from './TrialSignUpModal';
import { getQuickReplyOptions, isMultiSelectField } from '@/lib/acquisition/quickReplyOptions';
import { getNextUnanswered, calculateProgress } from '@/lib/acquisition/utils';
import { shouldShowVisualNow, parseWordCount, parseBudgetRange, VisualType } from '@/lib/acquisition/visualTriggers';

interface TrialChatInterfaceProps {
  sessionId: string;
  initialData: AuthorDataFields;
  onDataUpdate: (data: AuthorDataFields) => void;
  initialMessages?: ChatMessage[];
  accent?: string;
  accentDark?: string;
  isAuthenticated?: boolean; // If true, disables signup modal
}

// Array of different initial greetings to make each conversation unique
// These greetings focus on getting to know THE PERSON first, not their book
const INITIAL_GREETINGS = [
  `Hi there! Welcome to Bellwether Books! I'm excited to get to know you and help you on your publishing journey.

Before we dive into your book project, I'd love to learn a bit about you as a person. Tell me—what do you do when you're not writing? What keeps you busy day-to-day?`,

  `Welcome to Bellwether Books! It's great to meet you.

I find that the best publishing partnerships start with really understanding the person behind the book. So let's start there—what do you do for work or how do you spend most of your time? I'd love to know more about you!`,

  `Hello! Thanks for stopping by Bellwether Books.

Every author has a unique story, and I'm excited to hear yours. Before we talk about your book, let's get to know each other a bit. What's your background? What do you do day-to-day?`,

  `Hi! Welcome to Bellwether Books—I'm glad you're here.

I believe the best conversations start by getting to know each other as people first. So tell me about yourself—what's your profession or what do you spend your time doing when you're not thinking about writing?`,

  `Welcome! I'm excited to help you on your publishing journey with Bellwether Books.

Let's start by getting to know you a little. Everyone who comes here has their own unique background and perspective. What do you do for work, or what fills your days? I'd love to hear about you!`,

  `Hello and welcome to Bellwether Books!

Before we get into the details of publishing and your book, I'd really like to understand who you are as a person. What's your background? What do you do professionally or what are your main interests outside of writing?`,
];

// Generate random number between min and max (inclusive)
const getRandomMessageCount = () => Math.floor(Math.random() * 3) + 4; // Returns 4, 5, or 6

// Get a random initial greeting
const getRandomGreeting = () => {
  return INITIAL_GREETINGS[Math.floor(Math.random() * INITIAL_GREETINGS.length)];
};

// Get a random greeting that's different from the last one
const getDifferentGreeting = (lastGreeting: string) => {
  const availableGreetings = INITIAL_GREETINGS.filter(g => g !== lastGreeting);
  return availableGreetings[Math.floor(Math.random() * availableGreetings.length)];
};

export function TrialChatInterface({
  sessionId,
  initialData,
  onDataUpdate,
  initialMessages = [],
  accent = '#FF6321',
  isAuthenticated = false,
}: TrialChatInterfaceProps) {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>(
    initialMessages.length > 0
      ? initialMessages
      : [{ role: 'assistant', content: getRandomGreeting() }]
  );
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentData, setCurrentData] = useState<AuthorDataFields>(initialData);
  const [isComplete, setIsComplete] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [nextModalTrigger, setNextModalTrigger] = useState<number>(getRandomMessageCount());
  const [showClearDialog, setShowClearDialog] = useState(false);
  const [multiSelectOptions, setMultiSelectOptions] = useState<string[]>([]);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [shownVisuals, setShownVisuals] = useState<Set<VisualType>>(new Set());
  const [currentVisual, setCurrentVisual] = useState<VisualType | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is updated
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    });
  }, [chatHistory]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Initialize message count and modal trigger from localStorage or initial messages
  useEffect(() => {
    // Count user messages from initial messages
    const userMessages = initialMessages.filter(msg => msg.role === 'user').length;
    setUserMessageCount(userMessages);

    // Load or initialize the next modal trigger
    const storedTrigger = localStorage.getItem(`bellwether_trial_modal_trigger_${sessionId}`);
    if (storedTrigger) {
      setNextModalTrigger(parseInt(storedTrigger, 10));
    } else {
      const initialTrigger = getRandomMessageCount();
      setNextModalTrigger(initialTrigger);
      localStorage.setItem(`bellwether_trial_modal_trigger_${sessionId}`, initialTrigger.toString());
    }
  }, [sessionId, initialMessages]);

  // Check if we should show the modal based on message count (only for non-authenticated users)
  useEffect(() => {
    if (!isAuthenticated && userMessageCount >= nextModalTrigger && userMessageCount > 0) {
      setShowSignUpModal(true);
    }
  }, [userMessageCount, nextModalTrigger, isAuthenticated]);

  // Show modal when session is complete (only for non-authenticated users)
  useEffect(() => {
    if (!isAuthenticated && isComplete) {
      setShowSignUpModal(true);
    }
  }, [isComplete, isAuthenticated]);

  // Save chat history to local storage whenever it changes
  useEffect(() => {
    if (chatHistory.length > 1) { // Only save if there are messages beyond the initial greeting
      try {
        // Use different key pattern for authenticated vs trial users
        const storageKey = isAuthenticated
          ? `bellwether_chat_messages_${sessionId}`
          : `bellwether_trial_messages_${sessionId}`;
        localStorage.setItem(storageKey, JSON.stringify(chatHistory));
      } catch (error) {
        console.error('Error saving chat history:', error);
      }
    }
  }, [chatHistory, sessionId, isAuthenticated]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setIsLoading(true);

    // Increment user message count
    setUserMessageCount(prev => prev + 1);

    // Add user message to history
    const newHistory: ChatMessage[] = [
      ...chatHistory,
      { role: 'user', content: userMessage },
    ];
    setChatHistory(newHistory);

    try {
      const response = await fetch('/api/trial-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          message: userMessage,
          chatHistory,
          currentData,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        toast.error(data.error || 'Failed to send message');
        setIsLoading(false);
        return;
      }

      // Update current data
      setCurrentData(data.updatedData);
      onDataUpdate(data.updatedData);

      // Check if we should show a visual based on newly collected data
      const fieldsAdded = Object.keys(data.extractedData || {});
      const lastAddedField = fieldsAdded[fieldsAdded.length - 1];

      const visualToShow = shouldShowVisualNow(
        data.updatedData,
        shownVisuals,
        lastAddedField
      );

      if (visualToShow && !shownVisuals.has(visualToShow)) {
        setCurrentVisual(visualToShow);
        setShownVisuals(prev => new Set(prev).add(visualToShow));
      }

      // Add bot reply to history
      let updatedHistory: ChatMessage[] = [
        ...newHistory,
        { role: 'assistant' as const, content: data.reply },
      ];

      // If complete, add completion message
      if (data.isComplete) {
        setIsComplete(true);
        const completionMessage = isAuthenticated
          ? `Fantastic! You've answered everything we need for your publishing proposal. Our team will review your information and get back to you soon. Feel free to continue chatting if you have any questions!`
          : `Fantastic! You've answered everything we need for your publishing proposal. To save your progress and continue with our team, please sign up for a free account!`;
        updatedHistory = [
          ...updatedHistory,
          { role: 'assistant' as const, content: completionMessage },
        ];
      }

      setChatHistory(updatedHistory);

      // Reset quick replies state for next question
      setShowQuickReplies(true);
      setMultiSelectOptions([]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Handle quick reply selection
  const handleQuickReplySelect = (option: string) => {
    const nextField = getNextUnanswered(currentData);
    if (!nextField) return;

    const isMultiSelect = isMultiSelectField(nextField.id);

    if (isMultiSelect) {
      // For multi-select fields, toggle the option
      setMultiSelectOptions(prev => {
        if (prev.includes(option)) {
          return prev.filter(o => o !== option);
        } else {
          return [...prev, option];
        }
      });
    } else {
      // For single-select, send immediately
      setInputMessage(option);
      setShowQuickReplies(false);
      // Use setTimeout to ensure state updates before sending
      setTimeout(() => {
        handleSendMessage();
      }, 100);
    }
  };

  // Handle submitting multi-select options
  const handleMultiSelectSubmit = () => {
    if (multiSelectOptions.length === 0) return;

    const message = multiSelectOptions.join(', ');
    setInputMessage(message);
    setMultiSelectOptions([]);
    setShowQuickReplies(false);

    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  // Get current field and its quick reply options
  const getCurrentFieldQuickReplies = () => {
    if (!showQuickReplies || isLoading || isComplete) return null;

    const nextField = getNextUnanswered(currentData);
    if (!nextField) return null;

    const options = getQuickReplyOptions(nextField.id);
    if (!options) return null;

    return {
      options,
      fieldId: nextField.id,
      isMultiSelect: isMultiSelectField(nextField.id),
    };
  };

  const quickReplyData = getCurrentFieldQuickReplies();

  // Render the current visual based on type
  const renderVisual = () => {
    if (!currentVisual) return null;

    const wordCount = parseWordCount(currentData.word_count);
    const budget = parseBudgetRange(currentData.budget_range);
    const progress = calculateProgress(currentData);
    const totalFields = Object.keys(currentData).length;
    const completedFields = Object.values(currentData).filter(v => v !== null && v !== undefined && v !== '').length;

    switch (currentVisual) {
      case 'pricing_breakdown':
        return wordCount > 0 ? <PricingBreakdown wordCount={wordCount} accent={accent} /> : null;

      case 'timeline_visualization':
        return <TimelineVisualization accent={accent} />;

      case 'roi_projection':
        return <ROIProjection investment={budget} accent={accent} />;

      case 'progress_indicator':
        return (
          <ProgressIndicator
            percentage={progress}
            completedFields={completedFields}
            totalFields={totalFields}
            accent={accent}
          />
        );

      default:
        return null;
    }
  };

  const handleCloseModal = () => {
    setShowSignUpModal(false);

    // If session is not complete, set up next modal trigger
    if (!isComplete) {
      // Calculate next trigger: current count + random 4-6
      const newTrigger = userMessageCount + getRandomMessageCount();
      setNextModalTrigger(newTrigger);
      localStorage.setItem(`bellwether_trial_modal_trigger_${sessionId}`, newTrigger.toString());
    }
  };

  const handleClearConversation = () => {
    // Get the current greeting (first message)
    const currentGreeting = chatHistory[0]?.content || '';
    // Get a different greeting
    const newGreeting = getDifferentGreeting(currentGreeting);

    // Reset all state
    setChatHistory([{ role: 'assistant', content: newGreeting }]);
    setUserMessageCount(0);
    setIsComplete(false);
    setInputMessage('');
    setMultiSelectOptions([]);
    setShowQuickReplies(true);
    setShownVisuals(new Set());
    setCurrentVisual(null);

    // Reset initial data
    const freshData: AuthorDataFields = {
      book_title: null,
      book_genre: null,
      manuscript_status: null,
      word_count: null,
      unique_selling_points: null,
      editing_level: null,
      design_needs: null,
      formats: null,
      distribution: null,
      marketing: null,
      budget_range: null,
    };
    setCurrentData(freshData);
    onDataUpdate(freshData);

    // Clear localStorage for this session (both authenticated and trial keys)
    if (isAuthenticated) {
      localStorage.removeItem(`bellwether_chat_data_${sessionId}`);
      localStorage.removeItem(`bellwether_chat_messages_${sessionId}`);
    } else {
      localStorage.removeItem(`bellwether_trial_data_${sessionId}`);
      localStorage.removeItem(`bellwether_trial_messages_${sessionId}`);
    }
    localStorage.removeItem(`bellwether_trial_modal_trigger_${sessionId}`);

    // Reset modal trigger
    const newTrigger = getRandomMessageCount();
    setNextModalTrigger(newTrigger);
    localStorage.setItem(`bellwether_trial_modal_trigger_${sessionId}`, newTrigger.toString());

    setShowClearDialog(false);
    toast.success('Conversation cleared! Starting fresh.');
  };

  return (
    <div className="flex flex-col h-full max-h-full">
      {/* Chat messages area - flexible with scroll */}
      <div className="flex-1 overflow-hidden min-h-0 relative">
        <ScrollArea className="h-full">
          <div
            className="space-y-4 pb-4 pr-4"
            role="log"
            aria-label="Chat conversation"
            aria-live="polite"
            aria-atomic="false"
          >
            {chatHistory.map((message, index) => (
              <MessageBubble
                key={index}
                sessionId={sessionId}
                role={message.role}
                content={message.content}
              />
            ))}
            {isLoading && (
              <div className="flex justify-start" aria-live="polite" aria-label="Assistant is typing">
                <Card className="p-4 bg-muted animate-pulse">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </Card>
              </div>
            )}

            {/* Quick Replies - Show after last message if available */}
            {!isLoading && quickReplyData && (
              <div className="flex flex-col gap-2">
                <QuickReplies
                  options={quickReplyData.options}
                  onSelect={handleQuickReplySelect}
                  accent={accent}
                  multiSelect={quickReplyData.isMultiSelect}
                  selectedOptions={multiSelectOptions}
                />

                {/* Multi-select submit button */}
                {quickReplyData.isMultiSelect && multiSelectOptions.length > 0 && (
                  <Button
                    onClick={handleMultiSelectSubmit}
                    size="sm"
                    className="self-start gap-2"
                    style={{ backgroundColor: accent }}
                  >
                    <Check className="h-4 w-4" />
                    Confirm Selection ({multiSelectOptions.length})
                  </Button>
                )}
              </div>
            )}

            {/* Visual Representation - Show contextually */}
            {!isLoading && renderVisual()}

            <div ref={scrollRef} />
          </div>
        </ScrollArea>
      </div>

      {/* Input area - fixed at bottom */}
      <div className="border-t pt-4 flex-shrink-0">
        {/* Clear conversation button */}
        <div className="flex justify-end mb-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setShowClearDialog(true)}
            disabled={isLoading || chatHistory.length <= 1}
            className="text-xs gap-2"
          >
            <RotateCcw className="h-3 w-3" />
            Clear Conversation
          </Button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex gap-2"
        >
          <div className="flex-1 relative">
            <style>{`
              .trial-input-wrapper input:focus {
                outline: 2px solid ${accent || 'hsl(var(--primary))'} !important;
                outline-offset: 2px !important;
                border-color: ${accent || 'hsl(var(--primary))'} !important;
                box-shadow: 0 0 0 3px ${accent ? `${accent}20` : 'hsl(var(--primary) / 0.2)'} !important;
              }
              .trial-input-wrapper input:focus-visible {
                outline: 2px solid ${accent || 'hsl(var(--primary))'} !important;
                outline-offset: 2px !important;
                border-color: ${accent || 'hsl(var(--primary))'} !important;
                box-shadow: 0 0 0 3px ${accent ? `${accent}20` : 'hsl(var(--primary) / 0.2)'} !important;
              }
            `}</style>
            <div className="trial-input-wrapper">
              <Input
                ref={inputRef}
                type="text"
                placeholder={
                  isComplete && !isAuthenticated
                    ? 'Session complete! Sign up to continue.'
                    : 'Type your message...'
                }
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={isLoading || (isComplete && !isAuthenticated)}
                className="w-full"
                aria-label="Message input"
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={isLoading || !inputMessage.trim() || (isComplete && !isAuthenticated)}
            size="icon"
            aria-label="Send message"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
        {!isAuthenticated && (
          <p className="text-xs text-muted-foreground mt-2">
            Trial data is stored in your browser and not saved to our servers.
          </p>
        )}
      </div>

      {/* Sign Up Modal */}
      <TrialSignUpModal
        isOpen={showSignUpModal}
        onClose={handleCloseModal}
        messageCount={userMessageCount}
        isComplete={isComplete}
        sessionId={sessionId}
      />

      {/* Clear Conversation Confirmation Dialog */}
      <AlertDialog open={showClearDialog} onOpenChange={setShowClearDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Clear Conversation?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete all messages and data from this trial session.
              You&apos;ll start fresh with a new conversation. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleClearConversation}
              className="bg-destructive hover:bg-destructive/90"
            >
              Clear Conversation
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
