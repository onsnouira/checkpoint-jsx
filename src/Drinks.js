import React from 'react'
import "./App.css";

const Drinks = () => {
  return (
    <div className='header'>
      <br/><br/><br/><br/><br/><br/>
    <div className="menu">   
    <div className="menuIntro">     
      {/* img tile system */}
      <img src="https://i.ibb.co/QCxY7FT/michael-discenza-Mxfcoxyc-H-Y-unsplash.jpg" alt='#'/>
      <img src="https://i.ibb.co/cNrYC6S/izabela-rutkowski-Nme6-Tb-Wu-Vp-A-unsplash.jpg" alt='#'/>
    </div>
    {/* menu layout*/}
    <section id="home-menu">
      <h2>DRINK MENU</h2>
      <h3> Sprits, wine, and beer</h3>
      <ul>
        <li>
          <span className="dish">Vodka 1oz</span>
          <span className="Price">$6</span>
          <span className="Description">VODKA and choice of juice or soda.</span>
        </li>
        <li>
          <span className="dish">Rum 1oz.</span>
          <span className="Price">$6</span>
          <span className="Description">RUM and choice of juice or soda.</span>
        </li>
        <li>
          <span className="dish">Whisky 1oz.</span>
          <span className="Price">$6</span>
          <span className="Description">Whisky and choice of juice or soda.</span>
        </li>
        <li>
          <span className="dish">Tequila 1oz.</span>
          <span className="Price">$6</span>
          <span className="Description">Tequila served with juice or soda.</span>
        </li>
        <li>
          <span className="dish">Red wine.</span>
          <span className="Price">$8</span>
          <span className="Description">8oz Red wine, ask server for our wine selection. </span>
        </li>
        <li>
          <span className="dish">White wine.</span>
          <span className="Price">$8</span>
          <span className="Description">8oz white wine, ask server for our wine selection.</span>
        </li>
        <li>
          <span className="dish">Sparkling wine .</span>
          <span className="Price">$12</span>
          <span className="Description">8oz sparking wine glass of your choice.</span>
        </li>
        <li>
          <span className="dish">Domestic and foreign beer .</span>
          <span className="Price">$6 - $8</span>
          <span className="Description">Domestic and foreign beer of you choice</span>
        </li>
      </ul>
    </section>
    {/* end of menu layout */}
  </div></div>
  )
}

export default Drinks;