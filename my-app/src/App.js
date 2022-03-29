//import logo from './logo.svg';
import "./App.css";
import React from 'react';
import Cards from "./components/Cards";
import Links from "./components/Links";

function App() {
  const link = false
  return (
    <div>
    <div className="App">
      <Cards text="Primeiro Card"/>
      <Cards text="Segundo Card"/>
      <Cards text="Terceiro Card"/>
      <Cards text="Quarto Card"/>
    </div>
      <Links link={link}/>
      
    </div>
  );
}

export default App;

//return string[0].toUpperCase() + string.slice(1);
//<input ref={containerRef} maxlength="1" className="input" name="firstName" onChange={myChange} /> 
