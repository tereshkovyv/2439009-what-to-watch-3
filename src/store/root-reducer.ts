import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts.ts';
import {userSlice} from './reducers/user/user-slice.ts';
import {filmsSlice} from './reducers/films/films-slice.ts';
import {favoriteSlice} from './reducers/favorite/favorite-slice.ts';
import {commentsSlice} from './reducers/comments/comments.slice.ts';
import {errorSlice} from './reducers/error/error-slice.ts';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Favorite]: favoriteSlice.reducer,
  [NameSpace.Comments]: commentsSlice.reducer,
  [NameSpace.Error] : errorSlice.reducer
});
