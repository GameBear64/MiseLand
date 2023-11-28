import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { api } from '@utils/slices/apiSlice';
import { setUser } from '@utils/slices/authSlice';
import { RootState } from '@utils/store';

export default function RouteGuardian() {
  const [checkUser] = api.useLazyCheckQuery();
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo?.role) {
      checkUser()
        .unwrap()
        .then(userInfo => dispatch(setUser(userInfo)));
    }
  }, [userInfo]);

  return <Outlet />;
}
