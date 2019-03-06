import { SystemState, ActionType, SystemAction } from "./system.types";

const initialState: SystemState = {
  signedIn: false
};

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