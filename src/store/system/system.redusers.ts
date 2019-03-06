import { SystemState, ActionType, SystemAction } from "./system.types";

import { authService } from '../../services/Auth.service';

const initialState: SystemState = {
  signedIn: false || authService.isAuthenticated
};

  console.log(initialState);

export function systemReducer(state = initialState, action: SystemAction<SystemState>): SystemState {
  switch (action.type) {
    case ActionType.SIGN_IN: 
    case ActionType.SIGN_OUT: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}