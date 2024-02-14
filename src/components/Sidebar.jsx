import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white h-96 w-64 rounded absolute top-10 right-5">
      <div className="p-5">
        <CloseIcon className="float-right text-lime-600" />
      </div>

      <div className="p-5">
        <ul className="text-xl text-black">
          <li className="pl-7 justify-center font-semibold hover:bg-slate-200 rounded p-1">
            <Link to="/myworks">My Works</Link>
          </li>
          <li className="pl-7 justify-center font-semibold hover:bg-slate-200 rounded p-1">
            <Link to="/myself">My Self</Link>
          </li>
          <a
            href="https://shorturl.at/biAF7"
            className="pl-7 justify-center font-semibold hover:bg-slate-200 rounded p-1"
          >
            My Resume
          </a>
        </ul>
        <div className="pl-7 mt-10">
          <h1 className="font-bold text-slate-300 text-2xl">SAY HELLO</h1>
          <a
            href="https://t.me/ad_gupta1"
            className="text-xl p-1 font-semibold hover:bg-slate-200 rounded"
          >
            t.me/ad_gupta
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 ">
          <a href="https://www.linkedin.com/in/awadheshguptaofficial/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/ad-gupta">
            <GitHubIcon />{" "}
          </a>
          <a href="https://leetcode.com/ad_gupta/">
            <Filter1Icon />
          </a>
          <a href="https://codeforces.com/profile/ad_gupta">
            <Filter2Icon />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
