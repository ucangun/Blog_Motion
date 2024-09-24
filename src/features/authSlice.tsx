import { createSlice } from "@reduxjs/toolkit";

interface AuthInitial {
  loading: boolean;
  error: boolean;
  currentUser: CurrentUserType | null;
  token: string;
}

export interface CurrentUserType {
  bio: string;
  city: string;
  createdAt?: string;
  email: string;
  firstName: string;
  image: string;
  lastName: string;
  username: string;
  password: string;
  _id?: string;
}

const initialState: AuthInitial = {
  loading: false,
  error: false,
  currentUser: null,
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
      state.currentUser = payload.data;
      state.loading = false;
      state.error = false;
      state.token = payload.token;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload.user as CurrentUserType;
      state.token = payload.token;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.token = "";
      state.currentUser = null;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  fetchFail,
} = authSlice.actions;

export default authSlice.reducer;
