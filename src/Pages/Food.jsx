import React from "react";

const Food = () => {
  return (
    <div className="p-5 pt-10">
      <div className="m-10">
        <h1 className="text-3xl text-blue-800 text-center font-bold">
          Food Delivery Redirecting App
        </h1>
        <p className="text-slate-500 font-semibold text-center mt-5 text-lg">
        This web application is designed to provide users with a curated list of popular food items
         categorized into various meal types such as breakfast, lunch, 
         dinner, fast-food, pizza, etc. Users can browse through 
         the list of items and select their preferred choices. 
         Upon selection, the application seamlessly redirects users
          to food delivery websites like Zomato and Swiggy for 
          convenient ordering.
        </p>

        <div className="flex-col items-center justify-center w-full">
          <div className="h-auto lg:w-[50vw] my-5 flex items-center justify-center">
            <video src="/foodDelivery.mp4" className="rounded ml-[30vw] max-lg:ml-0" controls />
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
              <span className="text-slate-500 font-semibold">Node JS :</span>
              <apan>
                Employed for developing various APIs to handle server-side logic
                and facilitate communication between the client and the
                database.
              </apan>
            </li>

            <li className="">
              <span className="text-slate-500 font-semibold">MongoDB :</span>
              <span>
                Serves as the primary database to store and manage application
                data efficiently.
              </span>
            </li>

            <li className="">
              <span className="text-slate-500 font-semibold">Redux :</span>
              <span>
                {" "}
                Implemented for state management to maintain consistency and
                manage application state across components.
              </span>
            </li>

            <ul className="">
              <h1 className="text-slate-500 font-semibold">Authentication :</h1>
              <li className="">
                <span className="text-slate-500 font-semibold">
                  Sign-in with Username and Google:
                </span>
                <span>
                  Users can authenticate using their usernames or Google
                  accounts, enhancing flexibility and user convenience.
                </span>
              </li>

              <li className="">
                <h1 className="text-slate-500 font-semibold">
                  Security Features :
                </h1>
                <li className="">
                  <span className="text-slate-500 font-semibold">
                    Cookie Storage :
                  </span>
                  <span>
                    Utilized for storing session information securely on the
                    client-side.
                  </span>
                </li>
                <li className="">
                  <span className="text-slate-500 font-semibold">
                    JWT-Token :
                  </span>
                  <span>
                    Employed for authentication and authorization, ensuring
                    secure communication between the client and server.
                  </span>
                </li>
                <li className="">
                  <span className="text-slate-500 font-semibold">
                    bcrypt Encoding:{" "}
                  </span>
                  <span>
                    Utilized for securely encoding sensitive user information,
                    enhancing data security.
                  </span>
                </li>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Food;
