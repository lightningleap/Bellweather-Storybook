'use client'

import { DashboardGreeting } from '@/components/books/dashboard-greeting'
import { PromptInput } from '@/components/books/prompt-input'
import { BookGrid } from '@/components/books/book-grid'
import { useBooks } from '@/hooks/use-books'

export default function HomePage() {
  const { books, isLoading } = useBooks()

  return (
    <div className="flex flex-col items-center w-full max-w-[700px] mx-auto ">
      {/* Title Section - Greeting + Heading */}
      <div className="w-full mb-[40.85px]">
        <DashboardGreeting />
      </div>

      {/* Prompt Input Section */}
      <div className="w-full mb-[116.95px]">
        <PromptInput />
      </div>

      {/* My Books Section */}
      <div className="w-full">
        <h2 className="text-xl font-semibold text-[#0F172B] mb-8" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          My Books
        </h2>
        <BookGrid books={books.slice(0, 4)} isLoading={isLoading} />
      </div>
    </div>
  )
}
