import { api } from '@api';

import { IOrder } from '@components/Items/slices/types';

export const orderSlice = api.enhanceEndpoints({ addTagTypes: ['Orders'] }).injectEndpoints({
  endpoints: builder => ({
    getOrders: builder.query<IOrder[], void>({
      query: () => ({
        url: '/orders',
      }),
      providesTags: ['Orders'],
    }),
    getIncomingOrders: builder.query<IOrder[], void>({
      query: () => ({
        url: '/orders/incoming',
      }),
      providesTags: ['Orders'],
    }),
    advanceOrder: builder.mutation<void, string>({
      query: _id => ({
        url: `/orders/${_id}/advance`,
        method: 'POST',
      }),
      invalidatesTags: ['Orders'],
    }),
    declineOrder: builder.mutation<void, string>({
      query: _id => ({
        url: `/orders/${_id}/decline`,
        method: 'POST',
      }),
      invalidatesTags: ['Orders'],
    }),
  }),
});

export const { useGetOrdersQuery, useGetIncomingOrdersQuery, useAdvanceOrderMutation, useDeclineOrderMutation } = orderSlice;
