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
    <div className="w-full max-w-6xl mx-auto">
      {/* Header & Search */}
      <div className="flex flex-col gap-6 mb-10 px-[6px] md:px-0">
        <div>
          <h1 className="text-2xl md:text-[32px] font-semibold text-[#030712] leading-8" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            My Books
          </h1>
          <p className="hidden md:block text-base text-[#62748E] mt-2">
            Manage and write your books
          </p>
        </div>

        {/* Search */}
        <div className="relative w-[240px] md:w-full md:max-w-md">
          <Search className="absolute left-[10px] top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-[#314158]" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-[32px] md:h-11 pl-9 md:pl-11 pr-4 bg-white border border-[#CAD5E2] rounded-md md:rounded-lg text-sm md:text-base text-[#314158] placeholder:text-[#314158] focus:outline-none focus:ring-2 focus:ring-[#FF6321]/20 focus:border-[#FF6321]"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          />
        </div>
      </div>

      {/* Books Grid */}
      <div className="px-[6px] md:px-0">
        <BookGrid books={filteredBooks} isLoading={isLoading} />
      </div>

      {/* Stats - hidden on mobile */}
      {!isLoading && books.length > 0 && (
        <div className="hidden md:block text-sm text-[#94A3B8] mt-8">
          Showing {filteredBooks.length} of {books.length} books
        </div>
      )}
    </div>
  )
}
