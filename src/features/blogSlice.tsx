import { createSlice } from "@reduxjs/toolkit";

interface BlogSliceInitial {
  loading: boolean;
  error: boolean;
  blogs: BlogPost[];
  pagBlogs: BlogPost[];
  categories: CategoryPost[];
  singleBlog: SinglePost | null;
  userBlogs: BlogPost[];
  filteredBlogs: BlogPost[];
  singleCategory: SingleCategoryType | null;
  currentPage: number;
  itemsPerPage: number;
  [key: string]: any;
}

const initialState: BlogSliceInitial = {
  loading: false,
  error: false,
  blogs: [],
  pagBlogs: [],
  categories: [],
  singleBlog: null,
  singleCategory: null,
  userBlogs: [],
  filteredBlogs: [],
  currentPage: 1,
  itemsPerPage: 10,
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
    getPagBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.pagBlogs = payload.data.data;
    },
    getSingleBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.singleBlog = payload.data;
    },
    getBlogByUserIdSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state[payload.endpoint] = payload.data.data;
    },
    getFilteredBlogsSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state[payload.endpoint] = payload.data.data;
    },
    setPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    logoutBlogSuccess: (state) => {
      state.loading = false;
      state.userBlogs = [];
    },
    getSingleCategorySuccess: (state, { payload }) => {
      state.loading = false;
      state.singleCategory = payload.data;
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
  getPagBlogSuccess,
  getSingleBlogSuccess,
  getBlogByUserIdSuccess,
  getSingleCategorySuccess,
  getFilteredBlogsSuccess,
  logoutBlogSuccess,
  setPage,
  fetchFail,
} = blogSlice.actions;
export default blogSlice.reducer;
