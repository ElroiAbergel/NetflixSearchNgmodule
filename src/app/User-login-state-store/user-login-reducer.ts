import { Action, createReducer, on } from '@ngrx/store';
import { login, logout } from './user-login-actions';
import { UserLogin } from './user-login-state';

const _userLoginReducer = createReducer(
  { username: '', loggedIn: false },
  on(login, (state, { username }) => ({
    username,
    loggedIn: true,
  })),
  on(logout, () => ({
    username: '',
    loggedIn: false,
  }))
);

export function userLoginReducer(state: UserLogin | undefined, action: Action) {
  return _userLoginReducer(state, action);
}
