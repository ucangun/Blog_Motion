import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import { getBlogSuccess } from "../features/blogSlice";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

const useBlogCall = () => {
  const dispatch = useDispatch();

  const getBlogs = async (): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}blogs`);
      console.log(data);
      dispatch(getBlogSuccess(data.data));
    } catch (error) {
      dispatch(fetchFail());
      console.error(error);
    }
  };

  return { getBlogs };
};

export default useBlogCall;
