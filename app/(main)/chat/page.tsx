'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TrialChatInterface } from '@/components/acquisition/TrialChatInterface';
import { ProgressSidebar } from '@/components/acquisition/ProgressSidebar';
import { AuthorDataFields, ChatMessage } from '@/types/acquisition';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import { BookOpen } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import { v4 as uuidv4 } from 'uuid';

const ACCENT = '#FF6321';
const ACCENT_DARK = '#E85A1E';

export default function ChatPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [authorData, setAuthorData] = useState<AuthorDataFields | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    if (!isAuthenticated) {
      toast.error('Please sign in to access this page');
      router.push('/signin');
      return;
    }

    // Generate or load session
    initializeSession();
  }, [isAuthenticated, authLoading, router]);

  const initializeSession = () => {
    try {
      // Check for pending trial migration first
      const pendingTrialId = sessionStorage.getItem('pending_trial_migration');

      if (pendingTrialId) {
        // Migrate trial session data
        migrateTrialSession(pendingTrialId);
        return;
      }

      // Check for existing active session
      const existingSessionId = localStorage.getItem(`bellwether_active_session_${user?.id}`);

      if (existingSessionId) {
        setSessionId(existingSessionId);
        loadSessionData(existingSessionId);
      } else {
        // Create new session
        const newSessionId = uuidv4();
        localStorage.setItem(`bellwether_active_session_${user?.id}`, newSessionId);
        setSessionId(newSessionId);
        initializeNewSession(newSessionId);
      }
    } catch (error) {
      console.error('Error initializing session:', error);
      toast.error('Failed to initialize session');
      setIsLoading(false);
    }
  };

  const migrateTrialSession = (trialSessionId: string) => {
    try {
      console.log('Migrating trial session:', trialSessionId);

      // Load trial data - check both possible key formats
      let trialData = localStorage.getItem(`bellwether_trial_data_${trialSessionId}`);
      let trialMessages = localStorage.getItem(`bellwether_trial_messages_${trialSessionId}`);

      console.log('Found trial data:', !!trialData);
      console.log('Found trial messages:', !!trialMessages);

      // Create new session ID for authenticated user
      const newSessionId = uuidv4();

      // Initialize base data
      const baseData: AuthorDataFields = {
        current_occupation: null,
        interests: null,
        writing_experience: null,
        writing_goals: null,
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
        publishing_timeline: null,
        budget_range: null,
        publishing_concerns: null,
        bellwether_features_interest: null,
        contact_name: user?.name || null,
        contact_email: user?.email || null,
      };

      let finalData = baseData;
      let finalMessages: ChatMessage[] = [];

      if (trialData) {
        // Parse and merge with user data
        const parsedData = JSON.parse(trialData) as AuthorDataFields;
        finalData = {
          ...baseData,
          ...parsedData,
          contact_name: parsedData.contact_name || user?.name || null,
          contact_email: parsedData.contact_email || user?.email || null,
        };
      }

      if (trialMessages) {
        finalMessages = JSON.parse(trialMessages);
      }

      // Save to new session
      localStorage.setItem(`bellwether_chat_data_${newSessionId}`, JSON.stringify(finalData));
      localStorage.setItem(`bellwether_chat_messages_${newSessionId}`, JSON.stringify(finalMessages));

      // Set as active session
      localStorage.setItem(`bellwether_active_session_${user?.id}`, newSessionId);

      // Update state
      setAuthorData(finalData);
      setChatMessages(finalMessages);
      setSessionId(newSessionId);

      // Clear trial migration flag and old data
      sessionStorage.removeItem('pending_trial_migration');
      localStorage.removeItem(`bellwether_trial_data_${trialSessionId}`);
      localStorage.removeItem(`bellwether_trial_messages_${trialSessionId}`);
      localStorage.removeItem('bellwether_trial_session');

      if (trialData || trialMessages) {
        toast.success('Your trial conversation has been saved to your account!');
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Error migrating trial session:', error);
      // Clear the pending flag to prevent loop
      sessionStorage.removeItem('pending_trial_migration');
      // Fall back to new session if migration fails
      const newSessionId = uuidv4();
      localStorage.setItem(`bellwether_active_session_${user?.id}`, newSessionId);
      setSessionId(newSessionId);
      initializeNewSession(newSessionId);
    }
  };

  const loadSessionData = (sid: string) => {
    try {
      const storedData = localStorage.getItem(`bellwether_chat_data_${sid}`);
      const storedMessages = localStorage.getItem(`bellwether_chat_messages_${sid}`);

      if (storedData) {
        setAuthorData(JSON.parse(storedData));
      } else {
        initializeNewSession(sid);
        return;
      }

      if (storedMessages) {
        setChatMessages(JSON.parse(storedMessages));
      }
    } catch (error) {
      console.error('Error loading session data:', error);
      toast.error('Failed to load session data');
    } finally {
      setIsLoading(false);
    }
  };

  const initializeNewSession = (sid: string) => {
    const initialData: AuthorDataFields = {
      current_occupation: null,
      interests: null,
      writing_experience: null,
      writing_goals: null,
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
      publishing_timeline: null,
      budget_range: null,
      publishing_concerns: null,
      bellwether_features_interest: null,
      contact_name: user?.name || null,
      contact_email: user?.email || null,
    };
    setAuthorData(initialData);
    localStorage.setItem(`bellwether_chat_data_${sid}`, JSON.stringify(initialData));
    setIsLoading(false);
  };

  const handleDataUpdate = (newData: AuthorDataFields) => {
    setAuthorData(newData);
    if (sessionId) {
      try {
        localStorage.setItem(`bellwether_chat_data_${sessionId}`, JSON.stringify(newData));
      } catch (error) {
        console.error('Error saving chat data:', error);
      }
    }
  };

  if (authLoading || isLoading) {
    return (
      <div className="flex-1 p-6">
        <div className="space-y-4 max-w-[1400px] mx-auto">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-[calc(100vh-200px)] w-full" />
        </div>
      </div>
    );
  }

  if (!authorData || !sessionId) {
    return null;
  }

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-64px)] overflow-hidden">
      <div className="px-6 py-4 flex-1 flex flex-col min-h-0 max-w-[1400px] mx-auto w-full">
        <header className="mb-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6" style={{ color: ACCENT }} />
            <h1 className="text-zinc-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              New Book Project
            </h1>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Tell us about your book and we&apos;ll create your publishing proposal.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_400px] gap-4 lg:gap-6 flex-1 min-h-0">
          {/* Main chat area */}
          <div className="flex flex-col h-full min-h-0 bg-card rounded-lg border shadow-sm p-4 sm:p-6">
            <TrialChatInterface
              sessionId={sessionId}
              initialData={authorData}
              onDataUpdate={handleDataUpdate}
              accent={ACCENT}
              accentDark={ACCENT_DARK}
              initialMessages={chatMessages}
              isAuthenticated={true}
            />
          </div>

          {/* Sidebar */}
          <aside
            className="hidden lg:block h-full min-h-0 overflow-hidden"
            role="complementary"
            aria-label="Progress tracking sidebar"
          >
            <ProgressSidebar
              data={authorData}
              userName={user?.name || user?.email || 'Author'}
              chatHistory={chatMessages}
              accent={ACCENT}
            />
          </aside>
        </div>

        {/* Mobile progress */}
        <div className="lg:hidden mt-4 pb-4 flex-shrink-0" role="complementary">
          <ProgressSidebar
            data={authorData}
            userName={user?.name || user?.email || 'Author'}
            chatHistory={chatMessages}
            accent={ACCENT}
          />
        </div>
      </div>
    </div>
  );
}
