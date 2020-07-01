
import React from 'react';
import Styled from 'styled-components';


const BuildControl = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
`
const BuildButton = Styled.button`
    display: block;
    font: inherit;
    padding: 5px;
    margin : 0 5px;
    width 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
`
const Ingerdient = Styled.div`
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
`
const buildControl = (props) => (
    <BuildControl>
        <Ingerdient>{props.label}</Ingerdient>
        <LessButton>Less</LessButton>
        <MoreButton>More</MoreButton>
    </BuildControl>
);

export default buildControl;