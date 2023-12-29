import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../consts.ts';
import {
  fetchFilmAction,
  fetchFilmsAction,
  fetchPromoFilmAction,
  fetchSimilarFilmsAction
} from '../../api-actions/films.ts';
import {AppData} from './types.tsx';

const initialState: AppData = {
  films : {
    films : [],
    isFilmsLoading : false,
    error : null
  },
  promoFilm : {
    promoFilm : null,
    isPromoFilmLoading : false,
    error : null
  },
  film : {
    film : null,
    isFilmLoading : false,
    error : null
  },
  similarFilms : {
    similarFilms : [],
    isSimilarFilmsLoading : false,
    error : null
  }
};

export const filmsSlice = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers : {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.films.isFilmsLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films.isFilmsLoading = false;
        state.films.films = action.payload;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.film.isFilmLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film.isFilmLoading = false;
        state.film.film = action.payload;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.promoFilm.isPromoFilmLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm.isPromoFilmLoading = false;
        state.promoFilm.promoFilm = action.payload;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.similarFilms.isSimilarFilmsLoading = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms.isSimilarFilmsLoading = false;
        state.similarFilms.similarFilms = action.payload;
      });
  }
});
