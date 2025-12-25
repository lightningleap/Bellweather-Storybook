'use client'

import { DashboardGreeting } from '@/components/books/dashboard-greeting'
import { PromptInput } from '@/components/books/prompt-input'
import { BookGrid } from '@/components/books/book-grid'
import { CreateBookDialog } from '@/components/books/create-book-dialog'
import { useBooks } from '@/hooks/use-books'

export default function HomePage() {
  const { books, isLoading } = useBooks()

  return (
    <div className="space-y-8 max-w-7xl">
      <DashboardGreeting />

      <PromptInput />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">My Books</h2>
          <CreateBookDialog />
        </div>

        <BookGrid books={books.slice(0, 4)} isLoading={isLoading} />
      </div>
    </div>
  )
}
