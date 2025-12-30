import { AuthCarousel } from '@/components/auth/auth-carousel'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white flex items-start justify-start px-[28px] py-[27px] gap-[28px]">
      {/* Left side - Form */}
      <div className="flex-1 min-h-[calc(100vh-54px)] flex flex-col justify-between items-center p-6 rounded-[20px]">
        {children}
      </div>

      {/* Right side - Illustration */}
      <div className="flex-1 h-[calc(100vh-54px)] bg-[#F8FAFC] rounded-[20px] relative overflow-hidden">
        <AuthCarousel />
      </div>
    </div>
  )
}
