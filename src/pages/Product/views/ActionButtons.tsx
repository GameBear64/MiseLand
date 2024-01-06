import { useContext } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';

import { Counter } from '@components/Form/Fields';
import Form from '@components/Form/Form';
import { MIN, REQUIRED } from '@components/Form/validations';
import Icon from '@components/Icon/Icon';

import { setCart } from '@pages/Cart/slices/cartSlice';
import { useAddToCartMutation } from '@pages/Cart/slices/endpoints';

import { ProductContext } from '../Product';
import { useAddToWishesMutation } from '../slices/endpoints';

export default function ActionButtons() {
  const { _id } = useContext(ProductContext)!;
  const dispatch = useDispatch();

  const [addToCart] = useAddToCartMutation();
  const [addToWishes] = useAddToWishesMutation();

  const handleBuy = ({ quantity }: { quantity: number }) => {
    addToCart({ _id, quantity })
      .unwrap()
      .then(data => {
        dispatch(setCart(data));
        enqueueSnackbar('Added to cart', { variant: 'success' });
      });
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
        onClick={() => addToWishes(_id)}
      >
        <Icon icon="favorite" full />
      </button>
    </div>
  );
}
