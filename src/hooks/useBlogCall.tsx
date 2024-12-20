import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getFilteredBlogsSuccess,
  getBlogByUserIdSuccess,
  getBlogSuccess,
  getPagBlogSuccess,
  getSingleBlogSuccess,
  getSingleCategorySuccess,
  getNewBlogsSuccess,
  getPopularBlogsSuccess,
} from "../features/blogSlice";
import { toastSuccess } from "../helpers/ToastNotify";
import { handleApiError } from "../helpers/handleApiError";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

const useBlogCall = () => {
  const navigate = useNavigate();
  const axiosWithToken = useAxios();
  const dispatch = useDispatch();

  const getBlogData = async (
    endpoint: string,
    query?: string
  ): Promise<void> => {
    dispatch(fetchStart());
    try {
      const url = query
        ? `${BASE_URL}${endpoint}?${query}`
        : `${BASE_URL}${endpoint}`;

      const { data } = await axios(url);

      if (query?.includes("author=")) {
        dispatch(getBlogByUserIdSuccess({ endpoint: "userBlogs", data }));
      } else if (query?.includes("category=")) {
        dispatch(getFilteredBlogsSuccess({ endpoint: "filteredBlogs", data }));
      } else if (query?.includes("sort[createdAt]")) {
        dispatch(getNewBlogsSuccess({ endpoint: "newBlogs", data }));
      } else if (query?.includes("sort[countOfVisitors]")) {
        dispatch(getPopularBlogsSuccess({ endpoint: "popularBlogs", data }));
      } else {
        dispatch(getBlogSuccess({ endpoint, data }));
      }
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Failed to fetch blog data");
    }
  };

  const getBlogsByPage = async (limit: number, page: number) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${BASE_URL}blogs/?limit=${limit}&page=${page}`
      );
      dispatch(getPagBlogSuccess({ endpoint: "/blogs", data }));
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Failed to fetch blogs by page");
    }
  };

  const getSingleBlog = async (id: string): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`blogs/${id}`);
      dispatch(getSingleBlogSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Failed to fetch the blog");
    }
  };

  const getBlogByUserId = async (userId: string): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`blogs/?author=${userId}`);
      dispatch(getBlogByUserIdSuccess({ endpoint: "userBlogs", data }));
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Failed to fetch blogs by user ID");
    }
  };

  const addNewBlog = async (
    endpoint: string,
    blogInfo: NewBlogFormValues
  ): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`blogs`, blogInfo);
      toastSuccess("New blog has been successfully added");
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Failed to add the new blog");
    } finally {
      getBlogData(endpoint);
    }
  };

  const updateBlog = async (
    id: string,
    blogInfo: NewBlogFormValues
  ): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${BASE_URL}blogs/${id}`, blogInfo);
      toastSuccess("Blog has successfully updated");
      navigate(-1);
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Failed to update the blog");
    } finally {
      getBlogData("blogs");
    }
  };

  const deleteBlog = async (id: string): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`blogs/${id}`);
      toastSuccess("Blog has successfully deleted");
      navigate(-1);
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Failed to delete the blog");
    } finally {
      getBlogData("blogs");
    }
  };

  const getLikeInfo = async (id: string): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axiosWithToken(`${BASE_URL}blogs/${id}/getLike`);
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Failed to fetch like info");
    }
  };

  const addRemoveLike = async (id: string): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${BASE_URL}blogs/${id}/postLike`, null);
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Failed to like/unlike the blog");
    } finally {
      getSingleBlog(id);
    }
  };

  const createComment = async (commentInfo: NewCommentType) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${BASE_URL}comments`, commentInfo);
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Failed to create comment");
    } finally {
      getSingleBlog(commentInfo?.blogId);
    }
  };

  const getSingleCategory = async (id: string) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${BASE_URL}categories/${id}`);
      dispatch(getSingleCategorySuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Failed to fetch the category");
    }
  };

  return {
    getBlogData,
    getBlogsByPage,
    getSingleBlog,
    getBlogByUserId,
    addNewBlog,
    updateBlog,
    deleteBlog,
    getLikeInfo,
    addRemoveLike,
    createComment,
    getSingleCategory,
  };
};

export default useBlogCall;
