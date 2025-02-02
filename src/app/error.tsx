'use client';

import Link from 'next/link';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        onClick={reset}
        className="inline-block bg-accent-500 px-6 py-3 text-lg text-primary-800"
      >
        Try again
      </button>
      <Link
        href="/"
        className="mt-5 flex gap-1 text-accent-500 underline-offset-4 hover:underline"
      >
        Go Back To Home
      </Link>
    </main>
  );
}
