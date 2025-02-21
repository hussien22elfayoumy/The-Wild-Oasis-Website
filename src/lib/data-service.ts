import { createClient } from '@/db/supabase/client';
import { IBookingSettings, ICabinType, IGuest } from '@/types/interfaces';
import { notFound } from 'next/navigation';
import { eachDayOfInterval } from 'date-fns';

export async function getCountries() {
  try {
    const res = await fetch('https://restcountries.com/v2/all?fields=name,flag');
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error('Could not fetch countries');
  }
}

export const getCabins = async function () {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('cabins')
    .select('id, name, maxCapacity, regularPrice, discount, description, image')
    .order('name');

  // For testing
  // await new Promise((res) => setTimeout(res, 2000));
  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
};

export async function getCabin(id: string): Promise<ICabinType> {
  const supabase = await createClient();
  const { data, error } = await supabase.from('cabins').select('*').eq('id', id).single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getSettings(): Promise<IBookingSettings> {
  const supabase = await createClient();
  const { data, error } = await supabase.from('settings').select('*').single();

  // await new Promise((res) => setTimeout(res, 3000));

  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded');
  }

  return data;
}

export async function getBookedDatesByCabinId(cabinId: string) {
  const supabase = await createClient();

  let today: Date | string = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  // Getting all bookings
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('cabinId', cabinId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getGuest(email: string | null | undefined): Promise<IGuest> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('guests')
    .select('*')
    .eq('email', email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function createGuest(newGuest: Object) {
  const supabase = await createClient();

  const { data, error } = await supabase.from('guests').insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error('Guest could not be created');
  }

  return data;
}
