'use client'

import { BookGrid } from '@/components/books/book-grid'
import { CreateBookDialog } from '@/components/books/create-book-dialog'
import { useBooks } from '@/hooks/use-books'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function BooksPage() {
  const { books, isLoading } = useBooks()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Books</h1>
          <p className="text-muted-foreground mt-2">
            Manage and write your books
          </p>
        </div>
        <CreateBookDialog />
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Books Grid */}
      <BookGrid books={filteredBooks} isLoading={isLoading} />

      {/* Stats */}
      {!isLoading && books.length > 0 && (
        <div className="text-sm text-muted-foreground">
          Showing {filteredBooks.length} of {books.length} books
        </div>
      )}
    </div>
  )
}
