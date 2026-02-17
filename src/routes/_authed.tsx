import { createFileRoute, redirect, Outlet } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { auth } from '@clerk/tanstack-react-start/server'

const fetchAuth = createServerFn({ method: 'GET' }).handler(async () => {
  const { userId } = await auth()
  return { userId }
})

export const Route = createFileRoute('/_authed')({
  beforeLoad: async () => {
    const { userId } = await fetchAuth()
    if (!userId) {
      throw redirect({ to: '/sign-in' })
    }
    return { userId }
  },
  component: AuthedLayout,
})

function AuthedLayout() {
  return <Outlet />
}
