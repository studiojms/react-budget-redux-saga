import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ulid } from 'ulid';
import { Entry } from '../types';

const entriesSlice = createSlice({
  name: 'entries',
  initialState: {
    entries: [] as Entry[],
  },
  reducers: {
    addEntry: (state, action: PayloadAction<Omit<Entry, 'id'>>) => {
      const newEntry: Entry = { id: ulid(), ...action.payload };
      state.entries = [...state.entries, newEntry];
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
    getEntries: () => {},
    populateEntries: (state, action) => {
      state.entries = action.payload || [];
    },
    populateEntryDetails: (state, action) => {
      const entry = state.entries.find((e) => e.id == action.payload.id);
      if (entry) {
        entry.value = action.payload.value;
      }
    },
  },
});

export const { addEntry, removeEntry, updateEntry, getEntries, populateEntries, populateEntryDetails } =
  entriesSlice.actions;

export default entriesSlice.reducer;
