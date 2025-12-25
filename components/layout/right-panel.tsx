'use client'

import { useEditor } from '@/hooks/use-editor'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { X } from 'lucide-react'
import { AIChatPanel } from '@/components/editor/ai-chat-panel'
import { OutlinePanel } from '@/components/editor/outline-panel'
import { cn } from '@/lib/utils'

export function RightPanel() {
  const { rightPanelView, setRightPanelView, isRightPanelOpen } = useEditor()

  if (!isRightPanelOpen) return null

  const getPanelTitle = () => {
    switch (rightPanelView) {
      case 'ai-chat':
        return 'AI Chat'
      case 'outline':
        return 'Outline'
      default:
        return 'Panel'
    }
  }

  const getPanelContent = () => {
    switch (rightPanelView) {
      case 'ai-chat':
        return <AIChatPanel />
      case 'outline':
        return <OutlinePanel />
      default:
        return <div>Panel content</div>
    }
  }

  return (
    <aside
      className={cn(
        'w-96 bg-background border-l border-border flex flex-col transition-all duration-300',
        isRightPanelOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      {/* Header */}
      <div className="h-14 border-b border-border flex items-center justify-between px-4">
        <h2 className="font-semibold">{getPanelTitle()}</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setRightPanelView(null)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <ScrollArea className="flex-1">
        <div className="p-4">{getPanelContent()}</div>
      </ScrollArea>
    </aside>
  )
}
