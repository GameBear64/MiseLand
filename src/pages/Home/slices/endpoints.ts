import { api } from '@api';

import { IResponse } from './types';

export const homeSlice = api.injectEndpoints({
  endpoints: builder => ({
    products: builder.query<IResponse[], void>({
      query: () => `/products`,
    }),
  }),
});

export const { useProductsQuery } = homeSlice;
