'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, User, Settings, Headphones } from 'lucide-react'
import { ROUTES } from '@/lib/constants'

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

  return (
    <aside className="w-[232px] h-screen fixed left-0 top-0 flex flex-col justify-between py-0 px-4 pb-4 bg-white border-r border-[#E2E8F0] overflow-y-auto">
      <div className="flex flex-col w-[200px] pt-[80px]">
        {/* Main Navigation */}
        <nav className="flex flex-col">
          {navigationItems.map((item, index) => {
            const Icon = item.icon
            const isActive = pathname === item.href

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

      {/* Bottom Section with Art and Navigation */}
      <div className="flex flex-col w-full gap-2">
        {/* Art Image */}
        <div className="relative w-[180px] h-[180px] -ml-4">
          <Image
            src="/images/home/Art.svg"
            alt="Help illustration"
            fill
            className="object-contain object-left"
          />
        </div>

        {/* Bottom Items */}
        <div className="flex flex-col w-full">
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
        </div>
      </div>
    </aside>
  )
}
