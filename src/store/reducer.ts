import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  loadFilms,
  changeAuthorizationStatus,
  setFilmsDataLoadingStatus, setError, setFilmData, setFilmDataLoadingStatus, setComments, setCommentsLoadingStatus
} from './action.ts';
import {ErrorData, Film, FilmComment, FilmShort} from '../types.ts';
import {AuthorizationStatus} from '../consts.ts';

type InitialState = {
  genre : string;
  films : FilmShort[];
  comments : FilmComment[];
  isFilmsDataLoading : boolean;
  authorizationStatus : AuthorizationStatus;
  error : ErrorData | null;
  film : Film | null;
  isFilmLoading : boolean;
  isCommentsLoading : boolean;
}

const initialState: InitialState = {
  genre : 'All genres',
  comments : [],
  films : [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isCommentsLoading : false,
  isFilmsDataLoading : false,
  error : null,
  film : null,
  isFilmLoading : false
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
    })
    .addCase(setFilmData, (state, action) => {
      state.film = action.payload;
    })
    .addCase(setFilmDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setCommentsLoadingStatus, (state, action) => {
      state.isCommentsLoading = action.payload;
    });
});

export {reducer};
