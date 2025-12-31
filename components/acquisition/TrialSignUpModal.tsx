'use client';

import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, X } from 'lucide-react';

interface TrialSignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  messageCount: number;
  isComplete?: boolean;
  sessionId?: string;
}

export function TrialSignUpModal({ isOpen, onClose, messageCount, isComplete = false, sessionId }: TrialSignUpModalProps) {
  const router = useRouter();

  const handleSignUp = () => {
    // Store trial session ID for migration after signup
    if (sessionId && typeof window !== 'undefined') {
      sessionStorage.setItem('pending_trial_migration', sessionId);
    }
    router.push('/signup');
  };

  const handleSignIn = () => {
    // Store trial session ID for migration after signin
    if (sessionId && typeof window !== 'undefined') {
      sessionStorage.setItem('pending_trial_migration', sessionId);
    }
    router.push('/signin');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-center text-2xl">
            {isComplete ? 'Session Complete!' : 'Enjoying Your Experience?'}
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            {isComplete
              ? "Great work! You've completed the trial session. Sign up now to save your progress and access all features."
              : `You've sent ${messageCount} ${messageCount === 1 ? 'message' : 'messages'}! Sign up now to unlock the full experience and save your progress.`
            }
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">

              </div>
              <div>
                <p className="font-medium">Save Your Progress</p>
                <p className="text-muted-foreground text-xs">Access your sessions from any device</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">

              </div>
              <div>
                <p className="font-medium">Unlimited Sessions</p>
                <p className="text-muted-foreground text-xs">Create as many book projects as you need</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">

              </div>
              <div>
                <p className="font-medium">Premium Support</p>
                <p className="text-muted-foreground text-xs">Get help from our publishing experts</p>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-2">
          <Button
            onClick={handleSignUp}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white gap-2"
            size="lg"
          >
            Sign Up Free
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            onClick={handleSignIn}
            variant="outline"
            className="w-full"
            size="lg"
          >
            Sign In
          </Button>
          {!isComplete && (
            <Button
              onClick={onClose}
              variant="ghost"
              className="w-full text-muted-foreground"
              size="sm"
            >
              Continue Trial
              <X className="w-4 h-4 ml-2" />
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
