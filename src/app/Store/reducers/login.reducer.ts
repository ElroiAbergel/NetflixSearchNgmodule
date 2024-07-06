import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../actions/login.actions';
import { UserLogin } from '../../../Models/User-Login.model';

export const initialState: UserLogin = { username: '', loggedIn: false };

export const loginReducer = createReducer(
  initialState,
  on(login, (state, { username }) => {
    return {
      username: username,
      loggedIn: true,
    };
  }),
  on(logout, (state) => ({ username: '', loggedIn: false })),
);
