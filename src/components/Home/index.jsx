import React from "react";
import { useState } from "react";

import Cards from "../Cards";
import Dropdown from "react-bootstrap/Dropdown";

const Home = ({ entryIdSelectedCountry, setEntryIdSelectedCountry }) => {
  const [selectedContinent, setSelectedContinent] = useState("All");
  return (
    <div /* className={isMenuOpen ? "menu-open" : ""} */>
      <section>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          <h1 className="cities-wrapper">COUNTRIES</h1>
          <Dropdown className="mt-4">
            <Dropdown.Toggle className="drop-down-button" id="dropdown-basic">
              Filter by continent
            </Dropdown.Toggle>

            <Dropdown.Menu className="drop-down-button">
              <Dropdown.Item onClick={() => setSelectedContinent("europeCont")}>
                Europe
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setSelectedContinent("southAmericaCont")}
              >
                South America
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedContinent("africaCont")}>
                Africa
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedContinent("asiaCont")}>
                Asia
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedContinent("All")}>
                Reset
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Cards
          setEntryIdSelectedCountry={setEntryIdSelectedCountry}
          selectedContinent={selectedContinent}
        />
      </section>
    </div>
  );
};

export default Home;
