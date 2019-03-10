import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { Document } from '../basic.types';
import { ActionType, DocumentsAction, DocumentsState } from "./documents.types";

import { apiService } from '../../services/api.service';


export function updateList(documents: Document[], error: string | null, pending: boolean): DocumentsAction<DocumentsState> {
  return { type: ActionType.GetListDocuments, payload: { documents, error, pending } };
}

// thunk actions

export function thunkGetList(): ThunkAction<Promise<void>, {}, {}, Action> {
  return async (dispatch) => {
    dispatch(updateList([], null, true));
    const asyncResp = await apiService.fetchDocuments();
    dispatch(updateList(asyncResp, null, false));
  }
}