import React from "react";
import { useEffect, useState } from "react";


const App = () => {
  const apiTime = require("axios");
  const [time, setTimes] = useState('')
  const [goalkeeper, setGoalkeeper] = useState('')
  const [rightSide, setRightSide] = useState('')
  const [leftSide, setLeftSide] = useState('')
  const [rightDefender, setRightDefender] = useState('')
  const [leftDefender, setLeftDefender] = useState('')
  const [firstSteeringWeel, setFirstSteeringWeel] = useState('')
  const [secondSteeringWeel, setSecondSteeringWeel] = useState('')
  const [half, setHalf] = useState('')
  const [rightEnd, setRightEnd] = useState('')
  const [leftEnd, setLeftEnd] = useState('')
  const [forward, setForward] = useState('')
  
  const [changeTeam, setChangeTeam] = useState(0)
  
  useEffect(()=>{
    apiTime.get("http://localhost:8080")
    .then(function (res) {
      if(changeTeam === 0){
        setTimes(res.data[3].time.nome)
        setGoalkeeper(res.data[3].jogadores.goleiro)
        setRightSide(res.data[3].jogadores.lateralDireito)
        setLeftSide(res.data[3].jogadores.lateralEsquerdo)
        setRightDefender(res.data[3].jogadores.zagueiro1)
        setLeftDefender(res.data[3].jogadores.zagueiro2)
        setFirstSteeringWeel(res.data[3].jogadores.meio1)
        setSecondSteeringWeel(res.data[3].jogadores.meio2)
        setHalf(res.data[3].jogadores.meio3)
        setRightEnd(res.data[3].jogadores.meio4)
        setLeftEnd(res.data[3].jogadores.atacante1)
        setForward(res.data[3].jogadores.atacante2)
      }else if (changeTeam === 1){
        setTimes(res.data[0].time.nome)
        setTimes(res.data[0].time.nome)
        setGoalkeeper(res.data[0].jogadores.goleiro)
        setRightSide(res.data[0].jogadores.lateralDireito)
        setLeftSide(res.data[0].jogadores.lateralEsquerdo)
        setRightDefender(res.data[0].jogadores.zagueiro1)
        setLeftDefender(res.data[0].jogadores.zagueiro2)
        setFirstSteeringWeel(res.data[0].jogadores.meio1)
        setSecondSteeringWeel(res.data[0].jogadores.meio2)
        setHalf(res.data[0].jogadores.meio3)
        setRightEnd(res.data[0].jogadores.meio4)
        setLeftEnd(res.data[0].jogadores.atacante1)
        setForward(res.data[0].jogadores.atacante2)
      }else if (changeTeam === 2){
        setTimes(res.data[1].time.nome)
        setTimes(res.data[1].time.nome)
        setTimes(res.data[1].time.nome)
        setGoalkeeper(res.data[1].jogadores.goleiro)
        setRightSide(res.data[1].jogadores.lateralDireito)
        setLeftSide(res.data[1].jogadores.lateralEsquerdo)
        setRightDefender(res.data[1].jogadores.zagueiro1)
        setLeftDefender(res.data[1].jogadores.zagueiro2)
        setFirstSteeringWeel(res.data[1].jogadores.meio1)
        setSecondSteeringWeel(res.data[1].jogadores.meio2)
        setHalf(res.data[1].jogadores.meio3)
        setRightEnd(res.data[1].jogadores.meio4)
        setLeftEnd(res.data[1].jogadores.atacante1)
        setForward(res.data[1].jogadores.atacante2)
      }else if (changeTeam === 3){
        setTimes(res.data[2].time.nome)
        setTimes(res.data[2].time.nome)
        setTimes(res.data[2].time.nome)
        setTimes(res.data[2].time.nome)
        setGoalkeeper(res.data[2].jogadores.goleiro)
        setRightSide(res.data[2].jogadores.lateralDireito)
        setLeftSide(res.data[2].jogadores.lateralEsquerdo)
        setRightDefender(res.data[2].jogadores.zagueiro1)
        setLeftDefender(res.data[2].jogadores.zagueiro2)
        setFirstSteeringWeel(res.data[2].jogadores.meio1)
        setSecondSteeringWeel(res.data[2].jogadores.meio2)
        setHalf(res.data[2].jogadores.meio3)
        setRightEnd(res.data[2].jogadores.meio4)
        setLeftEnd(res.data[2].jogadores.atacante1)
        setForward(res.data[2].jogadores.atacante2)
      }
      
  }).catch(function (error) {
    console.log(error);
  });
  }, [apiTime, changeTeam])
  
  return (
    <div>
      <div>
        <h1>Escalação - {time}</h1>
        <div>
          <h2>Goleiro</h2>
          <p>{goalkeeper}</p>
        </div>
        <div>
          <h2>Laterais</h2>
          <p>{rightSide}</p>
          <p>{leftSide}</p>
        </div>
        <div>
          <h2>Zagueiros</h2>
          <p>{rightDefender}</p>
          <p>{leftDefender}</p>
        </div>
        <div>
          <h2>Meias</h2>
          <p>{firstSteeringWeel}</p>
          <p>{secondSteeringWeel}</p>
          <p>{half}</p>
        </div>
        <div>
          <h2>Atacantes</h2>
          <p>{rightEnd}</p>
          <p>{leftEnd}</p>
          <p>{forward}</p>
        </div>
      </div>
      <button onClick={()=> setChangeTeam(1)}> São Paulo</button>
      <button onClick={()=> setChangeTeam(2)}> Palmeiras</button>
      <button onClick={()=> setChangeTeam(3)}> Corinthians</button>
      <button onClick={()=> setChangeTeam(0)}> Seleção Brasileira</button>
    </div>
  )
  
};



/*
   const pass = (event) =>{
     event.preventDefault()
     console.dir(event.target)
     console.log(event.target.elements.usernameInput.value)
   }
  
  return(
    <div>
      <form onSubmit={pass}>
      <div>
          <label >Username:</label>
          <input id="usernameInput" type="text" />
      </div>
          <button type="submit">Submit</button>
      </form>
    </div>
  )
  */
  
    /*apiTime
    .get("https://api.api-futebol.com.br/v1/partidas/602", {
      headers: { Authorization: "Bearer test_43f8ab60dd09150fa17866b2ba5e81" },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    */

export default App;
