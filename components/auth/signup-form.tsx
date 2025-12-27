'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/use-auth'
import { ROUTES } from '@/lib/constants'

export function SignupForm() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { signup } = useAuth()
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // For now, just pass email - backend will handle full signup later
      await signup({ email, name: '', password: 'temp-password-123' })
      router.push(ROUTES.OTP_VERIFY)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-start w-full">
      {error && (
        <div className="w-full p-3 mb-4 text-sm text-[#DC2626] bg-[#FEE2E2] rounded-lg">
          {error}
        </div>
      )}

      {/* Email Input */}
      <div className="flex flex-col items-start w-full gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium leading-5 text-[#0F172B]"
          style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="emanualberzeber@gmail.com."
          disabled={isLoading}
          required
          className="w-full px-3 py-2 bg-white border border-[#CAD5E2] rounded-md text-base font-normal text-[#62748E] placeholder:text-[#62748E] focus:outline-none focus:ring-2 focus:ring-[#FF6321] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
        />
      </div>

      {/* Sign Up Button */}
      <button
        type="submit"
        disabled={isLoading || !email}
        className="w-full mt-8 px-5 py-3 bg-[#FF6321] rounded-md shadow-[0px_0px_0px_1px_#CF4E17,0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:bg-[#E55818] transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
      >
        <span
          className="text-sm font-semibold leading-5 text-white"
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            textShadow: '0px 1px 3px #DF571D'
          }}
        >
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </span>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0.75px_0px_rgba(255,255,255,0.12),inset_0px_-1px_0px_0px_#D95017]" />
      </button>
    </form>
  )
}
