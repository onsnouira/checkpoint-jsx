import React from 'react'
import "./App.css";

const Desert = () => {
  return (
      
    <div className='header'>
    <div className="menu">   
    <div className="menuIntro">    
      <img src="https://i.ibb.co/GJ0Q03Q/camille-paralisan-rq-NIBr-DGnh4-unsplash.jpg" alt='#'/>
      <img src="https://i.ibb.co/rsxRJMX/oscar-nord-5-CPn8-NE2-Tc-unsplash.jpg" alt='#'/>
    </div>
    <section id="home-menu">
      <h2>DESERT MENU</h2>
      <h3> Deserts and sweets</h3>
      <ul>
        <li>
          <span className="dish">Chocolate cake .</span>
          <span className="Price">$7</span>
          <span className="Description">Loaded Chocolate cake with fudge topping.</span>
        </li>
        <li>
          <span className="dish">NY cheesecake.</span>
          <span className="Price">$12</span>
          <span className="Description">NY cheesecake toped with strawberry topping.</span>
        </li>
        <li>
          <span className="dish">Apple pie.</span>
          <span className="Price">$6</span>
          <span className="Description">Warm apple pie tooped with icecream.</span>
        </li>
        <li>
          <span className="dish">Churros.</span>
          <span className="Price">$7</span>
          <span className="Description">pancake mix, water, oil, sugar, cinnamon.</span>
        </li>
        <li>
          <span className="dish">Sopaipillas</span>
          <span className="Price">$7</span>
          <span className="Description">Light, crispy pastry puffs, sopaipillas are a sweet way to round out a spicy meal.</span>
        </li>
        <li>
          <span className="dish">Creamy Caramel Flan.</span>
          <span className="Price">$12</span>
          <span className="Description">A small slice of this impressively rich, creamy, caramel flan dessert goes a long
            way.</span>
        </li>
        <li>
          <span className="dish">Shortcut Tres Leches Cake</span>
          <span className="Price">$12</span>
          <span className="Description">My mom's favorite cake is tres leches, a butter cake soaked in three kinds of milk. </span>
        </li>
        <li>
          <span className="dish">Pressure-Cooker Pumpkin Flans</span>
          <span className="Price">$14</span>
          <span className="Description">This silky, smooth dessert captures the essence and elegance of fall. </span>
        </li>
      </ul></section></div><br/><br/><br/></div>
  )
}

export default Desert