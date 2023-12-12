import React from "react";
import Cards from "../Cards";

const Home = ({entryIdSelectedCountry, setEntryIdSelectedCountry}) => {
  return (
    <div /* className={isMenuOpen ? "menu-open" : ""} */>
      <section>
        <h1 className="cities-wrapper">COUNTRIES</h1>
        <Cards setEntryIdSelectedCountry={setEntryIdSelectedCountry}/>
      </section>
    </div>
  );
};

export default Home;
