import {createAction} from '@reduxjs/toolkit';
import {FilmShort} from '../types.ts';
import {AuthorizationStatus} from '../components/private-route/private-route.tsx';

export const changeGenre = createAction(
  'changeGenre',
  (newGenre : string) => ({
    payload : newGenre
  }));

export const loadFilms = createAction<FilmShort[]>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
