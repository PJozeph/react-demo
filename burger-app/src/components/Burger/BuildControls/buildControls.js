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

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Chees', type: 'chees' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Maet', type: 'meat' },
]
const buildControls = (props) => (
    <BuildControls>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]} />
        ))}
    </BuildControls>
);

export default buildControls;