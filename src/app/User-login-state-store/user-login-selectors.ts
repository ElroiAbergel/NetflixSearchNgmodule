import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './user-login-state';
import { UserLogin } from '../../Models/User-Login.model'

export const selectUserLogin = createFeatureSelector<AppState, UserLogin>('userLogin');

export const selectUsername = createSelector(
  selectUserLogin,
  (state: UserLogin) => state.username
);

export const selectIsLoggedIn = createSelector(
  selectUserLogin,
  (state: UserLogin) => state.loggedIn
);
