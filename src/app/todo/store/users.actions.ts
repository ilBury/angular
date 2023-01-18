i/* mport { createAction, props } from "@ngrx/store";

export enum UsersActionTypes {
  LOAD_USERS = '[USER LIST] Load users',
  USERS_LOADED_SUCCESS = '[USER LIST] Users loaded success',
  USERS_LOADED_FAIL = '[USER LIST] Users loaded fail'
}

export const loadUsers = createAction(UsersActionTypes.LOAD_USERS);
export const usersLoadSuccess = createAction(
  UsersActionTypes.USERS_LOADED_SUCCESS,
  props<{users: User[]}>()
  );
export const usersLoadFail = createAction(UsersActionTypes.USERS_LOADED_FAIL);
 */
