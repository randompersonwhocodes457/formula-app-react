import React, { useState } from "react"

function Speed(){

    const [time, setTime] = useState(0)
    const [distance, setDistance] = useState(0) 
    const [unitOfDistance, setUnitofDistance] = useState()
    const [unitofTime, setUnitofTime] = useState()
    const [err, setErr] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const distanceEl = document.getElementById("distance")
    const timeEl = document.getElementById("time")
   

    const handleDistanceChange = e => {
        const userInput = e.target.value;
        if (userInput <= 0){
            setDistance(false)
        } else{
            setDistance(userInput)
        }

        distanceEl.style.width = ((distanceEl.value.length + 1) * 8) + 'px';
    }

    const handleTimeChange = e => {
        const userInput = e.target.value;
        if (userInput <= 0){
            setTime(false)
        } else{
            setTime(userInput)
        }

        timeEl.style.width = ((timeEl.value.length + 1) * 8) + 'px';
    }

    const handleUnitofTimeChange = e => {
        const userInput = e.target.value;

        if (userInput === "hours" && (unitOfDistance === "kilometres" || unitOfDistance === "miles")){
            setErr(false)
            setUnitofTime(userInput)
        } else if (userInput === "seconds" && unitOfDistance === "metres"){
            setErr(false)
            setUnitofTime(userInput)
        } else if (userInput && !unitOfDistance){
            setErr(false)
            setUnitofTime(userInput)
        } else{
            setErr(true)
            setErrorMsg ("Unit does not match unit of distance")
            setUnitofTime("")
        }
    }

    const handleUnitOfDistanceChange = e => {
        const userInput = e.target.value;

        if ((userInput === "kilometres" || userInput === "miles") && unitofTime === "hours"){
            setErr(false)
            setUnitofDistance(userInput)
        } else if (userInput === "metres" && unitofTime === "seconds"){
            setErr(false)
            setUnitofDistance(userInput)
        } else if (userInput && !unitofTime){
            setErr(false)
            setUnitofDistance(userInput)
        } else{
            setErr(true)
            setErrorMsg ("Unit does not match unit of time")
            setUnitofDistance("")
        }
    }

    function calculate(){
        const answer = distance&&time ? Math.round((distance / time) * 100) / 100 : "";
        let unit = ""
        if(distance && time && unitOfDistance === "kilometres"){
            unit = "km/h"
        } else if(distance && time && unitOfDistance === "miles"){
            unit = "mph"
        } else if (distance && time && unitOfDistance === "metres"){
            unit = "ms⁻¹"
        }

        return(
            !err && distance && time && unitofTime && unitOfDistance ? `${answer} ${unit}` : ""
        )
    }

    function clearPage(){
        setDistance(0)
        setTime(0)
        setUnitofDistance("")
        setUnitofTime("")
        setErr(false)
        timeEl.style.width = "9px"
        distanceEl.style.width = "9px"
    }

    return(
        <div className="speed container">
            <h3>Speed</h3>
            <div className="values">
                <div>
                    <input type="number" id="distance" value={distance} onChange={handleDistanceChange}/>
                    <select className="unitofdistance" value={unitOfDistance} onChange={handleUnitOfDistanceChange}>
                        <option value="">unit of distance</option>
                        <option value="kilometres">kilometres</option>
                        <option value="miles">miles</option>
                        <option value="metres">metres</option>
                    </select>
                </div>

                <div>
                    <input type="number" id="time" value={time} onChange={handleTimeChange}/>
                    <select className="unitoftime" value={unitofTime} onChange={handleUnitofTimeChange}>
                        <option value="">unit of time</option>
                        <option value="hours">hours</option>
                        <option value="seconds">seconds</option>
                    </select>
                </div>
            </div>
            <div className="solution">
                <span id="answer"><b>{calculate()}</b></span>
            </div>
            <div className="error-box">
                {(unitOfDistance || unitofTime) && err && <span id="error">{errorMsg}</span>}
            </div>
            <button className="refresh-page" onClick={clearPage}>Clear</button>
        </div>
    )
}

export default Speed