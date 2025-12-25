import { STORAGE_KEYS } from './constants'

export interface JWT {
  token: string
  expiresAt: number
}

// JWT utilities for frontend-only auth (temporary until backend is ready)
export const auth = {
  // Store JWT in localStorage
  setToken: (token: string, expiresIn: number = 7 * 24 * 60 * 60 * 1000) => {
    const jwt: JWT = {
      token,
      expiresAt: Date.now() + expiresIn,
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, JSON.stringify(jwt))
    }
  },

  // Get JWT from localStorage
  getToken: (): string | null => {
    if (typeof window === 'undefined') return null

    const stored = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
    if (!stored) return null

    try {
      const jwt: JWT = JSON.parse(stored)

      // Check if token is expired
      if (Date.now() > jwt.expiresAt) {
        auth.clearToken()
        return null
      }

      return jwt.token
    } catch {
      return null
    }
  },

  // Clear JWT from localStorage
  clearToken: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN)
      localStorage.removeItem(STORAGE_KEYS.USER)
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return auth.getToken() !== null
  },
}
