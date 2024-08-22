

export default function Clicker({message ,btntext }){
    const displaymsg = () => {
        alert(message);
    }
    return (
        <div>
            {btntext==="Don't Touch me"?"Please Dont touch this button": <p>Please Click me</p>}
            <button onClick={displaymsg}>{btntext}</button>
        </div>
    )
}