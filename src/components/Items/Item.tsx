import { Link } from 'react-router-dom';

import StarRating from '@components/StarRating/StarRating';

import { IItem } from './slices/types';

export default function Item({ item }: { item: IItem }) {
  return (
    <div className="m-5 w-72 overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 w-full object-cover object-center"
        src={`http://localhost:3030/image/${item.images[0]}?size=250`}
        alt="Product Image"
      />
      <div className="p-4">
        <Link to={`/product/${item._id}`}>
          <h2 className="mb-2 overflow-hidden whitespace-nowrap text-lg font-medium text-gray-900">{item.title}</h2>
        </Link>
        <div className="flex items-center text-yellow-500">
          <StarRating rating={item?.rating} />
          <span className="mx-2 rounded bg-primary-light px-2.5 py-0.5 text-xs font-semibold text-primary-dark ">
            {item.rating || 5}
          </span>
        </div>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 ">${item.price}</p>
        </div>
      </div>
    </div>
  );
}
