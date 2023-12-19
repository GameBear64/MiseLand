import { useContext } from 'react';

import { Counter } from '@components/Form/Fields';
import Form from '@components/Form/Form';
import { MIN, REQUIRED } from '@components/Form/validations';
import Icon from '@components/Icon/Icon';

import { ProductContext } from '../Product';
import { useAddToCartMutation, useAddToWishesMutation } from '../slices/endpoints';

export default function ActionButtons() {
  const { id } = useContext(ProductContext)!;

  const [addToCart] = useAddToCartMutation();
  const [addToWishes] = useAddToWishesMutation();

  const handleBuy = ({ quantity }: { quantity: number }) => {
    addToCart({ id, quantity });
  };

  return (
    <div className="flex items-center justify-between">
      <Form defaultValues={{ quantity: 1 }} onSubmit={handleBuy}>
        <div className="flex gap-4">
          <button className="flex h-min rounded border-0 bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none">
            Add To Cart
          </button>
          <Counter name="quantity" rules={{ ...REQUIRED, ...MIN(1) }} />
        </div>
      </Form>
      <button
        className="ml-4 h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 pt-1 text-gray-500"
        onClick={() => addToWishes(id)}
      >
        <Icon icon="favorite" full />
      </button>
    </div>
  );
}
