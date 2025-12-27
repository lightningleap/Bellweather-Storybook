'use client'

import { BookGrid } from '@/components/books/book-grid'
import { useBooks } from '@/hooks/use-books'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function BooksPage() {
  const { books, isLoading } = useBooks()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-[32px] font-semibold text-[#0F172B]">My Books</h1>
        <p className="text-base text-[#62748E] mt-2">
          Manage and write your books
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#94A3B8]" />
        <input
          type="text"
          placeholder="Search books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-11 pl-11 pr-4 bg-white border border-[#E2E8F0] rounded-lg text-base text-[#0F172B] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FF6321]/20 focus:border-[#FF6321]"
        />
      </div>

      {/* Books Grid */}
      <BookGrid books={filteredBooks} isLoading={isLoading} />

      {/* Stats */}
      {!isLoading && books.length > 0 && (
        <div className="text-sm text-[#94A3B8]">
          Showing {filteredBooks.length} of {books.length} books
        </div>
      )}
    </div>
  )
}
