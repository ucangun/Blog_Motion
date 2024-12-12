import { createSlice } from "@reduxjs/toolkit";

interface AuthInitial {
  loading: boolean;
  error: boolean;
  currentUser: CurrentUserType | null;
  token: string;
  singleUser: CurrentUserType | null;
  resetToken: string;
  userBlogs: BlogPost[];
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
  _id: string;
}

const initialState: AuthInitial = {
  loading: false,
  error: false,
  currentUser: null,
  singleUser: null,
  token: "",
  resetToken: "",
  userBlogs: [],
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
      state.userBlogs = [];
    },
    updateSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload.new as CurrentUserType;
    },

    deleteSuccess: (state) => {
      state.loading = false;
      state.token = "";
      state.currentUser = null;
    },

    getsingleUserSuccess: (state, { payload }) => {
      state.loading = false;
      state.singleUser = payload.data;
    },
    forgotPasswordSuccess: (state, { payload }) => {
      state.loading = false;
      state.resetToken = payload.resetToken;
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
  updateSuccess,
  deleteSuccess,

  getsingleUserSuccess,
  forgotPasswordSuccess,
} = authSlice.actions;

export default authSlice.reducer;
