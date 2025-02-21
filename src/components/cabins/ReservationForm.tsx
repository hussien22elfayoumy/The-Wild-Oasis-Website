'use client';
import { useReservationCtx } from '@/contexts/ReservationContext';
import { createBooking } from '@/lib/actions';
import { ICabinType } from '@/types/interfaces';
import { differenceInDays } from 'date-fns';
import { User } from 'next-auth';
import Image from 'next/image';

function ReservationForm({ cabin, user }: { cabin: ICabinType; user: User }) {
  const { maxCapacity, regularPrice, discount, id: cabinId } = cabin;
  const { range } = useReservationCtx();
  const startDate = range?.from;
  const endDate = range?.to;
  const numNights = differenceInDays(range?.to!, range?.from!);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    numNights,
    startDate,
    endDate,
    cabinPrice,
    cabinId,
  };
  const createBookingWithData = createBooking.bind(null, bookingData);
  return (
    <div className="">
      <div className="flex items-center justify-between bg-primary-800 px-16 py-2 text-primary-300">
        <p>Logged in as</p>

        <div className="flex items-center gap-4">
          <Image
            src={user.image || ''}
            alt={user.name || 'user image'}
            width={35}
            height={35}
            className="rounded-full"
            // Important to display google profile images
            referrerPolicy="no-referrer"
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={createBookingWithData}
        className="flex flex-col gap-5 bg-primary-900 px-16 py-10 text-lg"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            required
          >
            <option
              value=""
              key=""
            >
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option
                value={x}
                key={x}
              >
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">Anything we should know about your stay?</label>
          <textarea
            name="observations"
            id="observations"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <p className="text-base text-primary-300">Start by selecting dates</p>

          <button className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
