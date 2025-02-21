'use server';

import { signIn, signOut } from '@/auth';

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}

// NOTE: update Guest

export async function updateGuestInfo(formData: FormData) {
  console.log(formData);
}
