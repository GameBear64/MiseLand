import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './utils/store';
import Router from './router';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SnackbarProvider>
    <Provider store={store}>
      <Router />
    </Provider>
  </SnackbarProvider>
);
