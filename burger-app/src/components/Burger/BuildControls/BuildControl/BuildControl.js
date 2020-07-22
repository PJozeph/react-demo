
import React from 'react';
import Styled from 'styled-components';


const BuildControl = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
`
const Ingredient = Styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`

const LessButton = Styled.button`
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
    background-color: #D39952;
    color: white;

    &:hover, .BuildControl .Less:active {  
        background-color: #DAA972;
        color: white;
    }

    &:disabled {
        color: currentColor;
        cursor: not-allowed;
        opacity: 0.5;
        text-decoration: none;
      }
`
const MoreButton = Styled.button`
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
    background-color: #8F5E1E;
    color: white;

    &:hover,.BuildControl .More:active {
        background-color: #99703F;
        color: white;
    }
`
const buildControl = (props) => (
    <BuildControl>
        <Ingredient>{props.label}</Ingredient>
        <LessButton onClick={props.removed} disabled={props.disabled}>Less</LessButton>
        <MoreButton onClick={props.added} >More</MoreButton>
    </BuildControl>
);

export default buildControl;