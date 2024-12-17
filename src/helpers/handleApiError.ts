import axios from "axios";
import { toastError } from "./ToastNotify";

/**
 * Handles API errors and displays a toast notification with the error message.
 *
 * @param error - The error object received from the API call.
 * @param fallbackMessage - A default message to display if the error does not contain a specific message.
 */

export const handleApiError = (
  error: unknown,
  fallbackMessage: string = "An error occurred"
): void => {
  if (axios.isAxiosError(error) && error.response) {
    const errorMessage = error.response.data.message || fallbackMessage;
    toastError(errorMessage);
  } else {
    toastError(fallbackMessage);
  }
};
