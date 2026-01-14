'use client'

import { Logo } from './logo'
import { Star, Menu } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import { useSidebar } from '@/contexts/sidebar-context'

export function Header() {
  const { user } = useAuth()
  const { toggleSidebar } = useSidebar()

  return (
    <header className="h-[60px] md:h-[78px] bg-white sticky top-0 z-40 relative">
      {/* Dotted Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #E2E8F0 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0',
          zIndex: 0,
        }}
      />
      <div className="flex h-full items-center justify-between px-4 md:px-[30px] py-3 md:py-5 relative z-10">
        {/* Mobile: Hamburger Menu Button | Desktop: Logo */}
        <div className="flex items-center">
          {/* Mobile Hamburger */}
          <button
            onClick={toggleSidebar}
            className="md:hidden bg-gradient-to-b from-[#e9e9e9] via-[#e9e9e9] to-white p-[3.542px] rounded-[13.663px]"
          >
            <div className="bg-gradient-to-b from-[#f4f4f4] to-[#fefefe] border-[3.036px] border-white rounded-[10.12px] shadow-[0px_0px_0.225px_0.225px_rgba(0,0,0,0.07),0px_0px_0.225px_0.675px_rgba(0,0,0,0.05),0px_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),0px_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] p-[10.627px]">
              <Menu className="w-4 h-4 text-[#020617]" strokeWidth={2} />
            </div>
          </button>
          {/* Desktop Logo */}
          <div className="hidden md:block">
            <Logo />
          </div>
        </div>

        {/* Upgrade Button */}
        <div className="flex items-center">
          <button className="bg-[#FF6321] shadow-[0px_0px_0px_1px_#CF4E17,0px_1px_3px_0px_rgba(0,0,0,0.1)] rounded-md h-[38px] px-4 md:px-5 py-1 flex items-center justify-center gap-[6px] overflow-hidden relative">
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
