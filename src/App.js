import './App.css';
import React, { useState } from "react";

function App() { 

  let rsp = ["rock", "scissor", "paper"];
  let [myPick, myPickMod] = useState("");
  let [comPick, comPickMod] = useState("");
  
  let newMine = [...myPick];
  let newCom = [...comPick];
  
  let [result, resultMod] = useState("");
  let indicater = "";
  
  let [myScore, myScoreMod] = useState(0);
  let myScoreCount = {...myScore};
  let [comScore, comScoreMod] = useState(0);
  let comScoreCount = {...comScore};

  const scissor = () => {
    newMine = "scissor";
    myPickMod(newMine);
    myScoreCount = 0;
    comScoreCount = 0;
    comPlay();

    if (newCom === "rock") {
      indicater = "You lose";
      resultMod(indicater);
      comScoreCount++;
      comScoreMod(comScoreCount);
    }else if (newCom === "scissor") {
      indicater = "Drew";
      resultMod(indicater);
    }else if (newCom === "paper") {
      indicater = "You win";
      resultMod(indicater);
      let a = myScore+1;
      myScoreMod(a);
      console.log(myScore);
    }
  }

  const rock = () => {
    newMine = "rock";
    myPickMod(newMine);
    myScoreCount = 0;
    comScoreCount = 0;
    comPlay();

    if (newCom === "rock") {
      indicater = "Drew";
      resultMod(indicater);
    }else if (newCom === "scissor") {
      indicater = "You win";
      resultMod(indicater);
      let a = myScore+1;
      myScoreMod(a);
    }else if (newCom === "paper") {
      indicater = "You lose";
      resultMod(indicater);
      comScoreCount++;
      comScoreMod(comScoreCount);
    }
  }

  const paper = () => {
    newMine = "paper";
    myPickMod(newMine);
    myScoreCount = 0;
    comScoreCount = 0;
    comPlay();

    if (newCom === "rock") {
      indicater = "You win";
      resultMod(indicater);
      let a = myScore+1;
      myScoreMod(a);
    }else if (newCom === "scissor") {
      indicater = "You lose";
      resultMod(indicater);
      comScoreCount++;
      comScoreMod(comScoreCount);
    }else if (newCom === "paper") {
      indicater = "Drew";
      resultMod(indicater);
    }
  }

  const comPlay = () => {
    newCom = rsp[Math.floor(Math.random()* rsp.length)];
    comPickMod(newCom);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="con1">
            <span className="p">score</span>
            <span className="score">{ myScore }</span>
            <div className="valCon">
                <h1 className="myValue">{ myPick }</h1>
            </div>
            
            <div className="btnDiv">
            <button className="scissors" onClick={ scissor }>Scissor</button>
            <button className="rock" onClick={ rock }>Rock</button>
            <button className="paper" onClick={ paper }>Paper</button>
            </div>
        </div>
        <h1 className="wl">{ result }</h1>
        <div className="con2">
            <span className="p">score</span>
            <span className="score2">{ comScore }</span>
            <div className="valCon2">
                <h1 className="comValue">{ comPick }</h1>
            </div>    
        </div>
    </div>
    </div>
  );
}

export default App;