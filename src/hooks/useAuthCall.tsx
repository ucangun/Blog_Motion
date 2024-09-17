import { useDispatch, useSelector } from "react-redux";
import { RegisterFormValues } from "../pages/Register";
import axios from "axios";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { LoginFormValues } from "../pages/Login";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { toastError, toastSuccess } from "../helpers/ToastNotify";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state: RootState) => state.auth);

  // register
  const register = async (userInfo: RegisterFormValues): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users`, userInfo);
      dispatch(registerSuccess(data));
      navigate("/login");
      toastSuccess("You have successfully registered!");
    } catch (error) {
      dispatch(fetchFail());
      console.error(error);
      toastError("Oops! Something went wrong during registration.");
    }
  };

  // login
  const login = async (userInfo: LoginFormValues): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}auth/login`, userInfo);
      console.log(data);
      dispatch(loginSuccess(data));
      toastSuccess("You have successfully logged in!");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastError("Oops! Something went wrong during login.");
      console.error(error);
    }
  };

  // logout
  const logout = async (): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axios(`${BASE_URL}auth/logout`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(logoutSuccess());
      toastSuccess("You have successfully logged out!");
      navigate("/login");
    } catch (error) {
      dispatch(fetchFail());
      toastError("Oops! Something went wrong during logout.");
      console.error(error);
    }
  };

  return { register, login, logout };
};

export default useAuthCall;
