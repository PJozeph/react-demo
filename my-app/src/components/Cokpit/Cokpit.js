import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  paddig: 8px;
  cursor: pointer;

  &:hover {
    background-color:  ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }`

const cokpit = (props) => {
    let classes = [];

    if (props.persons <= 2) {
        classes.push('red');
    }

    if (props.persons <= 1) {
        classes.push('bold');
    }
    return (
        <div>
            <h1>Hi I am React</h1>
            <p className={classes.join(' ')}>It is really working</p>
            <StyledButton alt={props.showPersos}
                onClick={props.toggle}>Toggle Persons
        </StyledButton>
        </div>)
};

export default cokpit;