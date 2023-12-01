import { IItem } from '@components/Items/slices/types';

import { api } from '@utils/slices/apiSlice';

export const homeSlice = api.injectEndpoints({
  endpoints: builder => ({
    getProduct: builder.query<IItem, string>({
      query: id => `/products/${id}`,
    }),
    getRelated: builder.query<IItem[], string>({
      query: id => `/products/${id}/related`,
    }),
    addToCart: builder.mutation<void, string>({
      query: id => ({
        url: `/products/${id}/add`,
        method: 'POST',
      }),
    }),
    addToWishes: builder.mutation<void, string>({
      query: id => ({
        url: `/products/${id}/wish`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetProductQuery, useAddToCartMutation, useAddToWishesMutation, useGetRelatedQuery } = homeSlice;
