'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Circle } from 'lucide-react';

interface ProgressIndicatorProps {
  percentage: number;
  completedFields: number;
  totalFields: number;
  accent?: string;
}

export function ProgressIndicator({
  percentage,
  completedFields,
  totalFields,
  accent = '#FF6321',
}: ProgressIndicatorProps) {
  const getMilestone = (percent: number) => {
    if (percent >= 100) return { text: 'Complete!', color: '#22c55e' };
    if (percent >= 75) return { text: 'Almost there!', color: accent };
    if (percent >= 50) return { text: 'Halfway done!', color: accent };
    if (percent >= 25) return { text: 'Great start!', color: accent };
    return { text: 'Just getting started', color: accent };
  };

  const milestone = getMilestone(percentage);

  return (
    <Card className="mt-4 mb-2 border-2" style={{ borderColor: `${accent}20` }}>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Your Progress</h3>
              <p className="text-sm text-muted-foreground">{milestone.text}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold" style={{ color: milestone.color }}>
                {percentage}%
              </p>
              <p className="text-xs text-muted-foreground">
                {completedFields} of {totalFields} fields
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <Progress value={percentage} className="h-3" style={{ backgroundColor: `${accent}20` }}>
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${percentage}%`,
                backgroundColor: milestone.color,
              }}
            />
          </Progress>

          {/* Milestones */}
          <div className="flex justify-between text-xs">
            <div className="flex items-center gap-1">
              {percentage >= 25 ? (
                <CheckCircle2 className="h-3 w-3 text-green-500" />
              ) : (
                <Circle className="h-3 w-3 text-gray-300" />
              )}
              <span className={percentage >= 25 ? 'text-green-600 font-medium' : 'text-muted-foreground'}>
                25%
              </span>
            </div>
            <div className="flex items-center gap-1">
              {percentage >= 50 ? (
                <CheckCircle2 className="h-3 w-3 text-green-500" />
              ) : (
                <Circle className="h-3 w-3 text-gray-300" />
              )}
              <span className={percentage >= 50 ? 'text-green-600 font-medium' : 'text-muted-foreground'}>
                50%
              </span>
            </div>
            <div className="flex items-center gap-1">
              {percentage >= 75 ? (
                <CheckCircle2 className="h-3 w-3 text-green-500" />
              ) : (
                <Circle className="h-3 w-3 text-gray-300" />
              )}
              <span className={percentage >= 75 ? 'text-green-600 font-medium' : 'text-muted-foreground'}>
                75%
              </span>
            </div>
            <div className="flex items-center gap-1">
              {percentage >= 100 ? (
                <CheckCircle2 className="h-3 w-3 text-green-500" />
              ) : (
                <Circle className="h-3 w-3 text-gray-300" />
              )}
              <span className={percentage >= 100 ? 'text-green-600 font-medium' : 'text-muted-foreground'}>
                100%
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
