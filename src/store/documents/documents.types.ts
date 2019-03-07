// This file holds our state type, as well as any other types related to this Redux store.
import { Document } from '../basic.types';

// Describing the shape of the system's slice of state
export interface DocumentsState {
  documents?: Document[];
  error?: string;
  isFetching?: boolean;
}

// Types of actions that can be dispatched
export enum ActionType { GET_LIST }

// Interface for our actions (if the precise action type isn't
// known yet) which explains the 'payload' within the transformer.
export interface DocumentsAction<T> {
  type: ActionType;
  payload: T;
}