import React from 'react';
import './Person.css';
import styled from 'styled-components';

const person = (props) => {
    const PersonDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;
        
        @media(min-width: 500px) {
            width :450px;
        }
        `;
    return (
        <PersonDiv>
            <p>I am a person</p>
            <p onClick={props.click}>My name is {props.name}</p>
            <p>I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </PersonDiv>
    );
}
// two way binding
//<input type="text" onChange={props.change} value={props.name}></input>

export default person;