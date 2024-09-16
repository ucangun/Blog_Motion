import { RegisterFormValues } from "../pages/Register";
import axios from "axios";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

const useAuthCall = () => {
  // register
  const register = async (userInfo: RegisterFormValues): Promise<void> => {
    try {
      const { data } = await axios.post(`${BASE_URL}users`, userInfo);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return { register };
};

export default useAuthCall;
