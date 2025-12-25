export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
  createdAt: string
  credits?: number
}

export interface Session {
  user: User
  token: string
  expiresAt: number
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupData {
  email: string
  password: string
  name?: string
}

export interface OTPVerification {
  email: string
  otp: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => Promise<void>
  signup: (data: SignupData) => Promise<void>
  verifyOTP: (email: string, otp: string) => Promise<void>
  logout: () => void
  requestOTP: (email: string) => Promise<void>
}
