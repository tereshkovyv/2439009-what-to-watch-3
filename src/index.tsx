import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {genresListMock} from './mocks/main-page-menu.ts';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchFilmsAction} from './store/api-actions.tsx';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App menuItems={genresListMock}/>
    </Provider>
  </React.StrictMode>

);
