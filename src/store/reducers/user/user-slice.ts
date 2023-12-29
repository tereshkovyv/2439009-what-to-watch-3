import {AuthorizationStatus, NameSpace} from '../../../consts.ts';
import {createSlice} from '@reduxjs/toolkit';
import {checkAuthAction, loginAction, logoutAction} from '../../api-actions/user.ts';
import {AppUser} from '../../../types.ts';

export type UserData = {
  userData : AppUser | null;
  isLoginDataLoading : boolean;
  authorizationStatus: AuthorizationStatus;
};


const initialState: UserData = {
  userData : null,
  isLoginDataLoading : false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.isLoginDataLoading = true;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
        state.isLoginDataLoading = false;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isLoginDataLoading = false;
      })
      .addCase(loginAction.pending, (state) => {
        state.isLoginDataLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isLoginDataLoading = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isLoginDataLoading = false;
      })
      .addCase(logoutAction.pending, (state) => {
        state.isLoginDataLoading = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isLoginDataLoading = false;
      });
  }
});

