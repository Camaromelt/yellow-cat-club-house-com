import { SignIn } from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-in')({
  component: SignInPage,
})

function SignInPage() {
  return (
    <div className="flex min-h-[ calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <SignIn
        fallbackRedirectUrl="/dashboard"
        signUpUrl="/sign-up"
        appearance={{
          variables: {
            colorPrimary: '#5385bd',
            colorBackground: '#eff4fa',
            borderRadius: '0.75rem',
          },
        }}
      />
    </div>
  )
}
