import './App.css';
import Person from './Person/Person'
import React, { Component } from 'react';
import person from './Person/Person';
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

class App extends Component {

  state = {
    persons: [
      { id: '0', name: 'József', age: 29 },
      { id: '1', name: 'Anna', age: 25 },
      { id: '2', name: 'Mária', age: 29 },
    ],
    someOtherState: 'just some other value',
    showPersos: false
  }

  switchNameHandler = (newName) => {
    console.log("button was clicked");
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Anna Marsh', age: 25 },
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "József", age: 29 },
        { name: event.target.value, age: 25 },
      ]
    });
  }

  togglePersonHandler = () => {
    const show = this.state.showPersos;
    this.setState({
      showPersos: !show
    })
  }

  deletePerson = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === index;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      paddig: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;
    if (this.state.showPersos) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePerson(index)}
              change={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );

    }

    let classes = [];

    if (this.state.persons <= 2) {
      classes.push('red');
    }

    if (this.state.persons <= 1) {
      classes.push('bold');
    }

    return (
      <div className='App'>
        <h1>Hi I am React</h1>
        <p className={classes.join(' ')}>It is really working</p>
        <StyledButton alt={this.state.showPersos}
          onClick={this.togglePersonHandler}>Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}
export default App;
