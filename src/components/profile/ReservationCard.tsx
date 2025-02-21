import { format, formatDistance, isPast, isToday, parseISO } from 'date-fns';
import DeleteReservation from './DeleteReservation';
import { HiPencilSquare } from 'react-icons/hi2';
import { IBooking } from '@/types/interfaces';
import Image from 'next/image';
import Link from 'next/link';

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace('about ', '');

function ReservationCard({ booking }: { booking: IBooking }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    createdAt,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col border border-primary-800 md:flex-row">
      <div className="relative aspect-square h-52 md:h-32">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="border-r border-primary-800 object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      <div className="flex flex-grow flex-col gap-3 px-6 py-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="flex h-7 items-center rounded-sm bg-yellow-800 px-3 text-xs font-bold uppercase text-yellow-200">
              past
            </span>
          ) : (
            <span className="flex h-7 items-center rounded-sm bg-green-800 px-3 text-xs font-bold uppercase text-green-200">
              upcoming
            </span>
          )}
        </div>

        <p className="text-lg text-primary-300">
          {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(startDate)) ? 'Today' : formatDistanceFromNow(startDate)})
          &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
        </p>

        <div className="mt-auto flex flex-col items-baseline gap-0 md:flex-row md:gap-5">
          <div className="flex items-center gap-3">
            <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
            <p className="text-primary-300">&bull;</p>
            <p className="text-lg text-primary-300">
              {numGuests} guest{numGuests > 1 && 's'}
            </p>
          </div>
          <p className="text-sm text-primary-400 md:ml-auto">
            Booked {format(new Date(createdAt), 'EEE, MMM dd yyyy, p')}
          </p>
        </div>
      </div>

      <div className="flex items-center border-t border-primary-800 md:w-[100px] md:flex-col md:border-l md:p-0">
        <Link
          href={`/account/reservations/edit/${id}`}
          className="md:border-e-none group flex flex-grow items-center gap-2 border-e border-primary-800 px-3 py-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900 md:w-full md:border-b md:py-0"
        >
          <HiPencilSquare className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
          <span className="mt-1">Edit</span>
        </Link>
        <DeleteReservation bookingId={id} />
      </div>
    </div>
  );
}

export default ReservationCard;
