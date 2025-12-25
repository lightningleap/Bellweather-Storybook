'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useSidebar } from './sidebar-provider'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  Home,
  BookOpen,
  User,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
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
    icon: HelpCircle,
  },
]

export function MainSidebar() {
  const pathname = usePathname()
  const { isCollapsed, toggleSidebar } = useSidebar()

  return (
    <>
      {/* Mobile overlay */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-16 h-[calc(100vh-4rem)] bg-background border-r border-border transition-all duration-300 z-50 lg:sticky lg:z-0',
          isCollapsed
            ? 'w-0 -translate-x-full lg:w-16 lg:translate-x-0'
            : 'w-64 translate-x-0'
        )}
      >
        <ScrollArea className="h-full">
          <div className="flex flex-col h-full p-4">
            {/* Navigation Items */}
            <nav className="flex-1 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? 'secondary' : 'ghost'}
                      className={cn(
                        'w-full justify-start gap-3',
                        isActive &&
                          'bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary',
                        isCollapsed && 'justify-center px-2'
                      )}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      )}
                    </Button>
                  </Link>
                )
              })}
            </nav>

            <Separator className="my-4" />

            {/* Bottom Items */}
            <nav className="space-y-1">
              {bottomItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? 'secondary' : 'ghost'}
                      className={cn(
                        'w-full justify-start gap-3',
                        isActive &&
                          'bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary',
                        isCollapsed && 'justify-center px-2'
                      )}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      )}
                    </Button>
                  </Link>
                )
              })}
            </nav>

            {/* Collapse Toggle (Desktop only) */}
            <div className="hidden lg:block mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSidebar}
                className={cn(
                  'w-full justify-start gap-2',
                  isCollapsed && 'justify-center px-2'
                )}
              >
                {isCollapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <>
                    <ChevronLeft className="h-4 w-4" />
                    <span className="text-xs text-muted-foreground">
                      Collapse
                    </span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </ScrollArea>
      </aside>
    </>
  )
}
