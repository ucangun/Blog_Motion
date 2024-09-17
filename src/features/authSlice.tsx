import { createSlice } from "@reduxjs/toolkit";

interface AuthInitial {
  loading: boolean;
  error: boolean;
  currentUser: string;
  token: string;
}

const initialState: AuthInitial = {
  loading: false,
  error: false,
  currentUser: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state, { payload }) => {
      state.currentUser = payload.data.username;
      state.loading = false;
      state.error = false;
      state.token = payload.token;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload.user.username;
      state.token = payload.token;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, registerSuccess, fetchFail } = authSlice.actions;

export default authSlice.reducer;
