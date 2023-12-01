import { useParams } from 'react-router-dom';

import Slider from '@components/Items/Slider';

import Loader from '@utils/pages/Loader';

import { useGetProductQuery, useGetRelatedQuery } from './slices/endpoints';
import Reviews from './views/Reviews';
import Showcase from './views/Showcase';

export default function Product() {
  const { id } = useParams() as { id: string };
  const { data: product, isLoading } = useGetProductQuery(id);
  const { data: related, isLoading: loadingRelated } = useGetRelatedQuery(id);

  if (isLoading || !product || loadingRelated || !related) return <Loader />;

  return (
    <div className="m-auto w-2/3 px-5 py-24 md:w-5/6 xl:w-3/5">
      <div className="flex min-h-[70vh] flex-col justify-center">
        <Showcase product={product} />
      </div>
      <Slider name="Related Items" items={related} />
      <div>
        <Reviews />
      </div>
    </div>
  );
}
