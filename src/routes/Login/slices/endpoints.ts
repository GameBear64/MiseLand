import { api } from '@utils/slices/apiSlice';

import { ILoginCredentials } from './types';

export const loginSlices = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (body: ILoginCredentials) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginSlices;
