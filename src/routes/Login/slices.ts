import { api } from '../../utils/apiSlice';

export const loginSlices = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: () => 'login',
    }),
  }),
});

export const { useLoginMutation } = loginSlices;
