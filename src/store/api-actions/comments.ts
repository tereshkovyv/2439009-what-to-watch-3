import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppComment, AppCommentDto, AppDispatch, State} from '../../types.ts';
import {AxiosInstance} from 'axios';
import {redirectToRoute} from '../action.ts';

export const fetchCommentsAction = createAsyncThunk<AppComment[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, { extra: api}) => {
    const {data} = await api.get<AppComment[]>(`/comments/${id}`);
    return data;
  }
);

export const sendCommentAction = createAsyncThunk<void, AppCommentDto, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post(`/comments/${id}`, {comment, rating});
    dispatch(redirectToRoute(`films/${id}`));
  },
);
