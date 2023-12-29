import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../consts.ts';
import {AppComment} from '../../../types.ts';
import {fetchCommentsAction, sendCommentAction} from '../../api-actions/comments.ts';

export type CommentsSliceInitialState = {
  comments : AppComment[];
  isCommentsDownLoading : boolean;
  isCommentUploading : boolean;
}

const initialState : CommentsSliceInitialState = {
  comments : [],
  isCommentsDownLoading : false,
  isCommentUploading : false
};

export const commentsSlice = createSlice({
  name : NameSpace.Comments,
  initialState,
  reducers : {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsDownLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.isCommentsDownLoading = false;
        state.comments = action.payload;
      })
      .addCase(sendCommentAction.pending, (state) => {
        state.isCommentUploading = true;
      })
      .addCase(sendCommentAction.fulfilled, (state) => {
        state.isCommentUploading = false;
      });
  }
}
);
