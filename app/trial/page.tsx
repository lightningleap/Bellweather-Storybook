'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function TrialStartPage() {
  const router = useRouter();

  useEffect(() => {
    // Generate a unique session ID for the trial
    const sessionId = uuidv4();

    // Store trial session info in localStorage
    const trialSession = {
      sessionId,
      startedAt: new Date().toISOString(),
      isTrial: true,
    };

    localStorage.setItem('bellwether_trial_session', JSON.stringify(trialSession));

    // Redirect to the trial chat page
    router.replace(`/trial/${sessionId}`);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6321] mx-auto mb-4" />
        <p className="text-muted-foreground">Starting your trial session...</p>
      </div>
    </div>
  );
}
