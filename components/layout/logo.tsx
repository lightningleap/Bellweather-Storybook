import Link from 'next/link'
import { ROUTES } from '@/lib/constants'
import Image from 'next/image'

export function Logo() {
  return (
    <Link href={ROUTES.HOME} className="flex items-center gap-2 group">
      <Image
        src="/logo.svg"
        alt="Bellwether"
        width={151}
        height={28}
        className="transition-transform group-hover:scale-105"
        priority
      />
    </Link>
  )
}
