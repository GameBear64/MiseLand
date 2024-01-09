import { useContext } from 'react';
import { Link } from 'react-router-dom';

import StarRating from '@components/StarRating/StarRating';

import { ProductContext } from '../Product';

import ActionButtons from './ActionButtons';
import Gallery from './Gallery';

export default function Showcase() {
  const product = useContext(ProductContext)!;

  return (
    <div className="flex flex-wrap items-center">
      <div className="h-fit w-full object-cover object-center md:w-1/2">
        <Gallery images={product.images} />
      </div>

      <div className="mt-6 w-full md:mt-0 md:w-1/2 md:py-6 md:pl-10">
        <h2 className="title-font text-sm tracking-widest text-gray-500">
          <Link to={`/profile/${product.author._id}`}>{product.author.name}</Link>/{product.brand}
        </h2>
        <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">{product.title}</h1>
        <div className="mb-4 flex font-semibold">
          <span className="flex items-center">
            <StarRating rating={product.rating} />
            <span className="ml-3 text-gray-600">{product.rating} Reviews</span>
          </span>
          <span className="mx-4 my-1 border-l-2 border-gray-200" />
          <span className="flex py-2 text-gray-600">{product.sold} sold</span>
        </div>

        <div className="flex">
          <div className="flex items-center gap-2">
            <p className="mr-2 text-2xl font-semibold text-gray-900 ">${product.price}</p>
          </div>
        </div>

        <hr className="mt-5 border-t-2 border-gray-200 pt-5" />
        <p className="leading-relaxed">{product.description}</p>
        <hr className="mt-5 border-t-2 border-gray-200 pt-5" />

        <ActionButtons />
      </div>
    </div>
  );
}
