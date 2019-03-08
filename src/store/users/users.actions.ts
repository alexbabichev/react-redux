import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { User } from '../basic.types';
import { UsersState, ActionType, UsersAction } from "./users.types";

import { apiService } from '../../services/Api.service';


export function updateList(users: User[], error: string | null, pending: boolean): UsersAction<UsersState> {
  return { type: ActionType.UPDATE_LIST, payload: { users, error, pending } };
}

// thunk actions

export function thunkGetList(): ThunkAction<Promise<void>, {}, {}, Action> {
  return async (dispatch) => {
    dispatch(updateList([], null, true));
    const asyncResp = await apiService.fetchUsers();
    dispatch(updateList(asyncResp, null, false));
  }
}