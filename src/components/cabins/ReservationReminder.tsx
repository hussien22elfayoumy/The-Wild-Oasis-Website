'use client';
import { useReservationCtx } from '@/contexts/ReservationContext';
import { format } from 'date-fns';
import { useState } from 'react';
import { HiXMark } from 'react-icons/hi2';

function ReservationReminder() {
  // CHANGE
  const { range, resetRange } = useReservationCtx();

  if (!range?.from || !range?.to) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-8 text-nowrap rounded-full bg-accent-500 px-8 py-5 text-center font-semibold text-primary-800 shadow-xl shadow-slate-900`}
    >
      <p>
        <span>👋</span> Don't forget to reserve your dates <br /> from{' '}
        {format(new Date(range.from), 'MMM dd yyyy')} to{' '}
        {format(new Date(range.to), 'MMM dd yyyy')}
      </p>
      <button
        onClick={resetRange}
        className="rounded-full p-1 transition-all hover:bg-accent-600"
      >
        <HiXMark className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
