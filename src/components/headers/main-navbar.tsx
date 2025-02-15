import { Link } from 'react-router';
import { PATHS } from '@/constants/paths';

export const MainNavbar = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between px-10">
      <div className="text-2xl font-bold">
        <Link to={PATHS.HOME}>
          Daily<span className="text-primary">Quest</span>
        </Link>
      </div>
      <div className="">main</div>
      <div className="">login</div>
    </header>
  );
};
