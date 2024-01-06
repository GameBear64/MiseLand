import Slider from '../../components/Items/Slider';
import Loader from '../Other/Loader';

import { useProductsQuery } from './slices/endpoints';

export default function Home() {
  const { data, isLoading } = useProductsQuery();

  if (isLoading || !data) return <Loader />;

  return data.map(p => <Slider key={p._id} name={p._id} items={p.products} />);
}
