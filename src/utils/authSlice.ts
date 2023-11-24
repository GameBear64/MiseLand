import { createSlice } from '@reduxjs/toolkit';

// interface User {
//   name: string;
// }

const initialState = {
  userInfo: {}, // for user object
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    logOut: (state, _action) => {
      state.userInfo = {};
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

// export const selectUser = state => state.user;
