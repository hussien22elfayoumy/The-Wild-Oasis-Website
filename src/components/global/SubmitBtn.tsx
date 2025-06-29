'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';

export default function SubmitBtn({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? text : children}
    </button>
  );
}
