import {NameSpace} from '../../../consts.ts';
import {FilmShort, State} from '../../../types.ts';

export const getFavorite = (state : State): FilmShort[] => state[NameSpace.Favorite].content;
export const getIsFavoriteLoading = (state : State): boolean => state[NameSpace.Favorite].isContentLoading;
export const getIsChangeStatusLoading = (state : State) : boolean => state[NameSpace.Favorite].isChangeStatusLoading;
