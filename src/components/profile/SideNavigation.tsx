'use client';
import SignOutButton from '@/components/profile/SignOutButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiCalendarDays, HiHome, HiUser } from 'react-icons/hi2';

const navLinks = [
  {
    name: 'Home',
    href: '/account',
    icon: <HiHome className="h-5 w-5 text-primary-600" />,
  },
  {
    name: 'Reservations',
    href: '/account/reservations',

    icon: <HiCalendarDays className="h-5 w-5 text-primary-600" />,
  },
  {
    name: 'Guest profile',
    href: '/account/profile',

    icon: <HiUser className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathName = usePathname();
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex h-full flex-col gap-2 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`flex items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100 ${pathName === link.href ? 'bg-primary-900 text-primary-100' : ''}`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
