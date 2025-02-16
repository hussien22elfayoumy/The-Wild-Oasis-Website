import React from 'react';
import DateSelector from './DateSelector';
import ReservationForm from './ReservationForm';
import { getBookedDatesByCabinId, getSettings } from '@/lib/data-service';
import { ICabinType } from '@/types/interfaces';

export default async function Reservation({ cabin }: { cabin: ICabinType }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="mx-auto max-w-[700px]">
      <DateSelector
        cabin={cabin}
        settings={settings}
        bookedDates={bookedDates}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
