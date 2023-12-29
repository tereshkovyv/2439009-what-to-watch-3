import {ErrorData, FilmFull, FilmPromo, FilmShort} from '../../../types.ts';

export type AppData = {
  films : FilmsData;
  film : FilmData;
  promoFilm : PromoFilmData;
  similarFilms : SimilarFilmsData;
}

export type FilmsData = {
  error : ErrorData | null;
  films : FilmShort[];
  isFilmsLoading : boolean;
}

export type FilmData = {
  error : ErrorData | null;
  film : FilmFull | null;
  isFilmLoading : boolean;
}

export type PromoFilmData = {
  error : ErrorData | null;
  promoFilm : FilmPromo | null;
  isPromoFilmLoading : boolean;
}

export type SimilarFilmsData = {
  error : ErrorData | null;
  similarFilms : FilmShort[];
  isSimilarFilmsLoading : boolean;
}
