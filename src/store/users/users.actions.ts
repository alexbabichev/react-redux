import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { User } from '../basic.types';
import { UsersState, ActionType, UsersAction } from "./users.types";

import { apiService } from '../../services/api.service';


export function updateList(users: User[], error: string | null, pending: boolean): UsersAction<UsersState> {
  return { type: ActionType.GetListUsers, payload: { users, error, pending } };
}

export function pendingUsers(): UsersAction<UsersState> {
  return { type: ActionType.PendingUsers, payload: { pending: true } };
}

// thunk actions

export function thunkGetList(): ThunkAction<Promise<void>, {}, {}, Action> {
  return async (dispatch) => {
    dispatch(pendingUsers());
    const asyncResp = await apiService.fetchUsers();
    dispatch(updateList(asyncResp, null, false));
  }
}