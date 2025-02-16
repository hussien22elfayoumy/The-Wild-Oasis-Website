import React from 'react';
import DateSelector from './DateSelector';
import ReservationForm from './ReservationForm';
import { getBookedDatesByCabinId, getSettings } from '@/lib/data-service';
import { ICabinType } from '@/types/interfaces';

export default async function Reservation({ cabin }: { cabin: ICabinType }) {
  const [setting, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  console.log(setting, bookedDates);
  return (
    <div className="mx-auto max-w-[700px]">
      <DateSelector />
      <ReservationForm />
    </div>
  );
}
