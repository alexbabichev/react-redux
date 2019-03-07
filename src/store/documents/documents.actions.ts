import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { Document } from '../basic.types';
import { ActionType, DocumentsAction, DocumentsState } from "./documents.types";

import { apiService } from '../../services/Api.service';


export function temp(user: Document | null): DocumentsAction<DocumentsState> {
  return { type: ActionType.GET_LIST, payload: { error: '' } };
}

// thunk actions

export function thunkTemp(): ThunkAction<Promise<void>, {}, {}, Action> {
  return async (dispatch) => {
    const asyncResp = await apiService.get();
    dispatch(temp(asyncResp));
  }
}