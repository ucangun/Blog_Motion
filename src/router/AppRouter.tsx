import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Blogs from "../pages/Blogs";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
