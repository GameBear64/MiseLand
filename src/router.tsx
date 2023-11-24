import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Auth
const Guard = lazy(() => import('./routes/UtilPages/RouterGuard.tsx'));
const Register = lazy(() => import('./routes/Register/Register.tsx'));
const Login = lazy(() => import('./routes/Login/Login.tsx'));

// Routes
import App from './App.tsx';

// Other
const ErrorPage = lazy(() => import('./routes/UtilPages/ErrorPage.tsx'));
const NotFound = lazy(() => import('./routes/UtilPages/NotFound.tsx'));
// const Redirect = lazy(() => import('./routes/UtilPages/Redirect'));

// Loaders
import Loader from './routes/UtilPages/Loader.tsx'; // Generic loader

export default function Router() {
  const authRoutes = [
    {
      path: '/register',
      element: (
        <Suspense fallback={<Loader />}>
          <Register />
        </Suspense>
      ),
    },
    {
      path: '/login',
      element: (
        <Suspense fallback={<Loader />}>
          <Login />
        </Suspense>
      ),
    },
  ];

  const routes = [
    {
      path: '',
      element: <App />,
      errorElement: <ErrorPage />,
    },
  ];

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<Loader />}>
          <Guard />
        </Suspense>
      ),
      errorElement: <ErrorPage />,
      children: routes,
    },
    ...authRoutes,
    { path: '*', element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
}
