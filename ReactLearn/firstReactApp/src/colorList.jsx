export default function ColorList({color}) {
    return     <div>
    <h1>Color List</h1>
        <ul>
            {color.map((c) => (
                <li style={{color : c}}> {c} </li> ))}
        </ul>
    </div>

}