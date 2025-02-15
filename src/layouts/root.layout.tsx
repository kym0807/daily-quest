import { Outlet } from 'react-router';
import { MainNavbar } from '@/components/headers/main-navbar';

export const RootLayout = () => {
  return (
    <>
      <MainNavbar />
      <main className="min-h-screen w-full p-4">
        <Outlet />
      </main>
    </>
  );
};
