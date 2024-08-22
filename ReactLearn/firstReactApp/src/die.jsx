export default function DieRoll({dieside = 6}){
    const die = Math.floor(Math.random() * dieside)+ 1;

    return (
    <h1>{dieside} rolled out to be {die}</h1>
    )
}