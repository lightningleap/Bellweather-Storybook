'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import type { Book, Chapter } from '@/types'

type RightPanelView = 'ai-chat' | 'outline' | null

interface EditorContextValue {
  currentBook: Book | null
  currentChapter: Chapter | null
  rightPanelView: RightPanelView
  isRightPanelOpen: boolean
  content: string
  setCurrentBook: (book: Book | null) => void
  setCurrentChapter: (chapter: Chapter | null) => void
  setRightPanelView: (view: RightPanelView) => void
  toggleRightPanel: () => void
  setContent: (content: string) => void
  saveContent: () => Promise<void>
}

const EditorContext = createContext<EditorContextValue | undefined>(undefined)

export function EditorProvider({ children }: { children: ReactNode }) {
  const [currentBook, setCurrentBook] = useState<Book | null>(null)
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null)
  const [rightPanelView, setRightPanelView] = useState<RightPanelView>(null)
  const [content, setContent] = useState('')

  const isRightPanelOpen = rightPanelView !== null

  const toggleRightPanel = () => {
    if (isRightPanelOpen) {
      setRightPanelView(null)
    } else {
      setRightPanelView('ai-chat')
    }
  }

  const saveContent = async () => {
    // Mock save - will be replaced with real API
    console.log('Saving content...', content)
    await new Promise((resolve) => setTimeout(resolve, 500))
    console.log('Content saved!')
  }

  const value: EditorContextValue = {
    currentBook,
    currentChapter,
    rightPanelView,
    isRightPanelOpen,
    content,
    setCurrentBook,
    setCurrentChapter,
    setRightPanelView,
    toggleRightPanel,
    setContent,
    saveContent,
  }

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
}

export function useEditor() {
  const context = useContext(EditorContext)
  if (!context) {
    throw new Error('useEditor must be used within EditorProvider')
  }
  return context
}
