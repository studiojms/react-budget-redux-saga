import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openEditModal: (state, action: PayloadAction<string>) => {
      return { ...state, isOpen: true, id: action.payload };
    },
    closeEditModal: (state) => {
      return { ...state, isOpen: false };
    },
  },
});

export const { openEditModal, closeEditModal } = modalsSlice.actions;

export default modalsSlice.reducer;
