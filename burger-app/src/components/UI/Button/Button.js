import React from 'react';
import Styled from 'styled-components';

const Button = Styled.button`
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    color: ${props  => (props.type === 'succes' ? '#5C9210' :  '#944317')};

    &:first-of-type {
    margin-left: 0;
    padding-left: 0;
    }
`
const button = (props) => (
    <Button 
        type={props.type}
        onClick={props.clicked}>{props.children}</Button>
)

export default button;