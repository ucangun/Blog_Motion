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
      console.log(data);
      dispatch(registerSuccess(data));
      navigate("/login");
    } catch (error) {
      dispatch(fetchFail());
      console.error(error);
    }
  };

  // login
  const login = async (userInfo: LoginFormValues): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}auth/login`, userInfo);
      console.log(data);
      dispatch(loginSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
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
      navigate("/login");
    } catch (error) {
      dispatch(fetchFail());
      console.error(error);
    }
  };

  return { register, login, logout };
};

export default useAuthCall;
