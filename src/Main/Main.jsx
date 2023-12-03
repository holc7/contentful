import React from "react";
import "./Main.css";
import Cards from "../components/Cards";

const Main = ({ isMenuOpen }) => {
  return (
    <div className={isMenuOpen ? "menu-open" : ""}>
      <section>
        <h1 className="cities-wrapper">COUNTRIES</h1>
        <Cards />
      </section>
    </div>
  );
};

export default Main;
