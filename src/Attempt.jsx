import React, { useState, useRef } from "react"

function Attempt(){

    const [distance, setDistance] = useState(0)
    const [velocity, setVelocity] = useState(0)
    const [time, setTime] = useState(0)

    const unitOfDistance = useRef("")
    const unitOfSpeed = useRef("")

    function calculate(){
        return (
            `5cm`
        )
    }

    const handleDistanceChange = e => {
        setDistance(e.target.value)
    }

    const handleTimeChange = e => {
        setTime(e.target.value)
    }

    const handleSpeedChange = e => {
        setVelocity(e.target.value)
    }

    return (
        <>
            <h1>Speed, Distance and Time</h1>
            <div className="values">
                <div className="distance">
                    <input type="number" value={distance} onChange={handleDistanceChange}/>
                    <select value={distance}>
                        <option value="">unit of distance</option>
                        <option value="km">km</option>
                        <option value="metres">metres</option>
                        <option value="miles">miles</option>
                    </select>
                </div>
                <input type="number" id="time" value={time} onChange={handleTimeChange}/>
                <select value={time}>
                        <option value="">unit of time</option>
                        <option value="hours">hours</option>
                        <option value="seconds">seconds</option>
                </select> 
                <input type="number" id="velocity" value={velocity} onChange={handleSpeedChange}/>
            </div>
            <div className="solution">
                <span id="answer">{calculate()}</span>
            </div>
        </>
    )
}