import React from "react";
import "./Main.css";
import Cards from "../components/Cards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../Contact/Contact";

const Main = ({ isMenuOpen, className }) => {
  return (
    <div className={className}>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Main;
