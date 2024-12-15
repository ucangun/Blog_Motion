import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  // createUserNoteSuccess,
  deleteSuccess,
  fetchFail,
  fetchStart,
  getsingleUserSuccess,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  updateSuccess,
} from "../features/authSlice";
import { logoutBlogSuccess } from "../features/blogSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { SweetAlertIcons, SweetNotify } from "../helpers/SweetNotify";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, token } = useSelector((state: RootState) => state.auth);

  // register
  const register = async (userInfo: RegisterFormValues): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}auth/signup`, userInfo);
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
      // console.log(data);
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
      await axios.get(`${BASE_URL}auth/logout`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(logoutSuccess());
      dispatch(logoutBlogSuccess());
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

  // delete

  const deleteUser = async (id: string): Promise<void> => {
    const isConfirmed = await SweetNotify(
      "Are you sure you want to delete your account? This action cannot be undone.",
      SweetAlertIcons.WARNING
    );

    if (!isConfirmed) {
      toastError("Delete operation was canceled.");
      return;
    }

    dispatch(fetchStart());
    try {
      await axios.delete(`${BASE_URL}users/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      toastSuccess("You have successfully deleted your account!");
      dispatch(deleteSuccess());
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastError("Oops! Something went wrong during delete.");
      console.error(error);
    }
  };

  const getSingleUser = async (id: string) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}users/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(getsingleUserSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.error(error);
    }
  };

  const forgotPassword = async (
    userInfo: ForgotPasswordValues
  ): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}auth/forgotPassword`,
        userInfo
      );
      console.log(data);
      toastSuccess("Password reset link sent successfully!");
      navigate(`/auth/reset-password/${data.resetToken}`);
    } catch (error) {
      dispatch(fetchFail());
      toastError("Oops! Something went wrong.");
      console.error(error);
    }
  };

  const resetPassword = async (
    token: string,
    passwords: ResetPasswordValues
  ): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.patch(
        `${BASE_URL}auth/reset-password/${token}`,
        passwords
      );
      console.log(data);
      toastSuccess("Password reset successful!");
      navigate("/login");
    } catch (error) {
      toastError("Failed to reset password. Please try again.");
      console.error(error);
    }
  };

  const createNote = async (userNote: UserNotesType): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}notes`, userNote, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      toastSuccess("Your note has been created successfully!");
    } catch (error) {
      dispatch(fetchFail());
      toastError("Oops! Something went wrong while creating the note.");
      console.error(error);
    } finally {
      await getSingleUser(currentUser?._id || "");
    }
  };

  return {
    register,
    login,
    logout,
    updateUser,
    deleteUser,
    getSingleUser,
    forgotPassword,
    resetPassword,
    createNote,
  };
};

export default useAuthCall;
