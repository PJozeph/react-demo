import React from 'react';
import './Person.css'
const person = (props) => {
    return (
        <div className="Person">
            <p>I am a person</p>
            <p onClick={props.click}>My name is {props.name}</p>
            <p>I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    );
}
// two way binding
//<input type="text" onChange={props.change} value={props.name}></input>

export default person;