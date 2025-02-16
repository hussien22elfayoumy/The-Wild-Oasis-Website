import Loading from '@/app/loading';
import Reservation from '@/components/cabins/Reservation';
import TextExpander from '@/components/cabins/TextExpander';
import { getCabin, getCabins } from '@/lib/data-service';
import Image from 'next/image';
import { Suspense } from 'react';
import { HiEyeSlash, HiMapPin, HiUsers } from 'react-icons/hi2';

// NOTE: for making dynamic page static
export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

// NOTE: for generating dynamic page title
export async function generateMetadata({ params }: { params: { cabinId: string } }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);
  const { name } = cabin;

  return { title: `Cabin ${name}` };
}

export default async function Page({ params }: { params: { cabinId: string } }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  const { id, name, maxCapacity, regularPrice, image, description, discount } = cabin;

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <div className="mb-24 grid grid-rows-2 gap-20 border border-primary-800 px-10 py-3 md:grid-cols-[3fr_4fr] md:grid-rows-1">
        <div className="relative scale-[1.15] md:-translate-x-3">
          <Image
            src={image}
            fill
            className="object-cover"
            alt={`Cabin ${name}`}
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>

        <div>
          <h3 className="mb-5 bg-primary-950 p-6 pb-1 text-center text-7xl font-black text-accent-100 md:w-[150%] md:translate-x-[-254px] md:text-left">
            Cabin {name}
          </h3>

          <p className="mb-10 text-lg text-primary-300">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="mb-7 flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <HiUsers className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span> guests
              </span>
            </li>
            <li className="flex items-center gap-3">
              <HiMapPin className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the <span className="font-bold">Dolomites</span>{' '}
                (Italy)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <HiEyeSlash className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="mb-10 text-center text-5xl font-semibold text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Loading />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
