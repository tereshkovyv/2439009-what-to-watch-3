import {NameSpace} from '../../../consts.ts';
import {FilmFull, FilmPromo, FilmShort, State} from '../../../types.ts';

export const getFilms = (state : State): FilmShort[]=> state[NameSpace.Films].films;
export const getIsFilmsLoading = (state : State): boolean => state[NameSpace.Films].isFilmsLoading;
export const getFilm = (state : State): FilmFull | null => state[NameSpace.Films].film;
export const getIsFilmLoading = (state : State): boolean => state[NameSpace.Films].isFilmLoading;
export const getPromoFilm = (state : State): FilmPromo | null => state[NameSpace.Films].promoFilm;
export const getIsPromoFilmLoading = (state : State): boolean => state[NameSpace.Films].isPromoFilmLoading;
export const getSimilarFilms = (state : State): FilmShort[] => state[NameSpace.Films].similarFilms;
export const getIsSimilarFilmsLoading = (state : State): boolean => state[NameSpace.Films].isSimilarFilmsLoading;
