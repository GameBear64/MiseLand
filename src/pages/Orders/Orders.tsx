import Order from '@components/Items/Order';

import Loader from '@pages/Other/Loader';

import { useGetOrdersQuery } from './slices/endpoints';

export default function Orders() {
  const { data, isLoading } = useGetOrdersQuery();

  if (isLoading || !data) return <Loader />;

  return (
    <div>
      {data.map(item => (
        <Order item={item} key={item._id} />
      ))}
    </div>
  );
}
