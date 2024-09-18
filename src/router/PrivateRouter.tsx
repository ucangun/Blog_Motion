import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Navigate, Outlet } from "react-router-dom";
import { toastError } from "../helpers/ToastNotify";
import { useEffect } from "react";

/*
  This component protects private routes by checking if the user is authenticated.
  If not, it shows a toast notification and redirects the user to the login page.
  The useEffect ensures the toast is triggered outside of the render process.
*/

const PrivateRouter = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!currentUser) {
      toastError("You need to log in first!");
    }
  }, [currentUser]);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRouter;
