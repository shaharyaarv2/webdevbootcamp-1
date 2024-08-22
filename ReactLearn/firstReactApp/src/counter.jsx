import { useState } from 'react'

export default function Counter(){
    const [num , setNum] = useState(5);

    const changeNum = () => {
        setNum(counter => counter + 1);
        setNum(counter => counter + 1);
        setNum(counter => counter + 1);
    }
    return (
        <div>
            <p>The Count is : {num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}