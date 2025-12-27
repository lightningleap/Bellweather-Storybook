'use client'

import { useRouter } from 'next/navigation'
import { useEditor } from '@/hooks/use-editor'
import { useAuth } from '@/contexts/auth-context'
import { ROUTES } from '@/lib/constants'
import Image from 'next/image'
import { BookOpen, MessageSquare, Pen, Layers, PieChart, Play, Grid, Settings } from 'lucide-react'

const editorItems = [
  {
    id: 'ai-chat',
    title: 'AI Chat',
    icon: MessageSquare,
    panel: 'ai-chat' as const,
  },
  {
    id: 'editor',
    title: 'Editor',
    icon: Pen,
    panel: null,
  },
  {
    id: 'outline',
    title: 'Outline',
    icon: Layers,
    panel: 'outline' as const,
  },
  {
    id: 'design',
    title: 'Design',
    icon: PieChart,
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
    icon: Grid,
    panel: null,
  },
]

export function EditorSidebar() {
  const { rightPanelView, setRightPanelView } = useEditor()
  const { logout } = useAuth()
  const router = useRouter()

  const handleItemClick = (item: typeof editorItems[0]) => {
    if (item.panel) {
      setRightPanelView(rightPanelView === item.panel ? null : item.panel)
    }
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <aside className="w-[84px] bg-[#F3F4F6] border-r border-[#E5E7EB] flex flex-col items-center justify-between pb-8 px-2">
      {/* Logo/Home Button */}
      <div className="h-[76px] flex items-center justify-center w-full py-8">
        <button
          className="flex items-center justify-center cursor-pointer"
          onClick={() => {
            console.log('Sidebar: Navigating to home...')
            router.push(ROUTES.HOME)
          }}
        >
          <Image
            src="/icons/editor/CUSTOM-group.svg"
            alt="Home"
            width={40}
            height={32}
          />
        </button>
      </div>

      {/* Editor Items */}
      <div className="flex flex-col items-center py-5 rounded-[10.12px] flex-1">
        {editorItems.map((item) => {
          const isActive = item.panel === rightPanelView
          const Icon = item.icon

          return (
            <button
              key={item.id}
              className={`flex flex-col items-center justify-center gap-1 px-0 py-4 rounded-xl transition-colors ${
                isActive ? 'bg-white w-[60px] h-[76px]' : 'w-[68px] h-[84px]'
              }`}
              onClick={() => handleItemClick(item)}
            >
              <Icon
                className={`w-7 h-7 ${
                  isActive ? 'text-[#030712]' : 'text-[#364153]'
                }`}
                strokeWidth={2}
              />
              <p
                className={`text-xs font-medium text-center w-[68px] ${
                  isActive ? 'text-[#030712]' : 'text-[#364153]'
                }`}
                style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
              >
                {item.title}
              </p>
            </button>
          )
        })}

        {/* Settings */}
        <button className="flex flex-col items-center justify-center gap-1 px-0 py-4 w-[68px] h-[84px]">
          <Settings className="w-7 h-7 text-[#364153]" strokeWidth={2} />
          <p
            className="text-xs font-medium text-center text-[#364153] w-[68px]"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            Settings
          </p>
        </button>
      </div>

      {/* Avatar - at the very bottom */}
      <button
        className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity bg-white border-2 border-[#1E2939] rounded-full overflow-hidden"
        onClick={handleLogout}
        title="Logout"
      >
        <Image
          src="/icons/editor/Avatar.svg"
          alt="User Avatar"
          width={32}
          height={32}
        />
      </button>
    </aside>
  )
}
