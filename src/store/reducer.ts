import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, loadFilms, requireAuthorization, setFilmsDataLoadingStatus} from './action.ts';
import {AuthorizationStatus} from '../components/private-route/private-route.tsx';
import {FilmShort} from '../types.ts';

type InitialState = {
  genre : string;
  films : FilmShort[];
  authorizationStatus : AuthorizationStatus;
  isFilmsDataLoading : boolean;
}

const initialState: InitialState = {
  genre : 'All genres',
  films : [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoading : false
};
const reducer = createReducer(initialState, (builder) =>{
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    });
});

export {reducer};
