export default function Property({name , rating , price , id}){
    return (
        <div className="property">
            <h2>{name}</h2>
            <h3>$ {price } only</h3>
            <h4>{rating}*</h4>
        </div>
    )
}