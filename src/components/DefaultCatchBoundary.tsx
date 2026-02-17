import {
  ErrorComponent,
  Link,
  rootRouteId,
  useMatch,
  useRouter,
} from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter()
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  })

  console.error(error)

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 p-4">
      <h2 className="text-xl font-bold text-red-600 dark:text-red-400">
        Something went wrong
      </h2>
      <p className="text-gray-600 dark:text-gray-400">{error.message}</p>
      <div className="flex gap-2">
        <button
          onClick={() => router.invalidate()}
          className="px-2 py-1 bg-primary-600 dark:bg-primary-700 rounded-sm text-white uppercase font-extrabold"
        >
          Try Again
        </button>
        {isRoot ? (
          <Link to="/" className="text-primary-600 hover:underline">
            Home
          </Link>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              window.history.back()
            }}
            className="text-primary-600 hover:underline"
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  )
}
