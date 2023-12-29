import {ErrorData, FilmFull, FilmPromo, FilmShort} from '../../../types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../consts.ts';
import {
  fetchFilmAction,
  fetchFilmsAction,
  fetchPromoFilmAction,
  fetchSimilarFilmsAction
} from '../../api-actions/films.ts';

export type AppData = {
  error : ErrorData | null;
  films : FilmShort[];
  isFilmsLoading : boolean;
  film : FilmFull | null;
  isFilmLoading : boolean;
  promoFilm : FilmPromo | null;
  isPromoFilmLoading : boolean;
  similarFilms : FilmShort[];
  isSimilarFilmsLoading : boolean;
}

const initialState: AppData = {
  films : [],
  promoFilm : null,
  isPromoFilmLoading : false,
  isFilmsLoading : false,
  error : null,
  film : null,
  isFilmLoading : false,
  similarFilms : [],
  isSimilarFilmsLoading : false
};

export const filmsSlice = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers : {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.isFilmsLoading = false;
        state.films = action.payload;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.isFilmLoading = false;
        state.film = action.payload;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isPromoFilmLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.isPromoFilmLoading = false;
        state.promoFilm = action.payload;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isSimilarFilmsLoading = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.isSimilarFilmsLoading = false;
        state.similarFilms = action.payload;
      });
  }
});
