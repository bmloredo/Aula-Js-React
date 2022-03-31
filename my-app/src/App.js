import React from "react";
import { Louco, Alert } from "./utils";

const App = (props) => {
  const utensilio = 'ventilador'
  const utilidade = 'dormir'
  return(
    <>
    <div>
      <label>Digite um número</label>
      <br/>
      <input type='text' onChange={(e) => {Louco(e.target.value)}}/>
      
      <button onClick={(e) => Alert(utensilio, utilidade)}>Clique Aqui!</button>
    </div>
    </>
  )
}

export default App
