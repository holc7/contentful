import React from "react";
import Cards from "../Cards";
import Dropdown from "react-bootstrap/Dropdown";

const Home = ({ entryIdSelectedCountry, setEntryIdSelectedCountry }) => {
  return (
    <div /* className={isMenuOpen ? "menu-open" : ""} */>
      <section>
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="cities-wrapper">COUNTRIES</h1>
          <Dropdown className="mt-4 drop-down-button">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter by continent
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Europe</Dropdown.Item>
              <Dropdown.Item href="#/action-2">South America</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Africa</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Cards setEntryIdSelectedCountry={setEntryIdSelectedCountry} />
      </section>
    </div>
  );
};

export default Home;
