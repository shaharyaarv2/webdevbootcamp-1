import Property from "./property"

export default function PropertiesList({properties}){
    return <div className="propertyList">
       {properties.map((p) => {
        return <Property {...p} key={p.id}/>
       })}
    </div>

}