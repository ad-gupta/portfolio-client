import React from "react";
import Page2 from "../Pages/Page2";

const Page1 = () => {

  return (
    <div className="mt-[4.6rem]">
      <div className="bg-[url('/bg6.webp')] h-screen bg-cover w-auto bg-center justify-evenly max-sm:h-[150vh]">
  
        <div className="flex items-center justify-evenly max-sm:flex-col">
          <div className="m-20">
            <div className="">
              <span className="text-6xl text-lime-400 font-bold max-sm:text-5xl">
                Full Stack <br />
                Developer
              </span>
              <span className="text-5xl text-white font-bold">.</span>
            </div>
            <div className="text-white mt-5">
              I like to craft solid and scalable projects
              <br /> with great user experiences
            </div>

            <div className="text-lime-100 mt-32 flex items-center gap-10 max-sm:flex-col max-sm:mt-10">
              <div className="">
                Highly Skilled at progressive <br />
                enhancement, design systems & <br />
                UI Engineering.
              </div>
              <div className="">
                Highly Skilled at progressive <br />
                enhancement, design systems & <br />
                UI Engineering.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="item-center">
              <div className="border-solid bg-lime-200 h-[20rem] w-[15rem] ">
                <div className="border-solid bg-slate-900 h-[19.5rem] w-[14.5rem]">
                  <img
                    src="./mypic.jpg"
                    alt=""
                    className="h-auto w-[14rem] pb-10 max-w-96"
                  />
                  <h1 className="text-white font-semibold text-xl ml-10">
                    Awadhesh Gupta
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Page2 />
    </div>
  );
};

export default Page1;
