import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import {
  getBlogByUserIdSuccess,
  getBlogSuccess,
  getSingleBlogSuccess,
} from "../features/blogSlice";
import { RootState } from "../app/store";
import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

const useBlogCall = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const getBlogData = async (endpoint: string): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}${endpoint}`);
      dispatch(getBlogSuccess({ endpoint, data }));
    } catch (error) {
      dispatch(fetchFail());
      console.error(error);
    }
  };

  const getSingleBlog = async (id: string): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}blogs/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(getSingleBlogSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.error(error);
    }
  };

  const getBlogByUserId = async (userId: string): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}blogs/?author=${userId}`);
      dispatch(getBlogByUserIdSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.error(error);
    }
  };

  const addNewBlog = async (
    endpoint: string,
    blogInfo: NewBlogFormValues
  ): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}blogs`, blogInfo, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      toastSuccess("New blog has been successfully added");
    } catch (error) {
      toastError("Failed to add the new blog");
      dispatch(fetchFail());
      console.error(error);
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
      await axios.put(`${BASE_URL}blogs/${id}`, blogInfo, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      toastSuccess("Blog has successfully updated");
      navigate(-1);
    } catch (error) {
      toastError("Failed to update the blog");
      console.error(error);
      dispatch(fetchFail());
    } finally {
      getBlogData("blogs");
    }
  };

  const deleteBlog = async (id: string): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axios.delete(`${BASE_URL}blogs/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      toastSuccess("Blog has successfully deleted");
      navigate(-1);
    } catch (error) {
      toastError("Failed to delete the blog");
      dispatch(fetchFail());
      console.error(error);
    } finally {
      getBlogData("blogs");
    }
  };

  const getLikeInfo = async (id: string): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axios(`${BASE_URL}blogs/${id}/getLike`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
      dispatch(fetchFail());
    }
  };

  const addRemoveLike = async (id: string): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}blogs/${id}/postLike`, null, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
      dispatch(fetchFail());
    } finally {
      getBlogData("blogs");
      getSingleBlog(id);
    }
  };

  return {
    getBlogData,
    getSingleBlog,
    getBlogByUserId,
    addNewBlog,
    updateBlog,
    deleteBlog,
    getLikeInfo,
    addRemoveLike,
  };
};

export default useBlogCall;
