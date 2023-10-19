import { createSlice } from "@reduxjs/toolkit";

const userInfoString = localStorage.getItem("userInfo");
const initialState = {
  userInfo: userInfoString ? JSON.parse(userInfoString) : null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredential: (state, action) => {
      state.userInfo = action.payload;

      localStorage.setItem("userInfo", JSON.stringify(action.payload));

      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
      localStorage.setItem("expirationTime", expirationTime + "");
    },

    removeCredentials: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredential, removeCredentials } = authSlice.actions;

export default authSlice.reducer;
