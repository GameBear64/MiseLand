import { api } from '@api';

import { IServerLoginResponse } from '@utils/types';

import { ILoginCredentials } from './types';

export const loginSlices = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<IServerLoginResponse, ILoginCredentials>({
      query: (body: ILoginCredentials) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginSlices;
