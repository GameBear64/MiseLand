import { IItem } from '@components/Items/slices/types';

import { api } from '@utils/slices/apiSlice';

import { IComment } from './types';

export const homeSlice = api.injectEndpoints({
  endpoints: builder => ({
    getProduct: builder.query<IItem, string>({
      query: id => `/products/${id}`,
    }),
    getRelated: builder.query<IItem[], string>({
      query: id => `/products/${id}/related`,
    }),
    addToCart: builder.mutation<void, { id: string; quantity: number }>({
      query: ({ id, quantity }) => ({
        url: `/products/${id}/add?quantity=${quantity}`,
        method: 'POST',
      }),
    }),
    addToWishes: builder.mutation<void, string>({
      query: id => ({
        url: `/products/${id}/wish`,
        method: 'POST',
      }),
    }),
    addComment: builder.mutation<void, { id: string; body: IComment }>({
      query: ({ id, body }) => ({
        url: `/products/${id}/comment`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetProductQuery, useAddToCartMutation, useAddToWishesMutation, useGetRelatedQuery, useAddCommentMutation } =
  homeSlice;

export const selectProduct = (id: string) => homeSlice.endpoints.getProduct.select(id);
