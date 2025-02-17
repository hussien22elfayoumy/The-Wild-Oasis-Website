import { HiArrowRightOnRectangle } from 'react-icons/hi2';

function SignOutButton() {
  return (
    <button className="hover:bg-primary-900 hover:text-primary-100 text-primary-200 flex w-full items-center gap-4 px-5 py-3 font-semibold transition-colors">
      <HiArrowRightOnRectangle className="h-5 w-5 text-red-500" />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
