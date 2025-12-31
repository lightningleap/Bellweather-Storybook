'use client';

import { AuthorPersona } from '@/types/acquisition';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  User,
  BookOpen,
  Lightbulb,
  Target,
  Heart,
  Briefcase,
  TrendingUp,
  Quote,
} from 'lucide-react';

interface PersonaDialogProps {
  isOpen: boolean;
  onClose: () => void;
  persona: AuthorPersona | null;
  accent?: string;
}

export function PersonaDialog({
  isOpen,
  onClose,
  persona,
  accent = '#3b82f6',
}: PersonaDialogProps) {
  if (!persona) return null;

  const renderArrayField = (items: string[] | null | undefined, emptyText = 'None mentioned') => {
    if (!items || items.length === 0) return <p className="text-sm text-muted-foreground italic">{emptyText}</p>;
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {item}
          </Badge>
        ))}
      </div>
    );
  };

  const renderTextField = (text: string | null | undefined, emptyText = 'Not mentioned') => {
    return (
      <p className="text-sm text-muted-foreground">
        {text || <span className="italic">{emptyText}</span>}
      </p>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-2xl flex items-center gap-2">
            <User className="h-6 w-6" style={{ color: accent }} />
            Author Persona Profile
          </DialogTitle>
          <DialogDescription>
            A comprehensive profile built from the conversation, useful for personalized cover design, marketing strategies, and publishing guidance.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 overflow-auto pr-4 mt-4">
          <div className="space-y-6">
            {/* Persona Summary */}
            {persona.persona_summary && (
              <Card className="border-2" style={{ borderColor: `${accent}40` }}>
                <CardHeader className="pb-3" style={{ backgroundColor: `${accent}10` }}>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5" style={{ color: accent }} />
                    Persona Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-base leading-relaxed">{persona.persona_summary}</p>
                </CardContent>
              </Card>
            )}

            {/* Personal Background */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <User className="h-5 w-5" style={{ color: accent }} />
                  Personal Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Occupation</h4>
                  {renderTextField(persona.personal_background.occupation)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Life Experience</h4>
                  {renderTextField(persona.personal_background.life_experience)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Interests</h4>
                  {renderArrayField(persona.personal_background.interests)}
                </div>
                {persona.personal_background.summary && (
                  <div className="pt-2">
                    <h4 className="font-semibold text-sm mb-1">Summary</h4>
                    {renderTextField(persona.personal_background.summary)}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Author Identity */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5" style={{ color: accent }} />
                  Author Identity & Writing Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Experience Level</h4>
                  {renderTextField(persona.author_identity.experience_level)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Writing Motivation</h4>
                  {renderTextField(persona.author_identity.writing_motivation)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Goals</h4>
                  {renderArrayField(persona.author_identity.goals)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Self-Description</h4>
                  {renderTextField(persona.author_identity.self_description)}
                </div>
              </CardContent>
            </Card>

            {/* Creative Vision */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" style={{ color: accent }} />
                  Creative Vision & Style
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Themes</h4>
                  {renderArrayField(persona.creative_vision.themes)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Passions</h4>
                  {renderArrayField(persona.creative_vision.passions)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Unique Perspective</h4>
                  {renderTextField(persona.creative_vision.unique_perspective)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Inspiration Sources</h4>
                  {renderArrayField(persona.creative_vision.inspiration_sources)}
                </div>
              </CardContent>
            </Card>

            {/* Book Project */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5" style={{ color: accent }} />
                  Book Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Genre</h4>
                  {renderTextField(persona.book_project.genre)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Concept Summary</h4>
                  {renderTextField(persona.book_project.concept_summary)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Unique Elements</h4>
                  {renderArrayField(persona.book_project.unique_elements)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Target Audience</h4>
                  {renderTextField(persona.book_project.target_audience)}
                </div>
              </CardContent>
            </Card>

            {/* Personality Traits */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5" style={{ color: accent }} />
                  Personality Traits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Communication Style</h4>
                  {renderTextField(persona.personality_traits.communication_style)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Core Values</h4>
                  {renderArrayField(persona.personality_traits.core_values)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Primary Concerns</h4>
                  {renderArrayField(persona.personality_traits.primary_concerns)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Decision Making</h4>
                  {renderTextField(persona.personality_traits.decision_making)}
                </div>
              </CardContent>
            </Card>

            {/* Professional Approach */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Briefcase className="h-5 w-5" style={{ color: accent }} />
                  Professional Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Publishing Goals</h4>
                  {renderTextField(persona.professional_approach.publishing_goals)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Timeline Preference</h4>
                  {renderTextField(persona.professional_approach.timeline_preference)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Budget Mindset</h4>
                  {renderTextField(persona.professional_approach.budget_mindset)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Marketing Interest</h4>
                  {renderTextField(persona.professional_approach.marketing_interest)}
                </div>
              </CardContent>
            </Card>

            {/* Motivations */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" style={{ color: accent }} />
                  Motivations & Aspirations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Why This Book</h4>
                  {renderTextField(persona.motivations.why_this_book)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Definition of Success</h4>
                  {renderTextField(persona.motivations.definition_of_success)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Long-Term Vision</h4>
                  {renderTextField(persona.motivations.long_term_vision)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Desired Impact</h4>
                  {renderTextField(persona.motivations.desired_impact)}
                </div>
              </CardContent>
            </Card>

            {/* Key Quotes */}
            {persona.key_quotes && persona.key_quotes.length > 0 && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Quote className="h-5 w-5" style={{ color: accent }} />
                    Key Quotes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {persona.key_quotes.map((quote, index) => (
                      <div
                        key={index}
                        className="border-l-4 pl-4 py-2 italic text-sm"
                        style={{ borderColor: accent }}
                      >
                        {quote}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Add some bottom padding to ensure last card is visible */}
          <div className="h-4" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
