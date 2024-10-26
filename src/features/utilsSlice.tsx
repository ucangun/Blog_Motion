import { createSlice } from "@reduxjs/toolkit";

interface UtilsInitial {
  loading: boolean;
  error: boolean;
  data: NewsArticle | null;
}

const initialState: UtilsInitial = {
  loading: false,
  error: false,
  data: null,
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getNewsSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.data = payload.articles;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getNewsSuccess, fetchFail } = utilsSlice.actions;

export default utilsSlice.reducer;
