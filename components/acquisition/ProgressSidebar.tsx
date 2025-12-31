'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Sparkles, Loader2 } from 'lucide-react';
import { BELLWETHER_FLOW } from '@/lib/acquisition/schema';
import { AuthorDataFields, ChatMessage, AuthorPersona } from '@/types/acquisition';
import { calculateProgress } from '@/lib/acquisition/utils';
import { PersonaDialog } from './PersonaDialog';
import { toast } from 'sonner';

interface ProgressSidebarProps {
  data: AuthorDataFields;
  userName?: string;
  chatHistory?: ChatMessage[];
  accent?: string;
}

export function ProgressSidebar({ data, userName, chatHistory = [], accent = '#FF6321' }: ProgressSidebarProps) {
  const progress = calculateProgress(data);
  const [isOpen, setIsOpen] = useState(false);
  const [isGeneratingPersona, setIsGeneratingPersona] = useState(false);
  const [showPersonaDialog, setShowPersonaDialog] = useState(false);
  const [authorPersona, setAuthorPersona] = useState<AuthorPersona | null>(null);

  const ACCENT = accent;
  const ACCENT_LIGHT = `${ACCENT}20`;

  const handleGeneratePersona = async () => {
    if (!chatHistory || chatHistory.length < 2) {
      toast.error('Please have a conversation first before generating a persona');
      return;
    }

    setIsGeneratingPersona(true);
    try {
      const response = await fetch('/api/generate-persona', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatHistory,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        toast.error(data.error || 'Failed to generate persona');
        return;
      }

      setAuthorPersona(data.persona);
      setShowPersonaDialog(true);
      toast.success('Author persona generated successfully!');
    } catch (error) {
      console.error('Error generating persona:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to generate persona');
    } finally {
      setIsGeneratingPersona(false);
    }
  };

  const renderInfoItem = (field: typeof BELLWETHER_FLOW[number], isMobile = false) => {
    const value = data[field.id as keyof AuthorDataFields];
    const hasValue = value !== null && value !== undefined && value !== '';
    const label = field.id
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return (
      <div
        key={field.id}
        className="flex items-start gap-2 text-sm transition-colors hover:bg-muted/50 rounded-md p-2 -mx-2"
        role="listitem"
      >
        <Badge
          variant={hasValue ? 'default' : 'outline'}
          className={`mt-0.5 shrink-0 ${isMobile ? 'text-xs' : ''} ${hasValue ? 'text-white' : ''}`}
          style={hasValue ? { backgroundColor: ACCENT, borderColor: ACCENT } : {}}
          aria-label={hasValue ? 'Completed' : 'Not completed'}
        >
          {hasValue ? '' : ''}
        </Badge>
        <div className="flex-1 min-w-0">
          <p className={`font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>
            {label}:
          </p>
          <p
            className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'} break-words`}
            title={hasValue
              ? typeof value === 'object'
                ? JSON.stringify(value)
                : String(value)
              : 'Not provided'}
          >
            {hasValue
              ? typeof value === 'object'
                ? JSON.stringify(value)
                : String(value)
              : '—'}
          </p>
        </div>
      </div>
    );
  };

  return (
    <Card className="flex flex-col h-full shadow-sm">
      {/* Dynamic styles for theme colors */}
      <style>{`
        .progress-sidebar [data-slot="progress-indicator"] {
          background-color: ${ACCENT} !important;
        }
        .progress-sidebar [data-slot="progress"] {
          background-color: ${ACCENT_LIGHT} !important;
        }
      `}</style>

      <CardHeader className="pb-3 flex-shrink-0 border-b">
        <p className="text-xl sm:text-lg">Progress</p>
        {userName && (
          <p className="text-xs sm:text-sm text-muted-foreground">
            Welcome, {userName}
          </p>
        )}
      </CardHeader>

      <CardContent className="flex flex-col pt-4 pb-4 overflow-hidden flex-1 min-h-0 progress-sidebar">
        {/* Progress indicator - fixed at top */}
        <div className="space-y-2 flex-shrink-0 mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-muted-foreground">
              Completion Status
            </span>
            <span className="text-xs font-semibold" aria-live="polite">
              {progress}%
            </span>
          </div>
          <Progress
            value={progress}
            className="w-full h-2.5"
            aria-label={`Progress: ${progress}% complete`}
          />
          <p className="text-xs text-muted-foreground text-center">
            {progress === 100 ? 'All information collected!' : `${Math.round((progress / 100) * BELLWETHER_FLOW.length)} of ${BELLWETHER_FLOW.length} fields completed`}
          </p>
        </div>

        <Separator className="mb-4 flex-shrink-0" />

        {/* Generate Persona Button */}
        <div className="mb-4 flex-shrink-0">
          <Button
            onClick={handleGeneratePersona}
            disabled={isGeneratingPersona || !chatHistory || chatHistory.length < 2}
            className="w-full gap-2"
            variant="outline"
            style={{
              borderColor: ACCENT,
              color: ACCENT,
            }}
          >
            {isGeneratingPersona ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating Persona...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Generate Author Persona
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Analyze conversation to create detailed author profile
          </p>
        </div>

        <Separator className="mb-4 flex-shrink-0" />

        {/* Mobile: Collapsible list */}
        <div className="lg:hidden flex-shrink-0">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger
              className="flex items-center justify-between w-full hover:bg-muted/50 rounded-md p-2 transition-colors"
              aria-expanded={isOpen}
            >
              <h3 className="text-zinc-700 text-base sm:text-lg lg:text-xl leading-relaxed">Collected Info</h3>
              {isOpen ? (
                <ChevronUp className="h-4 w-4 shrink-0" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-3">
              <div
                className="space-y-1 max-h-[400px] overflow-y-auto scroll-smooth pr-2"
                role="list"
                aria-label="Collected information items"
              >
                {BELLWETHER_FLOW.map((field) => renderInfoItem(field, true))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Desktop view - always visible with proper flex scroll */}
        <div className="hidden lg:flex lg:flex-col lg:overflow-hidden lg:flex-1 lg:min-h-0">
          <div className="flex items-center justify-between mb-3 flex-shrink-0">
            <p className="text-zinc-700 text-base sm:text-lg lg:text-xl leading-relaxed">Collected Info</p>
            <span className="text-xs text-muted-foreground">
              {BELLWETHER_FLOW.filter(field => {
                const value = data[field.id as keyof AuthorDataFields];
                return value !== null && value !== undefined && value !== '';
              }).length}/{BELLWETHER_FLOW.length}
            </span>
          </div>

          {/* Scrollable area with visual indicators */}
          <div className="flex-1 min-h-0 relative">
            <ScrollArea className="h-full">
              <div
                className="space-y-1 pr-4 pb-2"
                role="list"
                aria-label="Collected information items"
              >
                {BELLWETHER_FLOW.map((field) => renderInfoItem(field, false))}
              </div>
            </ScrollArea>

            {/* Scroll indicator - subtle gradient at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </CardContent>

      {/* Persona Dialog */}
      <PersonaDialog
        isOpen={showPersonaDialog}
        onClose={() => setShowPersonaDialog(false)}
        persona={authorPersona}
        accent={ACCENT}
      />
    </Card>
  );
}
