import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { token } from './token';
import { profile } from './profile'

export const store = configureStore({
  reducer: {
    token,
    profile,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          url: 'http://19429ba06ff2.vps.myjino.ru/api/',
          version: '1',
        },
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export type ExtraParams = { url: string; version: string };
export type RootThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, ExtraParams, Action>;