import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  loadFilms,
  changeAuthorizationStatus,
  setFilmsDataLoadingStatus, setError
} from './action.ts';
import {ErrorData, FilmShort} from '../types.ts';
import {AuthorizationStatus} from '../consts.ts';

type InitialState = {
  genre : string;
  films : FilmShort[];
  authorizationStatus : AuthorizationStatus;
  isFilmsDataLoading : boolean;
  error : ErrorData | null;
}

const initialState: InitialState = {
  genre : 'All genres',
  films : [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoading : false,
  error : null
};

const reducer = createReducer(initialState, (builder) =>{
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
