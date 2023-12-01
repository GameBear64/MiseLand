import StarRating from '@components/StarRating/StarRating';

import { currencyFormatter } from '@utils/utils';

import { IItem } from './slices/types';

export default function Item({ item }: { item: IItem }) {
  return (
    <div className="m-5 w-72 overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img className="h-48 w-full object-cover object-center" src={item.thumbnail} alt="Product Image" />
      <div className="p-4">
        <h2 className="mb-2 overflow-hidden whitespace-nowrap text-lg font-medium text-gray-900">{item.title}</h2>
        <div className="flex items-center text-yellow-500">
          <StarRating rating={item.rating} />
          <span className="mx-2 rounded bg-primary-light px-2.5 py-0.5 text-xs font-semibold text-primary-dark ">
            {item.rating}
          </span>
        </div>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 ">
            {currencyFormatter.format(item.price - (item.price / 100) * item.discountPercentage)}
          </p>
          <p className="text-base  font-medium text-gray-500 line-through ">${item.price}</p>
          <p className="ml-auto text-base font-medium text-green-500">{item.discountPercentage}% off</p>
        </div>
      </div>
    </div>
  );
}
