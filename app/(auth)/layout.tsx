import { AuthCarousel } from '@/components/auth/auth-carousel'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Right side - Carousel (hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-primary/5 items-center justify-center p-12">
        <AuthCarousel />
      </div>
    </div>
  )
}
