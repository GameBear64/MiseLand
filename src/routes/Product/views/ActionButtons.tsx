import { Counter } from '@components/Form/Fields';
import Form from '@components/Form/Form';
import Icon from '@components/Icon/Icon';

import { useAddToCartMutation, useAddToWishesMutation } from '../slices/endpoints';

export default function ActionButtons({ productId }: { productId: string }) {
  const [addToCart] = useAddToCartMutation();
  const [addToWishes] = useAddToWishesMutation();

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4">
        <button
          className="flex h-min rounded border-0 bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none"
          onClick={() => addToCart(productId)}
        >
          Add To Cart
        </button>
        <Form defaultValues={{ quantity: 1 }} onSubmit={() => {}}>
          <Counter name="quantity" />
        </Form>
      </div>
      <button
        className="ml-4 h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 pt-1 text-gray-500"
        onClick={() => addToWishes(productId)}
      >
        <Icon icon="favorite" full />
      </button>
    </div>
  );
}
