'use client'

import { useRouter } from 'next/navigation'
import { formatTimeAgo } from '@/lib/time-utils'
import { ROUTES } from '@/lib/constants'
import type { Book } from '@/types'

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`${ROUTES.EDITOR}?bookId=${book.id}`)
  }

  return (
    <div
      className="cursor-pointer transition-all duration-200 flex flex-col gap-[16px] rounded-2xl"
      onClick={handleClick}
    >
      {/* Book Cover */}
      <div className="relative w-[150.465px] h-[226.742px]">
        {book.coverImage ? (
          <>
            <div className="absolute inset-0 border-[0.697px] border-[#6A7282] rounded-[5.573px] shadow-[0px_9.752px_48.762px_5.573px_rgba(32,31,49,0.2)] overflow-hidden">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-full object-cover rounded-[5.573px]"
              />
              <div className="absolute inset-0 shadow-[inset_0px_0px_13.932px_0px_rgba(42,42,48,0.25)]" />
            </div>
            {/* Book spine */}
            <div className="absolute left-[6.27px] top-0 bottom-0 w-[6.792px] pointer-events-none" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[#F3F4F6] border-[0.261px] border-[#6A7282] rounded-[4px] shadow-[0px_3.657px_18.286px_4px_rgba(32,31,49,0.1)] flex items-center justify-center p-4">
              <div className="absolute inset-0 shadow-[inset_0px_0px_5.224px_0px_rgba(42,42,48,0.25)] rounded-[4px]" />
              <p className="text-center font-semibold text-base text-[#030712] line-clamp-3 relative z-10">
                {book.title}
              </p>
            </div>
            {/* Book spine for empty state */}
            <div className="absolute left-[6.27px] top-0 bottom-0 w-[6.792px] pointer-events-none" />
          </>
        )}
      </div>

      {/* Book Info */}
      <div className="flex flex-col gap-[2px] w-[150.465px]">
        <p className="font-semibold text-base leading-6 text-[#030712] truncate" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {book.title}
        </p>
        <p className="text-xs leading-4 text-[#6A7282]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {formatTimeAgo(book.updatedAt)}
        </p>
      </div>
    </div>
  )
}
