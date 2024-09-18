import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Area */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />

        {/* Private Area */}
        <Route element={<PrivateRouter />}>
          <Route path="/blog/:id" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
