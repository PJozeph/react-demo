import React from 'react';

import Styled from 'styled-components';

const Element = Styled.div`
    width :100%;

    Select {
        width :100%;
    }
`
const InputElementContainer = Styled(Element)`
    Input {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    Label {
        font-weight: bold;
        display: block;
        margin-bottom: 8px;
    }
`
const InputElement = Styled.input`
    outline: none;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    ${props => {
        if (props.touched) {
            return `
          border: 1px solid ${props.invalid ? '#ccc;' : 'red;'}
          background-color: ${ props.invalid ? 'white;' : '#fca39d;'}
        `}}}
`
const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <InputElement touched={props.touched} invalid={props.invalid} {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case ('select'):
            inputElement = <select
                value={props.value}>
                {props.elementConfig.options.map(option => (
                    <option
                        key={option.value}
                        onChange={props.changed}
                        value={option.value}>
                        {option.display}
                    </option>
                ))}
            </select>
            break;
        default:
            inputElement = null;
    }
    let validationMessage = null ;
    if(!props.invalid && props.touched) {
        validationMessage = (<p>Please enter valid value</p>);
    }

    return (
        <InputElementContainer>
            <label>{props.label}</label>
            {inputElement}
            {validationMessage}
        </InputElementContainer>
    );
}

export default input;