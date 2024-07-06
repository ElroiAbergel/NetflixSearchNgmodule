import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserLogin } from '../../../Models/User-Login.model'

export const selectLoginState = createFeatureSelector<UserLogin>('login');

