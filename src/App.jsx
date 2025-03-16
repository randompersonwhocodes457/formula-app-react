import React, { useState, useEffect } from "react"
import Distance from "./Distance"
import Time from "./Time"
import Speed from "./Speed"

function App(){

  const [func, setFunc] = useState("");
  const distanceLink = document.getElementById("distance-link")
  const speedLink = document.getElementById("speed-link")
  const timeLink = document.getElementById("time-link")

  function renderFunc(){
    if (func === "distance"){
      distanceLink.style.backgroundColor = "none";
      return <Distance/>
    } else if(func === "speed"){
      speedLink.style.backgroundColor = "none";
      return <Speed />
    } else if(func === "time"){
      timeLink.style.backgroundColor = "none";
      return <Time />
    } else{
      return <Distance />
      distanceLink.style.backgroundColor = "none";
    }
  }

  return(
    <div className="page">
      <nav>
        <h4>Distance, Speed and Time</h4>
        <ul className="functions">
          <li id="distance-link"><button onClick={() => setFunc("distance")}>Distance</button></li>
          <li id="speed-link"><button onClick={() => setFunc("speed")}>Speed</button></li>
          <li id="time-link"><button onClick={() => setFunc("time")}>Time</button></li>
        </ul>
      </nav>
      <div className="calculator">
        {renderFunc()}
      </div>
    </div>
  )
}

export default App