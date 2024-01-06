import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';

export default function Layout() {
  return (
    <div className="flex h-screen flex-col bg-base text-onBase">
      <NavBar />
      <div className="flex-1 overflow-x-auto">
        <Outlet />
      </div>
    </div>
  );
}
