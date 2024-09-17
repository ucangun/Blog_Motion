import { createSlice } from "@reduxjs/toolkit";

export interface BlogPost {
  _id: string;
  userId: string;
  categoryId: string;
  title: string;
  content: string;
  image: string;
  isPublish: boolean;
  comments: string[];
  likes: string[];
  countOfVisitors: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface BlogInitial {
  loading: boolean;
  error: boolean;
  blog: BlogPost[];
}

const initialState: BlogInitial = {
  loading: false,
  error: false,
  blog: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.blog = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getBlogSuccess, fetchFail } = blogSlice.actions;
export default blogSlice.reducer;
