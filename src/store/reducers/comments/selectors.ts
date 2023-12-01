import {NameSpace} from '../../../consts.ts';
import {AppComment, State} from '../../../types.ts';

export const getComments = (state : State): AppComment[]=> state[NameSpace.Comments].comments;
export const getIsCommentsDownloading = (state : State): boolean => state[NameSpace.Comments].isCommentsDownLoading;
export const getCommentUploading = (state : State): boolean => state[NameSpace.Comments].isCommentUploading;
