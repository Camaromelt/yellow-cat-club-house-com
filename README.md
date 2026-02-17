# Yellow Cat ClubHouse

A kids gym and play place website built with TanStack Start, featuring activities display, signup/register flow with Clerk authentication, and a legal waiver integrated into the registration process.

## Features

- **Home Page** - Hero section and activities grid showcasing padded play areas and pretend-play zones
- **About & Pricing** - Information about the facility, hours, and admission
- **Sign Up / Sign In** - Full authentication via Clerk
- **Legal Waiver** - Required waiver acceptance after sign-up, stored in Clerk user metadata
- **Protected Dashboard** - Member area showing waiver status

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure Clerk**

   - Create an application at [Clerk Dashboard](https://dashboard.clerk.com)
   - Copy your Publishable Key and Secret Key to `.env`:
     ```
     VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
     CLERK_SECRET_KEY=sk_test_...
     ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── routes/           # File-based routes
│   ├── __root.tsx    # Layout with ClerkProvider
│   ├── index.tsx     # Home + Activities
│   ├── about.tsx
│   ├── pricing.tsx
│   ├── sign-in.tsx
│   ├── sign-up.tsx
│   ├── waiver.tsx    # Legal waiver (requires auth)
│   └── _authed/      # Protected routes
│       └── dashboard.tsx
├── components/
├── lib/              # Activities data, waiver text
└── styles/
```

## Note on Waiver

The waiver text is placeholder content. **Have a lawyer review it before production use.** You can edit `src/lib/waiver.ts` to update the waiver content.

## Tech Stack

- [TanStack Start](https://tanstack.com/start) - Full-stack React framework
- [TanStack Router](https://tanstack.com/router) - File-based routing
- [Clerk](https://clerk.com) - Authentication
- [Tailwind CSS](https://tailwindcss.com) - Styling
