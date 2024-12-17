import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import PrivateRouter from "./PrivateRouter";
import AppLayout from "../components/AppLayout";
import NewBlog from "../pages/NewBlog";
import MyBlog from "../pages/MyBlogs";
import Account from "../pages/Account";
import About from "../pages/About";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import VerifyEmail from "../pages/VerifyEmail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Area */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/auth/verify-email" element={<VerifyEmail />} />
          <Route
            path="/auth/reset-password/:token"
            element={<ResetPassword />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Private Area */}
        <Route element={<PrivateRouter />}>
          <Route element={<AppLayout />}>
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/newblog" element={<NewBlog />} />
            <Route path="/updateblog/:id" element={<NewBlog />} />
            <Route path="/myblogs" element={<MyBlog />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
