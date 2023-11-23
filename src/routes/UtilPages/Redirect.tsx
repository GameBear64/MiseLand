import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Redirect({ to }: { to: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="text-center text-3xl font-bold text-neutral-700">Redirecting...</p>
    </div>
  );
}
