import React from 'react'
import "./App.css";

const Food = () => {
  return (
    <div className='header'>
    <div className="menu">   
      <div className="menuIntro">    
        <img id="caption_img" src="https://i.ibb.co/9g9yg5G/chad-montano-l-P5-MCM6n-Z5-A-unsplash.jpg" alt='#'/>  
        <img id="caption_img" src="https://i.ibb.co/q1HKkyL/ella-olsson-4d-Qia-WKi-L-Y-unsplash.jpg" alt="#"/>
      </div>
      <section id="home-menu">
        <h2>FOOD MENU</h2>
        <h3> Entrees, mains, and handhelds</h3>
        <ul>
          <li>
            <span className="dish">Nachos</span>
            <span className="Price">$12</span>
            <span className="Description">cheese, onions, tomotoes. 
            </span>
          </li>
          <li>
            <span className="dish">Tacos.</span>
            <span className="Price">$12</span>
            <span className="Description">chicken or beef with your choice of side.</span>
          </li>
          <li>
            <span className="dish">Chicken rice bowl.</span>
            <span className="Price">$16</span>
            <span className="Description">
              brown rice, and veggies, served with choice or sauce 
            </span>
          </li>
          <li>
            <span className="dish">Grilled chicken</span>
            <span className="Price">$15</span>
            <span className="Description">
              Juicy grilled chicken served with choice of sauce.
            </span>
          </li>
          <li>
            <span className="dish">Steak and fired beans.</span>
            <span className="Price">$15</span>
            <span className="Description">Steak and your choice of side.</span>
          </li>
          <li>
            <span className="dish">burrito.</span>
            <span className="Price">$12</span>
            <span className="Description">Your choice of beef or chicken.</span>
          </li>
        </ul></section></div></div>
  )
}

export default Food