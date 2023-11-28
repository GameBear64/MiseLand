import { createSlice } from '@reduxjs/toolkit';
interface Theme {
  mode: 'light' | 'dark';
  color: 'orange' | 'red' | 'green' | 'blue' | 'violet' | 'pink';
}

const initialState: Theme = {
  mode: 'light',
  color: 'blue',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setColor, setMode } = themeSlice.actions;
export default themeSlice.reducer;
