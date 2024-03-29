import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Auth
const Guard = lazy(() => import('./Other/RouterGuard.tsx'));
const Register = lazy(() => import('./Register/Register.tsx'));
const Login = lazy(() => import('./Login/Login.tsx'));

// Routes
const Home = lazy(() => import('./Home/Home.tsx'));
const Product = lazy(() => import('./Product/Product.tsx'));
const Cart = lazy(() => import('./Cart/Cart.tsx'));
const Profile = lazy(() => import('./SellerProfile/Profile.tsx'));
const Orders = lazy(() => import('./Orders/Orders.tsx'));
const IncomingOrders = lazy(() => import('./Orders/IncomingOrders.tsx'));
const Publish = lazy(() => import('./Publish/Publish.tsx'));

// Other
import Layout from '@components/Layout/Layout.tsx';

import ErrorPage from './Other/ErrorPage.tsx';
import Loader from './Other/Loader.tsx';
import NotFound from './Other/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/cart',
        element: <Cart />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/profile',
        element: (
          <Guard needs={['Seller']}>
            <Profile />
          </Guard>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/orders',
        element: <Orders />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/orders-incoming',
        element: (
          <Guard needs={['Seller']}>
            <IncomingOrders />
          </Guard>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '/publish',
        element: (
          <Guard needs={['Seller']}>
            <Publish />
          </Guard>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: '/register',
    element: (
      <Suspense fallback={<Loader />}>
        <Register />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  { path: '*', element: <NotFound /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export { router };
