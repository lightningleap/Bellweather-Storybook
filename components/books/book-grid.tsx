'use client'

import { BookCard } from './book-card'
import type { Book } from '@/types'

interface BookGridProps {
  books: Book[]
  isLoading?: boolean
}

export function BookGrid({ books, isLoading }: BookGridProps) {
  if (isLoading) {
    return (
      <div className="flex items-start justify-between w-full gap-[28.71px]">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-4 animate-pulse">
            <div className="w-[150.465px] h-[226.742px] bg-[#F1F5F9] rounded-lg" />
            <div className="h-4 w-[150.465px] bg-[#F1F5F9] rounded" />
            <div className="h-3 w-[100px] bg-[#F1F5F9] rounded" />
          </div>
        ))}
      </div>
    )
  }

  if (books.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#62748E]">No books yet. Create your first book to get started!</p>
      </div>
    )
  }

  return (
    <div className="flex items-start justify-between w-full gap-[28.71px]">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}
