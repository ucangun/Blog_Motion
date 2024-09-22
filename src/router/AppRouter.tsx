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

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Area */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>

        {/* Private Area */}
        <Route element={<PrivateRouter />}>
          <Route element={<AppLayout />}>
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/newblog" element={<NewBlog />} />
            <Route path="/newblog/:id" element={<NewBlog />} />
            <Route path="/myblogs" element={<MyBlog />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
