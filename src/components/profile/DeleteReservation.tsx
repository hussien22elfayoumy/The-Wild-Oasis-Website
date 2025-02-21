'use client';
import { deleteReservation } from '@/lib/actions';
import { useTransition } from 'react';
import { HiTrash } from 'react-icons/hi2';
import SpinnerMini from '@/components/global/SpinnerMini';

function DeleteReservation({ bookingId }: { bookingId: string }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm('Are you sure you want to delete this reservation'))
      startTransition(() => deleteReservation(bookingId));
  }
  return (
    <button
      disabled={isPending}
      onClick={handleDelete}
      className="group flex w-1/2 flex-grow items-center gap-2 px-3 py-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900 disabled:opacity-15 md:py-0"
    >
      {isPending ? (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      ) : (
        <>
          <HiTrash className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
          <span className="mt-1">Delete</span>
        </>
      )}
    </button>
  );
}

export default DeleteReservation;
