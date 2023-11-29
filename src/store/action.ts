import {createAction} from '@reduxjs/toolkit';
import {ErrorData, FilmShort} from '../types.ts';
import {AppRoute, AuthorizationStatus} from '../consts.ts';

export const changeGenre = createAction(
  'changeGenre',
  (newGenre : string) => ({
    payload : newGenre
  }));

export const loadFilms = createAction<FilmShort[]>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const changeAuthorizationStatus = createAction<AuthorizationStatus>('auth/changeAuthorizationStatus');

export const setError = createAction<ErrorData | null>('data/setError');

export const redirectToRoute = createAction<AppRoute>('router/redirectToRoute');
