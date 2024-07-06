import { UserLogin } from '../../Models/User-Login.model';

export interface AppState {
  userLogin: UserLogin;
}

export const initialState: UserLogin = {
  username: '',
  loggedIn: false,
};
export { UserLogin };

