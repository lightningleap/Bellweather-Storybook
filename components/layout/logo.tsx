import Link from 'next/link'
import { ROUTES } from '@/lib/constants'
import Image from 'next/image'

interface LogoProps {
  href?: string
}

export function Logo({ href = ROUTES.HOME }: LogoProps = {}) {
  return (
    <Link href={href} className="flex items-center gap-2 group">
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
