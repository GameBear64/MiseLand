import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Auth
const Guard = lazy(() => import('../utils/pages/RouterGuard.tsx'));
const Register = lazy(() => import('./Register/Register.tsx'));
const Login = lazy(() => import('./Login/Login.tsx'));

// Routes
const Home = lazy(() => import('./Home/Home.tsx'));
const Product = lazy(() => import('./Product/Product.tsx'));

// Other
import Layout from '@components/Layout/Layout.tsx';

import ErrorPage from '../utils/pages/ErrorPage.tsx';
import Loader from '../utils/pages/Loader.tsx';
import NotFound from '../utils/pages/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <Layout>
          <Guard />
        </Layout>
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
