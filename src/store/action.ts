import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction(
  'changeGenre',
  (newGenre : string) => ({
    payload : newGenre
  }));

export const loadFilms = createAction('loadFilms');
