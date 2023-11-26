import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {filmsMock} from './mocks/films';
import {genresListMock} from './mocks/main-page-menu.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App name={'The Grand Budapest Hotel poster'} genre={'Drama'} releaseDate={'2014'} films={filmsMock} menuItems={genresListMock}/>
  </React.StrictMode>
);
