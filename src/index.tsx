import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import ThemeProvider from '@utils/providers/ThemeProvider';

import Router from './routes/router';
import { store } from './utils/store';

import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider>
      <SnackbarProvider>
        <Router />
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>
);
