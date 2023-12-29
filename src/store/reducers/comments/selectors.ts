import {NameSpace} from '../../../consts.ts';
import {State} from '../../../types.ts';
import {CommentsData} from './comments.slice.ts';

export const getCommentsData = (state : State): CommentsData=> state[NameSpace.Comments];
