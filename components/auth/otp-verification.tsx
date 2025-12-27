'use client'

import { useState, useRef, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'

export function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { verifyOTP } = useAuth()
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Get email from sessionStorage
  const email = typeof window !== 'undefined'
    ? sessionStorage.getItem('pending_auth_email') || ''
    : ''

  // Get test OTP from sessionStorage (for development)
  const testOTP = typeof window !== 'undefined'
    ? sessionStorage.getItem('dev_test_otp') || ''
    : ''

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus()
  }, [])

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    if (!/^\d+$/.test(pastedData)) return

    const newOtp = [...otp]
    pastedData.split('').forEach((char, index) => {
      if (index < 6) newOtp[index] = char
    })
    setOtp(newOtp)

    // Focus last filled input or last input
    const lastIndex = Math.min(pastedData.length, 5)
    inputRefs.current[lastIndex]?.focus()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const otpValue = otp.join('')
    if (otpValue.length !== 6) return

    setIsLoading(true)
    setError(null)

    try {
      await verifyOTP(email, otpValue)
      // Navigation handled by auth context
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid OTP')
      setOtp(['', '', '', '', '', ''])
      inputRefs.current[0]?.focus()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start w-full gap-6">
      {testOTP && (
        <div className="w-full p-4 bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg">
          <div className="text-sm font-semibold text-[#1E40AF] mb-1">
            Development Mode
          </div>
          <div className="text-sm text-[#1E40AF]">
            Use this test OTP: <span className="font-mono font-bold text-base">{testOTP}</span>
          </div>
        </div>
      )}

      {error && (
        <div className="w-full p-3 text-sm text-[#DC2626] bg-[#FEE2E2] rounded-lg">
          {error}
        </div>
      )}

      {/* OTP Inputs */}
      <div className="flex flex-col items-start w-full gap-3">
        <label className="text-sm font-medium leading-5 text-[#0F172B]">
          One-Time Password
        </label>
        <div className="flex flex-row items-start gap-3 w-full">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              disabled={isLoading}
              className="w-[60px] h-[60px] text-center text-2xl font-semibold bg-white border border-[#CAD5E2] rounded-lg text-[#0F172B] focus:outline-none focus:ring-2 focus:ring-[#FF6321] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
          ))}
        </div>
        <p className="text-sm font-normal text-[#62748E]">
          Please enter the 6-digit code sent to {email}
        </p>
      </div>

      {/* Verify Button */}
      <button
        type="submit"
        disabled={isLoading || otp.join('').length !== 6}
        className="w-full h-11 px-4 py-2.5 bg-[#FF6321] rounded-lg text-base font-semibold leading-6 text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),inset_0px_-2px_0px_0px_rgba(16,24,40,0.05),inset_0px_0px_0px_1px_rgba(16,24,40,0.18)] hover:bg-[#E55818] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ textShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)' }}
      >
        {isLoading ? 'Verifying...' : 'Verify OTP'}
      </button>

      {/* Resend Link */}
      <div className="w-full text-center">
        <button
          type="button"
          className="text-sm font-normal text-[#62748E] hover:text-[#0F172B] transition-colors"
        >
          Didn&apos;t receive the code? <span className="text-[#FF6321] font-medium">Resend</span>
        </button>
      </div>
    </form>
  )
}
