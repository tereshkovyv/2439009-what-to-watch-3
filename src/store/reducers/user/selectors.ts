import {AppUser, State} from '../../../types.ts';
import {AuthorizationStatus, NameSpace} from '../../../consts.ts';

export const getAuthorisationStatus = (state : State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserData = (state : State):AppUser | null => state[NameSpace.User].userData;
export const getIsLoginDataLoading = (state : State) : boolean => state[NameSpace.User].isLoginDataLoading;
