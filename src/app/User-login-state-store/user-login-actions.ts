import { createAction, props } from '@ngrx/store';
import { UserLogin } from '../../Models/User-Login.model';

export const login = createAction(
  '[User Login] Login',
  props<{ username: string }>()
);

export const logout = createAction('[User Login] Logout');
