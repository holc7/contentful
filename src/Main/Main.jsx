import React from "react";
import "./Main.css";
import Cards from "../components/Cards";
import { Route, Routes } from 'react-router-dom';
import About from "../components/About"
import Home from "../components/Home"
import Contact from "../components/Contact"
import CountriesOverview from "../components/CountriesOverview"
import CitiesOverview from "../components/CitiesOverview"
import CountryDetails from "../components/CountryDetails"

const Main = ({ isMenuOpen }) => {
  return (
    <div /* className={isMenuOpen ? "menu-open" : ""} */>
      <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/countries" element={<CountriesOverview />} />
        <Route path="/countries/:travelfieldscountrytitle" element={<CountryDetails />} />
        <Route path="/cities" element={<CitiesOverview />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
        {/* <h1 className="cities-wrapper">COUNTRIES</h1>
        <Cards /> */}
      </section>
    </div>
  );
};

export default Main;
