import Box from "./box";
import { useState } from "react";

export default function BoxGrid () {
    const [boxes , setBoxes] = useState([false, false , false , false , false ,false ,false , false , false]);
    const reset = () => setBoxes([false , false , false ,false , false , true , false , false ,false])
    return (
        <div className="BoxGrid">
            {boxes.map((b) => (
                <Box isActive = {b}/>
            ))}
            <button onClick={reset} >Reset</button>
        </div>
    )
}