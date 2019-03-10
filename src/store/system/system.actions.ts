import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { User } from '../basic.types';
import { ActionType, SystemAction, SystemState } from "./system.types";

import { authService } from '../../services/auth.service';

// helper
export function subsribeChanges(cb: typeof updateAuth): void {
  authService.setEventHandler(cb);
}

// actions

export function updateAuth(user: User, signedIn: boolean, pendingAuth=false): SystemAction<SystemState> {
  return { type: signedIn ? ActionType.SignIn : ActionType.SignOut, payload: { signedIn, pendingAuth, user } };
}

export function signIn(): SystemAction<SystemState> {
  authService.signIn();
  return { type: ActionType.SignIn, payload: { signedIn: false, pendingAuth: true, user: {} } };
}

export function signOut(): SystemAction<SystemState> {
  authService.signOut();
  return { type: ActionType.SignOut, payload: { signedIn: false, pendingAuth: true, user: {} } };
}