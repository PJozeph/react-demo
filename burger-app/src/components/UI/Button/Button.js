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
    color: ${props  => (props.type === 'success' ? '#5C9210' :  '#944317')};

    ${props => {
        if (props.disabled) {
            return `
         color: #ccc;
         cursor: not-allowed;
        `}}}

    &:first-of-type {
    margin-left: 0;
    padding-left: 0;
    }
`
const button = (props) => (
    <Button 
        type={props.type}
        disabled={props.disabled}
        onClick={props.clicked}>{props.children}</Button>
)

export default button;