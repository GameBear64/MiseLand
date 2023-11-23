import { createSlice } from '@reduxjs/toolkit';

// interface User {
//   name: string;
// }

const initialState = {
  userInfo: {}, // for user object
  token: null, // for storing the JWT
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log('aaaa', action.payload);

      state.token = action.payload;
    },
    logOut: (state, _action) => {
      state.token = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

// export const selectUser = state => state.user;
