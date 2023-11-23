import { api } from '../../../utils/apiSlice';

export const loginSlices = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginSlices;
