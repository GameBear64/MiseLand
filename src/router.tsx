import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Auth
const Guard = lazy(() => import('./routes/UtilRoutes/RouterGuard.tsx'));
const Register = lazy(() => import('./routes/Register/Register.tsx'));
const Login = lazy(() => import('./routes/Login/Login.tsx'));
const Home = lazy(() => import('./routes/Home/Home.tsx'));

// Routes
import App from './App.tsx';

// Other
const ErrorPage = lazy(() => import('./routes/UtilRoutes/ErrorPage.tsx'));
const NotFound = lazy(() => import('./routes/UtilRoutes/NotFound.tsx'));

// Loaders
import Loader from './routes/UtilRoutes/Loader.tsx'; // Generic loader

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <Guard />
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
        path: '1',
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: '2',
        element: <App />,
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
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  { path: '*', element: <NotFound /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export { router };
