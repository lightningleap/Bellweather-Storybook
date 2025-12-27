import { AuthCarousel } from '@/components/auth/auth-carousel'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white flex items-start justify-start px-[28px] py-[27px] gap-[28px]">
      {/* Left side - Form */}
      <div className="w-[631px] h-[969px] flex flex-col justify-between items-center p-6 rounded-[20px]">
        {children}
      </div>

      {/* Right side - Illustration */}
      <div className="w-[725px] h-[968px] bg-[#F8FAFC] rounded-[20px] relative overflow-hidden">
        <AuthCarousel />
      </div>
    </div>
  )
}
