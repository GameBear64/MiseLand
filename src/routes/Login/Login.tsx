import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../utils/store';
import { useLoginMutation } from './slices/endpoints';
import { setUser } from '../../utils/authSlice';

export default function Login() {
  const [login] = useLoginMutation();

  const user = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const jwt = await login({ email: 'gam@bar.com', password: '12345678' }).unwrap();
      dispatch(setUser(jwt));
    } catch (err) {
      console.log('er', err);
    }
  };

  return (
    <div>
      Login
      <br />
      <br />
      <button onClick={handleLogin}>firstTest</button>
      <pre>{user?.token}</pre>
    </div>
  );
}
