import React, { useState } from "react"

function Distance(){

    const [velocity, setVelocity] = useState(0)
    const [time, setTime] = useState(0) 
    const [unitOfTime, setUnitOfTime] = useState()
    const [unitOfVelocity, setUnitOfVelocity] = useState()
    const [err, setErr] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const timeEl = document.getElementById("time")
    const velocityEl = document.getElementById("velocity")
   

    const handleTimeChange = e => {
        const userInput = e.target.value;
        if (userInput <= 0){
            setTime(false)
        } else{
            setTime(userInput)
        }

        timeEl.style.width = ((timeEl.value.length + 1) * 8) + 'px';
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
        if (userInput === "ms⁻¹" && unitOfTime === "hours"){
            setErr(true)
            setErrorMsg ("Unit does not match unit of time")
            setUnitOfVelocity("")
        } else if(userInput === "mph" && unitOfTime === "seconds"){
            setErr(true)
            setErrorMsg ("Unit does not match unit of time")
            setUnitOfVelocity("")
        } else if(userInput === "km/h" && unitOfTime === "seconds"){
            setErr(true)
            setErrorMsg ("Unit does not match unit of time")
            setUnitOfVelocity("")
        } else {
            setErr(false)
            setUnitOfVelocity(userInput);
        }
    }

    const handleUnitOfTimeChange = e => {
        const userInput = e.target.value;
        if (userInput === "seconds" && unitOfVelocity === "km/h" || unitOfVelocity === "mph"){
            setErr(true)
            setErrorMsg ("Unit does not match unit of velocity")
            setUnitOfTime("")
        } else if (userInput === "hours" && unitOfVelocity === "ms⁻¹") {
            setErr(true)
            setErrorMsg ("Unit does not match unit of velocity")
            setUnitOfTime("")
        } else{
            setErr(false)
            setUnitOfTime(userInput);
        }
    }

    function calculate(){
        const answer = time&&velocity ? time * velocity : "";
        let unit = ""
        if(time && velocity && unitOfVelocity === "ms⁻¹"){
            answer === 1 ? unit = "metre" : unit = "metres"
        } else if(time && velocity && unitOfVelocity === "mph"){
            answer === 1 ? unit = "mile" : unit = "miles"
        } else if (time && velocity && unitOfVelocity === "km/h"){
            answer === 1 ? unit = "kilometre" : unit = "kilometres"
        }

        return(
            !err && time && velocity && unitOfVelocity && unitOfTime ? `${answer} ${unit}` : ""
        )
    }

    function clearPage(){
        setTime(0)
        setVelocity(0)
        setUnitOfTime("")
        setUnitOfVelocity("")
        setErr(false)
        velocityEl.style.width = "9px"
        timeEl.style.width = "9px"
    }

    return(
        <div className="distance container">
            <h3>Distance</h3>
            <div className="values">
                <div>
                    <input type="number" id="time" value={time} onChange={handleTimeChange}/>
                    <select className="unitoftime" value={unitOfTime} onChange={handleUnitOfTimeChange}>
                        <option value="">unit of time</option>
                        <option value="hours">hours</option>
                        <option value="seconds">seconds</option>
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
                {(unitOfTime || unitOfVelocity) && err && <span id="error">{errorMsg}</span>}
            </div>
            <button className="refresh-page" onClick={clearPage}>Clear</button>
        </div>
    )
}

export default Distance