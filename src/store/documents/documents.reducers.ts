import { DocumentsState, ActionType, DocumentsAction } from "./documents.types";

const initialState: DocumentsState = {
  documents: [],
  error: null,
  pending: false
};

export function documentsReducer(state = initialState, action: DocumentsAction<DocumentsState>): DocumentsState {
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