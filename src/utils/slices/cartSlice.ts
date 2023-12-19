import { createSlice } from '@reduxjs/toolkit';

import { IItem } from '@components/Items/slices/types';

const initialState: { items: IItem[] } = {
  items: [],
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setCart: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItem, removeItem, setCart } = themeSlice.actions;
export default themeSlice.reducer;
