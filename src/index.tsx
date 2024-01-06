import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import ThemeProvider from '@utils/providers/ThemeProvider';

import Router from './pages/router';
import { store } from './stores/_store';
import { api } from './stores/apiSlice';

import './index.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// check for user on startup
store.dispatch(api.endpoints.check.initiate());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider>
      <SnackbarProvider>
        <Router />
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>
);
