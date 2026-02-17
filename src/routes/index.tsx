import { createFileRoute, Link } from '@tanstack/react-router'
import { activities } from '~/lib/activities'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-100 via-olive-50 to-accent-400/20 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-primary-900 dark:text-primary-100 sm:text-5xl md:text-6xl">
            Yellow Cat ClubHouse
          </h1>
          <p className="mt-6 text-lg text-primary-700 dark:text-primary-200 sm:text-xl">
            Where kids pretend, play, and make friends in a safe padded space.
            Join the fun!
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/sign-up"
              className="rounded-full bg-primary-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Create Account
            </Link>
            <Link
              to="/about"
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-primary-700 shadow-md ring-1 ring-olive-200 hover:bg-primary-50 dark:bg-primary-900/50 dark:ring-slate-600 dark:hover:bg-primary-900/70"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-primary-900 dark:text-primary-100">
            Our Activities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-primary-700 dark:text-primary-200">
            Safe, padded play areas designed for imagination and active fun.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="overflow-hidden rounded-2xl border border-olive-200 bg-white shadow-lg dark:border-slate-600 dark:bg-primary-950/50"
              >
                <div className="flex h-32 items-center justify-center bg-gradient-to-br from-primary-200 to-olive-100 dark:from-primary-700 dark:to-primary-800">
                  <span className="text-5xl">🎪</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100">
                    {activity.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {activity.description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-slate-500 dark:text-slate-500">
                    {activity.ageRange}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 px-4 py-16 dark:bg-primary-800">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to Play? Sign Up Today
          </h2>
          <p className="mt-4 text-primary-100">
            Create an account and accept our play place waiver to get started.
          </p>
          <Link
            to="/sign-up"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 font-semibold text-primary-600 hover:bg-primary-50"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  )
}
