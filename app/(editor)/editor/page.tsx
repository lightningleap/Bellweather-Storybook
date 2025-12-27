'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useEditor } from '@/hooks/use-editor'
import { useBooks } from '@/hooks/use-books'
import { EditorHeader } from '@/components/editor/editor-header'
import { EditorToolbar } from '@/components/editor/editor-toolbar'
import { TextEditor } from '@/components/editor/text-editor'
import { Skeleton } from '@/components/ui/skeleton'

function EditorContent() {
  const searchParams = useSearchParams()
  const bookId = searchParams.get('bookId')
  const chapterId = searchParams.get('chapterId')

  const { getBook } = useBooks()
  const { setCurrentBook, setCurrentChapter, setContent } = useEditor()

  useEffect(() => {
    if (bookId) {
      const book = getBook(bookId)
      if (book) {
        setCurrentBook(book)

        // Load chapter if specified
        if (chapterId) {
          const chapter = book.chapters.find((ch) => ch.id === chapterId)
          if (chapter) {
            setCurrentChapter(chapter)
            setContent(chapter.content)
          }
        } else if (book.chapters.length > 0) {
          // Load first chapter by default
          const firstChapter = book.chapters[0]
          setCurrentChapter(firstChapter)
          setContent(firstChapter.content)
        }
      }
    }
  }, [bookId, chapterId, getBook, setCurrentBook, setCurrentChapter, setContent])

  return (
    <div className="h-full flex flex-col relative">
      <EditorHeader />
      <div className="flex-1 overflow-hidden">
        <TextEditor />
      </div>
      <EditorToolbar />
    </div>
  )
}

export default function EditorPage() {
  return (
    <Suspense
      fallback={
        <div className="h-full flex flex-col">
          <Skeleton className="h-14" />
          <Skeleton className="h-12" />
          <div className="flex-1 p-8">
            <Skeleton className="h-full" />
          </div>
        </div>
      }
    >
      <EditorContent />
    </Suspense>
  )
}
