'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { formatTimeAgo } from '@/lib/time-utils'
import { ROUTES } from '@/lib/constants'
import type { Book } from '@/types'
import { BookOpen } from 'lucide-react'

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`${ROUTES.EDITOR}?bookId=${book.id}`)
  }

  return (
    <Card
      className="group cursor-pointer hover:shadow-lg transition-all duration-200 overflow-hidden"
      onClick={handleClick}
    >
      <CardContent className="p-0">
        {/* Book Cover */}
        <div className="aspect-[3/4] relative bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          {book.coverImage ? (
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 p-6">
              <BookOpen className="w-16 h-16 text-primary/40" />
              <p className="text-center font-semibold text-lg text-foreground/70 px-4">
                {book.title}
              </p>
            </div>
          )}

          {/* Book Spine (decorative) */}
          <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-primary/30 to-transparent" />
        </div>

        {/* Book Info */}
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-sm truncate group-hover:text-primary transition-colors">
            {book.title}
          </h3>
          <p className="text-xs text-muted-foreground">
            {formatTimeAgo(book.updatedAt)}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
