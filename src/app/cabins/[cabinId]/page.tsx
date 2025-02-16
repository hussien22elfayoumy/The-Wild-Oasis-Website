import Loading from '@/app/loading';
import Cabin from '@/components/cabins/Cabin';
import Reservation from '@/components/cabins/Reservation';
import { getCabin, getCabins } from '@/lib/data-service';
import { Suspense } from 'react';

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

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="mb-10 text-center text-5xl font-semibold text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Loading />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
