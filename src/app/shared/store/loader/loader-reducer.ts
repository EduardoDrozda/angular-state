import { createReducer, on } from '@ngrx/store';
import { HIDE_LOADER, SHOW_LOADER } from './loader-actions';
import { ILoaderState } from './loader-state';

export const loaderFeatureKey = 'isLoading';

const initialState = false;

const _loaderReducer = createReducer(
  initialState,
  on(SHOW_LOADER, (state, action) => true),
  on(HIDE_LOADER, (state, action) => false),
);

export const loaderReducer = (state, action): any => {
  return _loaderReducer(state, action);
};
