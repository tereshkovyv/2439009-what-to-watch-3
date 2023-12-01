import {store} from './store';

export type FilmShort = {
    id : string;
    name : string;
    previewImage : string;
    previewVideoLink : string;
    genre : string;
}

export type FilmFull = {
  id : string;
  name : string;
  posterImage : string;
  backgroundImage : string;
  backgroundColor : string;
  videoLink : string;
  description : string;
  rating : string;
  scoresCount : string;
  director : string;
  starring : string[];
  runTime : string;
  genre : string;
  released : string;
  isFavorite : boolean;
}

export type FilmPromo ={
  id : string;
  name : string;
  posterImage : string;
  backgroundImage : string;
  videoLink : string;
  genre : string;
  released : string;
  isFavorite : string;
}

export type LoginDto = {
    login: string;
    password: string;
};

export type AppUser = {
  name : string;
  avatarUrl : string;
  email : string;
  token : string;
}

export type ErrorData = {
    property : string;
    messages : string[];
}

export type AppComment = {
  id : string;
  date : string;
  user : string;
  comment : string;
  rating : string;
}

export type AppCommentDto = {
  id : string;
  comment : string;
  rating : number;
}

export type ChangeStatusDto = {
  id : string;
  status : string;
}

export type AppError = {
  message : string;
  details : ErrorData[];
}

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

