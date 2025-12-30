// App Routes
export const ROUTES = {
  // Auth routes
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  OTP_VERIFY: '/otp-verify',

  // Main app routes
  HOME: '/home',
  BOOKS: '/books',

  // Editor routes
  EDITOR: '/editor',

  // API routes
  API_LOGIN: '/api/auth/login',
  API_VERIFY_OTP: '/api/auth/verify-otp',
  API_LOGOUT: '/api/auth/logout',
} as const

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'bellweather_auth_token',
  USER: 'bellweather_user',
} as const

// App Config
export const APP_CONFIG = {
  APP_NAME: 'Bellwether',
  OTP_LENGTH: 6,
  OTP_EXPIRY_MINUTES: 10,
} as const
