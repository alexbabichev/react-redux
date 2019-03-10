import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { Template } from '../basic.types';
import { ActionType, TemplatesAction, TemplatesState } from "./templates.types";

import { apiService } from '../../services/api.service';


export function updateList(templates: Template[], error: string | null, pending: boolean): TemplatesAction<TemplatesState> {
  return { type: ActionType.GetListTemplates, payload: { templates, error, pending } };
}

export function pendingTemplates(): TemplatesAction<TemplatesState> {
  return { type: ActionType.PendingTemplates, payload: { pending: true } };
}

// thunk actions

export function thunkGetList(): ThunkAction<Promise<void>, {}, {}, Action> {
  return async (dispatch) => {
    dispatch(pendingTemplates());
    const asyncResp = await apiService.fetchTemplates();
    dispatch(updateList(asyncResp, null, false));
  }
}