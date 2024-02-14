import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({bg_color, text_color}) => {
  const [activeMenu, setActivemenu] = useState(false);

  let location = useLocation();

  // Check if we are on the home page
  const isHomePage = location.pathname === '/';
  const handleClick = () => {
    setActivemenu(!activeMenu);
  };
  return (
    <div className="fixed w-full top-0">
      <div className={`flex items-center justify-between p-5 ${!isHomePage ? "bg-slate-200" : "bg-slate-950"}`}>
        {/* title sidebar logo */}
        <h1 className={`text-3xl font-bold ${!isHomePage ? "text-blue-800" : "text-lime-500"}`}>
          <Link to='/'>ad_gupta</Link>
        </h1>
        <div onClick={handleClick}>
          <MenuIcon className={`text-3xl font-bold ${!isHomePage ? "text-blue-800" : "text-lime-500"}`}/>
          {activeMenu && <Sidebar />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
