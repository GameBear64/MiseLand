import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '@components/Form/Fields';
import Form from '@components/Form/Form';
import Icon from '@components/Icon/Icon';

import { RootState } from '@stores/_store';

export default function NavBar() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-12 w-full items-center justify-between border-b border-base-subtle bg-base px-4 shadow">
      <Link className="h-full p-1" to="/">
        <img src="http://localhost:5173/Logo.png" className="h-full" />
      </Link>
      <div className="flex items-center justify-between gap-5">
        <div className="mx-10 grow">
          <Form onSubmit={() => {}}>
            <Input name="search" />
          </Form>
        </div>
        <Link className="text-onBase" to="/cart">
          <Icon icon="shopping_cart" />
        </Link>
        <div className="relative inline-block">
          <button className="relative z-10 flex items-center rounded-md border border-transparent bg-white p-2 text-sm text-gray-600">
            <Icon icon="menu" clickable onClick={() => setMenuOpen(prev => !prev)} />
          </button>

          <div
            className={`absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-md bg-white shadow-xl ${
              menuOpen ? 'block' : 'hidden'
            }`}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <h1 className="px-4 py-2 text-lg font-semibold text-gray-700">Hello, {userInfo?.name}</h1>

            <hr className="border-gray-200  " />
            {userInfo?.role === 'Seller' && (
              <Link
                to="/profile"
                className="block px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-200 hover:bg-gray-100"
              >
                Seller Profile
              </Link>
            )}

            <Link
              to="/orders"
              className="block px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-200 hover:bg-gray-100"
            >
              Orders
            </Link>

            {userInfo?.role === 'Seller' && (
              <Link
                to="/orders-incoming"
                className="block px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-200 hover:bg-gray-100"
              >
                Orders - Incoming
              </Link>
            )}

            <a
              href="#"
              className="block px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-200 hover:bg-gray-100"
            >
              Wish List
            </a>

            <a
              href="#"
              className="block px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-200 hover:bg-gray-100"
            >
              Settings
            </a>

            <hr className="border-gray-200 " />

            <a
              href="#"
              className="block px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-200 hover:bg-gray-100"
            >
              Help
            </a>
            <a
              className="block cursor-pointer px-4 py-3 text-sm capitalize text-red-600 transition-colors duration-200 hover:bg-gray-100"
              onClick={() => {
                localStorage.removeItem(import.meta.env.VITE_LOCAL_STORAGE_NAME);
                navigate('/login');
              }}
            >
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
