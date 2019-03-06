// This file holds our state type, as well as any other types related to this Redux store.

// Types of actions that can be dispatched
export enum ActionType { TOGGLE_LIST_ITEM, TOGGLE_WHOLE_LIST, CLEAR_LIST }

// Interface for our actions (if the precise action type isn't
// known yet) which explains the 'payload' within the transformer.
export interface UserAction<T> {
  type: ActionType;
  payload: T;
}
