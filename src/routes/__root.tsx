/// <reference types="vinxi/types/client" />
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/tanstack-react-start'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { createServerFn } from '@tanstack/react-start'
import { auth } from '@clerk/tanstack-react-start/server'
import * as React from 'react'
import {
  ClientOnly,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import appCss from '~/styles/app.css?url'

const fetchClerkAuth = createServerFn({ method: 'GET' }).handler(async () => {
  const { userId } = await auth()
  return { userId }
})

export const Route = createRootRoute({
  beforeLoad: async () => {
    const { userId } = await fetchClerkAuth()
    return { userId }
  },
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Yellow Cat ClubHouse - Kids Play & Pretend' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap',
      },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: NotFound,
  component: RootComponent,
})

function RootComponent() {
  return (
    <ClerkProvider>
      <RootDocument>
        <Outlet />
      </RootDocument>
      <TanStackRouterDevtools position="bottom-right" />
    </ClerkProvider>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <nav className="sticky top-0 z-50 bg-primary-50/95 dark:bg-primary-950/95 border-b border-olive-200 dark:border-slate-600 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link
                to="/"
                className="flex items-center gap-2 text-xl font-bold text-primary-600 dark:text-primary-200 hover:text-primary-500"
              >
                <img
                  src="/logo.png"
                  alt="Yellow Cat ClubHouse"
                  className="h-10 w-10 rounded-full object-cover"
                />
                Yellow Cat ClubHouse
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  className="text-primary-600 dark:text-primary-200 hover:underline"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-primary-600 dark:text-primary-200 hover:underline"
                >
                  About
                </Link>
                <Link
                  to="/pricing"
                  className="text-primary-600 dark:text-primary-200 hover:underline"
                >
                  Hours & Pricing
                </Link>
                <ClientOnly
                  fallback={
                    <div className="h-9 w-24 animate-pulse rounded-md bg-primary-200/50 dark:bg-primary-800/50" />
                  }
                >
                  <SignedIn>
                    <Link
                      to="/dashboard"
                      className="text-primary-600 dark:text-primary-200 hover:underline"
                    >
                      Dashboard
                    </Link>
                    <UserButton afterSignOutUrl="/" />
                  </SignedIn>
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600">
                        Sign In
                      </button>
                    </SignInButton>
                    <Link
                      to="/sign-up"
                      className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
                    >
                      Sign Up
                    </Link>
                  </SignedOut>
                </ClientOnly>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <Scripts />
      </body>
    </html>
  )
}
