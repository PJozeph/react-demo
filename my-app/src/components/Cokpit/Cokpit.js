import React, { useEffect } from 'react';
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

const Cokpit = (props) => {

  useEffect(() => {
    console.log('[Cokpit.js] useEffect');
    //use HTTP request
    // runs for every update

    setTimeout(() => {
      alert('Save data in cloud')
    }, 1000);
    return () => {
      console.log('[Cokpit.js] clean up work !!!!!!!!!!!!!!!!!!!!!!!!!!')
    }
  // }, []); // execute only once
  }, [props.persons]);

  useEffect(() => {
    console.log('[Cokpit.js] 2nd useEffect');
    return () => {
      console.log('[Cokpit.js] 2nd clean up work !!!!!!!!!!!!!!!!!!!!!!!!!!')
    }
  });

  let classes = [];

  if (props.persons <= 2) {
    classes.push('red');
  }

  if (props.persons <= 1) {
    classes.push('bold');
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>It is really working</p>
      <StyledButton alt={props.showPersos}
        onClick={props.toggle}>Toggle Persons
        </StyledButton>
    </div>)
};

export default Cokpit;