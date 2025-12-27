'use client'

import { Logo } from './logo'
import { Star } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'

export function Header() {
  const { user } = useAuth()

  return (
    <header className="h-[78px] border-b border-[#E2E8F0] bg-white sticky top-0 z-40">
      <div className="flex h-full items-center justify-between px-[30px] py-5">
        {/* Logo */}
        <Logo />

        {/* Upgrade Button */}
        <div className="flex items-center">
          <button className="bg-[#FF6321] shadow-[0px_0px_0px_1px_#CF4E17,0px_1px_3px_0px_rgba(0,0,0,0.1)] rounded-md h-[38px] px-5 py-1 flex items-center justify-center gap-[6px] overflow-hidden relative">
            {/* Inner shadow overlay */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0.75px_0px_rgba(255,255,255,0.12),inset_0px_-1px_0px_0px_#D95017]" />

            {/* Content */}
            <div className="flex items-center gap-[6px] relative z-10">
              <p className="text-sm font-semibold leading-5 text-white" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', textShadow: '0px 1px 3px #DF571D' }}>
                Upgrade
              </p>
              <Star className="w-[14px] h-[14px] text-white fill-white" />
              <p className="text-sm font-semibold leading-5 text-white" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', textShadow: '0px 1px 3px #DF571D' }}>
                {user?.credits || 100}
              </p>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
