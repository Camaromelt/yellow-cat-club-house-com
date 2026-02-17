import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing')({
  component: Pricing,
})

function Pricing() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold text-primary-900 dark:text-primary-100">
        Hours & Pricing
      </h1>
      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-primary-700 dark:text-primary-200">
            Hours of Operation
          </h2>
          <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong>Monday – Friday:</strong> 9:00 AM – 6:00 PM</li>
            <li><strong>Saturday:</strong> 10:00 AM – 5:00 PM</li>
            <li><strong>Sunday:</strong> 11:00 AM – 4:00 PM</li>
          </ul>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
            Hours may vary on holidays. Please call ahead to confirm.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-primary-700 dark:text-primary-200">
            Admission
          </h2>
          <div className="mt-4 rounded-xl border border-olive-200 bg-olive-50 p-6 dark:border-slate-600 dark:bg-primary-950/50">
            <p className="text-primary-700 dark:text-primary-200">
              <strong>Single Visit:</strong> $15 per child
            </p>
            <p className="mt-2 text-primary-700 dark:text-primary-200">
              <strong>10-Pack:</strong> $120 (save $30)
            </p>
            <p className="mt-2 text-primary-700 dark:text-primary-200">
              <strong>Monthly Membership:</strong> $45/month (unlimited visits)
            </p>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
              Adults and children under 1 are free. Socks required for all
              visitors in play areas.
            </p>
          </div>
        </section>
        <div className="flex gap-4 pt-4">
          <Link
            to="/sign-up"
            className="rounded-md bg-primary-500 px-6 py-2 font-medium text-white hover:bg-primary-600"
          >
            Create Account
          </Link>
          <Link
            to="/"
            className="rounded-md border border-olive-300 px-6 py-2 font-medium text-primary-700 hover:bg-primary-50 dark:border-slate-600 dark:text-primary-200 dark:hover:bg-primary-900/50"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
