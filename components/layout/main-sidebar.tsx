'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Home, BookOpen, User, Settings, Headphones, Menu, X, LogOut } from 'lucide-react'
import { ROUTES } from '@/lib/constants'
import { useAuth } from '@/contexts/auth-context'

const navigationItems = [
  {
    title: 'Home',
    href: ROUTES.HOME,
    icon: Home,
  },
  {
    title: 'My Books',
    href: ROUTES.BOOKS,
    icon: BookOpen,
  },
  {
    title: 'Account',
    href: '/account',
    icon: User,
  },
]

const bottomItems = [
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
  {
    title: 'Help & Support',
    href: '/help',
    icon: Headphones,
  },
]

export function MainSidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 hover:bg-gray-100 rounded-lg"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-screen flex flex-col py-0 px-4 pb-4 bg-white relative z-40
        transition-transform duration-300 ease-in-out
        md:w-[232px] md:static md:translate-x-0
        ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}
        ${isMobile ? 'w-[232px]' : 'w-[232px]'}
      `}>
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

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto relative z-10">
        <div className="flex flex-col w-[200px] pt-5">
          {/* Main Navigation */}
          <nav className="flex flex-col">
            {navigationItems.map((item, index) => {
              const Icon = item.icon
              const isActive = pathname === item.href || (item.href === '/' && pathname === '/home')

              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`flex flex-col ${
                      index === 0
                        ? 'pb-0 pt-0 px-[3.542px]'
                        : index === navigationItems.length - 1
                        ? 'pb-[3.542px] pt-0 px-[3.542px]'
                        : 'pb-0 pt-[3.542px] px-[3.542px]'
                    } rounded-[13.663px] w-full`}
                  >
                    {isActive ? (
                      <div className="bg-gradient-to-b from-[#e9e9e9] via-[#e9e9e9] to-[#ffffff] p-[3.542px] rounded-[13.663px] w-full">
                        <div className="bg-gradient-to-b from-[#f4f4f4] to-[#fefefe] border-[3.036px] border-white rounded-[10.12px] shadow-[0px_0px_0.225px_0.225px_rgba(0,0,0,0.07),0px_0px_0.225px_0.675px_rgba(0,0,0,0.05),0px_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),0px_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] flex items-center gap-[10px] px-[12.145px] py-[10.627px] overflow-hidden">
                          <Icon className="w-4 h-4 text-[#030712] shrink-0" strokeWidth={2} />
                          <p className="text-sm font-semibold leading-5 text-[#030712]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                            {item.title}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-[10px] px-[12.145px] py-[10.627px] rounded-[10.12px] overflow-hidden w-full">
                        <Icon className="w-4 h-4 text-[#030712] shrink-0" strokeWidth={2} />
                        <p className="text-sm font-semibold leading-5 text-[#030712]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                          {item.title}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              )
            })}
          </nav>
        </div>

      </div>
        {/* Art Image */}
        <div className="relative w-[180px] h-[180px] -ml-4 mt-6">
          <Image
            src="/images/home/Art.svg"
            alt="Help illustration"
            fill
            className="object-contain object-left"
          />
        </div>

      {/* Bottom Items – always visible */}
      <div className="flex flex-col w-full relative z-10 flex-shrink-0 gap-1 mt-2 mb-24">
        {bottomItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link key={item.href} href={item.href}>
              <div className="flex items-center gap-2 px-3 py-[10px] rounded-lg w-full hover:bg-[#F8FAFC] transition-colors">
                <Icon className="w-[14px] h-[14px] text-[#030712] shrink-0" strokeWidth={2} />
                <p className="text-xs font-semibold leading-4 text-[#030712]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                  {item.title}
                </p>
              </div>
            </Link>
          )
        })}
        <button
          onClick={handleLogout}
          type="button"
          className="flex items-center gap-2 px-3 py-[10px] rounded-lg w-full hover:bg-[#F8FAFC] transition-colors text-left cursor-pointer"
        >
          <LogOut className="w-[14px] h-[14px] text-[#030712] shrink-0" strokeWidth={2} />
          <p className="text-xs font-semibold leading-4 text-[#030712]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Logout
          </p>
        </button>
      </div>

      </aside>
    </>
  )
}