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

interface BlogSliceInitial {
  loading: boolean;
  error: boolean;
  blogs: BlogPost[];
  singleBlog: BlogPost | null;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: BlogSliceInitial = {
  loading: false,
  error: false,
  blogs: [],
  singleBlog: null,
  currentPage: 1,
  itemsPerPage: 5,
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
      state.blogs = payload;
    },
    getSingleBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.singleBlog = payload.data;
    },
    setPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getBlogSuccess,
  getSingleBlogSuccess,
  setPage,
  fetchFail,
} = blogSlice.actions;
export default blogSlice.reducer;
