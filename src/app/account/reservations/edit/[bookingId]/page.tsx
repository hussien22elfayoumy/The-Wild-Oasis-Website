import SubmitBtn from '@/components/global/SubmitBtn';
import { updateBooking } from '@/lib/actions';
import { getBooking, getCabin } from '@/lib/data-service';

export default async function Page({ params }: { params: { bookingId: string } }) {
  const { bookingId } = await params;

  const { numGuests, observations, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);
  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateBooking}
        className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            key={numGuests}
            defaultValue={numGuests}
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
            defaultValue={observations}
            id="observations"
            name="observations"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
          />
        </div>
        <input
          type="hidden"
          id="bookingId"
          name="bookingId"
          value={bookingId}
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
        />

        <div className="flex items-center justify-end gap-6">
          <SubmitBtn text="Updating ....">Update reservation</SubmitBtn>
        </div>
      </form>
    </div>
  );
}
