'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { TrialChatInterface } from '@/components/acquisition/TrialChatInterface';
import { ProgressSidebar } from '@/components/acquisition/ProgressSidebar';
import { AuthorDataFields, ChatMessage } from '@/types/acquisition';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import Link from 'next/link';

const ACCENT = '#FF6321';
const ACCENT_DARK = '#E85A1E';

export default function TrialChatPage() {
  const params = useParams();
  const router = useRouter();
  const sessionId = params.sessionId as string;

  const [authorData, setAuthorData] = useState<AuthorDataFields | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verify this is a valid trial session
    const storedTrialSession = localStorage.getItem('bellwether_trial_session');

    if (!storedTrialSession) {
      toast.error('Trial session not found');
      router.push('/');
      return;
    }

    try {
      const trialSession = JSON.parse(storedTrialSession);

      if (trialSession.sessionId !== sessionId) {
        toast.error('Invalid trial session');
        router.push('/');
        return;
      }

      // Load or initialize trial data
      loadTrialData();
    } catch (error) {
      console.error('Error loading trial session:', error);
      toast.error('Failed to load trial session');
      router.push('/');
    }
  }, [sessionId, router]);

  const loadTrialData = () => {
    try {
      // Try to load existing trial data from local storage
      const storedData = localStorage.getItem(`bellwether_trial_data_${sessionId}`);
      const storedMessages = localStorage.getItem(`bellwether_trial_messages_${sessionId}`);

      if (storedData) {
        setAuthorData(JSON.parse(storedData));
      } else {
        // Initialize empty author data
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
          contact_name: null,
          contact_email: null,
        };
        setAuthorData(initialData);
      }

      if (storedMessages) {
        setChatMessages(JSON.parse(storedMessages));
      }
    } catch (error) {
      console.error('Error loading trial data:', error);
      toast.error('Failed to load trial data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDataUpdate = (newData: AuthorDataFields) => {
    setAuthorData(newData);
    // Save to local storage
    try {
      localStorage.setItem(`bellwether_trial_data_${sessionId}`, JSON.stringify(newData));
    } catch (error) {
      console.error('Error saving trial data:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-4 sm:py-6 max-w-[1600px]">
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-[calc(100vh-200px)] w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!authorData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Trial Banner - Fixed at top */}
      <div
        className="text-white py-3 px-4 flex items-center justify-between flex-shrink-0 shadow-md"
        style={{
          background: `linear-gradient(to right, ${ACCENT_DARK}, ${ACCENT}, ${ACCENT_DARK})`
        }}
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-white" />
          <span className="text-white">You&apos;re using a free trial session</span>
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full text-white">Limited Features</span>
        </div>
        <Link href="/signup">
          <Button variant="secondary" size="sm" className="gap-2 bg-white/20 hover:bg-white/30 text-white border-white/30">
            Sign Up for Full Access
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* Main content with fixed height */}
      <div className="flex flex-col h-[calc(100vh-3.75rem)] overflow-hidden bg-background">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex-1 flex flex-col min-h-0 max-w-[1600px]">
          <header className="mb-4 sm:mb-6 flex-shrink-0">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6" style={{ color: ACCENT }} />
              <h1 className="text-zinc-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                Bellwether Books – Author Intake (Trial)
              </h1>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Experience our platform. Data is stored locally in your browser.
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
                userName="Trial User"
                chatHistory={chatMessages}
                accent={ACCENT}
              />
            </aside>
          </div>

          {/* Mobile progress */}
          <div className="lg:hidden mt-4 pb-4 flex-shrink-0" role="complementary">
            <ProgressSidebar
              data={authorData}
              userName="Trial User"
              chatHistory={chatMessages}
              accent={ACCENT}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
