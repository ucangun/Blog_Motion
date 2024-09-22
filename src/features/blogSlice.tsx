import { createSlice } from "@reduxjs/toolkit";

interface BlogSliceInitial {
  loading: boolean;
  error: boolean;
  blogs: BlogPost[];
  categories: CategoryPost[];
  singleBlog: SinglePost | null;
  userBlogs: BlogPost[];
  currentPage: number;
  itemsPerPage: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const initialState: BlogSliceInitial = {
  loading: false,
  error: false,
  blogs: [],
  categories: [],
  singleBlog: null,
  userBlogs: [],
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
      state[payload.endpoint] = payload.data.data;
    },
    getSingleBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.singleBlog = payload.data;
    },
    getBlogByUserIdSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.userBlogs = payload.data;
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
  getBlogByUserIdSuccess,
  setPage,
  fetchFail,
} = blogSlice.actions;
export default blogSlice.reducer;
