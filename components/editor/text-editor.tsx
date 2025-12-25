'use client'

import { useEditor } from '@/hooks/use-editor'
import { Textarea } from '@/components/ui/textarea'
import { useEffect, useState } from 'react'

export function TextEditor() {
  const { content, setContent, currentChapter } = useEditor()
  const [localContent, setLocalContent] = useState(content)

  // Sync with context
  useEffect(() => {
    setLocalContent(content)
  }, [content])

  // Auto-save debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localContent !== content) {
        setContent(localContent)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [localContent, content, setContent])

  return (
    <div className="flex-1 flex flex-col">
      <Textarea
        value={localContent}
        onChange={(e) => setLocalContent(e.target.value)}
        placeholder={
          currentChapter
            ? 'Start writing your chapter...'
            : 'Create a chapter to start writing...'
        }
        className="flex-1 min-h-[600px] resize-none border-0 focus-visible:ring-0 text-base leading-relaxed p-8 font-serif"
      />
    </div>
  )
}
