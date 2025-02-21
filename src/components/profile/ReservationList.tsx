'use client';
import React from 'react';
import ReservationCard from './ReservationCard';
import { IBooking } from '@/types/interfaces';

export default function ReservationList({ bookings }: { bookings: IBooking[] }) {
  return (
    <ul className="space-y-6">
      {bookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  );
}
