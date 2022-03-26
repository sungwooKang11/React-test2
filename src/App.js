
import './App.css';
import React, { useState } from "react";

function App() {
  
  // let [myPick, myPickMod] = useState()
  
  // let num = 0;
  // let comNum = 0; ///컴퓨터 점수의 초기 설정
  
  // const handleBtn = (e) => {
      
  //      if( e.target.innerText === "가위") {
  //         randomPlay(sciValue);
  //         h1.innerText = "가위";
  //      }else if(e.target.innerText === "바위") {
  //         randomPlay(rkValue);
  //         h1.innerText = "바위";
  //      }else if(e.target.innerText === "보") {
  //         randomPlay(ppValue);
  //         h1.innerText = "보";
  //      }
  // }
  
  // const randomPlay = (a) => {
  //     const comValue = Math.floor(Math.random() * 3);
  //     console.log(comValue); 
  //     console.log(a);
  
  //     if(comValue == 0) {
  //         t1.innerText = "가위";
  //     }else if(comValue == 1) {
  //         t1.innerText = "바위";
  //     }else{
  //         t1.innerText = "보";
  //     }
         
  //     if( a == 0 && comValue == 1 ) {
  //         console.log("You lose"); 
  //         wl.innerHTML = "You lose";///패배 표시
  //     }else if( a == 1 && comValue == 2){
  //         console.log("You lose");
  //         wl.innerHTML = "You lose";///
  //     }else if(a ==2 && comValue == 0){
  //         console.log("You lose");
  //         wl.innerHTML = "You lose";///
  //     }else if(a == 0 && comValue == 2){
  //         console.log("You win");
  //         num += 1;
  //         wl.innerHTML = "You win";///승리 표시
  //         score.innerText = num
  //     }else if(a == 1 && comValue == 0) {
  //         console.log("You win");
  //         num += 1;
  //         wl.innerHTML = "You win";///
  //         score.innerText = num
  //     }else if(a == 2 && comValue == 1){
  //         console.log("You win");
  //         num += 1;
  //         wl.innerHTML = "You win";///
  //         score.innerText = num
  //     }else{
  //         console.log("draw");
  //         wl.innerHTML = "draw";/// 동률 표시
  //     }
  
  //     if( comValue == 0 && a == 1 ) {
  //         console.log("com lose"); 
  //     }else if( comValue == 1 && a == 2){
  //         console.log("com lose");
  //     }else if(comValue ==2 && a == 0){
  //         console.log("com lose");
  //     }else if(comValue == 0 && a == 2){
  //         console.log("com win");
  //         comNum += 1;////컴퓨터 점수 +1
  //         score2.innerText = comNum/////컴퓨터 점수 카운팅 위한 식
  //     }else if(comValue == 1 && a == 0) {
  //         console.log("com win");
  //         comNum += 1;////
  //         score2.innerText = comNum/////
  //     }else if(comValue == 2 && a == 1){
  //         console.log("com win");
  //         comNum += 1;////
  //         score2.innerText = comNum/////
  //     }else{
  //         console.log("draw");
  //     }
  
  // }
  // sci.addEventListener("click", handleBtn);
  // rk.addEventListener("click", handleBtn);
  // pp.addEventListener("click", handleBtn);   

  let rsp = ["rock", "scissor", "paper"];
  let [myPick, myPickMod] = useState("");
  let [comPick, comPickMod] = useState("");
  
  let newMine = [...myPick];
  let newCom = [...comPick];
  
  let [result, resultMod] = useState("");
  let indicater = "";
  
  let [myScore, myScoreMod] = useState("0");
  let myScoreCount = [...myScore];
  let [comScore, comScoreMod] = useState("0");
  let comScoreCount = [...comScore];

  const scissor = () => {
    newMine = "scissor";
    myPickMod(newMine);
    myScoreCount = 0;
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
      myScoreCount++;
      myScoreMod(myScoreCount);
    }
  }

  const rock = () => {
    newMine = "rock";
    myPickMod(newMine);

    comPlay();

    if (newCom === "rock") {
      indicater = "Drew";
      resultMod(indicater);
    }else if (newCom === "scissor") {
      indicater = "You win";
      resultMod(indicater);
      myScoreCount++;
      myScoreMod(myScoreCount);
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

    comPlay();

    if (newCom === "rock") {
      indicater = "You win";
      resultMod(indicater);
      myScoreCount++;
      myScoreMod(myScoreCount);
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
        <h1 className="welcome">Welcome to R.S.P.</h1>
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
