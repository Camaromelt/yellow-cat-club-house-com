import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { auth, clerkClient } from '@clerk/tanstack-react-start/server'

const fetchUserWaiverStatus = createServerFn({ method: 'GET' }).handler(
  async () => {
    const { userId } = await auth()
    if (!userId) return { waiverAccepted: false }

    const client = await clerkClient()
    const user = await client.users.getUser(userId)
    const metadata = user.publicMetadata as {
      waiverAccepted?: boolean
      waiverVersion?: string
      waiverAcceptedAt?: string
    }
    return {
      waiverAccepted: !!metadata?.waiverAccepted,
      waiverVersion: metadata?.waiverVersion,
      waiverAcceptedAt: metadata?.waiverAcceptedAt,
    }
  }
)

export const Route = createFileRoute('/_authed/dashboard')({
  loader: async () => {
    return await fetchUserWaiverStatus()
  },
  component: Dashboard,
})

function Dashboard() {
  const { waiverAccepted, waiverVersion, waiverAcceptedAt } =
    Route.useLoaderData()

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold text-primary-900 dark:text-primary-100">
        Welcome to Yellow Cat ClubHouse!
      </h1>
      <p className="mt-4 text-lg text-primary-700 dark:text-primary-200">
        Your account is ready. You&apos;re all set to play!
      </p>

      {waiverAccepted ? (
        <div className="mt-8 rounded-xl border border-olive-200 bg-olive-50 p-6 dark:border-olive-800 dark:bg-olive-950/30">
          <h2 className="text-lg font-semibold text-olive-600 dark:text-olive-400">
            Waiver Status
          </h2>
          <p className="mt-2 text-olive-600 dark:text-olive-400">
            You have accepted our play place waiver.
          </p>
          {waiverAcceptedAt && (
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Accepted on {new Date(waiverAcceptedAt).toLocaleDateString()} (
              version {waiverVersion})
            </p>
          )}
        </div>
      ) : (
        <div className="mt-8 rounded-xl border border-olive-200 bg-olive-50 p-6 dark:border-slate-600 dark:bg-primary-950/30">
          <h2 className="text-lg font-semibold text-primary-700 dark:text-primary-200">
            Complete Your Registration
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            You need to accept our play place waiver before visiting. Please
            complete the waiver to continue.
          </p>
          <Link
            to="/waiver"
            className="mt-4 inline-block rounded-md bg-primary-500 px-6 py-2 font-medium text-white hover:bg-primary-600"
          >
            Accept Waiver
          </Link>
        </div>
      )}
    </div>
  )
}
