import { CabinType } from '@/types/interfaces';
import CabinCard from '@/components/cabins/CabinCard';
import { getCabins } from '@/lib/data-service';

export default async function CabinList() {
  const cabins: CabinType[] = await getCabins();

  if (!cabins.length) return null;

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard
          cabin={cabin}
          key={cabin.id}
        />
      ))}
    </div>
  );
}
