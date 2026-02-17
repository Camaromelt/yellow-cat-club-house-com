import { SignUp } from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-up')({
  component: SignUpPage,
})

function SignUpPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <SignUp
        fallbackRedirectUrl="/waiver"
        signInUrl="/sign-in"
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
