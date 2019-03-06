import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import thunkMiddleware from "redux-thunk";

import { systemReducer } from './system/system.redusers';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  system: systemReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );

  return store;
}