import './App.css';
import Person from './Person/Person'
import React, { Component } from 'react';
import person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id : '0', name: 'József', age: 29 },
      { id : '1', name: 'Anna', age: 25 },
      { id : '2', name: 'Mária', age: 29 },
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

  deletePerson(index) {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons:persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      paddig: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersos) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePerson(index)}
              key={person.id} />
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi I am React</h1>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}
export default App;
