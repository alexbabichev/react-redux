// This file holds our state type, as well as any other types related to this Redux store.
import { User } from '../basic.types';

// Describing the shape of the system's slice of state
export interface UsersState {
  users?: User[];
  error?: string | null;
  pending?: boolean;
}

// Types of actions that can be dispatched
export enum ActionType {
  PendingUsers = "Users/Pending",
  GetListUsers = "Users/GetList",
  CreateUsers = "Users/Create",
  UpdateUsers = "Users/Update",
  DeleteUsers = "Users/Delete"
}

// Interface for our actions (if the precise action type isn't
// known yet) which explains the 'payload' within the transformer.
export interface UsersAction<T> {
  type: ActionType;
  payload: T;
}
