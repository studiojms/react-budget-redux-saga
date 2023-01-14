import { configureStore } from '@reduxjs/toolkit';

import { reducer as entriesReducer } from '../reducers/entries.reducer';
import { reducer as modalsReducer } from '../reducers/modals.reducer';

export const store = configureStore({
  reducer: {
    entries: entriesReducer,
    modals: modalsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
