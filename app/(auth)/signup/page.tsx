import Link from 'next/link'
import Image from 'next/image'
import { Logo } from '@/components/layout/logo'
import { SignupForm } from '@/components/auth/signup-form'
import { ROUTES } from '@/lib/constants'

export default function SignUpPage() {
  return (
    <>
      {/* Top Section */}
      <div className="flex flex-col items-center w-[583px] gap-0">
        <div className="flex flex-row justify-between items-center w-full h-7">
          <Logo href="/" />
          <p
            className="text-sm text-[#62748E] text-center"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            Already have an account?{' '}
            <Link
              href={ROUTES.SIGNIN}
              className="font-medium text-[#0F172B] hover:text-[#FF6321] transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center w-[450px] gap-6">
        <div className="flex flex-col items-start w-full gap-8">
          {/* Header */}
          <div className="flex flex-col items-start w-full gap-1">
            <h1
              className="text-[30px] font-semibold leading-9 text-[#0F172B] w-full"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              Welcome to Bellwether
            </h1>
            <p
              className="text-base font-normal leading-6 text-[#62748E]"
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              Enter your details to create new account.
            </p>
          </div>

          {/* Form */}
          <SignupForm />
        </div>

        {/* Divider */}
        <div className="flex flex-row items-center w-full h-5 gap-3">
          <div className="flex-1 h-px bg-[#E2E8F0]" />
          <span
            className="text-sm font-normal text-[#62748E]"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
          >
            Or sign up with
          </span>
          <div className="flex-1 h-px bg-[#E2E8F0]" />
        </div>

        {/* Social Auth Buttons */}
        <div className="flex flex-row items-start gap-[21.5px]">
          {/* SSO */}
          <div className="flex flex-col items-center gap-[6px]">
            <button
              disabled
              className="w-[47px] h-[47px] bg-[#F1F5F9] rounded-lg hover:bg-[#E2E8F0] transition-colors flex items-center justify-center"
            >
              <Image src="/icons/Frame.svg" alt="SSO" width={24} height={24} />
            </button>
            <span className="text-sm font-medium text-[#0F172B] text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>
              SSO
            </span>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center gap-[6px]">
            <button
              disabled
              className="w-[47px] h-[47px] bg-[#F1F5F9] rounded-lg hover:bg-[#E2E8F0] transition-colors flex items-center justify-center"
            >
              <Image src="/icons/Facebook Icon.svg" alt="Facebook" width={24} height={24} />
            </button>
            <span className="text-sm font-medium text-[#0F172B] text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Facebook
            </span>
          </div>

          {/* Google */}
          <div className="flex flex-col items-center gap-[6px]">
            <button
              disabled
              className="w-[47px] h-[47px] bg-[#F1F5F9] rounded-lg hover:bg-[#E2E8F0] transition-colors flex items-center justify-center"
            >
              <Image src="/icons/Google Icon.svg" alt="Google" width={24} height={24} />
            </button>
            <span className="text-sm font-medium text-[#0F172B] text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Google
            </span>
          </div>

          {/* Apple */}
          <div className="flex flex-col items-center gap-[6px]">
            <button
              disabled
              className="w-[47px] h-[47px] bg-[#F1F5F9] rounded-lg hover:bg-[#E2E8F0] transition-colors flex items-center justify-center"
            >
              <Image src="/icons/Apple Icon.svg" alt="Apple" width={24} height={24} />
            </button>
            <span className="text-sm font-medium text-[#0F172B] text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Apple
            </span>
          </div>

          {/* Microsoft */}
          <div className="flex flex-col items-center gap-[6px]">
            <button
              disabled
              className="w-[47px] h-[47px] bg-[#F1F5F9] rounded-lg hover:bg-[#E2E8F0] transition-colors flex items-center justify-center"
            >
              <Image src="/icons/Microsoft Icon.svg" alt="Microsoft" width={24} height={24} />
            </button>
            <span className="text-sm font-medium text-[#0F172B] text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Microsoft
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-row justify-between items-center w-[583px] h-5">
        <p
          className="text-sm font-normal text-[#90A1B9]"
          style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
        >
          © 2025 Kasana Inc. All rights reserved.
        </p>
        <div className="flex flex-row items-center gap-2">
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
