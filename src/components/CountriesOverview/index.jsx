import React from 'react'
import Cards from "../Cards";

const Countries = ({entryIdSelectedCountry, setEntryIdSelectedCountry}) => {
  return (
    <div /* className={isMenuOpen ? "menu-open" : ""} */>
    <section>
      <p>Countries Component</p>
      <h1 className="cities-wrapper">COUNTRIES</h1>
      <Cards setEntryIdSelectedCountry={setEntryIdSelectedCountry}/>
    </section>
  </div>
  )
}

export default Countries