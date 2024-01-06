import { api } from '@api';

import { IItem } from '@components/Items/slices/types';

import { IComment } from './types';

export const homeSlice = api.injectEndpoints({
  endpoints: builder => ({
    getProduct: builder.query<IItem, string>({
      query: _id => `/products/${_id}`,
    }),
    getRelated: builder.query<IItem[], string>({
      query: _id => `/products/${_id}/related`,
    }),
    addToWishes: builder.mutation<void, string>({
      query: _id => ({
        url: `/products/${_id}/wish`,
        method: 'POST',
      }),
    }),
    addComment: builder.mutation<void, { _id: string; body: IComment }>({
      query: ({ _id, body }) => ({
        url: `/products/${_id}/comment`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetProductQuery, useAddToWishesMutation, useGetRelatedQuery, useAddCommentMutation } = homeSlice;

export const selectProduct = (id: string) => homeSlice.endpoints.getProduct.select(id);
