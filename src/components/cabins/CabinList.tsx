import CabinCard from '@/components/cabins/CabinCard';
import { getCabins } from '@/lib/data-service';
import { CabinType } from '@/types/interfaces';

export default async function CabinList({ filter }: { filter: string }) {
  const cabins: CabinType[] = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins;
  if (filter === 'all') displayedCabins = cabins;
  if (filter === 'small')
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === 'medium')
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity <= 6 && cabin.maxCapacity > 3
    );
  if (filter === 'large')
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity > 6);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
      {displayedCabins?.map((cabin) => (
        <CabinCard
          cabin={cabin}
          key={cabin.id}
        />
      ))}
    </div>
  );
}
