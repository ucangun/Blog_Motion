import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
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
import { handleApiError } from "../helpers/handleApiError";
import useAxios from "./useAxios";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

const useAuthCall = () => {
  const dispatch = useDispatch();
  const axiosWithToken = useAxios();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: RootState) => state.auth);

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
      handleApiError(error, "Oops! Something went wrong during registration.");
    }
  };

  // login
  const login = async (userInfo: LoginFormValues): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}auth/login`, userInfo);
      dispatch(loginSuccess(data));
      toastSuccess("You have successfully logged in!");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Oops! Something went wrong during login.");
    }
  };

  // logout
  const logout = async (): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.get(`${BASE_URL}auth/logout`);
      dispatch(logoutSuccess());
      dispatch(logoutBlogSuccess());
      toastSuccess("You have successfully logged out!");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Oops! Something went wrong during logout.");
    }
  };

  // update
  const updateUser = async (userData: CurrentUserType): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.put(
        `${BASE_URL}users/${userData._id}`,
        userData
      );
      toastSuccess("You have successfully updated your profile!");
      dispatch(updateSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Oops! Something went wrong during update.");
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
      await axiosWithToken.delete(`${BASE_URL}users/${id}`);
      toastSuccess("You have successfully deleted your account!");
      dispatch(deleteSuccess());
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Oops! Something went wrong during delete.");
    }
  };

  const getSingleUser = async (id: string) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${BASE_URL}users/${id}`);
      dispatch(getsingleUserSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Failed to fetch user data");
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
      handleApiError(
        error,
        "Oops! Something went wrong during password reset request."
      );
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
      handleApiError(error, "Failed to reset password. Please try again.");
    }
  };

  const createNote = async (userNote: UserNotesType): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${BASE_URL}notes`, userNote);
      toastSuccess("Your note has been created successfully!");
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(
        error,
        "Oops! Something went wrong while creating the note."
      );
    } finally {
      await getSingleUser(currentUser?._id || "");
    }
  };

  const deleteNote = async (noteId: string) => {
    dispatch(fetchStart());
    try {
      await axios.delete(`${BASE_URL}notes/${noteId}`);
      console.log("Note deleted successfully");
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Error deleting note");
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
    deleteNote,
  };
};

export default useAuthCall;
