'use client'

import { useEditor } from '@/hooks/use-editor'
import { useMemo } from 'react'

export function WordCount() {
  const { content } = useEditor()

  const stats = useMemo(() => {
    const words = content.trim().split(/\s+/).filter(Boolean).length
    const characters = content.length
    const charactersNoSpaces = content.replace(/\s/g, '').length

    return { words, characters, charactersNoSpaces }
  }, [content])

  return (
    <div className="h-10 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-end gap-6 px-4 text-xs text-muted-foreground">
      <span>{stats.words} words</span>
      <span>{stats.characters} characters</span>
      <span>{stats.charactersNoSpaces} characters (no spaces)</span>
    </div>
  )
}
