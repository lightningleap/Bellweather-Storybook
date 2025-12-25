import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Logo } from '@/components/layout/logo'
import { OTPVerification } from '@/components/auth/otp-verification'

export default function OTPVerifyPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-center lg:justify-start">
        <Logo />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Verify your email</CardTitle>
          <CardDescription>
            We've sent a 6-digit code to your email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OTPVerification />
        </CardContent>
      </Card>
    </div>
  )
}
