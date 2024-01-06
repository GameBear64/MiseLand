import { api } from '@api';

import { IServerLoginResponse } from '@utils/types';

import { IRegisterCredentials } from './types';

export const registerSlices = api.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation<IServerLoginResponse, IRegisterCredentials>({
      query: (body: IRegisterCredentials) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerSlices;
