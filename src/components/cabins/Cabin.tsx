import TextExpander from '@/components/cabins/TextExpander';
import { ICabinType } from '@/types/interfaces';
import Image from 'next/image';
import { HiEyeSlash, HiMapPin, HiUsers } from 'react-icons/hi2';

export default function Cabin({ cabin }: { cabin: ICabinType }) {
  return (
    <div className="mb-24 grid grid-rows-2 gap-20 border border-primary-800 px-10 py-3 md:grid-cols-[3fr_4fr] md:grid-rows-1">
      <div className="relative scale-[1.15] md:-translate-x-3">
        <Image
          src={cabin.image}
          fill
          className="object-cover"
          alt={`Cabin ${cabin.name}`}
          quality={80}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      <div>
        <h3 className="mb-5 bg-primary-950 p-6 pb-1 text-center text-7xl font-black text-accent-100 md:w-[150%] md:translate-x-[-254px] md:text-left">
          Cabin {cabin.name}
        </h3>

        <p className="mb-10 text-lg text-primary-300">
          <TextExpander>{cabin.description}</TextExpander>
        </p>

        <ul className="mb-7 flex flex-col gap-4">
          <li className="flex items-center gap-3">
            <HiUsers className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{cabin.maxCapacity}</span> guests
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
  );
}
