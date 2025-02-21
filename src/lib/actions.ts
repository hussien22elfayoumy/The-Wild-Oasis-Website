'use server';

import { auth, signIn, signOut } from '@/auth';

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}

// NOTE: update Guest

export async function updateGuestInfo(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error('You are not logged in');
  const nationalID = formData.get('nationalID');
  const nationalityValue = formData.get('nationality');
  const [nationality, countryFlag] = String(nationalityValue).split('%');

  if (!/^[a-zA-Z0-9]{6,14}$/.test(String(nationalID)))
    throw new Error('National id must be between 6 and 14 chars');

  const updateData = { nationalID, nationality, countryFlag };
  console.log(formData);
  console.log(updateData);
}
