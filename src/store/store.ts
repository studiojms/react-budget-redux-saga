import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import { initSagas } from '../sagas';
import entriesSlice from '../slices/entries.slice';
import modalsSlice from '../slices/modals.slice';

let store: ToolkitStore;

export default function createStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  store = configureStore({
    reducer: {
      entries: entriesSlice,
      modals: modalsSlice,
    },
    middleware: middlewares,
  });

  initSagas(sagaMiddleware);

  return store;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
