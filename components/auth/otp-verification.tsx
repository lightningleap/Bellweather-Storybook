'use client'

import { useState, useRef, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'

const OTP_LENGTH = 5

export function OTPVerification() {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''))
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [countdown, setCountdown] = useState(59)
  const [canResend, setCanResend] = useState(false)
  const { verifyOTP } = useAuth()
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Get email from sessionStorage
  const email = typeof window !== 'undefined'
    ? sessionStorage.getItem('pending_auth_email') || ''
    : ''

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus()
  }, [])

  // Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [countdown])

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input if value is entered
    if (value && index < OTP_LENGTH - 1) {
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
    const pastedData = e.clipboardData.getData('text').slice(0, OTP_LENGTH)
    if (!/^\d+$/.test(pastedData)) return

    const newOtp = [...otp]
    pastedData.split('').forEach((char, index) => {
      if (index < OTP_LENGTH) newOtp[index] = char
    })
    setOtp(newOtp)

    // Focus last filled input or last input
    const lastIndex = Math.min(pastedData.length, OTP_LENGTH - 1)
    inputRefs.current[lastIndex]?.focus()
  }

  const handleResend = () => {
    if (!canResend) return
    // Reset timer
    setCountdown(59)
    setCanResend(false)
    // TODO: Call resend OTP API
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const otpValue = otp.join('')
    if (otpValue.length !== OTP_LENGTH) return

    setIsLoading(true)
    setError(null)

    try {
      await verifyOTP(email, otpValue)
      // Navigation handled by auth context
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid OTP')
      setOtp(Array(OTP_LENGTH).fill(''))
      inputRefs.current[0]?.focus()
    } finally {
      setIsLoading(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-8">
      {error && (
        <div className="w-full p-3 text-sm text-[#DC2626] bg-[#FEE2E2] rounded-lg">
          {error}
        </div>
      )}

      {/* OTP Inputs */}
      <div className="flex flex-row items-center justify-center gap-3">
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
            className="w-[56px] h-[48px] text-center text-[20px] font-medium bg-white border border-[#E2E2EA] rounded-lg text-[#222325] placeholder:text-[#909091] focus:outline-none focus:border-[#1D71EC] focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            placeholder="-"
          />
        ))}
      </div>

      {/* Button and Resend Timer */}
      <div className="flex flex-row items-center justify-center gap-4 w-full">
        <button
          type="submit"
          disabled={isLoading || otp.join('').length !== OTP_LENGTH}
          className="w-[170px] px-5 py-3 bg-[#FF6321] rounded-md shadow-[0px_0px_0px_1px_#CF4E17,0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:bg-[#E55818] transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
        >
          <span
            className="text-sm font-semibold leading-5 text-white"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              textShadow: '0px 1px 3px #DF571D'
            }}
          >
            {isLoading ? 'Verifying...' : 'Sign In'}
          </span>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0.75px_0px_rgba(255,255,255,0.12),inset_0px_-1px_0px_0px_#D95017]" />
        </button>

        <p
          className="text-sm font-normal text-[#0F172B]"
          style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
        >
          {canResend ? (
            <button
              type="button"
              onClick={handleResend}
              className="text-[#FF6321] font-medium hover:underline"
            >
              Resend code
            </button>
          ) : (
            <>
              Resend code in{' '}
              <span className="text-[#FF6321]">{formatTime(countdown)}</span>
            </>
          )}
        </p>
      </div>
    </form>
  )
}
