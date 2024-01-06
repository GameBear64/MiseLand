import { enqueueSnackbar } from 'notistack';

import { isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IUser } from '@utils/types';

import { router } from '../pages/router';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3030/',
    prepareHeaders: headers => {
      const token = window.localStorage.getItem(`${import.meta.env.VITE_LOCAL_STORAGE_NAME}`);

      if (token) headers.set('jwt', token);

      return headers;
    },
  }),
  endpoints: builder => ({
    // builder.query<ReturnValueHere, ArgumentTypeHere>
    check: builder.query<IUser, void>({
      query: () => `/`,
    }),
  }),
});

export const ErrorHandler: Middleware = (_api: MiddlewareAPI) => next => action => {
  if (isRejectedWithValue(action)) {
    enqueueSnackbar(action.payload?.data || 'Server error occurred', { variant: 'error', preventDuplicate: true });

    if (action.payload.status == 401) router.navigate('/login');
    return;
  }

  return next(action);
};
