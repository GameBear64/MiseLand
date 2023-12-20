import { createSlice } from '@reduxjs/toolkit';

import { IUser } from '@utils/types';

const initialState: { userInfo: IUser | null } = {
  userInfo: null, // for user object
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    logOut: (state, _action) => {
      state.userInfo = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
