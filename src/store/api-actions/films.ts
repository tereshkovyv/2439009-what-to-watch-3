import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  AppDispatch,
  FilmFull,
  FilmPromo,
  FilmShort,
  State
} from '../../types.ts';
import {AxiosInstance} from 'axios';

export const fetchFilmsAction = createAsyncThunk<FilmShort[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'film/fetchAll',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmShort[]>('/films');
    return data;
  }
);

export const fetchFilmAction = createAsyncThunk<FilmFull, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/fetch',
  async (id, {extra: api}) => {
    const {data} = await api.get<FilmFull>(`/films/${id}`);
    return data;
  }
);

export const fetchSimilarFilmsAction = createAsyncThunk<FilmShort[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/fetchSimilar',
  async (id, {extra: api}) => {
    const {data} = await api.get<FilmShort[]>(`/films/${id}/similar`);
    return data;
  }
);

export const fetchPromoFilmAction = createAsyncThunk<FilmPromo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/fetchPromo',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<FilmPromo>('/promo');
    return data;
  }
);

