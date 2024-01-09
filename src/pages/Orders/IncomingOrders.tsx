import Order from '@components/Items/Order';

import Loader from '@pages/Other/Loader';

import { useGetIncomingOrdersQuery } from './slices/endpoints';

export default function IncomingOrders() {
  const { data, isLoading } = useGetIncomingOrdersQuery();

  if (isLoading || !data) return <Loader />;

  return (
    <div>
      {data.map(item => (
        <Order item={item} key={item._id} incoming />
      ))}
    </div>
  );
}
