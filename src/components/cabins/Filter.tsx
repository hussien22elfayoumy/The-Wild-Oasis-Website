'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const filterButtons = [
  {
    name: 'all cabins',
    filter: 'all',
  },
  {
    name: `1 - 3 guests`,
    filter: 'small',
  },
  {
    name: '4 - 6 guests',
    filter: 'medium',
  },
  {
    name: '7 - 10 guests',
    filter: 'large',
  },
];

export default function Filter() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const activeFilter = searchParams.get('capacity') ?? 'all';

  function handleFilter(filterTerm: string) {
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filterTerm);
    router.replace(`${pathName}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className="flex border border-primary-700">
      {filterButtons.map((button) => (
        <button
          key={button.filter}
          onClick={() => handleFilter(button.filter)}
          className={`px-5 py-2 hover:bg-primary-700 ${activeFilter === button.filter ? 'bg-primary-700' : ''}`}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
}
