'use client'

import { Logo } from './logo'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Menu } from 'lucide-react'
import { useSidebar } from './sidebar-provider'

export function Header() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Logo />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="default" size="sm" className="gap-2">
            <span>Upgrade</span>
            <Badge variant="secondary" className="px-2 py-0.5 text-xs">
              100
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  )
}
