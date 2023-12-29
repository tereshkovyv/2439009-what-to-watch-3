import {State} from '../../../types.ts';
import {NameSpace} from '../../../consts.ts';
import {UserData} from './user-slice.ts';

export const getUserData = (state : State): UserData => state[NameSpace.User];
