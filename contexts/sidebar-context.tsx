'use client'

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'

interface SidebarContextType {
  isOpen: boolean
  isMobile: boolean
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) {
        setIsOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const openSidebar = useCallback(() => setIsOpen(true), [])
  const closeSidebar = useCallback(() => setIsOpen(false), [])
  const toggleSidebar = useCallback(() => setIsOpen(prev => !prev), [])

  return (
    <SidebarContext.Provider value={{ isOpen, isMobile, openSidebar, closeSidebar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}
