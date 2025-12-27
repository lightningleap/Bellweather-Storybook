'use client'

import { useAuth } from '@/hooks/use-auth'

export function DashboardGreeting() {
  const { user } = useAuth()

  const displayName = user?.name || user?.email?.split('@')[0] || 'Writer'

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full">
      {/* Greeting with emoji */}
      <div className="flex items-center gap-1">
        <span className="text-[22px] rotate-[8deg]">😊</span>
        <p className="text-[24px] leading-6 text-[#030712] text-center tracking-[-0.48px]" style={{ fontFamily: 'cursive' }}>
          Hello, {displayName}
        </p>
      </div>

      {/* Main heading */}
      <div className="flex items-start justify-center">
        <h1 className="text-[36px] font-medium leading-[40px] text-[#030712] text-center max-w-[629px]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          What story are we working on today?
        </h1>
      </div>
    </div>
  )
}
