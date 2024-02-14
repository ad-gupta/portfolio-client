import React from "react";
import Page1 from "./components/Page1";
import { Route, Routes } from "react-router-dom";
import Works from "./components/Works";
import YouTube from "./Pages/YouTube";
import Food from "./Pages/Food";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import DashBoard from "./Pages/Dashboard";
import Myself from "./Pages/Myself";

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/">
          <Route index element={<Page1 />} />
          <Route path="contact" element={<Contact />} />
          <Route path="myself" element={<Myself />} />
          <Route path="myworks">
            <Route index element={<Works />} />
            <Route path="YouTube" element={<YouTube />} />
            <Route path="Food" element={<Food />} />
            <Route path="Business" element={<DashBoard />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
