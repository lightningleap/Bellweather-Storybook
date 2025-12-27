'use client'

import { Home, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEditor } from '@/hooks/use-editor'
import { ROUTES } from '@/lib/constants'

export function EditorHeader() {
  const router = useRouter()
  const { currentBook } = useEditor()

  return (
    <div className="flex items-center justify-between px-4 py-[14px] h-[65.25px] border-b border-border bg-background">
      {/* Left side - Home button and title */}
      <div className="flex items-center gap-2.5 flex-1">
        <button
          onClick={() => {
            console.log('Navigating to home...')
            router.push(ROUTES.HOME)
          }}
          className="flex items-center justify-center p-1.5 hover:bg-accent rounded-md transition-colors cursor-pointer"
          aria-label="Go to home"
        >
          <Home className="w-4 h-4 text-[#314158]" strokeWidth={1.5} />
        </button>

        <div className="h-3 w-px bg-[#D1D5DC]" />

        <h1 className="text-base font-semibold text-[#0F172B]">
          {currentBook?.title || 'Untitled'}
        </h1>
      </div>

      {/* Right side - Upgrade button */}
      <button
        className="flex items-center justify-center gap-1.5 px-5 py-1 h-[38px] rounded-md transition-all"
        style={{
          background: '#FF6321',
          boxShadow: '0px 0px 0px 1px #CF4E17, 0px 1px 3px rgba(0, 0, 0, 0.1), inset 0px 1px 0.75px rgba(255, 255, 255, 0.12), inset 0px -1px 0px #D95017'
        }}
      >
        <span className="text-sm font-semibold text-white" style={{ textShadow: '0px 1px 3px #DF571D' }}>
          Upgrade
        </span>
        <Star className="w-3.5 h-3.5 fill-white text-white" />
        <span className="text-sm font-semibold text-white" style={{ textShadow: '0px 1px 3px #DF571D' }}>
          100
        </span>
      </button>
    </div>
  )
}
