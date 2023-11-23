import ReactDOM from 'react-dom/client';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import './index.css';

import Router from './router';
import { api } from './utils/apiSlice';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApiProvider api={api}>
    <Router />
  </ApiProvider>
);
