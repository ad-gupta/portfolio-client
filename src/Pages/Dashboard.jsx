import React from "react";

const DashBoard = () => {
  return (
    <div className="h-[180vh] p-10">
      <div className="m-10">
        <h1 className="text-3xl text-blue-800 text-center font-bold">
          Business Dashboard
        </h1>
        <p className="text-slate-500 font-semibold text-center mt-5 text-lg">
          Crafted a fully responsive Business Dashboard, equipped with
          comprehensive features encompassing employee, customer, and order
          insights. Augmented with a dynamic calendar, intuitive editor, and
          diverse graphical representations, empowering data-driven decisions.
        </p>

        <div className="flex-col items-center justify-center w-full">
          <div className="h-auto lg:w-[50vw] my-5 flex items-center justify-center">
            <video
              src="/dashboard.mp4"
              className="rounded ml-[30vw] max-lg:ml-0"
              controls
            />
          </div>

          <ul className="flex-col justify-center">
            <h1 className="text-blue-800 text-xl font-bold my-5 underline">
              Stack Used:
            </h1>
            <li className="">
              <span className="text-slate-500 font-semibold">React JS :</span>
              <span>
                Utilized for building the user interface and enhancing user
                experience through interactive components.
              </span>
            </li>

            <li className="">
              <span className="text-slate-500 font-semibold">
                Syncfusion Package :{" "}
              </span>
              <apan>
                For all types of graphical representation of data, calendar,
                tables, and many more
              </apan>
            </li>

            <div className="business-dashboard">
              <span className="text-slate-500 font-semibold">Comprehensive Information Management : </span>
              <p>
                The dashboard consolidates critical business data, including
                employee details, customer profiles, and order information,
                offering a centralized platform for efficient management.
              </p>

              <span className="text-slate-500 font-semibold">Responsive Design : </span>
              <p>
                Its responsive nature ensures seamless access and usability
                across various devices, enabling users to interact with the
                dashboard anytime, anywhere, fostering enhanced productivity and
                flexibility.
              </p>

              <span className="text-slate-500 font-semibold">Integrated Calendar Functionality : </span>
              <p>
                Incorporating a calendar feature facilitates scheduling and
                organizing tasks, meetings, and events, streamlining workflow
                management and improving coordination among team members.
              </p>

              <span className="text-slate-500 font-semibold">Versatile Editor Tool : </span>
              <p>
                The inclusion of an editor empowers users to create, edit, and
                collaborate on documents and content directly within the
                dashboard environment, facilitating efficient communication and
                content development processes.
              </p>

              <span className="text-slate-500 font-semibold">Graphical Data Representation : </span>
              <p>
                Through a variety of graph types, the dashboard visually
                presents data insights, enabling users to analyze trends,
                patterns, and performance metrics effectively, aiding informed
                decision-making and strategic planning efforts.
              </p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
