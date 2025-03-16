import React, { useState, useEffect } from "react"
import Distance from "./Distance"
import Time from "./Time"
import Speed from "./Speed"

function App(){

  const [selectedfunc, setSelectedFunc] = useState("distance");

 function getSelectedFunc(currentFunc){
  return currentFunc === selectedfunc ? { backgroundColor: "transparent" } : {}
 }

  return(
    <div className="page">
      <nav>
        <h4>Distance, Speed and Time</h4>
        <ul className="functions">
          <li id="distance-link"><button style={{backgroundColor: "green", ...getSelectedFunc("distance")}} onClick={() => setSelectedFunc("distance")}>Distance</button></li>
          <li id="speed-link"><button style={{backgroundColor: "blue", ...getSelectedFunc("speed")}} onClick={() => setSelectedFunc("speed")}>Speed</button></li>
          <li id="time-link"><button style={{backgroundColor: "hsl(39, 95%, 34%)", ...getSelectedFunc("time")}} onClick={() => setSelectedFunc("time")}>Time</button></li>
        </ul>
      </nav>
      <div className="calculator">
        {selectedfunc === "distance" && <Distance />}
        {selectedfunc === "speed" && <Speed />}
        {selectedfunc === "time" && <Time />}
      </div>
    </div>
  )
}

export default App