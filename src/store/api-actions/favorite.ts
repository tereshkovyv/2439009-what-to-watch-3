import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, ChangeStatusDto, FilmFull, FilmShort, State} from '../../types.ts';
import {AxiosInstance} from 'axios';

export const fetchFavoriteAction = createAsyncThunk<FilmShort[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/fetchFavorite',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmShort[]>('/favorite');
    return data;
  }
);

export const sendNewStatusAction = createAsyncThunk<FilmFull, ChangeStatusDto, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/sendNewStatus',
  async (changeStatusDto, {extra: api}) => {
    const {data} = await api.post<FilmFull>(`/favorite/${changeStatusDto.id}/${changeStatusDto.status}`);
    return data;
  }
);
