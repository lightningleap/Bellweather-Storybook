export interface Book {
  id: string
  title: string
  description?: string
  coverImage?: string
  author: string
  createdAt: string
  updatedAt: string
  chapters: Chapter[]
  status: 'draft' | 'published'
  wordCount: number
}

export interface Chapter {
  id: string
  bookId: string
  title: string
  content: string
  order: number
  wordCount: number
  createdAt: string
  updatedAt: string
}

export interface Outline {
  id: string
  bookId: string
  structure: OutlineNode[]
  updatedAt: string
}

export interface OutlineNode {
  id: string
  title: string
  type: 'chapter' | 'section' | 'scene'
  children?: OutlineNode[]
  order: number
}

export interface BookMetadata {
  genre?: string
  targetAudience?: string
  tags?: string[]
  targetWordCount?: number
}
