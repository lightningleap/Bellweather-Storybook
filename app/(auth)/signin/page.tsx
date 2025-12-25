import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Logo } from '@/components/layout/logo'
import { LoginForm } from '@/components/auth/login-form'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/lib/constants'

export default function SignInPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-center lg:justify-start">
        <Logo />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>
            Enter your details to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <LoginForm />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline" size="sm" disabled>
              Google
            </Button>
            <Button variant="outline" size="sm" disabled>
              Apple
            </Button>
            <Button variant="outline" size="sm" disabled>
              Microsoft
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link
              href={ROUTES.SIGNUP}
              className="text-primary hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
