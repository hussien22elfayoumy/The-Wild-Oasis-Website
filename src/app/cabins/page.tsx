import CabinCard from '@/components/cabins/CabinCard';
import { getCabins } from '@/lib/data-service';
import { CabinType } from '@/types/interfaces';
import React from 'react';

export const metadata = {
  title: 'Cabins',
};

export default async function Page() {
  const cabins: CabinType[] = await getCabins();

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

      {cabins.length > 0 && (
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard
              cabin={cabin}
              key={cabin.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
