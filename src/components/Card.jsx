import React from "react";
import { Link } from "react-router-dom";

const Card1 = ({ icon, text, linkk, client, server }) => {
  return (
    <div className="h-64 w-72 bg-slate-100 rounded max-sm:mb-20 mt-10">
      <Link to={`/myworks/${text.split(" ")[0]}`}>
        <div className="p-16 text-slate-800">
          <div className="flex justify-center gap-5 font-bold">
            <p className="text-5xl">{icon}</p>
            <p className="text-2xl">{text}</p>
          </div>
        </div>
      </Link>
      <div className="bg-white p-6">
        <h1 className="font-bold text-2xl">
          <Link to={`/myworks/${text.split(" ")[0]}`}>{text}</Link>
        </h1>
        <div className="flex items-center justify-between mt-3">
          <div className="">
            <p className="text-lg font-semibold text-blue-500">
              <a href={client}>frontend code</a>
            </p>
            <p className="text-lg font-semibold text-blue-500">
              <a href={server}>backend code</a>
            </p>
          </div>
          <button className="bg-blue-200 p-1 rounded px-3 font-semibold">
            <a href={linkk}>live </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
