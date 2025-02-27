import React from "react";
import { Link } from "react-router-dom";
//import logoImage from "../assets/images/logo.png";

const Logo: React.FC = () => {
  return (
    <Link to="/">
      {/* <img src={logoImage} alt="logo" className={`object-cover w-32 h-20 `} /> */}
      <h2 className="text-[#44E57F]">Blog Motion</h2>
    </Link>
  );
};

export default Logo;
