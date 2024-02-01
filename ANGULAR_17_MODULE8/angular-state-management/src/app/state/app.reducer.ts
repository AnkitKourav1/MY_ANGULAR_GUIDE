// src/app/state/app.reducer.ts

import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  counter: 0,
};

export const appReducer = createReducer(
  initialState,
  on(appActions.increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(appActions.decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(appActions.reset, (state) => ({ ...state, counter: 0 })),
  on(appActions.set, (state, { value }) => ({ ...state, counter: value }))
);
