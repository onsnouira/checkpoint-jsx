import React from 'react';
import "./App.css";
import Navbar from "./Navbar.js";
import Intro from "./Intro.js";
import Drinks from "./Drinks.js";
import Food from "./Food.js";
import Desert from "./Desert.js";

const App = () => {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Drinks/>
      <Food/>
      <Desert/>
    </>
  )
}

export default App