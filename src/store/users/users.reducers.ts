import { UsersState, ActionType, UsersAction } from "./users.types";

const initialState: UsersState = {
  users: [],
  error: null,
  pending: false
};

export function usersReducer(state = initialState, action: UsersAction<UsersState>): UsersState {
  switch (action.type) {
    case ActionType.UPDATE_LIST: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}