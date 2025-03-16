import React, { useState } from "react"

function Time(){

    const [velocity, setVelocity] = useState(0)
    const [distance, setDistance] = useState(0) 
    const [unitOfDistance, setUnitofDistance] = useState()
    const [unitOfVelocity, setUnitOfVelocity] = useState()
    const [err, setErr] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const distanceEl = document.getElementById("distance")
    const velocityEl = document.getElementById("velocity")
   

    const handleDistanceChange = e => {
        const userInput = e.target.value;
        if (userInput <= 0){
            setDistance(false)
        } else{
            setDistance(userInput)
        }

        distanceEl.style.width = ((distanceEl.value.length + 1) * 8) + 'px';
    }

    const handleSpeedChange = e => {
        const userInput = e.target.value;
        if (userInput <= 0){
            setVelocity(false)
        } else{
            setVelocity(userInput)
        }

        velocityEl.style.width = ((velocityEl.value.length + 1) * 8) + 'px';
    }

    const handleUnitOfSpeedChange = e => {
        const userInput = e.target.value;

        if (userInput === "km/h" && unitOfDistance === "kilometres"){
            setErr(false)
            setUnitOfVelocity(userInput)
        } else if (userInput === "mph" && unitOfDistance === "miles"){
            setErr(false)
            setUnitOfVelocity(userInput)
        } else if (userInput === "ms⁻¹" && unitOfDistance === "metres"){
            setErr(false)
            setUnitOfVelocity(userInput)
        } else if (userInput && !unitOfDistance){
            setErr(false)
            setUnitOfVelocity(userInput)
        } else{
            setErr(true)
            setErrorMsg ("Unit does not match unit of distance")
            setUnitOfVelocity("")
        }
    }

    const handleUnitOfDistanceChange = e => {
        const userInput = e.target.value;

        if (userInput === "kilometres" && unitOfVelocity === "km/h"){
            setErr(false)
            setUnitofDistance(userInput)
        } else if (userInput === "miles" && unitOfVelocity === "mph"){
            setErr(false)
            setUnitofDistance(userInput)
        } else if (userInput === "metres" && unitOfVelocity === "ms⁻¹"){
            setErr(false)
            setUnitofDistance(userInput)
        } else if (userInput && !unitOfVelocity){
            setErr(false)
            setUnitofDistance(userInput)
        } else{
            setErr(true)
            setErrorMsg ("Unit does not match unit of velocity")
            setUnitofDistance("")
        }
    }

    function calculate(){
        const answer = distance&&velocity ? Math.round((distance / velocity) * 100) / 100 : "";
        let unit = ""
        if(distance && velocity && unitOfVelocity === "ms⁻¹"){
            answer === 1 ? unit = "second" : unit = "seconds"
        } else if(distance && velocity && unitOfVelocity === "mph" || unitOfVelocity === "km/h"){
            answer === 1 ? unit = "hour" : unit = "hours"
        }

        return(
            !err && distance && velocity && unitOfVelocity && unitOfDistance ? `${answer} ${unit}` : ""
        )
    }

    function clearPage(){
        setDistance(0)
        setVelocity(0)
        setUnitofDistance("")
        setUnitOfVelocity("")
        setErr(false)
        velocityEl.style.width = "9px"
        distanceEl.style.width = "9px"
    }

    return(
        <div className="time container">
            <h3>Time</h3>
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
                    <input type="number" id="velocity" value={velocity} onChange={handleSpeedChange}/>
                    <select className="unitofvelocity" value={unitOfVelocity} onChange={handleUnitOfSpeedChange}>
                        <option value="">unit of speed</option>
                        <option value="ms⁻¹">ms⁻¹</option>
                        <option value="mph">mph</option>
                        <option value="km/h">km/h</option>
                    </select>
                </div>
            </div>
            <div className="solution">
                <span id="answer"><b>{calculate()}</b></span>
            </div>
            <div className="error-box">
                {(unitOfDistance || unitOfVelocity) && err && <span id="error">{errorMsg}</span>}
            </div>
            <button className="refresh-page" onClick={clearPage}>Clear</button>
        </div>
    )
}

export default Time