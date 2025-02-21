'use server';

import { auth, signIn, signOut } from '@/auth';
import { createClient } from '@/db/supabase/server';
import { revalidatePath } from 'next/cache';
import { getBookings } from './data-service';
import { IBooking } from '@/types/interfaces';

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}

// NOTE: update Guest

export async function updateGuestInfo(formData: FormData) {
  const session = await auth();
  const supabase = await createClient();

  if (!session) throw new Error('You are not logged in');

  const nationalID = formData.get('nationalID');
  const nationalityValue = formData.get('nationality');
  const [nationality, countryFlag] = String(nationalityValue).split('%');

  if (!/^[a-zA-Z0-9]{6,14}$/.test(String(nationalID)))
    throw new Error('National id must be between 6 and 14 chars');

  const updateData = { nationalID, nationality, countryFlag };

  const { error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user?.id);

  if (error) throw new Error('Guest could not be updated');

  revalidatePath('/account/profile', 'page');
}

// NOTE: Delete  reservation

export async function deleteReservation(bookingId: string) {
  const session = await auth();
  const supabase = await createClient();
  if (!session) throw new Error('You are not logged in');

  const guestBookings = await getBookings(session.user?.id!);
  const guestBookingsIDs = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIDs.includes(bookingId))
    throw new Error('You are not allowd to delete this cabin');

  const { error } = await supabase.from('bookings').delete().eq('id', bookingId);

  if (error) {
    throw new Error('Booking could not be deleted');
  }

  revalidatePath('/account/reservations');
}
