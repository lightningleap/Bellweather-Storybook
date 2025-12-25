'use client'

import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useEditor } from '@/hooks/use-editor'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {
  Sparkles,
  FileText,
  List,
  Palette,
  Play,
  Image,
  Settings,
  Home,
} from 'lucide-react'
import { ROUTES } from '@/lib/constants'

const editorItems = [
  {
    id: 'ai-chat',
    title: 'AI Chat',
    icon: Sparkles,
    panel: 'ai-chat' as const,
  },
  {
    id: 'editor',
    title: 'Editor',
    icon: FileText,
    panel: null,
  },
  {
    id: 'outline',
    title: 'Outline',
    icon: List,
    panel: 'outline' as const,
  },
  {
    id: 'design',
    title: 'Design',
    icon: Palette,
    panel: null,
  },
  {
    id: 'review',
    title: 'Review',
    icon: Play,
    panel: null,
  },
  {
    id: 'assets',
    title: 'Assets',
    icon: Image,
    panel: null,
  },
]

export function EditorSidebar() {
  const { rightPanelView, setRightPanelView } = useEditor()
  const router = useRouter()

  const handleItemClick = (item: typeof editorItems[0]) => {
    if (item.panel) {
      setRightPanelView(rightPanelView === item.panel ? null : item.panel)
    }
  }

  return (
    <aside className="w-20 bg-background border-r border-border flex flex-col items-center py-4 gap-2">
      <TooltipProvider>
        {/* Home Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mb-4"
              onClick={() => router.push(ROUTES.HOME)}
            >
              <Home className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Home</p>
          </TooltipContent>
        </Tooltip>

        <div className="w-8 border-t border-border mb-2" />

        {/* Editor Items */}
        {editorItems.map((item) => {
          const Icon = item.icon
          const isActive = item.panel === rightPanelView

          return (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <Button
                  variant={isActive ? 'secondary' : 'ghost'}
                  size="icon"
                  className={cn(
                    'w-12 h-12',
                    isActive && 'bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary'
                  )}
                  onClick={() => handleItemClick(item)}
                >
                  <Icon className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.title}</p>
              </TooltipContent>
            </Tooltip>
          )
        })}

        <div className="flex-1" />

        {/* Settings */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="w-12 h-12">
              <Settings className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </aside>
  )
}
