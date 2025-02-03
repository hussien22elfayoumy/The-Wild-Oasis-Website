import React, { Suspense } from 'react';
import CabinList from '@/components/cabins/CabinList';
import Spinner from '@/components/global/Spinner';
// Making the a full dynamic route no caching at all
// export const revalidate = 0;
// ISR and partial rendring makin the route dynamic but only when the time has passed
export const revalidate = 3600;
export const metadata = {
  title: 'Cabins',
};

export default function Page() {
  return (
    <div>
      <h1 className="mb-5 text-4xl font-medium text-accent-400">Our Luxury Cabins</h1>
      <p className="mb-10 text-lg text-primary-200">
        Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites.
        Imagine waking up to beautiful mountain views, spending your days exploring the
        dark forests around, or just relaxing in your private hot tub under the stars.
        Enjoy nature's beauty in your own little home away from home. The perfect spot for
        a peaceful, calm vacation. Welcome to paradise.
      </p>

      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
