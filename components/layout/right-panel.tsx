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
        'w-[406px] bg-white border-l border-[#E5E7EB] flex flex-col transition-all duration-300 rounded-2xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]',
        isRightPanelOpen ? 'translate-x-0' : 'translate-x-full'
      )}
      style={{ margin: '8px' }}
    >
      {/* Header */}
      <div className="h-[68px] border-b-2 border-[#F3F4F6] flex items-center justify-between px-2 py-4 sticky top-0 bg-white rounded-t-2xl">
        <div className="flex items-center px-4">
          <h2
            className="font-semibold text-base text-[#0F172A]"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            {getPanelTitle()}
          </h2>
        </div>
        <button
          className="w-8 h-8 flex items-center justify-center hover:bg-[#F8FAFC] rounded-lg transition-colors"
          onClick={() => setRightPanelView(null)}
        >
          <X className="w-4 h-4 text-[#020617]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 pt-8">{getPanelContent()}</div>
      </div>
    </aside>
  )
}
