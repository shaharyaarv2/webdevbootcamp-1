import { useState } from 'react'
import "./toggler.css"

export default function Toggler(){
    const [isHappy , MoodChanger] = useState(true)
    const ToggleMood = () => MoodChanger(!isHappy)

    return (
        
            <p className = "size" onClick ={ToggleMood}> {isHappy ? ":)" : ":("}</p>
        
    )
}