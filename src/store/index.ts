import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';

import thunkMiddleware from "redux-thunk";

import { systemReducer } from './system/system.reducers';
import { documentsReducer } from './documents/documents.reducers';

const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
  system: systemReducer,
  documents: documentsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
}