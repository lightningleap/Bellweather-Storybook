'use client'

import { useAuth } from '@/hooks/use-auth'

export function DashboardGreeting() {
  const { user } = useAuth()

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  const greeting = getGreeting()
  const displayName = user?.name || user?.email?.split('@')[0] || 'Writer'

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-2xl">👋</span>
        <h1 className="text-3xl font-bold tracking-tight">
          {greeting}, {displayName}
        </h1>
      </div>
      <p className="text-xl text-muted-foreground">
        What story are we working on today?
      </p>
    </div>
  )
}
