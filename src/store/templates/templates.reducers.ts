import { ActionType, TemplatesAction, TemplatesState } from "./templates.types";

const initialState: TemplatesState = {
  templates: [],
  error: null,
  pending: false
};

export function templatesReducer(state = initialState, action: TemplatesAction<TemplatesState>): TemplatesState {
  switch (action.type) {
    case ActionType.GetListTemplates: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}