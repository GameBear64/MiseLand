import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '@stores/_store';

export default function RouteGuardian({ needs, children }: { needs: string[]; children: JSX.Element }) {
  const navigate = useNavigate();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!needs.includes(userInfo?.role as string)) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}
