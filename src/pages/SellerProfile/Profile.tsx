import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Item from '@components/Items/Item';

import Loader from '@pages/Other/Loader';

import { RootState } from '@stores/_store';

import { useGetUserQuery } from './slices/endpoints';

export default function Profile() {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const { id } = useParams() as { id: string };

  const { data, isLoading } = useGetUserQuery(id || (userInfo?._id as string));

  if (isLoading || !data) return <Loader />;

  return (
    <div className="mt-24">
      <h2 className="text-center text-2xl font-semibold">{data.user?.name}</h2>

      <hr className="mx-auto my-5 max-w-lg border-b border-primary" />

      <div className="flex flex-wrap justify-center">
        {data.products.map(item => (
          <Item item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}
