import { SystemState, ActionType, SystemAction } from "./system.types";

import { authService } from '../../services/auth.service';

const initialState: SystemState = {
  signedIn: false || authService.isAuthenticated,
  pendingAuth: false,
  user: {}
};

export function systemReducer(state = initialState, action: SystemAction<SystemState>): SystemState {
  switch (action.type) {
    case ActionType.SignIn: 
    case ActionType.SignOut: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}