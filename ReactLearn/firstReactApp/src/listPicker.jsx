export default function PickList({values}){
    const randIndex = Math.floor(Math.random() * values.length )+1;
    const randValue = values[randIndex]
    return (
        <p>The random elemnt of {values} is {randValue}.</p>
    )
}