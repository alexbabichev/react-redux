import { UsersState, ActionType, UsersAction } from "./users.types";

const initialState: UsersState = {
  users: [],
  error: null,
  pending: false
};

export function usersReducer(state = initialState, action: UsersAction<UsersState>): UsersState {
  switch (action.type) {
    case ActionType.PendingUsers:
    case ActionType.GetListUsers: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}