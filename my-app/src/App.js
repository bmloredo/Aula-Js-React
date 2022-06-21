import React from "react";
import { useState } from "react";


const App = () => {
  const [language, setLanguage] = useState('Português');
  const [country, setCountry] = useState('Brasil')
  const [count, setCount] = useState(1)
  const [texto, setTexto] = useState('fala')
  
  const buscaInput = (e) => {
    const number = e.target.value
    translation(Number(number))
  }
  
  const translation = (number) =>{
    const translate = [
      {
        lang: 'English',
        countr: 'Canadá',
        texto: 'speak in'
      },
      {
        lang: 'English',
        countr: 'EUA',
        texto: 'speak in'
      },
      {
        lang: 'French',
        countr: 'France',
        texto: 'parle en'
      }
    ]
    
    if (number === 0){
      setLanguage(translate[0].lang)
      setCountry(translate[0].countr)
      setTexto(translate[0].texto)
      document.querySelector('.valor').value = ''
    }
    else if (number === 1){
      setLanguage(translate[1].lang)
      setCountry(translate[1].countr)
      setTexto(translate[1].texto)
      document.querySelector('.valor').value = ''
    }
    else if (number === 2){
      setLanguage(translate[2].lang)
      setCountry(translate[2].countr)
      setTexto(translate[2].texto)
      document.querySelector('.valor').value = ''
    }else{
      number = null
    }
    
    
  }
  
  function multiplicar () {
    setCount(count * 4)
  }
  
  function pegaValor(){
    const valor = Number(document.querySelector('.valor').value) 
    if (valor === 4){
      setLanguage('Castelhano')
      setCountry('Espanha')
      setTexto('habla en')
    }
    document.querySelector('.valor').value = ''
  }

  
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={() => multiplicar()}>Multiplique</button>
      
      <h1>Linguagem</h1>
      <p>{country} {texto} {language}</p>
      <input className="valor" placeholder="Digite um número de 0 a 2" onChange={(e) => {buscaInput(e)}}></input>
      
      
      <button onClick={() => {pegaValor()}}>Change Language</button>
      
    </div>
  )
}

export default App
