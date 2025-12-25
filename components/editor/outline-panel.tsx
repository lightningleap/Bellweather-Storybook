'use client'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Plus, ChevronRight } from 'lucide-react'

const mockOutline = [
  { id: '1', title: 'Chapter 1: The Beginning', level: 0 },
  { id: '2', title: 'Scene 1: Morning', level: 1 },
  { id: '3', title: 'Scene 2: Discovery', level: 1 },
  { id: '4', title: 'Chapter 2: The Journey', level: 0 },
  { id: '5', title: 'Scene 1: Departure', level: 1 },
]

export function OutlinePanel() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Book Structure</h3>
        <Button size="sm" variant="ghost" className="h-8 gap-1">
          <Plus className="h-3 w-3" />
          Add
        </Button>
      </div>

      <ScrollArea className="h-[500px]">
        <div className="space-y-1">
          {mockOutline.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="w-full justify-start text-sm h-auto py-2"
              style={{ paddingLeft: `${item.level * 1 + 0.5}rem` }}
            >
              <ChevronRight className="h-3 w-3 mr-2 flex-shrink-0" />
              <span className="truncate">{item.title}</span>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
