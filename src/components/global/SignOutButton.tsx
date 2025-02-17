import { signOutAction } from '@/lib/actions';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="flex w-full items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100">
        <HiArrowRightOnRectangle className="h-5 w-5 text-red-500" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
