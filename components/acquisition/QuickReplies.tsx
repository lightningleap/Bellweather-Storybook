'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QuickRepliesProps {
  options: string[];
  onSelect: (option: string) => void;
  accent?: string;
  className?: string;
  multiSelect?: boolean;
  selectedOptions?: string[];
}

export function QuickReplies({
  options,
  onSelect,
  accent,
  className,
  multiSelect = false,
  selectedOptions = []
}: QuickRepliesProps) {
  if (!options || options.length === 0) return null;

  const handleClick = (option: string) => {
    onSelect(option);
  };

  return (
    <div className={cn("flex flex-wrap gap-2 mt-3 mb-2", className)}>
      {options.map((option, index) => {
        const isSelected = selectedOptions.includes(option);

        return (
          <Button
            key={index}
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleClick(option)}
            className={cn(
              "transition-all duration-200 hover:scale-105",
              isSelected && multiSelect && "border-2 ring-2 ring-offset-2"
            )}
            style={
              isSelected && multiSelect && accent
                ? {
                    borderColor: accent,
                    backgroundColor: `${accent}10`,
                    color: accent,
                  }
                : accent
                ? {
                    borderColor: `${accent}40`,
                  }
                : undefined
            }
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
}
