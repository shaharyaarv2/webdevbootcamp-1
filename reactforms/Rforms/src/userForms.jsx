import { useState} from 'react'

export default function UserForms(){
    const [firstname , setFirstname] = useState("");
    const [lastname , setLastName] = useState("");
    const updateFirstname = (evt) => {
        setFirstname(evt.target.value);
    }
    const updateLastname = (evt) => {
        setLastname(evt.target.value);
    }
    return (
        <div>
            <label htmlFor="firstname" > Enter Your Firstname</label>
            <input id='firstname' type = "text" placeholer = "Enter first name" value = {firstname}  onChange={updateFirstname}/>
            
            <label htmlFor="lastname" > Enter Your Lastname</label>
            <input id='lastname' type = "text" placeholer = "Enter Last Name" value = {lastname}  onChange={updateLastname}/>
            <button>Submit </button>
        </div>
    )
}