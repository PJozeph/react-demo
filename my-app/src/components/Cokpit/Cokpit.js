import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../../context/auth-context';

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

  const toggleButtonRef = useRef(null);

  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cokpit.js] useEffect');
    //use HTTP request
    // runs for every update

    //  setTimeout(() => {
    //     alert('Save data in cloud')
    //   }, 1000);
    toggleButtonRef.current.click();
    return () => {
      console.log('[Cokpit.js] clean up work !')
    }
  }, []); // execute only once
  // }, [props.persons]);

  useEffect(() => {
    console.log('[Cokpit.js] 2nd useEffect');
    return () => {
      console.log('[Cokpit.js] 2nd clean up work !')
    }
  });

  let classes = [];

  if (props.personsLength <= 2) {
    classes.push('red');
  }

  if (props.personsLength <= 1) {
    classes.push('bold');
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>It is really working</p>
      <StyledButton
        ref={toggleButtonRef}
        alt={props.showPersos}
        onClick={props.toggle}>Toggle Persons
      </StyledButton>
        <button onClick={authContext.login}>Log in</button>
    </div>)
};

export default React.memo(Cokpit);