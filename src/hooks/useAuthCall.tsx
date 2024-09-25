import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  CurrentUserType,
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  updateSuccess,
} from "../features/authSlice";
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
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastError("Oops! Something went wrong during logout.");
      console.error(error);
    }
  };

  // update

  const updateUser = async (userData: CurrentUserType): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.put(
        `${BASE_URL}users/${userData._id}`,
        userData,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      toastSuccess("You have successfully updated your profile!");
      dispatch(updateSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      toastError("Oops! Something went wrong during update.");
      console.error(error);
    }
  };

  const deleteUser = async (id: string): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axios.delete(`${BASE_URL}users/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
    } catch (error) {
      dispatch(fetchFail());
      toastError("Oops! Something went wrong during delete.");
      console.error(error);
    }
  };

  return { register, login, logout, updateUser, deleteUser };
};

export default useAuthCall;
