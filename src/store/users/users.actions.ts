import { User } from '../basic.types';
import { UserAction } from './users.types';

const initialState: User = { };

export function user(state: User = initialState, action: UserAction<User>): User {
  switch (action.type) {
    default:
      return state;
  }
}