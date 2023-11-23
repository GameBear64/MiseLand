import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './utils/store';

import './index.css';

import Router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router />
  </Provider>
);