import { useEffect, useState } from 'react';

import Loader from '@utils/pages/Loader';

import Category from '../../components/Items/Slider';

import { useProductsQuery } from './slices/endpoints';

export default function Home() {
  const { data, isLoading } = useProductsQuery();

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (!isLoading) setCategories(Object.keys(data!));
  }, [data]);

  if (isLoading || !data) return <Loader />;

  return categories?.map(category => <Category key={category} name={category} items={data[category]} />);
}
