'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Book } from '@/types'

interface BooksContextValue {
  books: Book[]
  isLoading: boolean
  createBook: (title: string, description?: string) => Promise<Book>
  deleteBook: (bookId: string) => Promise<void>
  updateBook: (bookId: string, updates: Partial<Book>) => Promise<void>
  getBook: (bookId: string) => Book | undefined
}

const BooksContext = createContext<BooksContextValue | undefined>(undefined)

// Mock books data
const mockBooks: Book[] = [
  {
    id: 'proj-untitled',
    title: 'Untitled',
    author: 'You',
    createdAt: new Date(Date.now() - 20 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 20 * 1000).toISOString(),
    chapters: [],
    status: 'draft',
    wordCount: 0,
  },
  {
    id: 'proj-steve-jobs',
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    coverImage: '/images/home/steve.webp',
    createdAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    chapters: [
      {
        id: 'ch-1',
        bookId: 'proj-steve-jobs',
        title: 'Chapter 1',
        content: 'The story begins...',
        order: 1,
        wordCount: 1250,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    status: 'draft',
    wordCount: 1250,
  },
  {
    id: 'proj-the-martian',
    title: 'The Martian',
    author: 'Andy Weir',
    coverImage: '/images/home/martian.jpg',
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    chapters: [],
    status: 'draft',
    wordCount: 0,
  },
  {
    id: 'proj-million-to-one',
    title: 'A Million To One',
    author: 'Tony Faggioli',
    coverImage: '/images/home/million.jpg',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    chapters: [],
    status: 'draft',
    wordCount: 0,
  },
]

export function BooksProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load mock books on mount
  useEffect(() => {
    const loadBooks = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      setBooks(mockBooks)
      setIsLoading(false)
    }

    loadBooks()
  }, [])

  const createBook = async (title: string, description?: string): Promise<Book> => {
    const newBook: Book = {
      id: 'proj-' + Math.random().toString(36).substr(2, 9),
      title,
      description,
      author: 'You',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      chapters: [],
      status: 'draft',
      wordCount: 0,
    }

    setBooks((prev) => [newBook, ...prev])
    return newBook
  }

  const deleteBook = async (bookId: string) => {
    setBooks((prev) => prev.filter((book) => book.id !== bookId))
  }

  const updateBook = async (bookId: string, updates: Partial<Book>) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === bookId
          ? { ...book, ...updates, updatedAt: new Date().toISOString() }
          : book
      )
    )
  }

  const getBook = (bookId: string) => {
    return books.find((book) => book.id === bookId)
  }

  const value: BooksContextValue = {
    books,
    isLoading,
    createBook,
    deleteBook,
    updateBook,
    getBook,
  }

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}

export function useBooks() {
  const context = useContext(BooksContext)
  if (!context) {
    throw new Error('useBooks must be used within BooksProvider')
  }
  return context
}
