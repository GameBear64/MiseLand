import { api } from '@api';

export const cartSlice = api.injectEndpoints({
  endpoints: builder => ({
    addToCart: builder.mutation<{ id: string; q: number }, { _id: string; quantity: number }>({
      query: ({ _id, quantity }) => ({
        url: `/cart/${_id}/add?quantity=${quantity}`,
        method: 'POST',
      }),
    }),
    changeCartItem: builder.mutation<{ id: string; q: number }, { _id: string; quantity: number }>({
      query: ({ _id, quantity }) => ({
        url: `/cart/${_id}/change?quantity=${quantity}`,
        method: 'POST',
      }),
    }),
    removeCartItem: builder.mutation<{ id: string }, { _id: string }>({
      query: ({ _id }) => ({
        url: `/cart/${_id}/remove`,
        method: 'POST',
      }),
    }),
    checkout: builder.mutation<void, void>({
      query: () => ({
        url: '/cart/checkout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useAddToCartMutation, useChangeCartItemMutation, useRemoveCartItemMutation, useCheckoutMutation } = cartSlice;
