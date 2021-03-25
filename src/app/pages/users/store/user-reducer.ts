import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { IUser } from '../models';
import { GET_ALL_USERS, GET_ALL_USERS_SUCCESS } from './user-actions';
import { IUserState } from './user-state';


export const usersFeatureKey = 'users';

export const initialState: IUser[] = []

const _usersReducer = createReducer(
  initialState,
  on(GET_ALL_USERS, (state) => state),
  on(GET_ALL_USERS_SUCCESS, (state, action) => ({...state, ...action.users}))
);

export function usersReducer(state, action): any {
  return _usersReducer(state, action);
}
