import {NameSpace} from '../../../consts.ts';
import {State} from '../../../types.ts';
import {FavoriteFilmsData} from './favorite-slice.ts';

export const getFavoriteFilmsData = (state : State): FavoriteFilmsData => state[NameSpace.Favorite];
