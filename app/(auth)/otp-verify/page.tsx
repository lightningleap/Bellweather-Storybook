import Link from 'next/link'
import { Logo } from '@/components/layout/logo'
import { OTPVerification } from '@/components/auth/otp-verification'
import { ROUTES } from '@/lib/constants'

export default function OTPVerifyPage() {
  return (
    <>
      {/* Top Section */}
      <div className="flex flex-col items-center w-[583px] gap-0">
        <div className="flex flex-row justify-between items-center w-full h-7 gap-[221px]">
          <Logo />
          <Link
            href={ROUTES.SIGNIN}
            className="text-sm font-normal text-[#62748E] hover:text-[#0F172B] transition-colors text-center"
          >
            Back to <span className="text-[#FF6321] font-medium">Sign in</span>
          </Link>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center w-[450px] gap-6">
        <div className="flex flex-col items-start w-full gap-8">
          {/* Header */}
          <div className="flex flex-col items-start w-full gap-1">
            <h1 className="text-[30px] font-semibold leading-9 text-[#0F172B] w-full">
              Verify your email
            </h1>
            <p className="text-base font-normal leading-6 text-[#62748E]">
              We&apos;ve sent a 6-digit code to your email
            </p>
          </div>

          {/* OTP Form */}
          <OTPVerification />
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-row justify-between items-center w-[583px] h-5">
        <p className="text-sm font-normal text-[#90A1B9]">
          © 2025 Kasana Inc. All rights reserved.
        </p>
        <div className="flex flex-row items-center gap-2">
          <Link href="/privacy" className="text-sm font-normal text-[#90A1B9] hover:text-[#62748E] transition-colors">
            Privacy
          </Link>
          <div className="w-[5px] h-[5px] bg-[#90A1B9] rounded-full" />
          <Link href="/terms" className="text-sm font-normal text-[#90A1B9] hover:text-[#62748E] transition-colors">
            Terms & Condition
          </Link>
        </div>
      </div>
    </>
  )
}
