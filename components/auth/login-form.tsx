'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/use-auth'
import { ROUTES } from '@/lib/constants'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { login } = useAuth()
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await login(email, password)
      router.push(ROUTES.OTP_VERIFY)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-start w-full gap-5">
      {error && (
        <div className="w-full p-3 text-sm text-[#DC2626] bg-[#FEE2E2] rounded-lg">
          {error}
        </div>
      )}

      {/* Email Input */}
      <div className="flex flex-col items-start w-full gap-[6px]">
        <label
          htmlFor="email"
          className="text-sm font-medium leading-5 text-[#0F172B]"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={isLoading}
          required
          className="w-full h-10 px-3 py-2 bg-white border border-[#CAD5E2] rounded-lg text-base font-normal text-[#0F172B] placeholder:text-[#90A1B9] focus:outline-none focus:ring-2 focus:ring-[#FF6321] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {/* Password Input */}
      <div className="flex flex-col items-start w-full gap-[6px]">
        <label
          htmlFor="password"
          className="text-sm font-medium leading-5 text-[#0F172B]"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          disabled={isLoading}
          required
          className="w-full h-10 px-3 py-2 bg-white border border-[#CAD5E2] rounded-lg text-base font-normal text-[#0F172B] placeholder:text-[#90A1B9] focus:outline-none focus:ring-2 focus:ring-[#FF6321] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {/* Sign In Button */}
      <button
        type="submit"
        disabled={isLoading || !email || !password}
        className="w-full h-11 px-4 py-2.5 bg-[#FF6321] rounded-lg text-base font-semibold leading-6 text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),inset_0px_-2px_0px_0px_rgba(16,24,40,0.05),inset_0px_0px_0px_1px_rgba(16,24,40,0.18)] hover:bg-[#E55818] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ textShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)' }}
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  )
}
