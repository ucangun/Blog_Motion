import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Navigate, Outlet } from "react-router-dom";
import { toastError } from "../helpers/ToastNotify";

const PrivateRouter = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);

  if (!currentUser) {
    toastError("You need to log in first!");
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRouter;
