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
      navigate("/auth/verify-email");
      toastSuccess(
        "Registration successful! Please check your email to verify your account."
      );
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

  const signInWithGoogle = async () => {
    window.open(`${BASE_URL}auth/google`, "_self");
  };

  // logout
  const logout = async (): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.get(`auth/logout`);
      dispatch(logoutSuccess());
      dispatch(logoutBlogSuccess());
      toastSuccess("You have successfully logged out!");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Oops! Something went wrong during logout.");
    }
  };

  // read
  const getSingleUser = async (id: string) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`users/${id}`);
      dispatch(getsingleUserSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Failed to fetch user data");
    }
  };

  // update
  const updateUser = async (userData: CurrentUserType): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.put(
        `users/${userData._id}`,
        userData
      );
      toastSuccess("You have successfully updated your profile!");
      dispatch(updateSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Oops! Something went wrong during update.");
    }
  };

  // delete for Admin
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
      await axiosWithToken.delete(`users/${id}`);
      toastSuccess("You have successfully deleted your account!");
      dispatch(deleteSuccess());
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Oops! Something went wrong during delete.");
    }
  };

  // deleteMe
  const deleteMe = async (): Promise<void> => {
    const isConfirmed = await SweetNotify(
      "Are you sure you want to deactivate your account? This action can be reverted by contacting support.",
      SweetAlertIcons.WARNING
    );

    if (!isConfirmed) {
      toastError("Deactivation operation was canceled.");
      return;
    }

    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`users/deleteMe`);
      toastSuccess("You have successfully deleted your account!");
      dispatch(deleteSuccess());
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(error, "Oops! Something went wrong during delete.");
    }
  };

  // updateMe
  const updateMe = async (userData: CurrentUserType): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.patch(`users/updateMe`, userData);
      toastSuccess("Your account details have been updated successfully!");
      dispatch(updateSuccess(userData));
      getSingleUser(userData?._id || "");
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(
        error,
        "An error occurred while updating your account. Please check your inputs and try again."
      );
    }
  };

  // forgot password
  const forgotPassword = async (
    userInfo: ForgotPasswordValues
  ): Promise<void> => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}auth/forgotPassword`,
        userInfo
      );
      toastSuccess("Password reset link sent successfully!");
      navigate(`/auth/reset-password/${data.jwtResetToken}`);
    } catch (error) {
      dispatch(fetchFail());
      handleApiError(
        error,
        "Oops! Something went wrong during password reset request."
      );
    }
  };

  // reset password
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

  // createNote
  const createNote = async (userNote: UserNotesType): Promise<void> => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`notes`, userNote);
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

  // deleteNote
  const deleteNote = async (noteId: string) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`notes/${noteId}`);
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
    signInWithGoogle,
    logout,
    getSingleUser,
    updateUser,
    deleteUser,
    deleteMe,
    updateMe,
    forgotPassword,
    resetPassword,
    createNote,
    deleteNote,
  };
};

export default useAuthCall;
