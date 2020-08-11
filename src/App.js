import React from "react";
import Nav from "./Nav";
import Hey from "./Hey";
import About from "./About";
import Working from "./Working";
import Skills from "./Skills";
import Contact from "./Contact";
import "./App.css";
function App() {
  return (
    <div className="chart">
      <Nav />
      <Hey />
      <About />
      <Working />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
