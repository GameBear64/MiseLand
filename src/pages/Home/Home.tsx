import Loader from 'src/pages/Other/Loader';

import Slider from '../../components/Items/Slider';

import { useProductsQuery } from './slices/endpoints';

export default function Home() {
  const { data, isLoading } = useProductsQuery();

  if (isLoading || !data) return <Loader />;

  return data.map(p => <Slider key={p._id} name={p._id} items={p.products} />);
}
