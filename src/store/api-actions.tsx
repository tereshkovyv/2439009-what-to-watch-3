import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, AuthData, Film, FilmShort, State, UserData} from '../types.ts';
import {AxiosInstance} from 'axios';
import {
  changeAuthorizationStatus,
  loadFilms,
  redirectToRoute,
  setFilmData, setFilmDataLoadingStatus,
  setFilmsDataLoadingStatus
} from './action.ts';
import {APIRoute, AppRoute, AuthorizationStatus} from '../consts.ts';
import {dropToken, saveToken} from '../services/token.ts';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmDataLoadingStatus(true));
    const {data} = await api.get<FilmShort[]>('/films');
    dispatch(setFilmDataLoadingStatus(false));
    dispatch(loadFilms(data));
  }
);

export const fetchFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<Film>(`/films/${id}`);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(setFilmData(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'auth/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmDataLoadingStatus(true));
    const {data} = await api.get<Film>('/promo');
    dispatch(setFilmDataLoadingStatus(false));
    dispatch(setFilmData(data));
  }
);
