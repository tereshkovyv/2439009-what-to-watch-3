import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {filmsMock} from './mocks/films';
import {genresListMock} from './mocks/main-page-menu.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App films={filmsMock} menuItems={genresListMock}/>
  </React.StrictMode>
);
