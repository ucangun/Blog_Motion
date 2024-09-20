import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import {
  getBlogByUserIdSuccess,
  getBlogSuccess,
  getSingleBlogSuccess,
} from "../features/blogSlice";
import { RootState } from "../app/store";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

const useBlogCall = () => {
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
    } catch (error) {
      dispatch(fetchFail());
      console.error(error);
    } finally {
      getBlogData(endpoint);
    }
  };

  return { getBlogData, getSingleBlog, getBlogByUserId, addNewBlog };
};

export default useBlogCall;
