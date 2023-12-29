import {store} from './store';

export type FilmShort = {
    id : string;
    name : string;
    previewImage : string;
    previewVideoLink : string;
    genre : string;
}

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;
