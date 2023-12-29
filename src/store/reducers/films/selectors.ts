import {NameSpace} from '../../../consts.ts';
import {State} from '../../../types.ts';
import {FilmData, FilmsData, PromoFilmData, SimilarFilmsData} from './types.tsx';

export const getFilms = (state : State): FilmsData => state[NameSpace.Films].films;
export const getFilm = (state : State): FilmData => state[NameSpace.Films].film;
export const getPromoFilm = (state : State): PromoFilmData => state[NameSpace.Films].promoFilm;
export const getSimilarFilms = (state : State): SimilarFilmsData => state[NameSpace.Films].similarFilms;
