import { configureStore } from '@reduxjs/toolkit';

import { api, ErrorHandler } from './apiSlice';
import authReducer from './authSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware, ErrorHandler),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
