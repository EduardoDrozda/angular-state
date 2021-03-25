import { createAction, props } from '@ngrx/store';
import { IUser } from '../models';
import { IUserState } from './user-state';

export const GET_ALL_USERS = createAction('[Users Page] Load Users');
export const GET_ALL_USERS_SUCCESS = createAction(
  '[Users Api] Get all users success',
  props<IUserState>()
);

