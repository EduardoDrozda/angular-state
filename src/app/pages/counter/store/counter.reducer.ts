import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';


export const countFeatureKey = 'count';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => state = 0)
);

export function counterReducer(state, action): any {
  return _counterReducer(state, action);
}
