import { useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';

import Icon from '@components/Icon/Icon';

import { changeQuantity, removeItem } from '@pages/Cart/slices/cartSlice';
import { useChangeCartItemMutation, useRemoveCartItemMutation } from '@pages/Cart/slices/endpoints';

import { ICartItem } from './slices/types';

export default function InCart({ item }: { item: ICartItem }) {
  const dispatch = useDispatch();
  const [changeCartItem] = useChangeCartItemMutation();
  const [removeCartItem] = useRemoveCartItemMutation();

  const [quantityState, setQuantityState] = useState(item.quantity);

  const handleChange = (quantity: number) => {
    if (quantity === item.quantity) return;
    if (quantity === 0) return handleRemove();
    setQuantityState(quantity);

    changeCartItem({ _id: item.product._id, quantity })
      .unwrap()
      .then(() => dispatch(changeQuantity({ _id: item.product._id, quantity })));
  };

  const handleRemove = () => {
    removeCartItem({ _id: item.product._id })
      .unwrap()
      .then(() => {
        dispatch(removeItem(item.product._id));
        enqueueSnackbar('Removed from cart', { variant: 'info' });
      });
  };

  return (
    <div className="my-3 flex justify-between rounded-lg bg-white p-6 shadow-md">
      <img
        src={`http://localhost:3030/image/${item.product.images[0]}?size=150`}
        alt="product-image"
        className="w-40 object-cover object-center"
      />

      <div className="ml-4 flex w-full justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">{item.product.title}</h2>
          <p className="text-sm font-semibold text-green-600">${item.product.price}</p>
          <p className="mt-1 text-xs text-gray-700">{item.product.description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-5">
          <div className="flex">
            <button
              type="button"
              className="h-10 w-8 cursor-pointer rounded-l bg-gray-300 pt-1 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
              onClick={() => handleChange(quantityState + 1)}
            >
              <Icon icon="add" />
            </button>
            <input
              type="number"
              value={quantityState}
              onChange={event => handleChange(Number(event.target.value))}
              className={`h-10 w-12 border bg-base px-2 text-center [appearance:textfield] focus:border-primary focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
            />
            <button
              type="button"
              className="h-10 w-8 cursor-pointer rounded-r bg-gray-300 pt-1 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
              onClick={() => handleChange(quantityState - 1)}
            >
              <Icon icon="remove" />
            </button>
          </div>

          <button className="rounded-md bg-red-500 p-2 text-white" onClick={handleRemove}>
            <Icon icon="delete" />
          </button>
        </div>
      </div>
    </div>
  );
}
