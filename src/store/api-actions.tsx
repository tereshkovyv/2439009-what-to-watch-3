import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, FilmShort, State} from '../types.ts';
import {AxiosInstance} from 'axios';
import {loadFilms, setFilmsDataLoadingStatus} from './action.ts';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchQuestions',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<FilmShort[]>('/films');
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  }
);
