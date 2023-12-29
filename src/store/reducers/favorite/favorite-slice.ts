import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../consts.ts';
import {FilmShort} from '../../../types.ts';
import {fetchFavoriteAction, sendNewStatusAction} from '../../api-actions/favorite.ts';

export type FavoriteFilmsData = {
  content : FilmShort[];
  isContentLoading : boolean;
  isChangeStatusLoading : boolean;
}

const initialState : FavoriteFilmsData = {
  content : [],
  isContentLoading : false,
  isChangeStatusLoading : false
};

export const favoriteSlice = createSlice({
  name : NameSpace.Favorite,
  initialState,
  reducers : {},
  extraReducers(builder){
    builder
      .addCase(fetchFavoriteAction.pending, (state) => {
        state.isContentLoading = true;
      })
      .addCase(fetchFavoriteAction.fulfilled, (state, action) => {
        state.content = action.payload;
        state.isContentLoading = false;
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
