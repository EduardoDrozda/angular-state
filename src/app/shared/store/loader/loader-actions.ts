import { createAction, props } from '@ngrx/store';
import { ILoaderState } from './loader-state';

export const SHOW_LOADER = createAction('[Loader Component] Show loader');
export const HIDE_LOADER = createAction('[Loader Component] Hide loader');
