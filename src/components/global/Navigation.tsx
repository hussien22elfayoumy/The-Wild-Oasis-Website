import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';

export default async function Navigation() {
  const session = await auth();
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href="/cabins"
            className="transition-colors hover:text-accent-400"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="flex items-center gap-4 transition-colors hover:text-accent-400"
            >
              <Image
                src={session.user.image}
                alt={session.user.name || 'alt'}
                width={35}
                height={35}
                className="rounded-full"
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="transition-colors hover:text-accent-400"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
