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
import NotFoundPage from "../pages/NotFoundPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import SuccessPage from "../pages/Payment/SuccessPage";
import CancelPage from "../pages/Payment/CancelPage";
import AuthFail from "../pages/Auth/AuthFail";
import AuthSuccess from "../pages/Auth/AuthSuccess";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Area */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="auth/success" element={<AuthSuccess />} />
          <Route path="auth/failure" element={<AuthFail />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/auth/verify-email" element={<VerifyEmail />} />
          <Route path="/auth/verify-email/success" element={<VerifyEmail />} />
          <Route
            path="/auth/reset-password/:token"
            element={<ResetPassword />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment-success" element={<SuccessPage />} />
          <Route path="/payment-cancel" element={<CancelPage />} />
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
