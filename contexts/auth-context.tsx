'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/auth'
import { api, ApiError } from '@/lib/api'
import { ROUTES, STORAGE_KEYS } from '@/lib/constants'
import type { AuthContextValue, User, SignupData } from '@/types'

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check if user is authenticated on mount
  useEffect(() => {
    const token = auth.getToken()
    if (token) {
      // Load user from localStorage
      const storedUser = localStorage.getItem(STORAGE_KEYS.USER)
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser))
        } catch {
          auth.clearToken()
        }
      }
    }
    setIsLoading(false)
  }, [])

  // Request OTP for email
  const requestOTP = async (email: string) => {
    try {
      // Mock OTP request - will be replaced with real API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // DEV MODE: Generate and store a test OTP
      const testOTP = '123456'
      sessionStorage.setItem('dev_test_otp', testOTP)

      console.log('OTP sent to:', email)
      console.log('DEV MODE - Use this OTP:', testOTP)
      // In production, this would call: await api.requestOTP(email)
    } catch (error) {
      if (error instanceof ApiError) {
        throw new Error(error.message)
      }
      throw new Error('Failed to send OTP')
    }
  }

  // Login with email and password
  const login = async (email: string, password: string) => {
    try {
      // Mock login - sends OTP
      await requestOTP(email)
      // Store email temporarily for OTP verification
      sessionStorage.setItem('pending_auth_email', email)
      sessionStorage.setItem('pending_auth_type', 'login')
    } catch (error) {
      if (error instanceof ApiError) {
        throw new Error(error.message)
      }
      throw new Error('Login failed')
    }
  }

  // Signup with user data
  const signup = async (data: SignupData) => {
    try {
      // Mock signup - sends OTP
      await requestOTP(data.email)
      // Store data temporarily for OTP verification
      sessionStorage.setItem('pending_auth_email', data.email)
      sessionStorage.setItem('pending_auth_type', 'signup')
      if (data.name) {
        sessionStorage.setItem('pending_auth_name', data.name)
      }
    } catch (error) {
      if (error instanceof ApiError) {
        throw new Error(error.message)
      }
      throw new Error('Signup failed')
    }
  }

  // Verify OTP and complete authentication
  const verifyOTP = async (email: string, otp: string) => {
    try {
      // Mock OTP verification - will be replaced with real API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Create mock user
      const mockUser: User = {
        id: 'user_' + Math.random().toString(36).substr(2, 9),
        email,
        name: sessionStorage.getItem('pending_auth_name') || undefined,
        createdAt: new Date().toISOString(),
        credits: 100,
      }

      // Mock token
      const mockToken = 'mock_jwt_token_' + Math.random().toString(36)

      // Store token and user
      auth.setToken(mockToken)
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(mockUser))
      setUser(mockUser)

      // Clear pending auth data
      sessionStorage.removeItem('pending_auth_email')
      sessionStorage.removeItem('pending_auth_type')
      sessionStorage.removeItem('pending_auth_name')

      // Set cookie for middleware (in real app, this would come from backend)
      document.cookie = `auth-token=${mockToken}; path=/; max-age=${7 * 24 * 60 * 60}`

      // Redirect to home
      router.push(ROUTES.HOME)
    } catch (error) {
      if (error instanceof ApiError) {
        throw new Error(error.message)
      }
      throw new Error('Invalid OTP')
    }
  }

  // Logout
  const logout = () => {
    auth.clearToken()
    setUser(null)
    document.cookie = 'auth-token=; path=/; max-age=0'
    router.push(ROUTES.SIGNIN)
  }

  const value: AuthContextValue = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    verifyOTP,
    logout,
    requestOTP,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
