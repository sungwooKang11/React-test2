
import './App.css';
import React, { useState } from "react";

function App() {
  
  let [brands, modifyTitle1] = useState(["espionage", "outstanding", "uniformbridge"]); 
  let [good, modGood] = useState([0, 0, 0]);

  return (
    <div className="App">
      <div className="nav-bar">
        <h2> Velog </h2>
      </div>
      <div className="list">
       <h2>{ brands[0] } <span onClick={ ()=>{ modGood(good[0] + 1) } }>👍</span></h2>
       <p>3월 16일</p>
       <span className="goodScore"> 좋아요 {good[0]} </span>
       <hr/>
      </div>
      <div className="list">
       <h2>{ brands[1] } <span onClick={ ()=>{ modGood(good[1] + 1) } }>👍</span></h2>
       <p>3월 15일</p>
       <span className="goodScore"> 좋아요 {good[1]} </span>
       <hr/>
      </div>
      <div className="list">
       <h2>{ brands[2] } <span onClick={ ()=>{ modGood(good[2] + 1) } }>👍</span></h2>
       <p>3월 14일</p>
       <span className="goodScore"> 좋아요 {good[2]} </span>
       <hr/>
      </div>
    </div>
  );
}

export default App;
