import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Input } from '@form/Fields';
import Form from '@form/Form';
import { MIN_LENGTH, REQUIRED } from '@form/validations';

import { setUser } from '@utils/slices/authSlice';

import { useLoginMutation } from './slices/endpoints';
import { ILoginCredentials } from './slices/types';

export default function Login() {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = async (data: ILoginCredentials) => {
    login(data)
      .unwrap()
      .then(({ token, user }) => {
        localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_NAME, token);
        dispatch(setUser(user));
      })
      .catch(err => console.warn(err));
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-base px-6 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold leading-9">Sign in to your account</h2>
        <p className="max-w mt-2 text-center text-sm leading-5">
          Or
          <Link className="ml-1" to="/register">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 bg-base-strong px-4 py-8 shadow sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:px-10">
        <Form onSubmit={handleLogin}>
          <Input type="email" placeholder="email@ac.com" name="email" label="Email" rules={REQUIRED} />
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="●●●●●●●●●●"
            autoComplete="on"
            rules={{
              ...REQUIRED,
              ...MIN_LENGTH(8),
            }}
          />
          <button type="submit" className="button mt-5 w-full">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}
