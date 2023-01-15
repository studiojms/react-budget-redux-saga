import { configureStore } from '@reduxjs/toolkit';
import entriesSlice from '../slices/entries.slice';
import modalsSlice from '../slices/modals.slice';

export const store = configureStore({
  reducer: {
    entries: entriesSlice,
    modals: modalsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
