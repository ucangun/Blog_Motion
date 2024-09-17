import { useDispatch } from "react-redux";
import { RegisterFormValues } from "../pages/Register";
import axios from "axios";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";
import { LoginFormValues } from "../pages/Login";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

const useAuthCall = () => {
  const dispatch = useDispatch();

  // register
  const register = async (userInfo: RegisterFormValues): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users`, userInfo);
      console.log(data);
      dispatch(registerSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.error(error);
    }
  };

  // login
  const login = async (userInfo: LoginFormValues): Promise<void> => {
    try {
      dispatch(fetchStart());
      const { data } = await axios.post(`${BASE_URL}auth/login`, userInfo);
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.error(error);
    }
  };

  return { register, login };
};

export default useAuthCall;
