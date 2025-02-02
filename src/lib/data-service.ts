import { createClient } from '@/db/supabase/server';

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

export async function getCabin(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from('cabins').select('*').eq('id', id).single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error);
  }

  return data;
}
