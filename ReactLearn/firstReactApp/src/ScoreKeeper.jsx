import { useState } from "react";

export default function ScoreKeeper(){
    const [score , setScores] = useState({p1Score: 0 , p2Score: 0});
    function increaseP1Score(){
        const newSore = {...score,p1Score: score.p1Score +1}
        setScores(newSore)
    }
    function increaseP2Score(){
        const newSore = {...score,p2Score: score.p2Score +1}
        setScores(newSore)
    }
    return (
        <div>
            <p>Player 1:  {score.p1Score}</p>
            <p>Player 2: {score.p2Score}</p>
            <button onClick={increaseP1Score}>+1 Player 1</button>
            <button onClick={increaseP2Score}>+1 Player 2 </button>
        </div>
    )
}