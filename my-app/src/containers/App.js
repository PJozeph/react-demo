import '../containers/App.css';
import Persons from '../components/Persons/Persons'
import React, { Component } from 'react';
import Cokpit from '../components/Cokpit/Cokpit'

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

    let persons = null;
    if (this.state.showPersos) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons} 
            changed={this.nameChangeHandler} 
            clicked={this.deletePerson}/>
        </div>
      );
    }

    return (
      <div className='App'>
        <Cokpit 
        person={this.state.persons}
        toggle={this.togglePersonHandler}
        showPersos={this.state.showPersos}/>
        {persons}
      </div>
    );
  }
}
export default App;
