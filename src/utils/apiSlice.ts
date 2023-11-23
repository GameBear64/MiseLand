import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  endpoints: _builder => ({}),
});
