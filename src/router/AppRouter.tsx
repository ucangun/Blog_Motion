import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
