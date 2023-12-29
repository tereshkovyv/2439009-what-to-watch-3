import {AppError, State} from '../../../types.ts';
import {NameSpace} from '../../../consts.ts';

export const getError = (state : State) : AppError | null => state[NameSpace.Error].error;
