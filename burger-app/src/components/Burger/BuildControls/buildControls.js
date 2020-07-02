import React from 'react';

import Styled from 'styled-components';

import BuildControl from '../BuildControls/BuildControl/BuildControl'

const BuildControls = Styled.div`
    width: 100%;
    background-color: #CF8F2E;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px white;
    margin: auto;
    padding: 5px 0; 
    `;

const OrderButton = Styled.button`
    background-color: #DAD735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;

    &:hover,&:active {
        background-color: #A0DB41;
        border: 1px solid #966909;
        color: #966909;
    }
    
    &:disabled {
        background-color: #C7C6C6;
        cursor: not-allowed;
        border: 1px solid #ccc;
        color: #888888;
    }

    @keyframes enable {
        0% {
            transform: scale(1);
        }
        60% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

`

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Chees', type: 'chees' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Maet', type: 'meat' },
]
const buildControls = (props) => (
    <BuildControls>
        <p>Current price <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]}
                 />
        ))}
        <OrderButton 
        disabled={!props.purchaseable}
        onClick={props.ordered} >ORDER NOW</OrderButton>
    </BuildControls>
);

export default buildControls;