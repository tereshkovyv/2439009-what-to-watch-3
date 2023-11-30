import {createAction} from '@reduxjs/toolkit';
import {ErrorData, Film, FilmShort} from '../types.ts';
import {AppRoute, AuthorizationStatus} from '../consts.ts';

export const changeGenre = createAction(
  'changeGenre',
  (newGenre : string) => ({
    payload : newGenre
  }));

export const loadFilms = createAction<FilmShort[]>('data/loadFilms');
export const setFilmsDataLoadingStatus = createAction<boolean>('status/setFilmsDataLoadingStatus');
export const changeAuthorizationStatus = createAction<AuthorizationStatus>('auth/changeAuthorizationStatus');
export const setError = createAction<ErrorData | null>('data/setError');
export const redirectToRoute = createAction<AppRoute>('router/redirectToRoute');
export const setFilmData = createAction<Film | null>('data/setFilmData');
export const setFilmDataLoadingStatus = createAction<boolean>('status/setFilmDataLoadingStatus');
