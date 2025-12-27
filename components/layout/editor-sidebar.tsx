'use client'

import { useRouter } from 'next/navigation'
import { useEditor } from '@/hooks/use-editor'
import { useAuth } from '@/contexts/auth-context'
import { ROUTES } from '@/lib/constants'
import Image from 'next/image'

const editorItems = [
  {
    id: 'ai-chat',
    title: 'AI Chat',
    image: '/icons/editor/Button Dark Mode.svg',
    panel: 'ai-chat' as const,
  },
  {
    id: 'editor',
    title: 'Editor',
    image: '/icons/editor/Button Dark Mode (1).svg',
    panel: null,
  },
  {
    id: 'outline',
    title: 'Outline',
    image: '/icons/editor/Button Dark Mode (2).svg',
    panel: 'outline' as const,
  },
  {
    id: 'design',
    title: 'Design',
    image: '/icons/editor/Button Dark Mode (3).svg',
    panel: null,
  },
  {
    id: 'review',
    title: 'Review',
    image: '/icons/editor/Button Dark Mode (4).svg',
    panel: null,
  },
  {
    id: 'assets',
    title: 'Assets',
    image: '/icons/editor/Button Dark Mode (5).svg',
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
    <aside className="w-[84px] bg-white border-r border-[#E2E8F0] flex flex-col items-center pt-0 pb-6">
      {/* Logo/Home Button - CUSTOM-group.svg */}
      <div className="h-[76px] flex items-center justify-center w-full">
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
      <div className="flex flex-col items-center gap-1 px-2">
        {editorItems.map((item) => {
          const isActive = item.panel === rightPanelView

          return (
            <button
              key={item.id}
              className="w-[68px] h-[84px] flex items-center justify-center"
              onClick={() => handleItemClick(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={68}
                height={84}
                className="w-full h-full"
              />
            </button>
          )
        })}

        {/* Settings - Button Dark Mode (6).svg - directly below Assets */}
        <button className="w-[68px] h-[84px] flex items-center justify-center">
          <Image
            src="/icons/editor/Button Dark Mode (6).svg"
            alt="Settings"
            width={68}
            height={84}
            className="w-full h-full"
          />
        </button>
      </div>

      <div className="flex-1" />

      {/* Avatar - at the very bottom */}
      <button
        className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handleLogout}
        title="Logout"
      >
        <Image
          src="/icons/editor/Avatar.svg"
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </button>
    </aside>
  )
}
