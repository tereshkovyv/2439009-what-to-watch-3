import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, AppUser, LoginDto, State} from '../../types.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute} from '../../consts.ts';
import {dropToken, saveToken} from '../../services/token.ts';
import {redirectToRoute} from '../action.ts';

export const checkAuthAction = createAsyncThunk<AppUser, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<AppUser>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<AppUser, LoginDto, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<AppUser>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
