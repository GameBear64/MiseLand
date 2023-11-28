import { api } from '@utils/slices/apiSlice';

import { IRegisterCredentials } from './types';

export const registerSlices = api.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation({
      query: (body: IRegisterCredentials) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerSlices;
