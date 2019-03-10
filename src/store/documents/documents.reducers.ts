import { DocumentsState, ActionType, DocumentsAction } from "./documents.types";

const initialState: DocumentsState = {
  documents: [],
  error: null,
  pending: false
};

export function documentsReducer(state = initialState, action: DocumentsAction<DocumentsState>): DocumentsState {
  switch (action.type) {
    case ActionType.GetListDocuments: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}