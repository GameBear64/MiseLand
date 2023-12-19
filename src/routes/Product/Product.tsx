import { createContext } from 'react';
import { useParams } from 'react-router-dom';

import { IItem } from '@components/Items/slices/types';
import Slider from '@components/Items/Slider';

import Loader from '@utils/pages/Loader';

import { useGetProductQuery, useGetRelatedQuery } from './slices/endpoints';
import Reviews from './views/Reviews';
import Showcase from './views/Showcase';

export const ProductContext = createContext<IItem | null>(null);

export default function Product() {
  const { id } = useParams() as { id: string };
  const { data: product, isLoading } = useGetProductQuery(id);
  const { data: related, isLoading: loadingRelated } = useGetRelatedQuery(id);

  if (isLoading || !product || loadingRelated || !related) return <Loader />;

  return (
    <div className="m-auto w-2/3 px-5 py-24 md:w-5/6 xl:w-3/5">
      <ProductContext.Provider value={product}>
        <div className="flex min-h-[70vh] flex-col justify-center">
          <Showcase />
        </div>

        <Slider name="Related Items" items={related} />

        <Reviews />
      </ProductContext.Provider>
    </div>
  );
}
