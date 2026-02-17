import { Link } from '@tanstack/react-router'

export function NotFound({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 p-4">
      <h1 className="text-2xl font-bold">404</h1>
      <p className="text-gray-600 dark:text-gray-400">
        {children || 'The page you are looking for does not exist.'}
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => window.history.back()}
          className="bg-primary-500 text-white px-2 py-1 rounded-sm uppercase font-black text-sm"
        >
          Go back
        </button>
        <Link
          to="/"
          className="bg-accent-500 text-primary-900 px-2 py-1 rounded-sm uppercase font-black text-sm hover:bg-accent-600"
        >
          Start Over
        </Link>
      </div>
    </div>
  )
}
