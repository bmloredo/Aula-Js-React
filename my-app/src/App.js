import React from "react";
import { Instrumento, Fruta } from "./utils";

const App = (props) => {

  return(
    <>
    <div>
      <label>Digite um número: </label>
      <br/>
      <input type='text' onChange={(e) => {Instrumento(e.target.value)}}/>
      <br/><br/>
      <label>Digite uma Fruta: </label>
      <br/>
      <input type='text' onChange={(e) => {Fruta(e.target.value)}}/>
    </div>
    </>
  )
}

export default App
