'use client';
import { updateGuestInfo } from '@/lib/actions';
import { IGuest } from '@/types/interfaces';
import Image from 'next/image';
import { useFormStatus } from 'react-dom';
import SubmitBtn from '../global/SubmitBtn';

export default function UpdateProfile({
  guest,
  children,
}: {
  guest: IGuest;
  children: React.ReactNode;
}) {
  return (
    <form
      action={updateGuestInfo}
      className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg"
    >
      <div className="space-y-2">
        <label htmlFor="fullName">Full name</label>
        <input
          id="fullName"
          disabled
          name="fullName"
          defaultValue={guest.fullName || ''}
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          disabled
          name="emaiil"
          defaultValue={guest.email || ''}
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <Image
            src={guest.countryFlag || ''}
            width={30}
            height={30}
            alt="Country flag"
            className="rounded-sm"
          />
        </div>
      </div>
      {children}
      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          id="nationalID"
          name="nationalID"
          defaultValue={guest.nationalID}
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <SubmitBtn text="profile" />
      </div>
    </form>
  );
}
