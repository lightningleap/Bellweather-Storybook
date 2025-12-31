'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, CheckCircle2 } from 'lucide-react';

interface TimelineVisualizationProps {
  accent?: string;
}

const TIMELINE_STEPS = [
  {
    step: 1,
    title: 'Manuscript Review',
    description: 'We review your manuscript and provide an honest assessment',
    duration: '1-2 weeks',
  },
  {
    step: 2,
    title: 'Service Selection',
    description: 'Choose editing, design, formatting, and ISBN services',
    duration: '1 week',
  },
  {
    step: 3,
    title: 'Production',
    description: 'Professional editing, cover design, and interior formatting',
    duration: '2-4 months',
  },
  {
    step: 4,
    title: 'Distribution Setup',
    description: 'List on Amazon, Barnes & Noble, IngramSpark, 40,000+ retailers',
    duration: '2-3 weeks',
  },
  {
    step: 5,
    title: 'Launch & Support',
    description: 'Marketing packages and author dashboard for ongoing analytics',
    duration: 'Ongoing',
  },
];

export function TimelineVisualization({ accent = '#FF6321' }: TimelineVisualizationProps) {
  return (
    <Card className="mt-4 mb-2 border-2" style={{ borderColor: `${accent}20` }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" style={{ color: accent }} />
          Publishing Timeline
        </CardTitle>
        <CardDescription>
          5-Step Process - Most projects complete in 3-6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: `${accent}40` }}
          />

          {/* Timeline Steps */}
          <div className="space-y-6">
            {TIMELINE_STEPS.map((item) => (
              <div key={item.step} className="relative pl-14">
                {/* Step Number Circle */}
                <div
                  className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg"
                  style={{ backgroundColor: accent }}
                >
                  {item.step}
                </div>

                {/* Check Icon for Completed Look */}
                <CheckCircle2
                  className="absolute left-[42px] top-[34px] h-4 w-4 text-white"
                  style={{ backgroundColor: accent, borderRadius: '50%' }}
                />

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs font-medium" style={{ color: accent }}>
                      {item.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-6 pt-4 border-t">
          Timeline varies based on services selected and manuscript complexity. We work at your pace!
        </p>
      </CardContent>
    </Card>
  );
}
