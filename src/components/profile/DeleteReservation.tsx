'use client';
import { deleteReservation } from '@/lib/actions';
import { HiTrash } from 'react-icons/hi2';

function DeleteReservation({ bookingId }: { bookingId: string }) {
  return (
    <button
      onClick={() => deleteReservation(bookingId)}
      className="group flex flex-grow items-center gap-2 px-3 py-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900 md:py-0"
    >
      <HiTrash className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
      <span className="mt-1">Delete</span>
    </button>
  );
}

export default DeleteReservation;
