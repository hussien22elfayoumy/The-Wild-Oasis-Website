import { auth } from '@/auth';
import React from 'react';
export const metadata = {
  title: 'Guest area',
};
export default async function Page() {
  const session = await auth();
  return (
    <h2 className="mb-7 text-2xl font-semibold text-accent-400">
      Welcome, {session?.user?.name}
    </h2>
  );
}
