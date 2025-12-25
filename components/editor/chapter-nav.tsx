'use client'

import { useEditor } from '@/hooks/use-editor'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, Plus } from 'lucide-react'

export function ChapterNav() {
  const { currentBook, currentChapter } = useEditor()

  const chapterTitle = currentChapter?.title || 'No chapter selected'

  return (
    <div className="h-14 border-b border-border bg-background flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <span className="font-medium">{chapterTitle}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64">
            {currentBook?.chapters.map((chapter) => (
              <DropdownMenuItem key={chapter.id}>
                {chapter.title}
              </DropdownMenuItem>
            ))}
            {(!currentBook?.chapters || currentBook.chapters.length === 0) && (
              <DropdownMenuItem disabled>No chapters yet</DropdownMenuItem>
            )}
            <DropdownMenuItem className="gap-2">
              <Plus className="h-4 w-4" />
              New Chapter
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {currentBook && (
          <span className="text-sm text-muted-foreground">
            {currentBook.title}
          </span>
        )}
      </div>

      <Button size="sm">Save</Button>
    </div>
  )
}
