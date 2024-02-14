import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";

const Footer = () => {
  return (
    <div className="bg-purple-950 h-[70vh] p-20 pt-36 max-sm:h-[90vh]">
      <p className="text-slate-100 mb-4 text font-semibold text-2xl lg:text-center">
        {" "}
        SAY HELLO
      </p>

      <div className="flex justify-between text-lime-200 mb-20 lg:justify-evenly max-sm:flex-col">
        <div className="text-lg">
          <li className="max-sm:list-none cursor-pointer">
            <Link to="/contact">Contact Me</Link>
          </li>
          <a href="https://t.me/ad_gupta1">
            <li className="max-sm:list-none">t.me/ad_gupta</li>
          </a>
        </div>
        <div className="">
          <div className="text-lg text-lime-200">
            <li className="max-sm:list-none">
              <Link to="/myworks">My Works</Link>
            </li>
            <li className="max-sm:list-none">
              <Link to="/myself">My Self</Link>
            </li>
            <li className="max-sm:list-none">
              <a href="https://shorturl.at/biAF7">
                My Resume
              </a>
            </li>
          </div>
        </div>
      </div>

      <hr className="text-lime-200" />

      <div className="flex items-center justify-evenly max-sm:flex-col">
        <p className="text-lime-200 mt-10">
          <a href="mailto:awadheshgupta.official@gmail.com?subject=Subject%20Here&body=Body%20Here">
            awadheshgupta.official@gmail.com
          </a>
        </p>
        <div className="flex text-lime-200 flex-wrap items-center justify-center gap-4 mt-10 ">
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

export default Footer;
