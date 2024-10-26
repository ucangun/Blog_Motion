import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getNewsSuccess } from "../features/utilsSlice";

const useUtilsCall = () => {
  const dispatch = useDispatch();

  const getNewsData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=d31de719ac32404cbfe8f8c02becb38b"
      );
      dispatch(getNewsSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.error(error);
    }
  };

  return {
    getNewsData,
  };
};

export default useUtilsCall;
