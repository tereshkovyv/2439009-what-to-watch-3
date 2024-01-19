import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../consts.ts';
import {FilmShort} from '../../../types.ts';
import {fetchFavoriteAction, sendNewStatusAction} from '../../api-actions/favorite.ts';

export type FavoriteFilmsData = {
  favoriteFilms : FilmShort[];
  isFavoriteFilmsLoading : boolean;
  isChangeStatusLoading : boolean;
}

const initialState : FavoriteFilmsData = {
  favoriteFilms : [],
  isFavoriteFilmsLoading : false,
  isChangeStatusLoading : false
};

export const favoriteSlice = createSlice({
  name : NameSpace.Favorite,
  initialState,
  reducers : {},
  extraReducers(builder){
    builder
      .addCase(fetchFavoriteAction.pending, (state) => {
        state.isFavoriteFilmsLoading = true;
      })
      .addCase(fetchFavoriteAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isFavoriteFilmsLoading = false;
      })
      .addCase(sendNewStatusAction.fulfilled, (state)=>{
        fetchFavoriteAction();
        state.isChangeStatusLoading = false;
      })
      .addCase(sendNewStatusAction.pending, (state) => {
        state.isChangeStatusLoading = true;
      });
  }
});
