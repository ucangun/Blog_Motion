import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getNewsSuccess } from "../features/utilsSlice";

const useUtilsCall = () => {
  const dispatch = useDispatch();

  const getNewsData = async () => {
    dispatch(fetchStart());

    // Current date in the format YYYY-MM-DD
    const today = new Date().toISOString().split("T")[0];

    try {
      const { data } = await axios.get(
        `https://api.worldnewsapi.com/search-news?earliest-publish-date=${today}&language=en`,
        {
          headers: {
            "x-api-key": "3e0163d8d34a4c48b373e3b54660fc21",
          },
        }
      );
      dispatch(getNewsSuccess({ data: data?.news }));
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
