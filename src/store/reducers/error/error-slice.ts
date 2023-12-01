import {createAction, createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../consts.ts';
import {AppError} from '../../../types.ts';

export type ErrorSliceInitialState = {
  error : AppError | null;
}

const initialState : ErrorSliceInitialState = {
  error : null,
};

export const setError = createAction<AppError>('error/setError');
export const errorSlice = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(setError, (state, action) => {
      state.error = action.payload;
    });
  }
}
);
