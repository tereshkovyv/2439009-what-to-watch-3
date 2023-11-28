import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, loadFilms} from './action.ts';
import {filmsMock} from '../mocks/films.ts';

function GetFIlms(genre : string){
  if (genre === 'All genres') {
    return filmsMock;
  }
  return filmsMock.slice(genre[0].charCodeAt(0) % 4, 5 + genre[0].charCodeAt(0) % 8);
}

const initialState = {
  genre : 'All genres',
  films : GetFIlms('All genres')
};
const reducer = createReducer(initialState, (builder) =>{
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state) => {
      state.films = GetFIlms(state.genre);
    });
});

export {reducer};
