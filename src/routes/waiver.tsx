import { createFileRoute, Link, useRouter, redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { auth, clerkClient } from '@clerk/tanstack-react-start/server'
import { useState } from 'react'
import { WAIVER_TEXT, WAIVER_VERSION } from '~/lib/waiver'

const acceptWaiverFn = createServerFn({ method: 'POST' }).handler(async () => {
  const { userId } = await auth()
  if (!userId) {
    throw new Error('You must be signed in to accept the waiver')
  }

  const client = await clerkClient()
  await client.users.updateUserMetadata(userId, {
    publicMetadata: {
      waiverAccepted: true,
      waiverVersion: WAIVER_VERSION,
      waiverAcceptedAt: new Date().toISOString(),
    },
  })

  return { success: true }
})

const checkWaiverAuth = createServerFn({ method: 'GET' }).handler(async () => {
  const { userId } = await auth()
  return { userId }
})

export const Route = createFileRoute('/waiver')({
  beforeLoad: async () => {
    const { userId } = await checkWaiverAuth()
    if (!userId) {
      throw redirect({ to: '/sign-in' })
    }
    return {}
  },
  component: WaiverPage,
})

function WaiverPage() {
  const router = useRouter()
  const [accepted, setAccepted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!accepted) return
    setIsSubmitting(true)
    try {
      await acceptWaiverFn()
      await router.navigate({ to: '/dashboard' })
    } catch (err) {
      console.error(err)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold text-primary-900 dark:text-primary-100">
        Legal Waiver & Release
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Please read and accept the following before using Yellow Cat ClubHouse
        facilities.
      </p>

      <div className="mt-8 max-h-[50vh] overflow-y-auto rounded-xl border border-olive-200 bg-olive-50/50 p-6 dark:border-slate-600 dark:bg-primary-950/30">
        <pre className="whitespace-pre-wrap font-sans text-sm text-primary-900 dark:text-primary-200">
          {WAIVER_TEXT}
        </pre>
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-1 h-5 w-5 rounded border-olive-300 text-primary-600 focus:ring-primary-500"
          />
          <span className="text-primary-700 dark:text-primary-200">
            I have read, understood, and agree to the terms of this waiver and
            release of liability. I am the parent or legal guardian of the
            child(ren) who will participate, and I have the authority to sign on
            their behalf.
          </span>
        </label>

        <div className="mt-6 flex gap-4">
          <button
            type="submit"
            disabled={!accepted || isSubmitting}
            className="rounded-md bg-primary-500 px-6 py-2 font-medium text-white hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Processing...' : 'I Agree - Continue'}
          </button>
          <Link
            to="/"
            className="rounded-md border border-olive-300 px-6 py-2 font-medium text-primary-700 hover:bg-primary-50 dark:border-slate-600 dark:text-primary-200 dark:hover:bg-primary-900/50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}
