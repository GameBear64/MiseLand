import { enqueueSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';

import InCart from '@components/Items/InCart';

import { RootState } from '@stores/_store';

import { setCart } from './slices/cartSlice';
import { useCheckoutMutation } from './slices/endpoints';

export default function Cart() {
  const dispatch = useDispatch();
  const [checkout] = useCheckoutMutation();
  const { items } = useSelector((state: RootState) => state.cart);

  function getTotal() {
    return items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  function doCheckout() {
    checkout()
      .unwrap()
      .then(() => {
        dispatch(setCart([]));
        enqueueSnackbar('Checkout successful!', { variant: 'success' });
      });
  }

  return (
    <div>
      {items.map(item => (
        <InCart item={item} key={item.product._id} />
      ))}
      <hr className="border-bottom-2 my-5" />
      <div className="flex">
        <button
          className="flex h-min rounded border-0 bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none"
          onClick={doCheckout}
        >
          Checkout
        </button>
        <p className="mr-4 text-sm font-semibold text-gray-900">Total:</p>
        <p className="text-sm font-semibold text-gray-900">${getTotal()}</p>
      </div>
    </div>
  );
}
