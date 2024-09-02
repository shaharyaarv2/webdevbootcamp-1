import './box.css';

export default function Box(isActive){
    return (
        <div  className='Box' style={{ backgroundColor : isActive ? "orange" : "purple" }}></div>
    )
}