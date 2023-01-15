import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ulid } from 'ulid';
import { Entry } from '../types';

const entriesSlice = createSlice({
  name: 'entries',
  initialState: {
    entries: [
      {
        id: ulid(),
        description: 'Work income',
        value: 1000,
        type: 'income',
      },
      {
        id: ulid(),
        description: 'Water bill',
        value: 90,
        type: 'expense',
      },
      {
        id: ulid(),
        description: 'Rent',
        value: 700.5,
        type: 'expense',
      },
      {
        id: ulid(),
        description: 'Power bill',
        value: 50.9,
        type: 'expense',
      },
    ],
  },
  reducers: {
    addEntry: (state, action: PayloadAction<Omit<Entry, 'id'>>) => {
      state.entries = [...state.entries, { id: ulid(), ...action.payload }];
    },
    removeEntry: (state, action) => {
      state.entries = state.entries.filter((e) => e.id != action.payload);
    },
    updateEntry: (state, action: PayloadAction<{ id: string; entry: Entry }>) => {
      const entryIdx = state.entries.findIndex((e) => e.id == action.payload.id);

      const entries = [...state.entries];
      if (entryIdx) {
        entries[entryIdx].description = action.payload.entry.description;
        entries[entryIdx].value = action.payload.entry.value;
        entries[entryIdx].type = action.payload.entry.type;
      }

      state.entries = entries;
    },
  },
});

export const { addEntry, removeEntry, updateEntry } = entriesSlice.actions;

export default entriesSlice.reducer;
