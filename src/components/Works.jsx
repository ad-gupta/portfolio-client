import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Card1 from "./Card";

const worklist = [
  {
    icon: <VideoLibraryIcon />,
    text: "YouTube Clone",
    linkk: "https://shortsvideo.netlify.app/",
    client: "https://github.com/ad-gupta/youtube-client",
    server: "https://github.com/ad-gupta/youtube-server",
  },
  {
    icon: <FastfoodIcon />,
    text: "Food Delivery",
    linkk:
      "https://64e3680f76264a1767bc5d5f--cheerful-empanada-1e0ccf.netlify.app/",
    client: "https://github.com/ad-gupta/food-delivery-client",
    server: "https://github.com/ad-gupta/food-delivery",
  },
  {
    icon: <DashboardIcon />,
    text: "Business Dashboard",
    linkk:
      "https://businessdashboardreact.netlify.app/",
    client: "https://github.com/ad-gupta/dashboard/",
    server: "#",
  },
];

const Works = () => {
  const [activeMenu, setActivemenu] = useState(false);

  const handleClick = () => {
    setActivemenu(!activeMenu);
  };
  return (
    <div className="bg-slate-200 h-screen max-md:h-[140vh] max-sm:h-[190vh] mt-[4.6rem]">

      <div className="justify-center">
        <div className="text-center">
          <h1 className="font-bold text-4xl text-slate-500">/work.</h1>
          <p className="font-semibold mt-3 text-slate-700">
            {" "}
            Select work I've taken on in the past
          </p>
        </div>

      
        <div className="flex justify-center h-[120vh] flex-wrap gap-8">
          {worklist.map((items, ind) => {
            return (
              <Card1
                key={ind}
                icon={items.icon}
                text={items.text}
                linkk={items.linkk}
                client={items.client}
                server={items.server}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
