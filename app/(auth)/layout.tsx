import { AuthCarousel } from '@/components/auth/auth-carousel'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white flex items-start justify-start p-4 md:px-[28px] md:py-[27px] gap-0 md:gap-[28px]">
      {/* Left side - Form */}
      <div className="flex-1 min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-54px)] flex flex-col justify-between items-center md:p-6 rounded-[20px]">
        {children}
      </div>

      {/* Right side - Illustration (hidden on mobile) */}
      <div className="hidden md:flex flex-1 h-[calc(100vh-54px)] bg-[#F8FAFC] rounded-[20px] relative overflow-hidden">
        <AuthCarousel />
      </div>
    </div>
  )
}
