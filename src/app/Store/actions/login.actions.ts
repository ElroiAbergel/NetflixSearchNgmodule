import { createAction, props } from "@ngrx/store";

export const login = createAction(
    '[Login Component] Login',
    props<{ username: string }>()
  );
export const logout = createAction('[Login Component] Logout');
