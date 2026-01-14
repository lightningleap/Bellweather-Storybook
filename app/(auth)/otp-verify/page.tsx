import Link from 'next/link'
import { Logo } from '@/components/layout/logo'
import { OTPVerification } from '@/components/auth/otp-verification'
import { ROUTES } from '@/lib/constants'

export default function OTPVerifyPage() {
  return (
    <>
      {/* Top Section */}
      <div className="flex flex-col items-start md:items-center w-full md:w-[583px] gap-5 md:gap-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full md:h-7 gap-5 md:gap-0">
          <Logo href="/" />
          <p
            className="text-sm text-[#62748E] text-left md:text-center"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            Don&apos;t have account?{' '}
            <Link
              href={ROUTES.SIGNUP}
              className="font-medium text-[#0F172B] hover:text-[#FF6321] transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center w-full md:w-[450px] gap-8">
        {/* Header */}
        <div className="flex flex-col items-start w-full gap-1">
          <h1
            className="text-[24px] font-semibold leading-8 text-[#0F172B] w-full"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            Enter verification code
          </h1>
          <p
            className="text-base font-normal leading-6 text-[#62748E]"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            Please enter the code we sent to your email.
          </p>
        </div>

        {/* OTP Form */}
        <OTPVerification />
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:w-[583px] gap-5 md:h-5">
        <p
          className="text-sm font-normal text-[#90A1B9] order-1 md:order-none"
          style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
        >
          © 2025 Kasana Inc. All rights reserved.
        </p>
        <div className="flex flex-row items-center gap-2 order-2 md:order-none">
          <Link
            href="/privacy"
            className="text-sm font-normal text-[#90A1B9] hover:text-[#62748E] transition-colors"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            Privacy
          </Link>
          <div className="w-[5px] h-[5px] bg-[#90A1B9] rounded-full" />
          <Link
            href="/terms"
            className="text-sm font-normal text-[#90A1B9] hover:text-[#62748E] transition-colors"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            Terms & Condition
          </Link>
        </div>
      </div>
    </>
  )
}
