import React from "react";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import ApiData from "./ApiData";
import { Route, Routes } from "react-router-dom";
import Services from "./Services";

export default function PageIndex(){
  return (
    <Routes>
    <Route path="/blog" element={<Blog />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
    <Route path="/apidata" element={<ApiData />} />
  </Routes>
  );
}