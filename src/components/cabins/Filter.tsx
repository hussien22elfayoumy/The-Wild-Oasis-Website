'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Filter() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  function handleFilter(filterTerm: string) {
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filterTerm);
    router.replace(`${pathName}?${params.toString()}`, {
      scroll: false,
    });
  }
  return (
    <div className="flex border border-primary-700">
      <button
        onClick={() => handleFilter('all')}
        className="px-5 py-2 hover:bg-primary-700"
      >
        All cabins
      </button>
      <button
        onClick={() => handleFilter('small')}
        className="px-5 py-2 hover:bg-primary-700"
      >
        1&mdash;3 guests
      </button>
      <button
        onClick={() => handleFilter('medium')}
        className="px-5 py-2 hover:bg-primary-700"
      >
        4&mdash;6 guests
      </button>
      <button
        onClick={() => handleFilter('large')}
        className="px-5 py-2 hover:bg-primary-700"
      >
        7&mdash;10 guests
      </button>
    </div>
  );
}
