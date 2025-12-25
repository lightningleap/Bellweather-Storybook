import Link from 'next/link'
import { ROUTES } from '@/lib/constants'

export function Logo() {
  return (
    <Link href={ROUTES.HOME} className="flex items-center gap-2 group">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:scale-105"
      >
        <rect width="32" height="32" rx="6" fill="#FF6321" />
        <path
          d="M9 10h6c2.21 0 4 1.79 4 4s-1.79 4-4 4h-2v4M9 10v12M9 18h6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
        Bellwether
      </span>
    </Link>
  )
}
