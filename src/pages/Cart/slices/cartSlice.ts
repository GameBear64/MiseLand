import { api } from '@api';
import { createSlice } from '@reduxjs/toolkit';

import { ICartItem } from '@components/Items/slices/types';

const initialState: { items: ICartItem[] } = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload;
    },
    changeQuantity: (state, action) => {
      const item = state.items.find(item => item.product._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.product._id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addMatcher(api.endpoints.check.matchFulfilled, (state, action) => {
      state.items = action.payload.cart;
    });
  },
});

export const { setCart, changeQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
