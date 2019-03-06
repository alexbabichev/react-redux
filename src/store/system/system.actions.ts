import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { User } from '../basic.types';
import { ActionType, SystemAction, SystemState } from "./system.types";

import { authService } from '../../services/Auth.service';

// helper
export function subsribeChanges(cb: any): void {
  if (typeof cb === 'function')
    authService.setEventHandler(cb);
}

// actions

export function signIn(user: User | null): SystemAction<SystemState> {
  return { type: ActionType.SIGN_IN, payload: {signedIn: true, user } };
}

export function signOut(): SystemAction<SystemState> {
  authService.signOut();
  return { type: ActionType.SIGN_OUT, payload: {signedIn: false, user: null} };
}

// thunk actions

export function thunkSignIn(): ThunkAction<Promise<void>, {}, {}, Action> {
  return async (dispatch) => {
    const asyncResp = await authService.signIn();
    dispatch(signIn(asyncResp));
  }
}

export function userChanged(user: User | null): ThunkAction<void, {}, {}, Action> {
  return async (dispatch) => {
    dispatch(signIn(user));
  }
}