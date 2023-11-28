import { useEffect, useState } from 'react';

import Icon from '@components/Icon/Icon';
import JsonDebug from '@components/JsonDebug';

import Loader from '../UtilRoutes/Loader';

import { useProductsQuery } from './slices/endpoints';
import { IItem } from './slices/types';
import Category from './views/Category';

export default function Home() {
  const { data, isLoading } = useProductsQuery();

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (!isLoading) setCategories(Object.keys(data!));
  }, [data]);

  if (isLoading) return <Loader />;

  return (
    <div>
      {categories?.map(category => (
        <Category key={category} name={category} items={data?.[category] ? data?.[category] : []} />
        // <div key={category}>
        //   <h3>{category}</h3>
        //   <div className="mt-11 flex flex-wrap gap-5 p-10">
        //     {data?.[category].map((item: IItem) => (
        //       <div className="w-80 overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg" key={item.id}>
        //         <img className="h-48 w-full object-cover object-center" src={item.images[0]} alt="Product Image" />
        //         <div className="p-4">
        //           <h2 className="mb-2 text-lg font-medium text-gray-900 ">{item.title}</h2>
        //           <div className="text-yellow-500">
        //             <Icon icon="star" full />
        //             <Icon icon="star" full />
        //             <Icon icon="star" full />
        //             <Icon icon="star" full />
        //             <Icon icon="star" />
        //             <span className="ml-3 mr-2 rounded bg-primary-light px-2.5 py-0.5 text-xs font-semibold text-primary-dark ">{item.rating}</span>
        //           </div>
        //           <div className="flex items-center">
        //             <p className="mr-2 text-lg font-semibold text-gray-900 ">{currency.format(item.price - (item.price / 100) * item.discountPercentage)}</p>
        //             <p className="text-base  font-medium text-gray-500 line-through ">${item.price}</p>
        //             <p className="ml-auto text-base font-medium text-green-500">{item.discountPercentage}% off</p>
        //           </div>
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        //   <JsonDebug json={data?.[category]} />
        // </div>
      ))}
      {/* <JsonDebug json={data} />; */}
    </div>
  );
}
