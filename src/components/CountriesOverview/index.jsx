import React from 'react'
import Cards from "../Cards";

const Countries = () => {
  return (
    <div /* className={isMenuOpen ? "menu-open" : ""} */>
    <section>
      <p>Countries Component</p>
      <h1 className="cities-wrapper">COUNTRIES</h1>
      <Cards />
    </section>
  </div>
  )
}

export default Countries