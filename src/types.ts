import {store} from './store';

export type FilmShort = {
    id : string;
    name : string;
    previewImage : string;
    previewVideoLink : string;
    genre : string;
}

export type AuthData = {
    login: string;
    password: string;
};

export type UserData = {
    id: number;
    email: string;
    token: string;
};

export type ErrorData = {
    property : string;
    messages : string[];
}

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;
