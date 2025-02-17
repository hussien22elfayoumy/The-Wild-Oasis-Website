import React from 'react';
import DateSelector from './DateSelector';
import ReservationForm from './ReservationForm';
import { getBookedDatesByCabinId, getSettings } from '@/lib/data-service';
import { ICabinType } from '@/types/interfaces';
import { auth } from '@/auth';
import LoginMessage from '@/components/global/LoginMessage';

export default async function Reservation({ cabin }: { cabin: ICabinType }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <div className="mx-auto max-w-[700px]">
      <DateSelector
        cabin={cabin}
        settings={settings}
        bookedDates={bookedDates}
      />
      {session?.user ? (
        <ReservationForm
          user={session.user}
          cabin={cabin}
        />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
