import { api } from '@api';

import { IItem } from '@components/Items/slices/types';

import { IUser } from '@utils/types';

// import { IResponse } from './types';

export const profileSlice = api.injectEndpoints({
  endpoints: builder => ({
    getUser: builder.query<{ user: IUser; products: IItem[] }, string>({
      query: _id => ({
        url: `/user/${_id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUserQuery } = profileSlice;
