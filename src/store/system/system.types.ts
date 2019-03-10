// This file holds our state type, as well as any other types related to this Redux store.
import { ThunkAction } from 'redux-thunk'

import { User } from '../basic.types';

// Describing the shape of the system's slice of state
export interface SystemState {
  signedIn: boolean;
  pendingAuth: boolean;
  user: User;
}

// Types of actions that can be dispatched
export enum ActionType {
  SignIn = "SystemState/SignIn",
  SignOut = "SystemState/SignOut",
  SignFailure = "SystemState/SignFailure"
}

// Interface for our actions (if the precise action type isn't
// known yet) which explains the 'payload' within the transformer.
export interface SystemAction<T> {
  type: ActionType;
  payload: T;
}

export type Thunk = ThunkAction<void, SystemState, void, SystemAction<SystemState>> | ThunkAction<Promise<void>, {}, {}, SystemAction<SystemState>>