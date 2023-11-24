import { useDispatch, useSelector } from 'react-redux';

import Form from '@form/Form';
import Input from '@form/Input';

import { setUser } from '../../utils/authSlice';
import { RootState } from '../../utils/store';

import { useLoginMutation } from './slices/endpoints';

export default function Login() {
  const [login] = useLoginMutation();

  const user = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = async (data: { email: string; password: string }) => {
    login(data)
      .unwrap()
      .then(({ token, user }) => {
        localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_NAME, token);
        dispatch(setUser(user));
      })
      .catch(err => console.warn(err));
  };

  return (
    <div>
      Login
      <br />
      <Form onSubmit={handleLogin}>
        <Input type="email" placeholder="email@ac.com" name="email" label="Email" />
        <Input type="password" name="password" label="Password" autoComplete="on" />
        <button type="submit" className="mt-5 w-full rounded-md border-2 p-2 text-lg font-semibold ">
          Login
        </button>
      </Form>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
}
