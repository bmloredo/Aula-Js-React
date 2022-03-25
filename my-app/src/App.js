//import logo from './logo.svg';
import "./App.css";
import React, { useRef } from 'react';

function App() {
  const number = 4
  const message = "Você conseguiu!"
  
  
  return (
    <div className="App">
      <label>Digite o número aqui:</label>
      <input maxlength="1" className="input" name="firstName" onChange={(e) => {alert(JSON.parse(e.target.value)+number)}} /> 
      <div className="message" onClick={() => {alert(message)}}>Clique aqui</div>
      
    </div>
    
    
  );

}

export default App;

//return string[0].toUpperCase() + string.slice(1);
//<input ref={containerRef} maxlength="1" className="input" name="firstName" onChange={myChange} /> 

/*
const containerRef = useRef()
  
  
  const myChange = (e) => {
    const texto = e.target.value
    if (texto.length === 2 ){
        alert(`A soma do número digitado: ${texto} Com ${number} é: ${JSON.parse(texto) + number}` )
    } else if (texto.length < 2){
      console.log(containerRef.current.value.length)
    }else {
      //console.log(containerRef.current.value ='')
      console.log(containerRef.current.value.length)
    }
    
  }



<label>Digite o número aqui:</label>
      <input ref={containerRef} className="input" name="firstName" onChange={myChange} /> 
      
      {  
      
        <div>       
          <p>Se você quer somar apenas 1 número, clique no botão ao lado</p>
          <button>Some Aqui{containerRef.current}</button>
        </div>
       
      }
*/
