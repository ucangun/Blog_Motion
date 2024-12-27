import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getNewsSuccess } from "../features/utilsSlice";

const useUtilsCall = () => {
  const dispatch = useDispatch();

  const getNewsData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "https://api.worldnewsapi.com/top-news?source-country=en&language=en",
        {
          headers: {
            "x-api-key": "3e0163d8d34a4c48b373e3b54660fc21",
          },
        }
      );
      console.log(data.top_news[0].news);
      dispatch(getNewsSuccess(data.top_news[0].news));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return {
    getNewsData,
  };
};

export default useUtilsCall;
